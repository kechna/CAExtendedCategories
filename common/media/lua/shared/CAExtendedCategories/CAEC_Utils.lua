local Utils = {}

---@param search string
---@param subject string
---@return boolean
function Utils.StartsWith(search, subject)
  return subject:sub(1, search:len()) == search
end ---@param search string

---@param subject string
---@return boolean
function Utils.EndsWith(search, subject)
  return subject:sub(-search:len()) == search
end

---@param item Item
---@param instance InventoryItem|nil
---@return InventoryItem, fun()
function Utils.CreateInstanceIfNeeded(item, instance)
  if instance then
    return instance, function() end
  end

  local temporaryInstance = instanceItem(item:getFullName())

  return temporaryInstance, function() temporaryInstance:Remove() end
end

return Utils
