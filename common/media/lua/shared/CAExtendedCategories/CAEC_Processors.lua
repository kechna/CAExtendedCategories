require "ISBaseObject"

local Debug = require("CAExtendedCategories/CAEC_Debug")

CAEC_Processors = CAEC_Processors or {}

local Processors = CAEC_Processors

---@class CAEC_HookRef
---@field name     string
---@field priority number
---@field callback fun()

---@type CAEC_HookRef[]
Processors.InitHooks = {}
---@type boolean
Processors.InitHooksSorted = false

---@class CAEC_PreprocessorRef
---@field name     string
---@field priority number
---@field callback fun(item: Item): boolean

---@type CAEC_PreprocessorRef[]
Processors.Preprocessors = {}
---@type boolean
Processors.PreprocessorsSorted = false

---@class CAEC_CategorizerRef
---@field name     string
---@field priority number
---@field callback fun(item: Item, instance: InventoryItem?): string?, boolean?

---@type CAEC_CategorizerRef[]
Processors.ScriptCategorizers = {}
---@type CAEC_CategorizerRef[]
Processors.InstanceCategorizers = {}
---@type boolean
Processors.CategorizersSorted = false
---@type table<string, fun(item: Item, instance?: InventoryItem): string?, boolean?>
Processors.CategorizersByNameCache = {}

local function sortFn(a, b)
  return a.priority < b.priority
end

---@param categorizer string
local function bootstrapCategorizer(categorizer)
  ---@type CAEC_ItemCategorizer
  local module = require("CAExtendedCategories/Categorizers/CAEC_" .. categorizer)
  local cls = module:new()
  cls:initialise()

  return (function (...)
    return cls:execute(...)
  end)
end

---@overload fun(name: string, fn: fun(), priority?: number)
function Processors.registerInitHook(name, fn, priority)
  priority = priority or 500
  table.insert(Processors.InitHooks, { name = name, priority = priority, callback = fn })
  Debug.log("Registered init hook: " .. name .. " (priority: " .. priority .. ")", "Processors")
end

---@overload fun(name: string, fn: (fun(item: Item): boolean), priority?: number)
function Processors.registerPreprocessor(name, fn, priority)
  priority = priority or 500
  table.insert(Processors.Preprocessors, { name = name, priority = priority, callback = fn })
  Debug.log("Registered preprocessor: " .. name .. " (priority: " .. priority .. ")", "Processors")
end

---@overload fun(name: string, fn: (fun(item: Item, instance?: InventoryItem): string?, bool), priority?: number, mode?: "script" | "instance")
---@overload fun(name: string, priority?: number, mode?: "script" | "instance")
function Processors.registerCategorizer(name, fn, priority, mode)
  mode = mode or "script"

  if not fn or type(fn) == "number" then
    priority = fn
    fn = nil
  end

  priority = priority or 500

  table.insert(mode == "instance" and Processors.InstanceCategorizers or Processors.ScriptCategorizers, {
    name = name,
    priority = priority,
    callback = fn or bootstrapCategorizer(name)
  })

  Debug.log(string.format("Registered categorizer: %s (mode: %s, priority: %d)", name, mode, priority), "Processors")
end

---@param name string
---@return (fun(item: Item, instance?: InventoryItem): string?, boolean?)
function Processors.getCategorizer(name)
  if nil ~= Processors.CategorizersByNameCache[name] then
    return Processors.CategorizersByNameCache[name]
  end

  for i = 1, #Processors.ScriptCategorizers do
    local categorizer = Processors.ScriptCategorizers[i]

    if categorizer.name == name then
      Processors.CategorizersByNameCache[name] = categorizer.callback
      return categorizer.callback
    end
  end

  for i = 1, #Processors.InstanceCategorizers do
    local categorizer = Processors.InstanceCategorizers[i]

    if categorizer.name == name then
      Processors.CategorizersByNameCache[name] = categorizer.callback
      return categorizer.callback
    end
  end

  Debug.log("Categorizer not found: " .. name, "Processors", Debug.Level.Warning)
  return (function (...)
    return nil, false
  end)
end

---@param name      string
---@param item      Item
---@param instance? InventoryItem | nil
---@return string? category
---@return boolean? instanceSpecific
function Processors.categorizeWith(name, item, instance)
  local categorizer = Processors.getCategorizer(name)

  return categorizer(item, instance)
end
function Processors.getInitHooks()
  if not Processors.InitHooksSorted then table.sort(Processors.InitHooks, sortFn) end

  return Processors.InitHooks
end

function Processors.getPreprocessors()
  if not Processors.PreprocessorsSorted then table.sort(Processors.Preprocessors, sortFn) end

  return Processors.Preprocessors
end

---@param mode "script" | "instance"
function Processors.getCategorizers(mode)
  if not Processors.CategorizersSorted then
    table.sort(Processors.ScriptCategorizers, sortFn)
    table.sort(Processors.InstanceCategorizers, sortFn)
  end

  return mode == "instance" and Processors.InstanceCategorizers or Processors.ScriptCategorizers
end

CAEC_Processors = Processors

return Processors
