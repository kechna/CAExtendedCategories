require "TimedActions/ISWashClothing"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISWashClothing.complete

function ISWashClothing:complete()
  local result = defaultCallback(self)

  if self.item:hasComponent(ComponentType.FluidContainer) then
    CAEC.updateInstanceItem(self.item, "FluidContainer", "ISWashClothing:complete")
  end

  return result
end
