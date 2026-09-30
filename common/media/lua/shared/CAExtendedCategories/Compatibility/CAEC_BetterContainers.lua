local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

if not Utils.modIsActive("EURY_CONTAINERS") then return end

local BCOptions = require("BetterContainers/_Options")
local PZAPIOptions = PZAPI and PZAPI.ModOptions and PZAPI.ModOptions:getOptions("BetterContainers")

if PZAPIOptions then
  Debug.log("ModOptions found, applying compatibility code", "CAEC_BetterContainers")

  local option = PZAPIOptions:getOption("showAdvancedDisplayCategories")

  if option and option.setValue then
    option:setValue(false)
  else
    Debug.log("ModOption 'showAdvancedDisplayCategories' not found, skipping compatibility code", "CAEC_BetterContainers")
  end
else
  Debug.log("ModOptions not found, skipping compatibility code", "CAEC_BetterContainers")
end

if BCOptions then
  Debug.log("Options found, applying compatibility code", "CAEC_BetterContainers")
  BCOptions.showAdvancedDisplayCategories = false
else
  Debug.log("Options not found, skipping compatibility code", "CAEC_BetterContainers")
end
