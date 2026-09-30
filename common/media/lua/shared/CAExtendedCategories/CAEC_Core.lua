local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Processors = require("CAExtendedCategories/CAEC_Processors")

CAEC_Global = CAEC_Global or {}

local Core = {}

---@type boolean
Core.Initialized = false

---@class CAEC_SandboxSettings
---@field LogVerbosity?          number
---@field ItemCategoryOverrides? string

---@type CAEC_SandboxSettings
Core.Settings = {}

---@type boolean
local globalDataInitialized = false

Core.ErrorCount = 0

---@type table<string, Item>
Core.ErrorItems = {}

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

  -- regular categorizers
  Processors.registerCategorizer("Static", 1)
  Processors.registerCategorizer("Container", 200)
  Processors.registerCategorizer("Apparel", 400)
  Processors.registerCategorizer("Cooking", 800)
  Processors.registerCategorizer("Electronics", 900)
  Processors.registerCategorizer("Material", 1000)
  Processors.registerCategorizer("Gardening", 1200)
  Processors.registerCategorizer("Writing", 1300)
  Processors.registerCategorizer("Literature", 1400)
  Processors.registerCategorizer("Tool", 1600)
  Processors.registerCategorizer("Weapon", 1800)
  Processors.registerCategorizer("Ammo", 2000)
  Processors.registerCategorizer("Memento", 2200)
  Processors.registerCategorizer("Entertainment", 2600)
  Processors.registerCategorizer("Smoking", 2800)

  -- Processors.registerCategorizer("CategorizeInstance", Core.categorizeInstance, 5000)
  Processors.registerCategorizer("FluidContainer", 5000, "script")
  Processors.registerCategorizer("Food", 5200, "script")

  Processors.registerCategorizer("Household", 6000)
  Processors.registerCategorizer("FireSource", 6200)
  Processors.registerCategorizer("GasMask", 6400)
  Processors.registerCategorizer("BoxesAndStacks", 8000)
  Processors.registerCategorizer("CategoryOverride", 9999)

  Processors.registerCategorizer("FluidContainer", 1000, "instance")
  Processors.registerCategorizer("Food", 2000, "instance")

  Core.Initialized = true
end

---@param instance InventoryItem
---@return boolean
function Core.isDynamicItem(instance)
  if instance:hasComponent(ComponentType.FluidContainer) then
    return true
  end

  Core.initializeData()

  local name = instance:getScriptItem():getFullName()

  if Core.InstanceSpecific[name] == true then
    return true
  end

  return Core.ItemTweaks[name] == nil
end

function Core.setData(source)
  source = source or {}

  Debug.log("Core.setData")
  -- print all keys and values in SandboxVars.CAExtendedCategories
  for k, v in pairs(SandboxVars.CAExtendedCategories or {}) do
    Debug.log(string.format("SandboxVars.CAExtendedCategories[%s] = %s", k, tostring(v)), "Core", Debug.Level.Debug)
  end

  Core.ErrorCount = getLuaDebuggerErrorCount()
  Core.Settings = source.Settings or SandboxVars.CAExtendedCategories or Core.Settings
  Core.Initialized = source.Initialized or false
  Core.InstanceSpecific = source.InstanceSpecific or {}
  Core.ItemTweaks = source.ItemTweaks or {}

  Debug.applySettings(Core.Settings.LogVerbosity)

  globalDataInitialized = true
end

function Core.initializeData()
  if globalDataInitialized then
    return false
  end

  Core.setData(CAEC_Global or {})

  Debug.log("Initialized variables from global data.", "initializeData")
  return true
end

function Core.updateEnd()
  Utils.removeTemporaryInstances()

  local saved = CAEC_Global or {}

  if saved.Initialized == Core.Initialized and saved.InstanceSpecific == Core.InstanceSpecific
    and saved.ItemTweaks == Core.ItemTweaks then
    return
  end

  CAEC_Global = {
    Initialized = Core.Initialized,
    InstanceSpecific = Core.InstanceSpecific,
    ItemTweaks = Core.ItemTweaks
  }
end

local errorReportRegistered = false

--- Tell the user which items failed to instantiate during categorization. Only call this once, after categorizing all items.
function Core.reportInstantiationErrors()
  if errorReportRegistered or getLuaDebuggerErrorCount() <= Core.ErrorCount then
    return
  end

  errorReportRegistered = true

  Events.OnGameStart.Add(function ()
    local itemList = ""

    for itemName, item in pairs(Core.ErrorItems) do
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
