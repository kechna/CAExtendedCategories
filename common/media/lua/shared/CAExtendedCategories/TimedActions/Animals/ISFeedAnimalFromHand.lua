require "TimedActions/Animals/ISFeedAnimalFromHand"

local CAEC = require("CAExtendedCategories/CAEC")

ISFeedAnimalFromHand._caecComplete = ISFeedAnimalFromHand._caecComplete or ISFeedAnimalFromHand.complete

local defaultCallback = ISFeedAnimalFromHand._caecComplete

function ISFeedAnimalFromHand:complete()
  local result = defaultCallback(self)

  if self.food:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.food, "FluidContainer", "ISFeedAnimalFromHand:complete")
  else
    CAEC.updateInstanceItem(self.food, "Food", "ISFeedAnimalFromHand:complete")
  end

  return result
end
