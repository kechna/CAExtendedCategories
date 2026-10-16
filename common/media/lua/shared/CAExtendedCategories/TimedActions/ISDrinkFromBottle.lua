require "TimedActions/ISDrinkFromBottle"

local CAEC = require("CAExtendedCategories/CAEC")

ISDrinkFromBottle._caecComplete = ISDrinkFromBottle._caecComplete or ISDrinkFromBottle.complete

local defaultCallback = ISDrinkFromBottle._caecComplete

function ISDrinkFromBottle:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISDrinkFromBottle:complete")

  return result
end
