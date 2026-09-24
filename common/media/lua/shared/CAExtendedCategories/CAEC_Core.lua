local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Processors = require("CAExtendedCategories/CAEC_Processors")

CAEC_Global = CAEC_Global or {}

local Core = {}

---@type boolean
Core.Initialized = false

---@type boolean
local globalDataInitialized = false

Core.ErrorCount = 0

---@type table<string, Item>
Core.ErrorItems = {}

-- Static mapping for items that need specific categories
---@type table<string, string>
Core.StaticCategories = {
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
  ["Base.PropaneTank"] = "MaterialMetalworking"
}

---@type table<string, boolean>
Core.InstanceSpecific = {}

---@type table<string, string>
Core.ItemTweaks = {}

---@class CAEC_Hook
---@field name string
---@field fn   fun()

function Core.initializeCategorizers()
  if Core.Initialized then
    Debug.log("Categorizers already initialized.")
    return
  end

  Processors.registerCategorizer("Container", 200)
  Processors.registerCategorizer("Smoking", 400)
  Processors.registerCategorizer("Cooking", 600)
  Processors.registerCategorizer("Material", 800)
  Processors.registerCategorizer("Apparel", 1000)
  Processors.registerCategorizer("Gardening", 1200)
  Processors.registerCategorizer("Literature", 1400)
  Processors.registerCategorizer("Tool", 1600)
  Processors.registerCategorizer("Weapon", 1800)
  Processors.registerCategorizer("Ammo", 2000)
  Processors.registerCategorizer("Memento", 2200)
  Processors.registerCategorizer("CategorizeInstance", Core.categorizeInstance, 5000)
  Processors.registerCategorizer("BoxesAndStacks", 6000)
  Processors.registerCategorizer("CategoryOverride", 7000)

  Processors.registerCategorizer("FluidContainer", 200, "instance")
  Processors.registerCategorizer("Food", 1000, "instance")

  Core.Initialized = true
end

---@param instance InventoryItem
---@return boolean
function Core.isDynamicItem(instance)
  if instance:hasComponent(ComponentType.FluidContainer) then
    return true
  end

  if not globalDataInitialized then
    Core.updateStart()
  end

  local name = instance:getScriptItem():getFullName()

  local instanceSpecific = Core.InstanceSpecific[name] == true
  local tweaked = Core.ItemTweaks[name] ~= nil

  return instanceSpecific or not tweaked
end

function Core.setData(source)
  source = source or {}

  Core.ErrorCount = getLuaDebuggerErrorCount()
  Core.Settings = source.Settings or SandboxVars.CAExtendedCategories or {}
  Core.Initialized = source.Initialized or false
  -- CAEC.InstanceCategorizers = source.InstanceCategorizers or {}
  Core.InstanceSpecific = source.InstanceSpecific or {}
  Core.ItemTweaks = source.ItemTweaks or {}
  -- CAEC.ScriptCategorizers = source.ScriptCategorizers or {}

  Debug.setLevel(Debug.Verbosity or Core.Settings.LogVerbosity)

  globalDataInitialized = true
end

function Core.initializeData()
  if globalDataInitialized then
    return false
  end

  Core.setData(CAEC_Global or {})

  Debug.log("Initialized variables from global data.", "updateStart")
  return true
end

function Core.updateStart()
  if globalDataInitialized then
    return false
  end

  Core.setData(CAEC_Global or {})

  Debug.log("Initialized variables from global data.", "updateStart")
  return true
end

function Core.setStaticCategory(itemName, category)
  Core.StaticCategories[itemName] = category
end

---@param trigger string?
function Core.updateEnd(trigger)
  Debug.log(string.format("updateEnd (Trigger: %s)", trigger or "N/A"), "updateEnd")
  local ToSave = {}

  ToSave.Initialized = Core.Initialized
  -- ToSave.InstanceCategorizers = CAEC.InstanceCategorizers
  ToSave.InstanceSpecific = Core.InstanceSpecific
  ToSave.ItemTweaks = Core.ItemTweaks
  --  ToSave.ScriptCategorizers = CAEC.ScriptCategorizers

  Utils.removeTemporaryInstances()

  CAEC_Global = ToSave

  local actualErrorCount = getLuaDebuggerErrorCount()

  if actualErrorCount > Core.ErrorCount then
    local errorItems = Core.ErrorItems

    Events.OnGameStart.Add(function ()
      local itemList = ""

      for itemName, item in pairs(errorItems) do
        local mod = item:getModID()
        itemList = itemList .. string.format(" - %s: %s\n", mod, itemName)
      end

      Core.ErrorItems = {}

      local suffix = itemList == "" and "Check the logs to see which mods cause this message to show up. "
        or string.format("The following items trigger an error when created:\n\n%s\n", itemList)

      Debug.log(
        string.format(
          "\n--- [CAExtendedCategories]---\nIf you're seeing this error, one or more items failed to be instantiated. This is NOT an issue with my mod (Extended Categories). These errors can safely be ignored, unfortunately there is no way to suppress them.\n\n%sPlease report these issues to the mod authors.\n",
          suffix
        ), "ERROR", Debug.Level.Error
      )
    end)
  end
end

local allItems = nil
local totalItems = nil

---@param callback fun(item: Item)
function Core.processAllItems(callback)
  allItems = allItems or getAllItems()
  totalItems = totalItems or allItems:size()

  for i = 0, totalItems - 1 do
    callback(allItems:get(i))
  end
end

function Core.preprocessAllItems()
  Debug.log("PREPROCESSING ALL ITEMS...")
  local preprocessors = Processors.getPreprocessors()
  local changes = 0

  Core.processAllItems(function (item)
    for i = 1, #preprocessors do
      local preprocessor = preprocessors[i]
      local result = preprocessor.callback(item)

      if result then
        changes = changes + 1
      end
    end
  end)

  Debug.log(string.format("Preprocessing complete. Total changes: %d", changes))
end

---@param categorizers CAEC_CategorizerRef[]
---@param item         Item
---@param instance     InventoryItem | nil
---@return string | nil, boolean
function Core.categorize(categorizers, item, instance)
  local category = nil
  ---@type boolean | nil
  local instanceSpecific = false

  for i = 1, #categorizers do
    local categorizer = categorizers[i]

    category, instanceSpecific = categorizer.callback(item, instance)

    if category then
      break
    end
  end

  return category, (instanceSpecific or false)
end

---@param item     Item
---@param instance InventoryItem | nil
---@return string | nil, boolean
function Core.categorizeInstance(item, instance)
  return Core.categorize(Processors.getCategorizers("instance"), item, instance)
end

return Core
