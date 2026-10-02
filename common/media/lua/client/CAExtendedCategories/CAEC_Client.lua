local CAEC = require("CAExtendedCategories/CAEC")

local CAEC_Client = {}

---@param value any
---@param busy  table<number, boolean>
local function addBusyItem(value, busy)
  if type(value) == "table" then
    -- ISFluidContainer wrapper, as used by e.g. ISFluidTransferAction and ISFluidEmptyAction
    if value.Type == "ISFluidContainer" and value.getOwner then
      value = value:getOwner()
    else
      return
    end
  end

  if value and instanceof(value, "InventoryItem") then
    ---@cast value InventoryItem
    busy[value:getID()] = true
  end
end

--- IDs of the items the local players' current timed actions work on
---@return table<number, boolean>
function CAEC_Client.getBusyItems()
  local busy = {}
  local queues = ISTimedActionQueue and ISTimedActionQueue.queues

  if not queues then
    return busy
  end

  for i = 0, getNumActivePlayers() - 1 do
    local player = getSpecificPlayer(i)
    local queue = player and queues[player]
    local action = queue and queue.queue[1]

    if action then
      for _, value in pairs(action) do
        addBusyItem(value, busy)
      end
    end
  end

  return busy
end

---@param player IsoPlayer
function CAEC_Client.categorizePlayerInventory(player)
  local inventory = player:getInventory()

  CAEC.categorizeItemContainer(inventory, "CAEC_Client.categorizePlayerInventory", true)
end

return CAEC_Client
