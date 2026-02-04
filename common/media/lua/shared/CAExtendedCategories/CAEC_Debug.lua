local Debug = {}

Debug.Level = {
  Debug = 0,
  Info = 1,
  Warning = 2,
  Error = 3,
  Disabled = 4,
}

Debug.Verbosity = Debug.Level.Warning

---@param level number
---@return boolean
function Debug.isLevel(level)
  return Debug.Verbosity <= level
end

---@param message string
---@param suffix string?
function Debug.log(message, suffix, level)
  level = level or Debug.Level.Debug

  if not Debug.isLevel(level) then return end

  if suffix then
    local prefix = '[CAEC:' .. suffix .. ']'
    print(string.format("%-24s %s", prefix, message));
  else
    local prefix = '[CAEC]'
    print(string.format("%s %s", prefix, message));
  end
end

return Debug
