require "TimedActions/ISDisinfect"

local CAEC = require("CAExtendedCategories/CAEC")

ISDisinfect._caecComplete = ISDisinfect._caecComplete or ISDisinfect.complete

local defaultCallback = ISDisinfect._caecComplete

function ISDisinfect:complete()
  local result = defaultCallback(self)

  if self.alcohol:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.alcohol, "FluidContainer", "ISDisinfect:complete")
  end

  return result
end
