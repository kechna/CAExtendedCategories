local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local NONE = "__NONE__"
local CAEC = {}

-- Static mapping for items that need specific categories
---@type table<string, string>
CAEC.StaticCategories = {
  Brochure = "LiteratureBrochure",
  Flier = "LiteratureFlier",
  TwigsBundle = "Material",
  ComicBook = "LiteratureComic",
  ComicBook_Retail = "LiteratureComic",
  RPGmanual = "LiteratureRpgManual",
}

---@type boolean
CAEC.Initialized = false;

---@type ArrayList<fun(item:Item, instance:InventoryItem?): string?, boolean?>>
CAEC.ScriptCategorizers = ArrayList.new();

---@type ArrayList<fun(item:Item, instance:InventoryItem): string?, boolean?>>
CAEC.InstanceCategorizers = ArrayList.new();

CAEC.AddedCategories = {};
CAEC.InstanceSpecific = {};
CAEC.ItemTweaks = {};

CAEC_Global = CAEC_Global or {}

local function initializeCategorizers()
  if CAEC.Initialized then
    Debug.log("Categorizers already initialized.")
    return
  end

  CAEC.ScriptCategorizers:add(Categorizers.ByLootType)
  CAEC.ScriptCategorizers:add(Categorizers.AsClothing)
  CAEC.ScriptCategorizers:add(Categorizers.AsLiterature)
  CAEC.ScriptCategorizers:add(Categorizers.AsWeapon)
  CAEC.ScriptCategorizers:add(CAEC.TryCategorizeInstanceSpecific)
  CAEC.ScriptCategorizers:add(Categorizers.ByRecipe)

  -- instance
  CAEC.InstanceCategorizers:add(Categorizers.AsFood)
  CAEC.InstanceCategorizers:add(Categorizers.AsFluidContainer)

  Debug.log("[CAExtendedCategories] Categorizers initialized. Script: " .. tostring(CAEC.ScriptCategorizers:size()) ..
    ", Instance: " .. tostring(CAEC.InstanceCategorizers:size()))

  CAEC.Initialized = true
end

---@param trigger string?
function CAEC.Initialize(trigger)
  CAEC.UpdateStart()
  initializeCategorizers()
  CAEC.CategorizeAllItems(trigger or "CAEC.Initialize")
  CAEC.UpdateEnd()
end

function CAEC.LogCategories(total, categorizedStatic, categorizedInstance)
  if not Debug.VerboseLogging then
    return
  end

  Debug.log("=== Added Categories ===")
  Debug.log("Total items: " .. tostring(total))
  Debug.log("Statically categorized items: " .. tostring(categorizedStatic or "?"))
  Debug.log("Instance specific items: " .. tostring(categorizedInstance or "?"))
  Debug.log("------------------------")

  local string1 = ""
  for str1, _ in pairs(CAEC.AddedCategories) do
    string1 = string1 .. str1 .. ", "
  end

  Debug.log("Categories Added:")
  Debug.log(string1)
  Debug.log("========================")
end

function CAEC.UpdateEnd()
  local ToSave = {}

  ToSave.Initialized = CAEC.Initialized
  ToSave.AddedCategories = CAEC.AddedCategories
  ToSave.InstanceCategorizers = CAEC.InstanceCategorizers
  ToSave.InstanceSpecific = CAEC.InstanceSpecific
  ToSave.ItemTweaks = CAEC.ItemTweaks
  ToSave.ScriptCategorizers = CAEC.ScriptCategorizers

  CAEC_Global = ToSave
end

function CAEC.UpdateStart()
  local saved = CAEC_Global or {}

  CAEC.AddedCategories = saved.AddedCategories or {}
  CAEC.Initialized = saved.Initialized or false
  CAEC.InstanceCategorizers = saved.InstanceCategorizers or ArrayList.new()
  CAEC.InstanceSpecific = saved.InstanceSpecific or {}
  CAEC.ItemTweaks = saved.ItemTweaks or {}
  CAEC.ScriptCategorizers = saved.ScriptCategorizers or ArrayList.new()
end

