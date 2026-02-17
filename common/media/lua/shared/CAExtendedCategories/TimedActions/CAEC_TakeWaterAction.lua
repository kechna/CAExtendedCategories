require "TimedActions/ISTakeWaterAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISTakeWaterAction.complete

function ISTakeWaterAction:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.item, Categorizers.FluidContainer, "ISTakeWaterAction:complete")

  return result
end
