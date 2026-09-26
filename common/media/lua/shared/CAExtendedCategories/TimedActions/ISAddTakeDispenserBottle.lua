require "TimedActions/ISAddTakeDispenserBottle"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISAddTakeDispenserBottle.complete

function ISAddTakeDispenserBottle:complete()
  local result = defaultCallback(self)

  -- when adding a bottle, it is removed from the inventory, so only taking one needs an update
  if not self.bottle then
    CAEC.categorizeItemContainer(self.character:getInventory(), "ISAddTakeDispenserBottle:complete")
  end

  return result
end
