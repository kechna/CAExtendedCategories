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

---@overload fun(item: Item, inventoryItem?): InventoryItem | nil
---@overload fun(item: Item, InventoryItem): InventoryItem
function Utils.createInstanceIfNeeded(item, instance)
  if instance then
    return instance
  end

  local fullName = item:getFullName()
  local temporaryInstance = instanceCache[fullName]

  if not temporaryInstance then
    local result = instanceItem(item)

    if not result then
      Debug.log(string.format("Failed to create instance for item: %s", fullName), "Utils", Debug.Level.Error)
      return nil
    end

    temporaryInstance = result
  end

  if not instanceCache[fullName] then
    instanceCache[fullName] = temporaryInstance
    instanceCount = instanceCount + 1
  end

  return temporaryInstance
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

return Utils
