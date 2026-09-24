require "TimedActions/ISEatFoodAction"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISEatFoodAction.complete

function ISEatFoodAction:complete()
  local result = defaultCallback(self)

  if not instanceof(self.item, "InventoryItem") then
    return result
  end

  local inventory = self.character:getInventory()

  if inventory:contains(self.item) then
    CAEC.updateInstanceItem(self.item, "Food", "ISEatFoodAction:complete")
  end

  return result
end
