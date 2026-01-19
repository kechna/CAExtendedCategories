require "TimedActions/ISFluidTransferAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISFluidTransferAction.complete

function ISFluidTransferAction:complete()
  local result = defaultCallback(self)

  Debug.log("ISFluidTransferAction:complete")

  if instanceof(self.sourceOwner, "InventoryItem") then
    ---@cast self.sourceOwner InventoryItem
    CAEC.UpdateInstanceItem(self.sourceOwner, Categorizers.AsFluidContainer)
  end

  if instanceof(self.targetOwner, "InventoryItem") then
    ---@cast self.targetOwner InventoryItem
    CAEC.UpdateInstanceItem(self.targetOwner, Categorizers.AsFluidContainer)
  end

  return result
end
