local CAEC = require("CAExtendedCategories/CAEC")

local CAEC_Client = {}

---@param player IsoPlayer
function CAEC_Client.categorizePlayerInventory(player)
  local inventory = player:getInventory()

  CAEC.categorizeItemContainer(inventory, "CAEC_Client.categorizePlayerInventory")
end

---@param player IsoPlayer
function CAEC_Client.categorizeNearbyInventories(player)
  local containers = ISInventoryPaneContextMenu.getContainers(player)

  if not containers then
    return
  end

  for i = 0, containers:size() - 1 do
    local container = containers:get(i)
    CAEC.categorizeItemContainer(container, "CAEC_Client.categorizeNearbyInventories")
  end
end

return CAEC_Client
