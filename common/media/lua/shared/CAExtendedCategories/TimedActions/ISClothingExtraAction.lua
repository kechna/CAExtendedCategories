require "TimedActions/ISClothingExtraAction"

local CAEC = require("CAExtendedCategories/CAEC")

ISClothingExtraAction._caecCreateItemNew = ISClothingExtraAction._caecCreateItemNew
  or ISClothingExtraAction.createItemNew

local defaultCallback = ISClothingExtraAction._caecCreateItemNew

function ISClothingExtraAction:createItemNew(item, newItem)
  local result = defaultCallback(self, item, newItem)

  ---@diagnostic disable-next-line: unnecessary-if
  if newItem:getFluidContainer() and item:getFluidContainer() then
    CAEC.updateInstanceItem(newItem, "FluidContainer", "ISClothingExtraAction:createItemNew")
  end

  return result
end
