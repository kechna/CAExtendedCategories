local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Processors = require("CAExtendedCategories/CAEC_Processors")
local Core = require("CAExtendedCategories/CAEC_Core")

local NONE = "__NONE__"

local CAEC = {}

CAEC_Global = CAEC_Global or {}

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

  Core.preprocessAllItems()

  CAEC.categorizeAllItems(trigger)
  CAEC.updateEnd(trigger)

  Core.reportInstantiationErrors()
end

---@return boolean initialized whether the data was initialized by this call
function CAEC.updateStart()
  return Core.initializeData()
end

CAEC.setStaticCategory = Core.setStaticCategory

---@param trigger string?
function CAEC.updateEnd(trigger)
  if Debug.isLevel(Debug.Level.Debug) then
    Debug.log(string.format("updateEnd (Trigger: %s)", trigger or "N/A"), "updateEnd")
  end

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
  local category = Core.ItemTweaks[itemName] or Core.StaticCategories[itemName]

  if NONE == category then
    return nil, false
  end

  local knownInstanceSpecific = Core.InstanceSpecific[itemName] or false
  local instanceSpecific = knownInstanceSpecific

  if not category then
    local categorizers = Processors.getCategorizers(knownInstanceSpecific and "instance" or "script")
    local resolved = Utils.createInstanceIfNeeded(item, instance)

    if not resolved then
      Core.ErrorItems[itemName] = item
      return nil, false
    end

    category, instanceSpecific = Core.categorize(categorizers, item, resolved)

    if instanceSpecific then
      Core.InstanceSpecific[itemName] = true
    elseif not knownInstanceSpecific then
      -- only cache script-level results. An instance of a dynamic item must never decide the category for all of them.
      Core.ItemTweaks[itemName] = category or NONE
    end
  end

  return category, instanceSpecific
end

---@param items   ArrayList<InventoryItem>
---@param trigger string | nil
function CAEC.updateInstanceItems(items, trigger)
  CAEC.updateStart()

  local debug = Debug.isLevel(Debug.Level.Debug)

  if debug then
    Debug.log("trigger: " .. (trigger or "N/A"), "updateInstanceItems")
  end

  local total = items:size()

  for i = 0, total - 1 do
    local instance = items:get(i)
    local item = instance:getScriptItem()
    local itemName = item:getFullName()

    ---@type string | nil
    local category = Core.ItemTweaks[itemName] or Core.StaticCategories[itemName]
    ---@type boolean
    local instanceSpecific = Core.InstanceSpecific[itemName] or false

    if debug then
      Debug.log(
        string.format(
          "Processing instance: %s (item: %s) - instanceSpecific: %s, staticCategory: %s", instance:getName(), itemName,
          tostring(instanceSpecific), tostring(category)
        ), "updateInstanceItems"
      )
    end

    if nil == category or instanceSpecific then
      category = CAEC.categorizeItem(item, instance)

      if category and category ~= NONE then
        if debug then
          Debug.log(string.format("Setting category for %s -> %s", instance:getName(), category), "updateInstanceItems")
        end

        instance:setDisplayCategory(category)
      end
    end
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
  end
end

---@param inventory ItemContainer
---@param trigger   string
function CAEC.categorizeItemContainer(inventory, trigger)
  local items = inventory:getAllEvalRecurse(Core.isDynamicItem)

  if items:isEmpty() then
    return
  end

  CAEC.updateInstanceItems(items, trigger)
  items:clear()
end

CAEC.registerCategorizer = Processors.registerCategorizer
CAEC.registerInitHook = Processors.registerInitHook
CAEC.registerPreprocessor = Processors.registerPreprocessor

CAEC.debug = Debug.log

return CAEC