---@param trigger string
function CAEC.CategorizeAllItems(trigger)
  Debug.log("CATEGORIZING ALL ITEMS..." .. (trigger and (" (triggered by " .. trigger .. ")") or ""))
  Debug.log("Total Categorizers: " .. tostring(CAEC.ScriptCategorizers:size()))

  local items = getAllItems()
  local total = items:size()

  local categorizedStatic = 0
  local categorizedInstance = 0

  for i = 0, total - 1 do
    local item = items:get(i)
    local category, instanceSpecific = CAEC.CategorizeItem(item, nil, false)

    if category then
      item:DoParam("DisplayCategory", category)

      if instanceSpecific then
        categorizedStatic = categorizedStatic + 1
      else
        categorizedInstance = categorizedInstance + 1
      end
    end
  end

  CAEC.LogCategories(total, categorizedStatic, categorizedInstance)
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
function CAEC.TryCategorizeInstanceSpecific(item, instance)
  local resolved, cleanup = Utils.CreateInstanceIfNeeded(item, instance)
  local category, instanceSpecific = DoCategorize(CAEC.InstanceCategorizers, item, resolved)
  cleanup()
  return category, instanceSpecific
end

---@param categorizer fun(item:Item, instance:InventoryItem?): string?, boolean?>
function CAEC.AddCategorizer(categorizer)
  initializeCategorizers()
  CAEC.ScriptCategorizers:add(categorizer)
  Debug.log("Added new categorizer. Total: " .. tostring(CAEC.ScriptCategorizers:size()))
end

---@param item Item
---@param instance InventoryItem|nil
---@param additionalLogging boolean|nil
---@return string|nil, boolean
function CAEC.CategorizeItem(item, instance, additionalLogging)
  local itemName = item:getName();

  ---@type string|nil
  local category = CAEC.ItemTweaks[itemName] or CAEC.StaticCategories[itemName];

  if NONE == category then
    return nil, false
  end

  local instanceSpecific = CAEC.InstanceSpecific[itemName] or false

  if not category then
    local categorizers = instanceSpecific and CAEC.InstanceCategorizers or CAEC.ScriptCategorizers

    category, instanceSpecific = DoCategorize(categorizers, item, instance)

    if instanceSpecific then
      if additionalLogging then Debug.log("    > [instance-specific]: " .. itemName) end
      CAEC.InstanceSpecific[itemName] = true
    else
      if additionalLogging then Debug.log("    > Caching category: " .. itemName) end
      CAEC.ItemTweaks[itemName] = category or NONE
    end
  end

  if category then
    CAEC.AddedCategories[category] = true
  elseif additionalLogging then
    Debug.report(itemName, item, instance)
  end

  return category, instanceSpecific
end

---@param items ArrayList<InventoryItem>
---@param trigger string|nil
function CAEC.UpdateInstanceItems(items, trigger)
  Debug.log("trigger: " .. (trigger or "N/A"), "UpdateInstanceItems")
  CAEC.UpdateStart()

  local cache = {}
  local total = items:size()

  local categorizedInstance = 0
  local categorizedStatic = 0

  for i = 0, total - 1 do
    local instance = items:get(i)
    local item = instance:getScriptItem()
    local instanceName = instance:getName()
    local cachedCategory = cache[instanceName]

    local category = cachedCategory
    local instanceSpecific = false

    Debug.log("> Categorizing: " .. instanceName .. " (" .. item:getName() .. ")", "UpdateInstanceItems")
    if nil == cachedCategory then
      category, instanceSpecific = CAEC.CategorizeItem(item, instance, true)
    else
      Debug.log("> Using cached category for " .. instanceName .. " -> " .. (cachedCategory), "UpdateInstanceItems")
    end

    if category and category ~= NONE then
      instance:setDisplayCategory(category)

      if instanceSpecific then
        categorizedInstance = categorizedInstance + 1
      else
        categorizedStatic = categorizedStatic + 1
      end
    end

    if not cachedCategory and not instanceSpecific then
      cache[instanceName] = category or NONE
    end
  end

  CAEC.LogCategories(total, categorizedStatic, categorizedInstance)
  CAEC.UpdateEnd()
end

---@param instance InventoryItem
---@param categorizer fun(item: Item, instance: (InventoryItem|InventoryItem?)): string|nil, boolean?
---@return string|nil
function CAEC.UpdateInstanceItem(instance, categorizer)
  local category = categorizer(instance:getScriptItem(), instance)

  if category and category ~= NONE then
    instance:setDisplayCategory(category)
  end

  return category
end

return CAEC
