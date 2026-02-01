local CAEC = require("CAExtendedCategories/CAEC")

local CAEC_Client = {}

---@param player IsoPlayer
function CAEC_Client.CategorizePlayerInventory(player)
  local inventory = player:getInventory()

  CAEC.CategorizeItemContainer(inventory, "CAEC_Client.CategorizePlayerInventory")
  CAEC.UpdateEnd()
end

---@param player IsoPlayer
function CAEC_Client.CategorizeNearbyInventories(player)
  local containers = ISInventoryPaneContextMenu.getContainers(player);

  if not containers then
    return
  end

  for i = 0, containers:size() - 1 do
    local container = containers:get(i)
    CAEC.CategorizeItemContainer(container, "CAEC_Client.CategorizeNearbyInventories")
  end
  CAEC.UpdateEnd()
end

return CAEC_Client
