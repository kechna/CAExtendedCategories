require "TimedActions/ISTakeFuel"

local CAEC = require("CAExtendedCategories/CAEC")

ISTakeFuel._caecComplete = ISTakeFuel._caecComplete or ISTakeFuel.complete

local defaultCallback = ISTakeFuel._caecComplete

function ISTakeFuel:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.petrolCan, "FluidContainer", "ISTakeFuel:complete")

  return result
end
