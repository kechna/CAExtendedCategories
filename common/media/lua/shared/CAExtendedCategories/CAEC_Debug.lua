local Debug = {}

Debug.Level = {
  Debug = 1,
  Info = 2,
  Warning = 3,
  Error = 4,
  Disabled = 5
}

CAEC_Verbosity = CAEC_Verbosity or SandboxVars.CAExtendedCategories.LogVerbosity or Debug.Level.Info

Debug.Verbosity = CAEC_Verbosity

---@param level number
---@return boolean
function Debug.isLevel(level)
  return Debug.Verbosity <= level
end

function Debug.setLevel(level)
  Debug.Verbosity = level
  CAEC_Verbosity = level
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
