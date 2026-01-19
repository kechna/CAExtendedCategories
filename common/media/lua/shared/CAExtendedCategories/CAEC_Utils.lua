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

---@param tag string
---@param categorizeFn fun(item: Item, instance: InventoryItem?): string|nil
---@param validateFn fun(item: Item, instance: InventoryItem?): boolean
---@return fun(item: Item, instance: InventoryItem?): string|nil
function Utils.CreateCategorizer(tag, categorizeFn, validateFn)
  ---@param item Item
  ---@param instance InventoryItem?
  ---@return string|nil
  return function(item, instance)
    if not validateFn(item, instance) then
      return nil
    end

    local category = categorizeFn(item, instance)

    if not category then
      Debug.log("---> no category found for item: " .. item:getName(), tag)
    end
  end
end
return Utils
