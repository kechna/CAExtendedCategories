local Debug = require("CAExtendedCategories/CAEC_Debug")
local CAEC = require("CAExtendedCategories/CAEC")
local CAEC_Client = require("CAExtendedCategories/CAEC_Client")

Events.OnGameStart.Add(function ()
  Debug.log("client:OnGameStart", "CAEC_ClientEvents")

  local player = getPlayer()

  CAEC_Client.categorizePlayerInventory(player)
  CAEC_Client.categorizeNearbyInventories(player)

  CAEC.updateEnd()
end)
