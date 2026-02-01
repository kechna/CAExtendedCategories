local Debug = require("CAExtendedCategories/CAEC_Debug")
local CAEC_Client = require("CAExtendedCategories/CAEC_Client")

Events.OnGameStart.Add(function()
  Debug.log("client:OnGameStart", "CAEC_ClientEvents")

  CAEC_Client.CategorizePlayerInventory(getPlayer())
end)
