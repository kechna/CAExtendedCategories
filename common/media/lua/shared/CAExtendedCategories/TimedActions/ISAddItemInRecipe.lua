require "TimedActions/ISAddItemInRecipe"

local CAEC = require("CAExtendedCategories/CAEC")

local defaultCallback = ISAddItemInRecipe.complete

function ISAddItemInRecipe:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.baseItem, "Food", "ISAddItemInRecipe:complete")

  return result
end
