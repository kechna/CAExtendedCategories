require "TimedActions/Animals/ISMilkAnimal"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISMilkAnimal.complete

function ISMilkAnimal:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.bucket, "FluidContainer", "ISMilkAnimal:complete")

  return result
end
