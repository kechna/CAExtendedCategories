local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Processors = require("CAExtendedCategories/CAEC_Processors")
local BoxesAndStacks = require("CAExtendedCategories/Categorizers/CAEC_BoxesAndStacks")
local CategoryModes = require("CAExtendedCategories/Data/CAEC_CategoryModes")

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

---@type integer
Core.ErrorCount = 0

---@class CAEC_ErrorItem
---@field name   string
---@field item   Item
---@field reason string

---@type CAEC_ErrorItem[]
Core.ErrorItems = table.newarray()

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
  -- boxes with known contents (from unpack recipes) are categorized by their contents
  Processors.registerCategorizer("BoxesAndStacks", 2)
  -- weapons resolve their base category through the rest of the chain and combine it with their own
  Processors.registerCategorizer("Weapon", 100)
  Processors.registerCategorizer("Electronics", 400)
  Processors.registerCategorizer("Container", 600)
  Processors.registerCategorizer("Cooking", 800)
  Processors.registerCategorizer("Construction", 900)
  Processors.registerCategorizer("Material", 1000)
  Processors.registerCategorizer("Gardening", 1200)
  Processors.registerCategorizer("Writing", 1300)
  Processors.registerCategorizer("Literature", 1400)
  Processors.registerCategorizer("Tool", 1600)
  Processors.registerCategorizer("Household", 1700)
  Processors.registerCategorizer("Apparel", 1800)
  Processors.registerCategorizer("Ammo", 2000)
  Processors.registerCategorizer("Memento", 2200)
  Processors.registerCategorizer("Entertainment", 2600)
  Processors.registerCategorizer("Smoking", 2800)
  Processors.registerCategorizer("AnimalPart", 3000)

  Processors.registerCategorizer("FluidContainer", 5000, "script")
  Processors.registerCategorizer("Food", 5200, "script")

  Processors.registerCategorizer("FireSource", 6200)
  Processors.registerCategorizer("GasMask", 6400)
  Processors.registerCategorizer("BoxesAndStacksFallback", BoxesAndStacks.categorizeByHeuristic, 8000)
  Processors.registerCategorizer("CategoryOverride", 9999)

  Processors.registerCategorizer("FluidContainer", 1000, "instance")
  Processors.registerCategorizer("Food", 2000, "instance")

  Core.Initialized = true
end

--- 1 = Hoarder, 2 = Balanced, 3 = Lite. Set from the client mod options, the server keeps Hoarder.
---@type integer
local categoryDetail = 1

--- full-detail key => key for the active category detail, built once per change
---@type table<string, string> | nil
local activeCategoryMap = nil

--- Ignored once the items are categorized: instances can't be reliably recategorized later, so a change only applies
--- after rejoining from the main menu, which reloads Lua.
---@param detail integer
function Core.setCategoryDetail(detail)
  if Core.Initialized then
    return
  end

  categoryDetail = detail
  activeCategoryMap = nil
end

---@return table<string, string>
local function buildCategoryMap()
  local map = {}

  if categoryDetail > 1 then
    -- each entry holds the Balanced and Lite key, Lite is nil when it's the same as Balanced
    for key, entry in pairs(CategoryModes) do
      map[key] = entry[categoryDetail - 1] or entry[1]
    end
  end

  return map
end

--- Categorizers and the ItemTweaks cache always work with full-detail (Hoarder) keys, because resolveCategory reuses
--- them to build box and weapon combo categories. The detail mode only changes the category that ends up on the item.
--- Note: categorizers reading item:getDisplayCategory() on a second pass will see the replaced key.
---@param category string
---@return string
function Core.applyCategoryMode(category)
  activeCategoryMap = activeCategoryMap or buildCategoryMap()

  return activeCategoryMap[category] or category
end

---@param instance InventoryItem
---@return boolean
function Core.isDynamicItem(instance)
  if Utils.getFluidContainer(instance) then
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

  Core.ErrorCount = getLuaDebuggerErrorCount()
  Core.Settings = source.Settings or SandboxVars.CAExtendedCategories or Core.Settings
  activeCategoryMap = nil
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

function Core.reportInstantiationErrors()
  if errorReportRegistered or getLuaDebuggerErrorCount() <= Core.ErrorCount then
    return
  end

  errorReportRegistered = true

  Events.OnGameStart.Add(function ()
    local itemList = ""

    for i = 1, #Core.ErrorItems do
      local errorItem = Core.ErrorItems[i]
      local mod = errorItem.item:getModID()

      itemList = itemList
        .. string.format(
          " - %s: %-20s Reason: %s\n", tostring(mod), tostring(errorItem.name), tostring(errorItem.reason)
        )
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
    -- record every original category before anything is categorized, not every item is read by a categorizer
    Utils.getOriginalCategory(item)

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

--- in-game hours before an already categorized instance is checked again (e.g. food aging)
local RECHECK_HOURS = 1

local MAX_CACHED = 2000

---@type table<number, number>
local lastCategorized = {}

---@type table<number, string | false>
local lastFingerprint = {}

--- display category is not saved or synced, recreated objects (MP sync, chunk reload) fall back to the script's
---@type table<number, string>
local lastCategory = {}

local cachedCount = 0

---@param instance InventoryItem
---@return string | false
local function getFingerprint(instance)
  local fluidContainer = Utils.getFluidContainer(instance)

  if not fluidContainer then
    return false
  end

  local fluid = fluidContainer:getPrimaryFluid()

  return tostring(fluidContainer:getAmount()) .. (fluid and fluid:getFluidTypeString() or "")
end

---@param id          number
---@param now         number
---@param fingerprint string | false
---@param category    string | nil
local function markCategorized(id, now, fingerprint, category)
  if not lastCategorized[id] then
    if cachedCount >= MAX_CACHED then
      lastCategorized = {}
      lastFingerprint = {}
      lastCategory = {}
      cachedCount = 0
    end

    cachedCount = cachedCount + 1
  end

  lastCategorized[id] = now
  lastFingerprint[id] = fingerprint
  lastCategory[id] = category
end

---@param instance InventoryItem
---@param now      number
---@param force    boolean | nil
---@param busy     table<number, boolean> | nil
---@return boolean
function Core.shouldUpdateInstance(instance, now, force, busy)
  local id = instance:getID()

  -- ignore timed action updates between start and end state
  if not force and ((busy and busy[id]) or instance:getJobDelta() > 0) then
    return false
  end

  local last = lastCategorized[id]

  if force or not last or now - last >= RECHECK_HOURS or getFingerprint(instance) ~= lastFingerprint[id] then
    return true
  end

  local category = lastCategory[id]

  return category ~= nil and instance:getDisplayCategory() ~= category
end

---@param instance InventoryItem
function Core.markInstanceUpdated(instance)
  markCategorized(
    instance:getID(), getGameTime():getWorldAgeHours(), getFingerprint(instance), instance:getDisplayCategory()
  )
end

return Core
