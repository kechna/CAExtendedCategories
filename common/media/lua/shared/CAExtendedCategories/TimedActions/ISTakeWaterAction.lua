require "TimedActions/ISTakeWaterAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISTakeWaterAction.complete

function ISTakeWaterAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISTakeWaterAction:complete")

  return result
end
