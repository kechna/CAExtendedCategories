require "TimedActions/ISPutOutFire"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISPutOutFire.complete

function ISPutOutFire:complete()
  local result = defaultCallback(self)

  if self.item:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.item, "FluidContainer", "ISPutOutFire:complete")
  end

  return result
end
