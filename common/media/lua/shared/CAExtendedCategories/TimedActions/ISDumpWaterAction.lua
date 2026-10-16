require "TimedActions/ISDumpWaterAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISDumpWaterAction._caecComplete = ISDumpWaterAction._caecComplete or ISDumpWaterAction.complete

local defaultCallback = ISDumpWaterAction._caecComplete

function ISDumpWaterAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISDumpWaterAction:complete")

  return result
end
