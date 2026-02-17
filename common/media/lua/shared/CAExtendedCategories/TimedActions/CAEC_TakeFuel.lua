require "TimedActions/ISTakeFuel"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISTakeFuel.complete

function ISTakeFuel:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.petrolCan, Categorizers.FluidContainer, "ISTakeFuel:complete")

  return result
end
