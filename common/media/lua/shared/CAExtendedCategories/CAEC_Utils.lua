local Debug = require("CAExtendedCategories/CAEC_Debug")

local Utils = {}

---@type table<string, InventoryItem>
local instanceCache = {}
-- Kahlua has no `next`, so keep count to cheaply detect an empty cache
local instanceCount = 0

local activatedMods = nil

---@param typeObj AmmoType | ItemType
---@param id      string
local function resolveType(typeObj, id)
  if not (id and typeObj and typeObj.get and ResourceLocation and ResourceLocation.of) then
    return nil
  end

  local ok, result = pcall(function () return typeObj.get(ResourceLocation.of(id)) end)

  return ok and result or nil
end

---@param search  string
---@param subject string
---@return boolean
function Utils.startsWith(search, subject)
  return subject:sub(1, search:len()) == search
end

---@param search  string
---@param subject string
---@return boolean
function Utils.endsWith(search, subject)
  return subject:sub(-search:len()) == search
end

---@param item Item
---@param tags ItemTag[] | nil
---@return boolean
function Utils.hasAnyTag(item, tags)
  if not tags or item:getTags():size() == 0 then
    return false
  end

  for i = 1, #tags do
    local tag = tags[i]

    if tag and item:hasTag(Utils.toTag(tag)) then
      return true
    end
  end

  return false
end

---@overload fun(item: Item, inventoryItem?): nil, string
---@overload fun(item: Item, inventoryItem?): InventoryItem, nil
---@overload fun(item: Item, InventoryItem): InventoryItem, nil
function Utils.createInstanceIfNeeded(item, instance)
  if instance then
    return instance, nil
  end

  local fullName = item:getFullName()
  local temporaryInstance = instanceCache[fullName]

  if not temporaryInstance then
    local errorCount = getLuaDebuggerErrorCount()
    local ok, result = pcall(instanceItem, item)

    if ok and getLuaDebuggerErrorCount() > errorCount then
      if instanceof(result, "InventoryItem") then
        result:Remove()
      end

      ok = false
      result = string.format("OnCreate %s raised an error", tostring(item:getLuaCreate()))
    end

    if not ok then
      ---@cast result string
      Debug.log(
        string.format("Failed to create instance for item: %s. Reason: %s", fullName, result), "Utils",
        Debug.Level.Error
      )
      return nil, result
    end

    ---@cast result InventoryItem
    temporaryInstance = result
  end

  if not instanceCache[fullName] then
    instanceCache[fullName] = temporaryInstance
    instanceCount = instanceCount + 1
  end

  return temporaryInstance, nil
end

--- items on the floor have their FluidContainer component moved to the IsoWorldInventoryObject
---@param instance InventoryItem
---@return FluidContainer | nil
function Utils.getFluidContainer(instance)
  return instance:getFluidContainerFromSelfOrWorldItem()
end

function Utils.removeTemporaryInstances()
  if instanceCount == 0 then
    return
  end

  local n = 0
  for _, instance in pairs(instanceCache) do
    if instanceof(instance, "InventoryItem") then
      instance:Remove()
      n = n + 1
    end
  end

  Debug.log(string.format("Removed %d temporary instances", n), "Utils")
  instanceCache = {}
  instanceCount = 0
end

---@param modId string
---@return boolean
function Utils.modIsActive(modId)
  activatedMods = activatedMods or getActivatedMods()

  return activatedMods:contains(modId) or activatedMods:contains("\\" .. modId)
end

local tagCache = {}

---@param input string | ItemTag
---@return ItemTag
function Utils.toTag(input)
  if type(input) ~= "string" then
    ---@cast input ItemTag
    return input
  end

  ---@cast input string

  local tag = tagCache[input]

  if tag == nil then
    ---@cast tag ItemTag | false
    tag = resolveType(ItemTag, input) or false
    tagCache[input] = tag
  end

  return tag
end

---@param id string
---@return AmmoType | nil
function Utils.resolveAmmoType(id)
  return resolveType(AmmoType, id)
end

local Hooks = {}

function Utils.safeRegisterHook(event, hook)
  if Hooks[event] then
    Events[event].Remove(Hooks[event])
  end

  Hooks[event] = hook
  Events[event].Add(Hooks[event])
end

return Utils
