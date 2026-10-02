require("ISUI/ISInventoryPane")

local CAEC = require("CAExtendedCategories/CAEC")
local Palette = require("CAExtendedCategories/CAEC_CategoryPalette")

local CategoryColors = {}

local TRUNCATE_SUFFIX = "..."

---@alias CAEC_Color { r: number, g: number, b: number }

---@class CAEC_CategoryColorSettings
---@field enabled        boolean
---@field tintStrength   number how strongly the category color replaces the color the pane draws with (1 = as-is)
---@field hueVariation   number max hue shift of the first subcategory level, as a fraction of the color wheel
---@field valueVariation number max brightness shift of the first subcategory level
---@field levelFalloff   number multiplier applied to both variations for every deeper subcategory level

---@type CAEC_CategoryColorSettings
CategoryColors.DEFAULTS = {
  enabled = true,
  tintStrength = 0.7,
  hueVariation = 0.08,
  valueVariation = 0.16,
  levelFalloff = 0.5,
}

local enabled = CategoryColors.DEFAULTS.enabled
local tintStrength = CategoryColors.DEFAULTS.tintStrength
local hueVariation = CategoryColors.DEFAULTS.hueVariation
local valueVariation = CategoryColors.DEFAULTS.valueVariation
local levelFalloff = CategoryColors.DEFAULTS.levelFalloff

---@type table<string, true> every category key seen so far, kept when the colors are rebuilt
local knownKeys = {}

---@type table<string, CAEC_Color | false> category key -> color, or false if it has no color
local tintByCategory = {}

---@type table<string, CAEC_Color | false> drawn string -> tint, or false if it is not a category
local tintByDrawnText = {}

---@type table<string, string> localized text -> category key
local categoryByText = {}

---@type string[]
local knownTexts = {}

---@type string[] palette keys, longest first so "FoodPerishable" would win over "Food"
local topLevelCategories = {}

---@type table<string, CAEC_Color>
local baseColors = {}

local initialized = false

---@param hex string "#rrggbb"
---@return CAEC_Color
local function parseHex(hex)
  hex = string.gsub(hex, "#", "")

  return {
    r = (tonumber(string.sub(hex, 1, 2), 16) or 0) / 255,
    g = (tonumber(string.sub(hex, 3, 4), 16) or 0) / 255,
    b = (tonumber(string.sub(hex, 5, 6), 16) or 0) / 255
  }
end

