require "Fluids/ISFluidEmptyAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISFluidEmptyAction.complete

function ISFluidEmptyAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.container:getOwner(), "FluidContainer", "ISFluidEmptyAction:complete")

  return result
end
