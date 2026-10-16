require "TimedActions/Animals/ISGatherBloodFromAnimal"

local CAEC = require("CAExtendedCategories/CAEC")

ISGatherBloodFromAnimal._caecComplete = ISGatherBloodFromAnimal._caecComplete or ISGatherBloodFromAnimal.complete

local defaultCallback = ISGatherBloodFromAnimal._caecComplete

function ISGatherBloodFromAnimal:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.bucket, "FluidContainer", "ISGatherBloodFromAnimal:complete")

  return result
end
