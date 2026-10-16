require "TimedActions/ISDrinkFluidAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISDrinkFluidAction._caecComplete = ISDrinkFluidAction._caecComplete or ISDrinkFluidAction.complete

local defaultCallback = ISDrinkFluidAction._caecComplete

function ISDrinkFluidAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISDrinkFluidAction:complete")

  return result
end
