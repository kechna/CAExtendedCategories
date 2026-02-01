require "TimedActions/ISDrinkFromBottle"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local defaultCallback = ISDrinkFromBottle.complete

function ISDrinkFromBottle:complete()
  local result = defaultCallback(self)

  CAEC.UpdateInstanceItem(self.item, Categorizers.FluidContainer, "ISDrinkFromBottle:complete")

  return result
end
