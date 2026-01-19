require "TimedActions/ISAddItemInRecipe"

local CAEC = require("CAExtendedCategories/CAEC")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISAddItemInRecipe.complete

function ISAddItemInRecipe:complete()
  local result = defaultCallback(self)

  Debug.log("> Re-categorizing item after recipe complete: " .. self.baseItem:getName())
  CAEC.UpdateInstanceItem(self.baseItem, Categorizers.AsFood)

  return result
end
