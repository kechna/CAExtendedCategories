require "Fluids/ISFluidTransferAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISFluidTransferAction.complete

function ISFluidTransferAction:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.sourceOwner, Categorizers.FluidContainer, "ISFluidTransferAction:complete")
  CAEC.UpdateInstanceItem(self.targetOwner, Categorizers.FluidContainer, "ISFluidTransferAction:complete")

  return result
end
