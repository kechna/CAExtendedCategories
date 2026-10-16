require "TimedActions/Animals/ISMilkAnimal"

local CAEC = require("CAExtendedCategories/CAEC")

ISMilkAnimal._caecComplete = ISMilkAnimal._caecComplete or ISMilkAnimal.complete

local defaultCallback = ISMilkAnimal._caecComplete

function ISMilkAnimal:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.bucket, "FluidContainer", "ISMilkAnimal:complete")

  return result
end
