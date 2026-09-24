require "TimedActions/ISAddFluidFromItemAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISAddFluidFromItemAction.complete

function ISAddFluidFromItemAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.itemFrom, "LiquidContainer", "ISAddFluidFromItemAction:complete")

  return result
end
