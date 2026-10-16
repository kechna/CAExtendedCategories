require "TimedActions/ISPutOutFire"

local CAEC = require("CAExtendedCategories/CAEC")

ISPutOutFire._caecComplete = ISPutOutFire._caecComplete or ISPutOutFire.complete

local defaultCallback = ISPutOutFire._caecComplete

function ISPutOutFire:complete()
  local result = defaultCallback(self)

  if self.item:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.item, "FluidContainer", "ISPutOutFire:complete")
  end

  return result
end
