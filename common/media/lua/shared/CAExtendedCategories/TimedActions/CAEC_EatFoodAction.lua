local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local defaultCallback = ISEatFoodAction.complete

function ISEatFoodAction:complete()
  local result = defaultCallback(self)

  if self.character:getInventory():contains(self.item) then
    Debug.log("> Re-categorizing item after eating food: " .. self.item:getName())
    CAEC.UpdateInstanceItem(self.item, Categorizers.AsFood)
  else
    Debug.log("> Item fully consumed after eating: " .. self.item:getName())
  end

  return result
end
