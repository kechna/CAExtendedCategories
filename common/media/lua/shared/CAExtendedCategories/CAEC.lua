local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Processors = require("CAExtendedCategories/CAEC_Processors")
local Core = require("CAExtendedCategories/CAEC_Core")

local NONE = "__NONE__"

local CAEC = {}

CAEC_Global = CAEC_Global or {}

---@type fun(category: string) | nil
CAEC.onInstanceCategory = nil

---@param trigger string?
function CAEC.initialize(trigger)
  trigger = trigger or "CAEC.Initialize"
  CAEC.updateStart()

  local hooks = Processors.getInitHooks()

  for i = 1, #hooks do
    local hook = hooks[i]
    Debug.log(string.format("Init: %s", hook.name), "Hooks:Initialize")
    hook.callback()
  end

  Core.initializeCategorizers()
  Core.ErrorCount = getLuaDebuggerErrorCount()

  Core.preprocessAllItems()
  CAEC.categorizeAllItems(trigger)
  CAEC.updateEnd()

  Core.reportInstantiationErrors()
end

---@return boolean initialized
function CAEC.updateStart()
  return Core.initializeData()
end

---@param trigger string?
function CAEC.updateEnd()
  Core.updateEnd()
end

---@param trigger string
function CAEC.categorizeAllItems(trigger)
  Debug.log("CATEGORIZING ALL ITEMS..." .. (trigger and (" (triggered by " .. trigger .. ")") or ""))

  local categorizedStatic = 0
  local categorizedInstance = 0

  Core.processAllItems(function (item)
    local category, instanceSpecific = CAEC.categorizeItem(item)

    if category then
      item:DoParam("DisplayCategory", category)

      if instanceSpecific then
        categorizedInstance = categorizedInstance + 1
      else
        categorizedStatic = categorizedStatic + 1
      end
    end
  end)

  Debug.log(string.format("Categorization complete. Static: %d, Instance: %d", categorizedStatic, categorizedInstance))
end

---@param item     Item
---@param instance InventoryItem | nil
---@return string | nil, boolean
function CAEC.categorizeItem(item, instance)
  local itemName = item:getFullName()
  ---@type string | nil
  local category = Core.ItemTweaks[itemName]

  if NONE == category then
    return nil, false
  end

  ---@type boolean
  local knownInstanceSpecific = Core.InstanceSpecific[itemName] or false
  ---@type boolean
  local instanceSpecific = knownInstanceSpecific

  if not category then
    local categorizers = Processors.getCategorizers(knownInstanceSpecific and "instance" or "script")
    local resolved, reason = Utils.createInstanceIfNeeded(item, instance)

    if not resolved then
      ---@cast reason string
      table.insert(Core.ErrorItems, { name = itemName, item = item, reason = reason })
      return nil, false
    end

    category, instanceSpecific = Core.categorize(categorizers, item, resolved)

    if instanceSpecific then
      Core.InstanceSpecific[itemName] = true
    elseif not knownInstanceSpecific then
      Core.ItemTweaks[itemName] = category or NONE
    end
  end

  return category, instanceSpecific
end

---@param instance InventoryItem
---@return boolean
local function updateInstance(instance)
  local item = instance:getScriptItem()
  local itemName = item:getFullName()

  ---@type string | nil
  local category = Core.ItemTweaks[itemName]
  ---@type boolean
  local instanceSpecific = Core.InstanceSpecific[itemName] or false

  if nil == category or instanceSpecific then
    category = CAEC.categorizeItem(item, instance)

    if category and category ~= NONE then
      instance:setDisplayCategory(category)

      if CAEC.onInstanceCategory then
        CAEC.onInstanceCategory(category)
      end
      return true
    end
  end

  return false
end

---@param items   ArrayList<InventoryItem>
---@param trigger string | nil
---@param force   boolean | nil
---@param busy    table<number, boolean> | nil
function CAEC.updateInstanceItems(items, trigger, force, busy)
  CAEC.updateStart()

  local now = getGameTime():getWorldAgeHours()
  local total = items:size()
  local updated = 0

  for i = 0, total - 1 do
    local instance = items:get(i)

    if Core.shouldUpdateInstance(instance, now, force, busy) then
      if updateInstance(instance) then
        updated = updated + 1
      end

      Core.markInstanceUpdated(instance)
    end
  end

  if updated > 0 and Debug.isLevel(Debug.Level.Debug) then
    Debug.log(string.format("Updated %d/%d (trigger: %s)", updated, total, trigger or "N/A"), "updateInstanceItems")
  end
end

---@param instance    any
---@param categorizer string | fun(item: Item, instance: (InventoryItem | InventoryItem?)): string | nil, boolean?
---@param trigger     string | nil
function CAEC.updateInstanceItem(instance, categorizer, trigger)
  if not instance or not instanceof(instance, "InventoryItem") then
    return
  end

  if type(categorizer) == "string" then
    categorizer = Processors.getCategorizer(categorizer)
  end

  if Debug.isLevel(Debug.Level.Debug) then
    Debug.log("Trigger: " .. tostring(trigger), "updateInstanceItem")
  end

  ---@cast instance InventoryItem
  local category = categorizer(instance:getScriptItem(), instance)

  if category and category ~= NONE then
    instance:setDisplayCategory(category)

    if CAEC.onInstanceCategory then
      CAEC.onInstanceCategory(category)
    end
  end

  Core.markInstanceUpdated(instance)
end

---@param inventory ItemContainer
---@param trigger   string
---@param force     boolean | nil
---@param busy      table<number, boolean> | nil
function CAEC.categorizeItemContainer(inventory, trigger, force, busy)
  local items = inventory:getAllEvalRecurse(Core.isDynamicItem)

  if items:isEmpty() then
    return
  end

  CAEC.updateInstanceItems(items, trigger, force, busy)
  items:clear()
end

CAEC.registerCategorizer = Processors.registerCategorizer
CAEC.registerInitHook = Processors.registerInitHook
CAEC.registerPreprocessor = Processors.registerPreprocessor

CAEC.debug = Debug.log

return CAEC
