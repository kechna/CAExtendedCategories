require "TimedActions/ISDrinkFromBottle"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISDrinkFromBottle.complete

function ISDrinkFromBottle:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISDrinkFromBottle:complete")

  return result
end
