require "TimedActions/ISDrinkFluidAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local defaultCallback = ISDrinkFluidAction.complete

function ISDrinkFluidAction:complete()
  local result = defaultCallback(self)

  Debug.log("ISDrinkFluidAction:complete")
  CAEC.UpdateInstanceItem(self.item, Categorizers.AsFluidContainer)

  return result
end
