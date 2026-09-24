require "TimedActions/Animals/ISGiveWaterToAnimal"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISGiveWaterToAnimal.complete

function ISGiveWaterToAnimal:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISGiveWaterToAnimal:complete")

  return result
end