for key, hex in pairs(Palette) do
  baseColors[key] = parseHex(hex)
  topLevelCategories[#topLevelCategories + 1] = key
end

table.sort(topLevelCategories, function (a, b) return #a > #b end)

---@param value number
---@return number
local function clamp(value)
  return math.max(0, math.min(1, value))
end

---@param r number
---@param g number
---@param b number
---@return number, number, number
local function rgbToHsv(r, g, b)
  local max = math.max(r, g, b)
  local min = math.min(r, g, b)
  local delta = max - min
  local h = 0.0

  if delta > 0 then
    if max == r then
      h = ((g - b) / delta) % 6
    elseif max == g then
      h = (b - r) / delta + 2
    else
      h = (r - g) / delta + 4
    end

    h = h / 6
  end

  return h, max == 0 and 0 or delta / max, max
end

---@param h number 0..1
---@param s number
---@param v number
---@return number, number, number
local function hsvToRgb(h, s, v)
  local i = math.floor(h * 6)
  local f = h * 6 - i
  local p = v * (1 - s)
  local q = v * (1 - f * s)
  local t = v * (1 - (1 - f) * s)
  i = i % 6

  if i == 0 then return v, t, p end
  if i == 1 then return q, v, p end
  if i == 2 then return p, v, t end
  if i == 3 then return p, q, v end
  if i == 4 then return t, p, v end

  return v, p, q
end

---@param str string
---@return number
local function hash(str)
  local result = 0

  for i = 1, #str do
    result = (result * 31 + string.byte(str, i)) % 16777216
  end

  return result
end

---@param key string
---@return string | nil
local function findTopLevel(key)
  for i = 1, #topLevelCategories do
    local top = topLevelCategories[i]

    if string.sub(key, 1, #top) == top then
      local nextChar = string.sub(key, #top + 1, #top + 1)

      -- only match whole words, so "Tool" doesn't match "Toolbox"
      if nextChar == "" or string.find(nextChar, "%u") then
        return top
      end
    end
  end

  return nil
end

---@param key string e.g. "FoodPerishableMeat"
---@return CAEC_Color | nil
local function resolveSingleColor(key)
  local top = findTopLevel(key)

  if not top then
    return nil
  end

  local base = baseColors[top]
  local h, s, v = rgbToHsv(base.r, base.g, base.b)
  local scale = 1

  for word in string.gmatch(string.sub(key, #top + 1), "%u[^%u]*") do
    local n = hash(word)
    local hueShift = (n % 1000) / 1000 - 0.5
    local valueShift = (math.floor(n / 1000) % 1000) / 1000 - 0.5

    h = (h + hueShift * hueVariation * scale) % 1
    v = clamp(v + valueShift * valueVariation * scale)
    scale = scale * levelFalloff
  end

  local r, g, b = hsvToRgb(h, s, v)

  return { r = r, g = g, b = b }
end

---@param category string
---@return CAEC_Color | nil
local function resolveColor(category)
  local r, g, b, count = 0.0, 0.0, 0.0, 0
  local start = 1

  -- "XOrY" categories belong to either, mix the colors of all sides
  while true do
    local orStart = string.find(category, "__%u", start + 1)
    local part = string.sub(category, start, orStart and orStart - 1 or #category)
    local color = resolveSingleColor(part)

    if color then
      r, g, b, count = r + color.r, g + color.g, b + color.b, count + 1
    end

    if not orStart then
      break
    end

    start = orStart + 2
  end

  if count == 0 then
    return nil
  end

  return { r = r / count, g = g / count, b = b / count }
end

---@param category string
local function addColor(category)
  local color = resolveColor(category)
  tintByCategory[category] = color or false

  if not color then
    return
  end

  local text = getText("IGUI_ItemCat_" .. category)

  if not categoryByText[text] then
    categoryByText[text] = category
    knownTexts[#knownTexts + 1] = text
  end
end

---@param key string
function CategoryColors.register(key)
  if not key or key == "" or knownKeys[key] then
    return
  end

  knownKeys[key] = true
  addColor(key)

  tintByDrawnText = {}
end

---@param settings CAEC_CategoryColorSettings
function CategoryColors.configure(settings)
  enabled = settings.enabled
  tintStrength = settings.tintStrength
  hueVariation = settings.hueVariation
  valueVariation = settings.valueVariation
  levelFalloff = settings.levelFalloff

  tintByCategory = {}
  categoryByText = {}
  knownTexts = {}
  tintByDrawnText = {}

  for key in pairs(knownKeys) do
    addColor(key)
  end
end

---@param key string
---@return CAEC_Color | nil
function CategoryColors.getColor(key)
  CategoryColors.register(key)

  return tintByCategory[key] or nil
end

local function initialize()
  initialized = true

  local items = getScriptManager():getAllItems()

  for i = 0, items:size() - 1 do
    CategoryColors.register(items:get(i):getDisplayCategory())
  end
end

function CategoryColors.invalidate()
  initialized = false
end

---@param str string
---@return table | false
local function resolveTint(str)
  local key = categoryByText[str]

  if key then
    return tintByCategory[key]
  end

  -- CleanUI truncates the category when its column is narrow
  if #str > #TRUNCATE_SUFFIX and string.sub(str, -#TRUNCATE_SUFFIX) == TRUNCATE_SUFFIX then
    local prefix = string.sub(str, 1, #str - #TRUNCATE_SUFFIX)

    for i = 1, #knownTexts do
      local text = knownTexts[i]

      if string.sub(text, 1, #prefix) == prefix then
        return tintByCategory[categoryByText[text]]
      end
    end
  end

  return false
end

---@param pane ISInventoryPane
---@param str  string
---@param x    number
---@return table | nil
local function getTint(pane, str, x, r, g, b)
  if not enabled or type(str) ~= "string" or not pane.column3 or x < pane.column3 then
    return nil
  end

  if r == 0.7 and g == 0 and b == 0 then
    return nil
  end

  if not initialized then
    initialize()
  end

  local tint = tintByDrawnText[str]

  if tint == nil then
    tint = resolveTint(str)
    tintByDrawnText[str] = tint
  end

  return tint or nil
end

if not ISInventoryPane then
  return CategoryColors
end

---@param pane ISInventoryPane
---@param str  string
---@param x    number
---@param r    number
---@param g    number
---@param b    number
---@return number, number, number
local function getTextColor(pane, str, x, r, g, b)
  local tint = getTint(pane, str, x, r, g, b)

  if tint then
    local keep = 1 - tintStrength

    r = r * keep + tint.r * tintStrength
    g = g * keep + tint.g * tintStrength
    b = b * keep + tint.b * tintStrength
  end

  return r, g, b
end

ISInventoryPane._caecOriginalDrawText = ISInventoryPane._caecOriginalDrawText or ISInventoryPane.drawText
ISInventoryPane._caecOriginalDrawTextRight = ISInventoryPane._caecOriginalDrawTextRight or ISInventoryPane.drawTextRight

local originalDrawText = ISInventoryPane._caecOriginalDrawText
local originalDrawTextRight = ISInventoryPane._caecOriginalDrawTextRight

function ISInventoryPane:drawText(str, x, y, r, g, b, a, font)
  r, g, b = getTextColor(self, str, x, r, g, b)

  return originalDrawText(self, str, x, y, r, g, b, a, font)
end

function ISInventoryPane:drawTextRight(str, x, y, r, g, b, a, font)
  r, g, b = getTextColor(self, str, x, r, g, b)

  return originalDrawTextRight(self, str, x, y, r, g, b, a, font)
end

-- instance-specific categories (set via setDisplayCategory) don't show up on any script item
CAEC.onInstanceCategory = CategoryColors.register

-- script categories are (re)assigned during initialization
Events.OnGameStart.Add(CategoryColors.invalidate)

return CategoryColors
