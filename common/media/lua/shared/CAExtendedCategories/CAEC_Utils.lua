local Debug = require("CAExtendedCategories/CAEC_Debug")

local Utils = {}

---@type table<string, InventoryItem>
local instanceCache = {}

local activatedMods = nil

---@param search  string
---@param subject string
---@return boolean
function Utils.StartsWith(search, subject)
  return subject:sub(1, search:len()) == search
end

---@param search  string
---@param subject string
---@return boolean
function Utils.EndsWith(search, subject)
  return subject:sub(-search:len()) == search
end

---@param item Item
---@param tags ItemTag[]
---@return boolean
function Utils.HasAnyTag(item, tags)
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

---@param item     Item
---@param instance InventoryItem | nil
---@return InventoryItem | nil
function Utils.CreateInstanceIfNeeded(item, instance)
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

function Utils.RemoveTemporaryInstances()
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

---@param tag          string
---@param categorizeFn fun(item: Item, instance: InventoryItem?): string | nil
---@param validateFn   fun(item: Item, instance: InventoryItem?): boolean
---@return fun(item: Item, instance: InventoryItem?): string | nil
function Utils.CreateCategorizer(tag, categorizeFn, validateFn)
  ---@param item     Item
  ---@param instance InventoryItem?
  ---@return string | nil
  return function (item, instance)
    if not validateFn(item, instance) then
      return nil
    end

    local category = categorizeFn(item, instance)

    if not category then
      Debug.log("---> no category found for item: " .. item:getName(), tag)
    end
  end
end

---@param modId string
---@return boolean
function Utils.ModIsActive(modId)
  activatedMods = activatedMods or getActivatedMods()

  return activatedMods:contains(modId) or activatedMods:contains("\\" .. modId)
end

return Utils
