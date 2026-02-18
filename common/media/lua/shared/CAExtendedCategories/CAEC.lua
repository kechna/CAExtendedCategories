local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local NONE = "__NONE__"
local CAEC = {}

---@type boolean
CAEC.Initialized = false;

CAEC.ErrorCount = 0;

---@type table<string, Item>
CAEC.ErrorItems = {};

-- Static mapping for items that need specific categories
---@type table<string, string>
CAEC.StaticCategories = {
  ["Base.BeerPack"]         = "BeverageBox",
  ["Base.BeerCanPack"]      = "BeverageBox",

  ["Base.Garbagebag_box"]   = "ContainerBox",

  ["Base.Yeast"]            = "FoodBaking",
  ["Base.BakingSoda"]       = "FoodBaking",
  ["Base.Peppermint"]       = "FoodCandy",
  ["Base.Honey"]            = "FoodNoExplicit",
  ["Base.BunsHotdog"]       = "FoodPerishableBread",
  ["Base.BunsHamburger"]    = "FoodPerishableBread",
  ["Base.Pepper"]           = "FoodSpice",

  ["Base.HottieZ"]          = "LiteratureAdult",
  ["Base.HottieZ_New"]      = "LiteratureAdult",
  ["Base.Brochure"]         = "LiteratureBrochure",
  ["Base.ComicBook"]        = "LiteratureComic",
  ["Base.ComicBook_Retail"] = "LiteratureComic",
  ["Base.Flier"]            = "LiteratureFlier",
  ["Base.RPGmanual"]        = "LiteratureRpgManual",

  ["Base.TwigsBundle"]      = "MaterialBundled",
  ["Base.Zipties"]          = "MaterialMaintenance",

  ["Base.SmokingPipe"]      = "Smoking",
  ["Base.CanPipe"]          = "Smoking",
}

---@type ArrayList<fun(item:Item, instance:InventoryItem?): string?, boolean?>>
CAEC.ScriptCategorizers = ArrayList.new();

---@type ArrayList<fun(item:Item, instance:InventoryItem?): string?, boolean?>>
CAEC.InstanceCategorizers = ArrayList.new();

CAEC.InstanceSpecific = {};
CAEC.ItemTweaks = {};

CAEC_Global = CAEC_Global or {}

--- @type boolean
local globalDataInitialized = false

local function initializeCategorizers()
  if CAEC.Initialized then
    Debug.log("Categorizers already initialized.")
    return
  end

  CAEC.ScriptCategorizers:add(Categorizers.Smoking)
  CAEC.ScriptCategorizers:add(Categorizers.Cooking)
  CAEC.ScriptCategorizers:add(Categorizers.Material)
  CAEC.ScriptCategorizers:add(Categorizers.Ammo)
  CAEC.ScriptCategorizers:add(Categorizers.Apparel)
  CAEC.ScriptCategorizers:add(Categorizers.Container)
  CAEC.ScriptCategorizers:add(Categorizers.Gardening)
  CAEC.ScriptCategorizers:add(Categorizers.Literature)
  CAEC.ScriptCategorizers:add(Categorizers.Tool)
  CAEC.ScriptCategorizers:add(Categorizers.Weapon)
  CAEC.ScriptCategorizers:add(Categorizers.Memento)
  CAEC.ScriptCategorizers:add(CAEC.CategorizeInstance)
  CAEC.ScriptCategorizers:add(Categorizers.BoxesAndStacks)
  CAEC.ScriptCategorizers:add(Categorizers.CategoryOverride)

  -- instance
  CAEC.InstanceCategorizers:add(Categorizers.Food)
  CAEC.InstanceCategorizers:add(Categorizers.FluidContainer)


  Debug.log(string.format("Categorizers initialized. Script: %d, Instance: %d",
    CAEC.ScriptCategorizers:size(),
    CAEC.InstanceCategorizers:size()
  ))

  CAEC.Initialized = true
end

