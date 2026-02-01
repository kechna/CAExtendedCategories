require "TimedActions/ISAddItemInRecipe"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISAddItemInRecipe.complete

function ISAddItemInRecipe:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.baseItem, Categorizers.Food, "ISAddItemInRecipe:complete")

  return result
end
