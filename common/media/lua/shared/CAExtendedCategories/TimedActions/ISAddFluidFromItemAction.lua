require "TimedActions/ISAddFluidFromItemAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISAddFluidFromItemAction._caecComplete = ISAddFluidFromItemAction._caecComplete or ISAddFluidFromItemAction.complete

local defaultCallback = ISAddFluidFromItemAction._caecComplete

function ISAddFluidFromItemAction:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.itemFrom, "FluidContainer", "ISAddFluidFromItemAction:complete")

  return result
end
