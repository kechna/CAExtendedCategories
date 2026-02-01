require "ISBaseObject"

local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_ItemCategorizer : ISBaseObject
---@field public derive fun(self: CAEC_ItemCategorizer, className: string): CAEC_ItemCategorizer
---@field public new fun(self: CAEC_ItemCategorizer): CAEC_ItemCategorizer
---@field public execute fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem?): (string|nil?, boolean?)
---@field public categorize fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem?): (string|nil?, boolean?)
---@field public validate fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem?): boolean
---@field public getVerbosity fun(self: CAEC_ItemCategorizer): number
---@field public isDebug fun(self: CAEC_ItemCategorizer): boolean
---@field public log fun(self: CAEC_ItemCategorizer, string: string, level?: number)
---@field public verbosity number
local CAEC_ItemCategorizer = ISBaseObject:derive("CAEC_ItemCategorizer")

function CAEC_ItemCategorizer:isDebug()
  return Debug.isLevel(self:getVerbosity())
end

function CAEC_ItemCategorizer:getVerbosity()
  return self.verbosity or Debug.Level.Error
end

function CAEC_ItemCategorizer:log(string, level)
  local verbosity = level or self:getVerbosity()

  if verbosity < self:getVerbosity() then return end

  Debug.log(string, self.Type, verbosity)
end

function CAEC_ItemCategorizer:categorize(item, instance)
  return nil, false
end

function CAEC_ItemCategorizer:validate(item, instance)
  return false
end

function CAEC_ItemCategorizer:execute(item, instance)
  if not self:validate(item, instance) then
    return nil, false
  end

  local category, instanceSpecific = self:categorize(item, instance)

  if self:isDebug() then
    local verbosity = category and Debug.Level.Debug or Debug.Level.Info

    if category --[[and not Debug.isLevel(verbosity)]] then
      return category, instanceSpecific
    end

    local instanceSpecificText = instanceSpecific and " (instance specific)" or ""
    local name = item:getFullName():gsub("Base.", "")

    self:log(string.format("%-30s => %-20s %s", name, category or "?", instanceSpecificText), verbosity)
  end

  return category, instanceSpecific
end

---@generic T: CAEC_ItemCategorizer
---@param self T
---@return T
function CAEC_ItemCategorizer.new(self)
  ---@type CAEC_ItemCategorizer
  local o = ISBaseObject.new(self)

  o.verbosity = Debug.Level.Error

  return o
end

return CAEC_ItemCategorizer
