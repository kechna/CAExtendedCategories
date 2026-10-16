require "TimedActions/ISTakeWaterAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISTakeWaterAction._caecComplete = ISTakeWaterAction._caecComplete or ISTakeWaterAction.complete

local defaultCallback = ISTakeWaterAction._caecComplete

function ISTakeWaterAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISTakeWaterAction:complete")

  return result
end
