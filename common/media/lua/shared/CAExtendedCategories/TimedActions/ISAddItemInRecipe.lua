require "TimedActions/ISAddItemInRecipe"

local CAEC = require("CAExtendedCategories/CAEC")

ISAddItemInRecipe._caecComplete = ISAddItemInRecipe._caecComplete or ISAddItemInRecipe.complete

local defaultCallback = ISAddItemInRecipe._caecComplete

function ISAddItemInRecipe:complete()
  local result = defaultCallback(self)

  CAEC.updateInstanceItem(self.baseItem, "Food", "ISAddItemInRecipe:complete")

  return result
end
