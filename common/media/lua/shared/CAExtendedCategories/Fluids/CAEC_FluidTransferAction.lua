require "Fluids/ISFluidTransferAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISFluidTransferAction._caecComplete = ISFluidTransferAction._caecComplete or ISFluidTransferAction.complete

local defaultCallback = ISFluidTransferAction._caecComplete

function ISFluidTransferAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.sourceOwner, "FluidContainer", "ISFluidTransferAction:complete")
  CAEC.updateInstanceItem(self.targetOwner, "FluidContainer", "ISFluidTransferAction:complete")

  return result
end