---@param instance InventoryItem
---@return boolean
local function isDynamicItem(instance)
  if instance:isFluidContainer() then
    --Debug.log(string.format("isDynamicItem(%s): is fluid container", instance:getName()), "isDynamicItem")
    return true
  end

  if not globalDataInitialized then
    CAEC.UpdateStart()
  end

  local name = instance:getScriptItem():getFullName()

  local instanceSpecific = CAEC.InstanceSpecific[name] == true
  local tweaked = CAEC.ItemTweaks[name] ~= nil

  --Debug.log(string.format("isDynamicItem(%s): instanceSpecific=%s, tweaked=%s",
  --  name,
  --  tostring(instanceSpecific),
  --  tostring(tweaked)
  --), "isDynamicItem")

  return instanceSpecific or not tweaked
end

---@param trigger string?
function CAEC.Initialize(trigger)
  CAEC.UpdateStart()
  initializeCategorizers()
  CAEC.CategorizeAllItems(trigger or "CAEC.Initialize")
  CAEC.UpdateEnd()
end

function CAEC.UpdateStart()
  if globalDataInitialized then
    return false
  end

  local saved = CAEC_Global or {}

  CAEC.ErrorCount = getLuaDebuggerErrorCount()

  CAEC.Initialized = saved.Initialized or false
  CAEC.InstanceCategorizers = saved.InstanceCategorizers or ArrayList.new()
  CAEC.InstanceSpecific = saved.InstanceSpecific or {}
  CAEC.ItemTweaks = saved.ItemTweaks or {}
  CAEC.ScriptCategorizers = saved.ScriptCategorizers or ArrayList.new()

  globalDataInitialized = true
  return true
end

function CAEC.UpdateEnd()
  local ToSave = {}

  ToSave.Initialized = CAEC.Initialized
  ToSave.InstanceCategorizers = CAEC.InstanceCategorizers
  ToSave.InstanceSpecific = CAEC.InstanceSpecific
  ToSave.ItemTweaks = CAEC.ItemTweaks
  ToSave.ScriptCategorizers = CAEC.ScriptCategorizers

  Utils.RemoveTemporaryInstances()

  CAEC_Global = ToSave

  if getLuaDebuggerErrorCount() > CAEC.ErrorCount then
    local errorItems = CAEC.ErrorItems

    Events.OnGameStart.Add(function()
      local itemList = ""

      for itemName, item in pairs(errorItems) do
        local mod = item:getModID()
        itemList = itemList .. string.format(" - %s: %s\n", mod, itemName)
      end

      CAEC.ErrorItems = {}

      local suffix = itemList == ""
          and "Check the logs to see which mods cause this message to show up. "
          or string.format("The following items trigger an error when created:\n\n%s\n", itemList)

      error(
        string.format(
          "\n--- [CAExtendedCategories]---\nIf you're seeing this error, one or more items failed to be instantiated. This is NOT an issue with my mod (Extended Categories). These errors can safely be ignored, unfortunately there is no way to suppress them.\n\n%sPlease report these issues to the mod authors.\n",
          suffix)
      )
    end)
  end
end

---@param trigger string
function CAEC.CategorizeAllItems(trigger)
  Debug.log("CATEGORIZING ALL ITEMS..." .. (trigger and (" (triggered by " .. trigger .. ")") or ""))

  local items = getAllItems()
  local total = items:size()

  local categorizedStatic = 0
  local categorizedInstance = 0

  for i = 0, total - 1 do
    local item = items:get(i)
    local category, instanceSpecific = CAEC.CategorizeItem(item)

    if category then
      item:DoParam("DisplayCategory", category)

      if instanceSpecific then
        categorizedStatic = categorizedStatic + 1
      else
        categorizedInstance = categorizedInstance + 1
      end
    end
  end
end

---@param categorizers ArrayList<fun(item:Item, instance:InventoryItem?): string?, boolean?>>
---@param item Item
---@param instance InventoryItem|nil
---@return string|nil, boolean
local function DoCategorize(categorizers, item, instance)
  local category = nil
  ---@type boolean|nil
  local instanceSpecific = false

  local count = categorizers:size()
  local index = 0

  while category == nil do
    if index >= count then break end
    local categorizer = categorizers:get(index)
    category, instanceSpecific = categorizer(item, instance)

    index = index + 1
  end

  return category, (instanceSpecific or false)
