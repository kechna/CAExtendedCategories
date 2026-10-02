require "ISUI/ISInventoryPane"

local CAEC = require("CAExtendedCategories/CAEC")
local CAEC_Client = require("CAExtendedCategories/CAEC_Client")

ISInventoryPane._caecRefreshContainer = ISInventoryPane._caecRefreshContainer or ISInventoryPane.refreshContainer

local realRefreshContainer = ISInventoryPane._caecRefreshContainer

function ISInventoryPane:refreshContainer(...)
  ---@type ItemContainer | nil
  local inventory = self.inventory

  if inventory then
    CAEC.categorizeItemContainer(inventory, "ISInventoryPane:refreshContainer", false, CAEC_Client.getBusyItems())
    CAEC.updateEnd()
  end

  return realRefreshContainer(self, ...)
end
