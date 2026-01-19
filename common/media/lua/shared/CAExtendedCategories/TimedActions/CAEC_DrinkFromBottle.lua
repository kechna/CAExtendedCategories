require "TimedActions/ISDrinkFromBottle"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local defaultCallback = ISDrinkFromBottle.complete

function ISDrinkFromBottle:complete()
  local result = defaultCallback(self)

  Debug.log("ISDrinkFromBottle:complete")
  CAEC.UpdateInstanceItem(self.item, Categorizers.AsFluidContainer)

  return result
end
