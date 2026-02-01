local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local defaultCallback = ISEatFoodAction.complete

function ISEatFoodAction:complete()
  local result = defaultCallback(self)

  if not instanceof(self.item, "InventoryItem") then
    return result
  end

  local inventory = self.character:getInventory()

  if inventory:contains(self.item) then
    CAEC.UpdateInstanceItem(self.item, Categorizers.Food, "ISEatFoodAction:complete")
  else
    Debug.log("> Item fully consumed after eating: " .. self.item:getName(), "ISEatFoodAction:complete")
  end

  return result
end
