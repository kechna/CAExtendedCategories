local CAEC = require("CAExtendedCategories/CAEC")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local CAEC_Client = {}

---@param instance InventoryItem
---@return boolean
local predicateDynamicItem = function(instance)
  if instance:isFluidContainer() then
    return true
  end

  local name = instance:getScriptItem():getName()

  return CAEC.InstanceSpecific[name] == true or CAEC.ItemTweaks[name] == nil
end
---@param inventory ItemContainer
---@param trigger string
function CAEC_Client.CategorizeDynamicItems(inventory, trigger)
  local items = inventory:getAllEvalRecurse(predicateDynamicItem)

  if items:isEmpty() then
    Debug.log("No dynamic items found in inventory " .. trigger, "CategorizeDynamicItems")
    return
  end

  CAEC.UpdateInstanceItems(items, trigger)
  items:clear()
end

---@param player IsoPlayer
function CAEC_Client.CategorizePlayerInventory(player)
  local inventory = player:getInventory()

  CAEC_Client.CategorizeDynamicItems(inventory, "CAEC_Client.CategorizePlayerInventory")
end

---@param containerItem nil|any
function CAEC_Client.OnContainerUpdate(containerItem)
  Debug.log("client:OnContainerUpdate", "DYNAMIC")
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
    CAEC_Client.CategorizeDynamicItems(container, "DYNAMIC:OnContainerUpdate")
  end
end

---@param player IsoPlayer
function CAEC_Client.CategorizeNearbyInventories(player)
  local containers = ISInventoryPaneContextMenu.getContainers(player);

  if not containers then
    return
  end

  for i = 0, containers:size() - 1 do
    local container = containers:get(i)
    CAEC_Client.CategorizeDynamicItems(container, "CAEC_Client.CategorizeNearbyInventories")
  end
end

return CAEC_Client

-- require("CAExtendedCategories/CAEC").Reload()
-- require("CAExtendedCategories/CAEC_Client").CategorizePlayerInventory(getPlayer())
