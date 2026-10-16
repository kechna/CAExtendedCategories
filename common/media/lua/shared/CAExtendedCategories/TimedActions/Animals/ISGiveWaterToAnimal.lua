require "TimedActions/Animals/ISGiveWaterToAnimal"

local CAEC = require("CAExtendedCategories/CAEC")

ISGiveWaterToAnimal._caecComplete = ISGiveWaterToAnimal._caecComplete or ISGiveWaterToAnimal.complete

local defaultCallback = ISGiveWaterToAnimal._caecComplete

function ISGiveWaterToAnimal:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.item, "FluidContainer", "ISGiveWaterToAnimal:complete")

  return result
end
