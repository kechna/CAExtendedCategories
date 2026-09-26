require "TimedActions/ISClothingExtraAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISClothingExtraAction.createItemNew

function ISClothingExtraAction:createItemNew(item, newItem)
  local result = defaultCallback(self, item, newItem)

  ---@diagnostic disable-next-line: unnecessary-if
  if newItem:getFluidContainer() and item:getFluidContainer() then
    CAEC.updateInstanceItem(newItem, "FluidContainer", "ISClothingExtraAction:createItemNew")
  end

  return result
end
