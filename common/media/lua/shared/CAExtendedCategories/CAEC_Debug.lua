local Debug = {}

Debug.Level = {
  Debug = 1,
  Info = 2,
  Warning = 3,
  Error = 4,
  Disabled = 5
}

local function getSandboxLevel()
  local settings = SandboxVars and SandboxVars.CAExtendedCategories

  return settings and settings.LogVerbosity or nil
end

Debug.Verbosity = CAEC_Verbosity or getSandboxLevel() or Debug.Level.Error

---@param level number
---@return boolean
function Debug.isLevel(level)
  return Debug.Verbosity <= level
end

function Debug.setLevel(level)
  Debug.Verbosity = level
  CAEC_Verbosity = level
end

---@param level number?
function Debug.applySettings(level)
  if CAEC_Verbosity then return end

  Debug.Verbosity = level or Debug.Level.Error
end

---@param message string
---@param suffix  string?
function Debug.log(message, suffix, level)
  level = level or Debug.Level.Debug

  if not Debug.isLevel(level) then return end

  if suffix then
    local prefix = '[CAEC:' .. suffix .. ']'
    print(string.format("%-24s %s", prefix, message))
  else
    local prefix = '[CAEC]'
    print(string.format("%s %s", prefix, message))
  end
end

return Debug
