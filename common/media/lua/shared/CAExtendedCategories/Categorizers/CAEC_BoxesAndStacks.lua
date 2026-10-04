local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local BoxContents = require("CAExtendedCategories/CAEC_BoxContents")
local Utils = require("CAExtendedCategories/CAEC_Utils")

-- Categorizes boxes, cartons, packs and bundles by the category of the item they contain. Contents come from the game's
-- unpack recipes (see CAEC_BoxContents) and are categorized on demand
---@class CAEC_BoxesAndStacksCategorizer: CAEC_ItemCategorizer
local BoxesAndStacks = CAEC_ItemCategorizer:derive("BoxesAndStacks")

local SUFFIXES = table.newarray("Box", "Carton", "Bundled")

--- boxes whose contents are being resolved, to break cycles in modded recipes
---@type table<string, boolean>
local resolving = {}

local sm = getScriptManager()

---@param item     Item
---@param instance InventoryItem?
---@return string | nil, string | nil
local function byName(item, instance)
  if not instance then
    return nil, nil
  end

  local iconTexture = instance:getIcon()
  local icon = iconTexture and iconTexture:getName() or nil

  if icon and not icon:contains("Parcel") and not icon:contains("Carton") then
    return nil, nil
  end

  ---@type string | nil
  local suffix = nil
  local category = (icon and icon:contains("Food")) and "Food" or nil
  local name = item:getName():lower()

  if name:contains("box") then
    suffix = "Box"
  elseif name:contains("carton") then
    suffix = "Carton"
  end

  return suffix, category
end

---@param item Item
---@return string | nil
local function byRecipe(item)
  ---@type string | nil
  local recipe = item:getDoubleClickRecipe()

  if not recipe then
    return nil
  end

  recipe = recipe:lower()
  local suffix = nil

  if recipe == "unstack_items" then
    suffix = "Bundled"
  elseif recipe:contains("carton") and (Utils.startsWith("open", recipe) or Utils.startsWith("unpack", recipe)) then
    suffix = "Carton"
  elseif Utils.startsWith("takea", recipe)
    or (recipe:contains("box") and (Utils.startsWith("unpack", recipe) or Utils.startsWith("open", recipe))) then
    suffix = "Box"
  end

  return suffix
end

---@param existingCategory string | nil
---@param item             Item
---@param instance         InventoryItem?
---@return string | nil
function BoxesAndStacks.addToCategory(existingCategory, item, instance)
  ---@type string | nil
  local category = nil
  local suffix = byRecipe(item)

  if not suffix then
    suffix, category = byName(item, instance)

    if suffix and not existingCategory and category then
      existingCategory = category
    end
  end

  if suffix and existingCategory and not Utils.endsWith(suffix, existingCategory) then
    category = Utils.withSuffix(existingCategory, suffix)
  end

  return category
end

---@param item     Item
---@param instance InventoryItem?
---@return string | nil, boolean | nil
function BoxesAndStacks.categorizeByHeuristic(item, instance)
  return BoxesAndStacks.addToCategory(item:getDisplayCategory(), item, instance), nil
end

---@param box         Item
---@param boxInstance InventoryItem
---@param contents    string
---@param category    string
---@return string
local function getSuffix(box, boxInstance, contents, category)
  if BoxContents.isBox(contents) then
    return "Carton"
  end

  local name = box:getName():lower()
  local recipe = (box:getDoubleClickRecipe() or ""):lower()

  --if category:contains("Perishable")
  --  and not boxInstance:canAge() then
  --  return ""
  --end

  if name:contains("bundle") or recipe == "unstack_items" or Utils.startsWith("unbundle", recipe) then
    return "Bundled"
  end

  if name:contains("carton") then
    return "Carton"
  end

  return "Box"
end

--- Splits "FoodHerbBox__FirstAid" into "FoodHerb" and "__FirstAid".
---@param category string
---@return string base, string marker
local function splitCategory(category)
  local markerStart = category:find("__", 1, true)
  local base = markerStart and category:sub(1, markerStart - 1) or category
  local marker = markerStart and category:sub(markerStart) or ""

  for i = 1, #SUFFIXES do
    local suffix = SUFFIXES[i]

    if base ~= suffix and Utils.endsWith(suffix, base) then
      base = base:sub(1, -suffix:len() - 1)
      break
    end
  end

  return base, marker
end

---@param contents string
---@return string | nil
local function categorizeContents(contents)
  sm = sm or getScriptManager()

  local item = sm:getItem(contents)

  if not item then
    return nil
  end

  -- required here, CAEC requires the categorizers
  local CAEC = require("CAExtendedCategories/CAEC")
  local category = CAEC.categorizeItem(item)

  return category
end

function BoxesAndStacks:initialise()
  BoxContents.build()
end

function BoxesAndStacks:validate(item, _instance)
  return BoxContents.isBox(item:getFullName())
end

function BoxesAndStacks:categorize(item, instance)
  local name = item:getFullName()

  if resolving[name] then
    return nil
  end

  local contents = BoxContents.get(name)
  ---@cast contents string

  resolving[name] = true
  local ok, contentsCategory = pcall(categorizeContents, contents)
  resolving[name] = nil

  if not ok then
    self:log(string.format("Failed to categorize %s, contents of %s: %s", contents, name, tostring(contentsCategory)))
    return nil
  end

  if not contentsCategory then
    return nil
  end

  local base, marker = splitCategory(contentsCategory)

  return Utils.withSuffix(base, getSuffix(item, instance, contents, base)) .. marker
end

return BoxesAndStacks
