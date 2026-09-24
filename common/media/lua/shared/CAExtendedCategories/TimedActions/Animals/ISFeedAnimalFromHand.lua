require "TimedActions/Animals/ISFeedAnimalFromHand"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISFeedAnimalFromHand.complete

function ISFeedAnimalFromHand:complete()
  local result = defaultCallback(self)

  if self.food:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.food, "FluidContainer", "ISFeedAnimalFromHand:complete")
  else
    CAEC.updateInstanceItem(self.food, "Food", "ISFeedAnimalFromHand:complete")
  end

  return result
end
