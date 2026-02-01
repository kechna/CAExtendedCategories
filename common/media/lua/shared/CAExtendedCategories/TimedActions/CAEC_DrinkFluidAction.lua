require "TimedActions/ISDrinkFluidAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISDrinkFluidAction.complete

function ISDrinkFluidAction:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.item, Categorizers.FluidContainer, "ISDrinkFluidAction:complete")

  return result
end
