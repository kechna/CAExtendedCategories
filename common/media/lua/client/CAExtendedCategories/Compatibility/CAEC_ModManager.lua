---@diagnostic disable: undefined-global
local Utils = require("CAExtendedCategories/CAEC_Utils")

local ModManagerCompat = {}

---@type table<table, boolean>
local lockedOptions = {}

--- Mark a PZAPI ModOption as locked. Mod Manager's options screen ignores `option.isEnabled`, so its controls
--- are disabled and greyed out here instead. No-op when Mod Manager isn't active.
---@param option table
function ModManagerCompat.lockOption(option)
  lockedOptions[option] = true
end

if not Utils.modIsActive("ModManager") then return ModManagerCompat end

local function lockModManagerControls()
  if not ModOptionsScreen or ModOptionsScreen._caecWrapped or not ModOptionsScreen.createOptionControls then
    return
  end

  ModOptionsScreen._caecWrapped = true

  local createOptionControls = ModOptionsScreen.createOptionControls

  ModOptionsScreen.createOptionControls = function (self, option, ...)
    local label, control = createOptionControls(self, option, ...)

    if lockedOptions[option] then
      if control then
        control.enable = false

        if control.disableOption then control:disableOption("", true) end
      end

      if label and label.setColor then label:setColor(0.5, 0.5, 0.5) end
    end

    return label, control
  end
end

Events.OnGameBoot.Add(lockModManagerControls)
Events.OnMainMenuEnter.Add(lockModManagerControls)
Events.OnGameStart.Add(lockModManagerControls)

return ModManagerCompat
