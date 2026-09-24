require "TimedActions/Animals/ISGatherBloodFromAnimal"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISGatherBloodFromAnimal.complete

function ISGatherBloodFromAnimal:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.bucket, "FluidContainer", "ISGatherBloodFromAnimal:complete")

  return result
end
