require "Fluids/ISFluidEmptyAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISFluidEmptyAction._caecComplete = ISFluidEmptyAction._caecComplete or ISFluidEmptyAction.complete

local defaultCallback = ISFluidEmptyAction._caecComplete

function ISFluidEmptyAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.container:getOwner(), "FluidContainer", "ISFluidEmptyAction:complete")

  return result
end
