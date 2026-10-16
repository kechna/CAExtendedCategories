require "TimedActions/Animals/ISHutchCleanFloor"

local CAEC = require("CAExtendedCategories/CAEC")

ISHutchCleanFloor._caecComplete = ISHutchCleanFloor._caecComplete or ISHutchCleanFloor.complete

local defaultCallback = ISHutchCleanFloor._caecComplete

function ISHutchCleanFloor:complete()
  local result = defaultCallback(self)

  if self.water then
    CAEC.updateInstanceItem(self.water, "FluidContainer", "ISHutchCleanFloor:complete")
  end

  if self.bleach then
    CAEC.updateInstanceItem(self.bleach, "FluidContainer", "ISHutchCleanFloor:complete")
  end

  return result
end
