require "Fluids/ISFluidTransferAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISFluidTransferAction.complete

function ISFluidTransferAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.sourceOwner, "FluidContainer", "ISFluidTransferAction:complete")
  CAEC.updateInstanceItem(self.targetOwner, "FluidContainer", "ISFluidTransferAction:complete")

  return result
end
