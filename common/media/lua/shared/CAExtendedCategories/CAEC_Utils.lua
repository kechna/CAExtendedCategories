local Debug = require("CAExtendedCategories/CAEC_Debug")

local Utils = {}

---@type table<string, InventoryItem>
local instanceCache = {}

local activatedMods = nil

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
---@param tags ItemTag[]
---@return boolean
function Utils.hasAnyTag(item, tags)
  if item:getTags():size() == 0 then
    return false
  end

  for _, tag in ipairs(tags) do
    if item:hasTag(tag) then
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
  end

  return temporaryInstance
end

function Utils.removeTemporaryInstances()
  local n = 0
  for _, instance in pairs(instanceCache) do
    if instanceof(instance, "InventoryItem") then
      instance:Remove()
      n = n + 1
    end
  end

  Debug.log(string.format("Removed %d temporary instances", n), "Utils")
  instanceCache = {}
end

---@param modId string
---@return boolean
function Utils.modIsActive(modId)
  activatedMods = activatedMods or getActivatedMods()

  return activatedMods:contains(modId) or activatedMods:contains("\\" .. modId)
end

local tagCache = {}

---@param string string
---@return ItemTag
function Utils.toTag(string)
  local tag = tagCache[string]

  if tag == nil then
    tag = ItemTag.get(ResourceLocation.of(string)) or false
    tagCache[string] = tag
  end

  return tag
end

---@param typeObj AmmoType|ItemType
---@param id string
local function resolveType(typeObj, id)
    if not (id and typeObj and typeObj.get and ResourceLocation and ResourceLocation.of) then
        return nil
    end

    local ok, result = pcall(function() return typeObj.get(ResourceLocation.of(id)) end)

    return ok and result or nil
end

---@param id string
---@return AmmoType|nil
function Utils.resolveAmmoType(id)
    return resolveType(AmmoType, id)
end



return Utils
