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
end

function CAEC.updateStart()
  Core.initializeData()
end

function CAEC.setStaticCategory(itemName, category)
  Core.StaticCategories[itemName] = category
end

---@param trigger string?
function CAEC.updateEnd(trigger)
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
        categorizedStatic = categorizedStatic + 1
      else
        categorizedInstance = categorizedInstance + 1
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

  local instanceSpecific = Core.InstanceSpecific[itemName] or false

  if not category then
    local categorizers = Processors.getCategorizers(instanceSpecific and "instance" or "script")
    local resolved = Utils.createInstanceIfNeeded(item, instance)

    if not resolved then
      Core.ErrorItems[itemName] = item
      return nil, false
    end

    category, instanceSpecific = Core.categorize(categorizers, item, resolved)

    if instanceSpecific then
      Core.InstanceSpecific[itemName] = true
    else
      Core.ItemTweaks[itemName] = category or NONE
    end
  end

  return category, instanceSpecific
end

---@param items   ArrayList<InventoryItem>
---@param trigger string | nil
function CAEC.updateInstanceItems(items, trigger)
  CAEC.updateStart()
  Debug.log("trigger: " .. (trigger or "N/A"), "updateInstanceItems")
  local total = items:size()

  for i = 0, total - 1 do
    local instance = items:get(i)
    local item = instance:getScriptItem()
    local itemName = item:getFullName()
    local instanceName = instance:getName()

    ---@type string | nil
    local category = Core.ItemTweaks[itemName] or Core.StaticCategories[itemName]
    ---@type boolean
    local instanceSpecific = Core.InstanceSpecific[itemName] or false

    Debug.log(
      string.format(
        "Processing instance: %s (item: %s) - instanceSpecific: %s, staticCategory: %s", instanceName, itemName,
        tostring(instanceSpecific), tostring(category)
      ), "updateInstanceItems"
    )

    if nil == category or instanceSpecific then
      category = CAEC.categorizeItem(item, instance)

      if category and category ~= NONE then
        Debug.log(string.format("Setting category for %s -> %s", instanceName, category), "updateInstanceItems")
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

  Debug.log("Trigger: " .. trigger, "updateInstanceItem")

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

---@param containerItem nil | any
function CAEC.onContainerUpdate(containerItem)
  if not containerItem then return end

  ---@type ItemContainer | nil
  local container = nil

  if instanceof(containerItem, "InventoryItem") then
    ---@cast containerItem InventoryItem
    container = containerItem:getContainer()
  elseif instanceof(containerItem, "ItemContainer") then
    ---@cast containerItem ItemContainer
    container = containerItem
  end

  if container then
    CAEC.categorizeItemContainer(container, "onContainerUpdate")
    CAEC.updateEnd()
  end
end

CAEC.registerCategorizer = Processors.registerCategorizer
CAEC.registerInitHook = Processors.registerInitHook
CAEC.registerPreprocessor = Processors.registerPreprocessor

CAEC.debug = Debug.log

return CAEC
