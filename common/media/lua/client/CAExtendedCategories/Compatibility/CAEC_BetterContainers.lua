local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local OptionLock = require("CAExtendedCategories/Compatibility/CAEC_OptionLock")

-- better containers has an option that changes mod categories which is enabled by default, so force it off
if not Utils.modIsActive("EURY_CONTAINERS") then return end

local OPTION_ID = "showAdvancedDisplayCategories"

local ok, BCOptions = pcall(require, "BetterContainers/_Options")

if not ok or type(BCOptions) ~= "table" then
  Debug.log("BetterContainers/_Options not found, skipping compatibility code", "BetterContainers")
  return
end

-- Better Containers copies the ModOption value into this table in its own applyOptions(), which runs on
-- OnMainMenuEnter and every time the options are applied, so pin it there too.
OptionLock.pinValue(BCOptions, OPTION_ID, false)

local option = OptionLock.lockModOption(
  "BetterContainers", OPTION_ID, false, "IGUI_CAEC_Options_betterContainersDisabled"
)
