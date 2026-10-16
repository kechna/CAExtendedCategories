require "TimedActions/ISDyeHair"

local CAEC = require("CAExtendedCategories/CAEC")

ISDyeHair._caecComplete = ISDyeHair._caecComplete or ISDyeHair.complete

local defaultCallback = ISDyeHair._caecComplete

function ISDyeHair:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.hairDye, "FluidContainer", "ISDyeHair:complete")

  return result
end
