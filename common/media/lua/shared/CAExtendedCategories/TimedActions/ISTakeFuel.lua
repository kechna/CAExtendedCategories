require "TimedActions/ISTakeFuel"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISTakeFuel.complete

function ISTakeFuel:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.petrolCan, "FluidContainer", "ISTakeFuel:complete")

  return result
end
