require "TimedActions/ISDrinkFluidAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISDrinkFluidAction.complete

function ISDrinkFluidAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISDrinkFluidAction:complete")

  return result
end
