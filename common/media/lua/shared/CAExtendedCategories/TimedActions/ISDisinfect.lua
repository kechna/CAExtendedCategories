require "TimedActions/ISDisinfect"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISDisinfect.complete

function ISDisinfect:complete()
  local result = defaultCallback(self)

  if self.alcohol:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.alcohol, "FluidContainer", "ISDisinfect:complete")
  end

  return result
end
