require "TimedActions/ISDumpWaterAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISDumpWaterAction.complete

function ISDumpWaterAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISDumpWaterAction:complete")

  return result
end