end

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil, boolean
function CAEC.CategorizeInstance(item, instance)
  return DoCategorize(CAEC.InstanceCategorizers, item, instance)
end

---@param categorizer fun(item:Item, instance:InventoryItem?): string?, boolean?>
function CAEC.AddCategorizer(categorizer)
  initializeCategorizers()
  CAEC.ScriptCategorizers:add(categorizer)
  Debug.log("Added new categorizer. Total: " .. tostring(CAEC.ScriptCategorizers:size()))
end

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil, boolean
function CAEC.CategorizeItem(item, instance)
  local itemName = item:getFullName();

  ---@type string|nil
  local category = CAEC.ItemTweaks[itemName] or CAEC.StaticCategories[itemName];

  if NONE == category then
    return nil, false
  end

  local instanceSpecific = CAEC.InstanceSpecific[itemName] or false

  if not category then
    local categorizers = instanceSpecific and CAEC.InstanceCategorizers or CAEC.ScriptCategorizers
    local resolved = Utils.CreateInstanceIfNeeded(item, instance)

    if not resolved then
      CAEC.ErrorItems[itemName] = item
      return nil, false
    end

    category, instanceSpecific = DoCategorize(categorizers, item, resolved)

    if instanceSpecific then
      CAEC.InstanceSpecific[itemName] = true
    else
      CAEC.ItemTweaks[itemName] = category or NONE
    end
  end

  return category, instanceSpecific
end

---@param items ArrayList<InventoryItem>
---@param trigger string|nil
function CAEC.UpdateInstanceItems(items, trigger)
  CAEC.UpdateStart()
  Debug.log("trigger: " .. (trigger or "N/A"), "UpdateInstanceItems")
  local total = items:size()


  for i = 0, total - 1 do
    local instance = items:get(i)
    local item = instance:getScriptItem()
    local itemName = item:getFullName()
    local instanceName = instance:getName()

    --- @type string|nil
    local category = CAEC.ItemTweaks[itemName] or CAEC.StaticCategories[itemName];
    local instanceSpecific = CAEC.InstanceSpecific[itemName] or false

    Debug.log(
    string.format("Processing instance: %s (item: %s) - instanceSpecific: %s, staticCategory: %s",
      instanceName,
      itemName,
      tostring(instanceSpecific),
      tostring(category)
    ), "UpdateInstanceItems")

    if nil == category or instanceSpecific then
      category = CAEC.CategorizeItem(item, instance)

      if category and category ~= NONE then
        Debug.log(string.format("Setting category for %s -> %s", instanceName, category), "UpdateInstanceItems")
        instance:setDisplayCategory(category)
      end
    end
  end
end

---@param instance any
---@param categorizer fun(item: Item, instance: (InventoryItem|InventoryItem?)): string|nil, boolean?
---@param trigger string|nil
function CAEC.UpdateInstanceItem(instance, categorizer, trigger)
  if not instance or not instanceof(instance, "InventoryItem") then
    return
  end

  ---@cast instance InventoryItem
  Debug.log("Trigger: " .. trigger, "UpdateInstanceItem", Debug.Level.Error)

  local category = categorizer(instance:getScriptItem(), instance)

  if category and category ~= NONE then
    instance:setDisplayCategory(category)
  end
end

---@param inventory ItemContainer
---@param trigger string
function CAEC.CategorizeItemContainer(inventory, trigger)
  local items = inventory:getAllEvalRecurse(isDynamicItem)

  if items:isEmpty() then
    return
  end

  CAEC.UpdateInstanceItems(items, trigger)
  items:clear()
end

---@param containerItem nil|any
function CAEC.OnContainerUpdate(containerItem)
  if not containerItem then return end

  ---@type ItemContainer|nil
  local container = nil

  if instanceof(containerItem, "InventoryItem") then
    ---@cast containerItem InventoryItem
    container = containerItem:getContainer()
  elseif instanceof(containerItem, "ItemContainer") then
    ---@cast containerItem ItemContainer
    container = containerItem
  end

  if container then
    CAEC.CategorizeItemContainer(container, "OnContainerUpdate")
    CAEC.UpdateEnd()
  end
end

return CAEC
