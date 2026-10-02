local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Core = require("CAExtendedCategories/CAEC_Core")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_StaticCategorizer: CAEC_ItemCategorizer
---@field ItemsMap         table<string, string>
---@field registerCategory fun(itemName: string, category: string)
local Static = CAEC_ItemCategorizer:derive("Static")

---@type table<string, string>
Static.ItemsMap = {
  ["Base.BeerPack"]    = "BeverageBox",
  ["Base.BeerCanPack"] = "BeverageBox",

  ["Base.Garbagebag_box"] = "ContainerBox",

  ["Base.Yeast"]         = "FoodBaking",
  ["Base.BakingSoda"]    = "FoodBaking",
  ["Base.Peppermint"]    = "FoodCandy",
  ["Base.Honey"]         = "FoodNoExplicit",
  ["Base.BunsHotdog"]    = "FoodPerishableBread",
  ["Base.BunsHamburger"] = "FoodPerishableBread",
  ["Base.Pepper"]        = "FoodSpice",

  ["Base.HottieZ"]          = "LiteratureAdult",
  ["Base.HottieZ_New"]      = "LiteratureAdult",
  ["Base.Brochure"]         = "LiteratureBrochure",
  ["Base.ComicBook"]        = "LiteratureComic",
  ["Base.ComicBook_Retail"] = "LiteratureComic",
  ["Base.Flier"]            = "LiteratureFlier",
  ["Base.RPGmanual"]        = "LiteratureRpgManual",

  ["Base.TwigsBundle"] = "MaterialBundled",
  ["Base.Zipties"]     = "MaterialMaintenance",

  ["Base.SmokingPipe"] = "Smoking",
  ["Base.CanPipe"]     = "Smoking",

  ["Base.BlowTorch"] = "ToolMetalworking",
  ["Base.PropaneTank"] = "MaterialMetalworking",

  --- not first aid
  ["Base.TissueBox"] = "Household",

  ["Base.Doily"] = "Junk",
  ["Base.Clipboard"] = "Junk"
}

function Static:initialise()
  local overrides = Static.parseOverrides(Core.Settings.ItemCategoryOverrides)

  for itemName, category in pairs(overrides) do
    self:log(string.format("User override: %s => %s", itemName, category), Debug.Level.Info)
    Static.registerCategory(itemName, category)
  end
end

function Static.registerCategory(itemName, category)
  Static.ItemsMap[itemName] = category
end

---@param value string
---@return string
local function trim(value)
  return (value:gsub("^%s+", ""):gsub("%s+$", ""))
end

function Static:categorize(item, _instance)
  return (Static.ItemsMap[item:getFullName()] or nil), false
end

-- parse the user's overrides from the sandbox options. Format: "Base.MyItem=Tool,Base.SomeOtherItem=Literature__Junk"
---@param input string | nil
---@return table<string, string>
function Static.parseOverrides(input)
  ---@type table<string, string>
  local overrides = {}

  if type(input) ~= "string" then
    return overrides
  end

  for entry in input:gmatch("[^,;\n]+") do
    entry = trim(entry)

    Debug.log(string.format("Parsing user override: %s", entry), "Static", Debug.Level.Debug)

    if entry ~= "" then
      local itemName, category = entry:match("^(.-)=(.*)$")
      itemName = itemName and trim(itemName)
      category = category and trim(category)

      if not itemName or itemName == "" or not category or category == "" then
        Debug.log(string.format("Invalid override \"%s\", expected \"Module.Item=Category\"", entry), "Static", Debug.Level.Error)
      elseif not itemName:find(".", 1, true) then
        Debug.log(string.format("Invalid override \"%s\": use the full item name, e.g. \"Base.%s\"", entry, itemName), "Static", Debug.Level.Error)
      else
        overrides[itemName] = category
      end
    end
  end

  return overrides
end

return Static
