require "TimedActions/ISAddTakeDispenserBottle"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISAddTakeDispenserBottle.complete

function ISAddTakeDispenserBottle:complete()
  local result = defaultCallback(self)
  local trigger = "ISAddTakeDispenserBottle:complete"

  if not self.bottle then
    CAEC.categorizeItemContainer(self.character:getInventory(), trigger)
  else
    CAEC.updateInstanceItem(self.bottle, "LiquidContainer", trigger)
  end

  return result
end
