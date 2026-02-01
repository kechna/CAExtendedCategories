require "Fluids/ISFluidEmptyAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISFluidEmptyAction.complete

function ISFluidEmptyAction:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.container:getOwner(), Categorizers.FluidContainer, "ISFluidEmptyAction:complete")

  return result
end
