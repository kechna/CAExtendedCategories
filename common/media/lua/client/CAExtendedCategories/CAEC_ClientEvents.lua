local CAEC = require("CAExtendedCategories/CAEC")

local CAEC_Client = {}

---@param instance InventoryItem
---@return boolean
local predicateDynamicItem = function(instance)
  local name = instance:getScriptItem():getName()
  print("predicateDynamicItem: ", instance:getName() .. " (" .. name .. ")")
  local fluidContainer = instance:getFluidContainer()

  local tweaks = CAEC.ItemTweaks
  local instances = CAEC.InstanceSpecific

  local notTweaked = tweaks[name] == nil
  local instanceSpecific = instances[name] ~= nil

  return (fluidContainer ~= nil) or notTweaked or instanceSpecific
end

---@param inventory ItemContainer
function CAEC_Client.CategorizeAllDynamicItems(inventory)
  local items = inventory:getAllEvalRecurse(predicateDynamicItem)

  if items:isEmpty() then
    return
  end

  CAEC.CategorizeInventoryItems(items, "client:CategorizeAllDynamicItems")
  items:clear()
end

---@param player IsoPlayer
function CAEC_Client.CategorizeNearbyInventories(player)
  local containers = ISInventoryPaneContextMenu.getContainers(player);

  if not containers then
    return
  end

  for i = 0, containers:size() - 1 do
    local container = containers:get(i)
    CAEC_Client.CategorizeAllDynamicItems(container)
  end
end

---@param player IsoPlayer
function CAEC_Client.CategorizePlayerInventory(player)
  local inventory = player:getInventory()

  CAEC_Client.CategorizeAllDynamicItems(inventory)
end

--local defaultRefreshContainer = ISInventoryPane.refreshContainer


-----@param inventoryPage ISInventoryPage
--local function OnRefreshInventoryWindowContainers(inventoryPage, reason)
--  if reason ~= "buttonsAdded" then
--    return
--  end
--
--  if inventoryPage.onCharacter then
--    return
--  end
--end

---@param containerItem nil|InventoryItem
function OnContainerUpdate(containerItem)
  if not containerItem then
    return
  end

  ---@type ItemContainer|nil
  local container = containerItem:getContainer()

  if container then
    CAEC_Client.CategorizeAllDynamicItems(container)
  end
end

function initialize()
  print("[CAExtendedCategories] client:OnGameStart")
  CAEC_Client.CategorizePlayerInventory(getPlayer())

  Events.OnContainerUpdate.Add(OnContainerUpdate)
  --Events.OnRefreshInventoryWindowContainers.Add(OnRefreshInventoryWindowContainers)
end

Events.OnGameStart.Add(initialize)

print("CAExtendedCategories: client events loaded.")

return CAEC_Client

-- require("CAExtendedCategories/CAEC_ClientEvents").CategorizePlayerInventory(getPlayer())

--local item = getScriptManager():getItem("WaterBottle")
--print(item:getFluidContainer() ~= nil)
