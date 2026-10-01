local ModManagerCompat = require("CAExtendedCategories/Compatibility/CAEC_ModManager")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local OptionLock = {}

--- Pin `tbl[key]` to `value`: the raw key is removed and an existing metatable is extended, so every read returns
--- `value` and every write to `key` is ignored. Other keys behave as before.
---@param tbl   table
---@param key   string
---@param value any
function OptionLock.pinValue(tbl, key, value)
  rawset(tbl, key, nil)

  local meta = getmetatable(tbl) or {}
  local index = meta.__index
  local newIndex = meta.__newindex

  meta.__index = function (t, k)
    if k == key then return value end
    if type(index) == "function" then return index(t, k) end
    if type(index) == "table" then return index[k] end
    return nil
  end

  meta.__newindex = function (t, k, v)
    if k == key then return end
    if newIndex then return newIndex(t, k, v) end
    rawset(t, k, v)
  end

  setmetatable(tbl, meta)
end

---@param modOptionsId    string
---@param optionId        string
---@param value           any
---@param descriptionKey? string
---@return table | nil option
function OptionLock.lockModOption(modOptionsId, optionId, value, descriptionKey)
  local options = PZAPI and PZAPI.ModOptions and PZAPI.ModOptions:getOptions(modOptionsId)
  local option = options and options:getOption(optionId)

  if not option then
    Debug.log(string.format("Mod option %s.%s not found, skipping lock", modOptionsId, optionId), "OptionLock")
    return nil
  end

  OptionLock.pinValue(option, "value", value)

  if descriptionKey then
    for i, entry in ipairs(options.data) do
      if entry == option then
        table.insert(options.data, i, {
          type = "description",
          text = "<RGB:1,0.6,0.3> " .. getText(descriptionKey)
        })
        break
      end
    end
  end

  option.isEnabled = false

  ModManagerCompat.lockOption(option)

  Debug.log(string.format("Mod option %s.%s locked to %s", modOptionsId, optionId, tostring(value)), "OptionLock")

  return option
end

return OptionLock
