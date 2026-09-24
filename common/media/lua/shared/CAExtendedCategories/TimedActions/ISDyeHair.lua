require "TimedActions/ISDyeHair"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISDyeHair.complete

function ISDyeHair:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.hairDye, "FluidContainer", "ISDyeHair:complete")

  return result
end
