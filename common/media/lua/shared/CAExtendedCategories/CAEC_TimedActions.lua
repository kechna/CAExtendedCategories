local CAEC = require("CAExtendedCategories/CAEC")

---
-- Recipe cooking override
---
local defaultAddItemInRecipeComplete = ISAddItemInRecipe.complete

function ISAddItemInRecipe:complete()
  local result = defaultAddItemInRecipeComplete(self)
  print("> Re-categorizing item after recipe complete: " .. self.baseItem:getName())
  CAEC.CategorizeFood(self.baseItem:getScriptItem(), self.baseItem)
  return result
end

---
-- Eating food override (drink)
---
local defaultEatFoodActionComplete = ISEatFoodAction.complete

function ISEatFoodAction:complete()
  local result = defaultEatFoodActionComplete(self)

  if self.character:getInventory():contains(self.item) then
    print("> Re-categorizing item after eating food: ", self.item:getName())
    CAEC.CategorizeFood(self.item:getScriptItem(), self.item)
  else
    print("> Item fully consumed after eating: ", self.item:getName())
  end

  return result
end

print("CAExtendedCategories: TimedActions overrides loaded")
