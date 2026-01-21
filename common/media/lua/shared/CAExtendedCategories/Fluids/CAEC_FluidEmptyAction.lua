require "Fluids/ISFluidEmptyAction"

local CAEC = require("CAExtendedCategories/CAEC")
local Categorizers = require("CAExtendedCategories/CAEC_Categorizers")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local defaultCallback = ISFluidEmptyAction.complete

function ISFluidEmptyAction:complete()
  local result = defaultCallback(self)

  local owner = self.container:getOwner()

  if instanceof(owner, "InventoryItem") then
    ---@cast owner InventoryItem
    Debug.log("ISFluidEmptyAction:complete")
    CAEC.UpdateInstanceItem(owner, Categorizers.AsFluidContainer)
  end

  return result
end
