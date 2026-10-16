require "TimedActions/ISAddTakeDispenserBottle"

local CAEC = require("CAExtendedCategories/CAEC")

ISAddTakeDispenserBottle._caecComplete = ISAddTakeDispenserBottle._caecComplete or ISAddTakeDispenserBottle.complete

local defaultCallback = ISAddTakeDispenserBottle._caecComplete

function ISAddTakeDispenserBottle:complete()
  local result = defaultCallback(self)

  -- when adding a bottle, it is removed from the inventory, so only taking one needs an update
  if not self.bottle then
    CAEC.categorizeItemContainer(self.character:getInventory(), "ISAddTakeDispenserBottle:complete")
  end

  return result
end
