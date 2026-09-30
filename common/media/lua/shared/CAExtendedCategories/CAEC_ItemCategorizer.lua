require "ISBaseObject"

local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_ItemCategorizer: ISBaseObject
---@field public verbosity            number
---@field public derive               fun(self: CAEC_ItemCategorizer, className: string): CAEC_ItemCategorizer
---@field public new                  fun(self: CAEC_ItemCategorizer): CAEC_ItemCategorizer
---@field public execute              fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): (string | nil?, boolean?)
---@field public categorize           fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): (string | nil?, boolean?)
---@field public validate             fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): boolean
---@field public getVerbosity         fun(self: CAEC_ItemCategorizer): number
---@field public isDebug              fun(self: CAEC_ItemCategorizer): boolean
---@field public log                  fun(self: CAEC_ItemCategorizer, message: string, level?: number)
---@field public createTagCategorizer fun(name: string, tags: ItemTag[], category?: string): CAEC_TagCategorizer

-- specialized subtype for simple tag-based categorization
---@class CAEC_TagCategorizer: CAEC_ItemCategorizer
---@field public tags        ItemTag[]
---@field public registerTag fun(tag: ItemTag | string)

---@type CAEC_ItemCategorizer
local CAEC_ItemCategorizer = ISBaseObject:derive("CAEC_ItemCategorizer")

function CAEC_ItemCategorizer:isDebug()
  return Debug.isLevel(Debug.Level.Debug)
end

function CAEC_ItemCategorizer:getVerbosity()
  return self.verbosity or Debug.Level.Error
end

function CAEC_ItemCategorizer:log(message, level)
  level = level or Debug.Level.Debug

  -- the categorizer verbosity only gates debug/info output, warnings and errors are filtered by the global level only
  if level < Debug.Level.Warning and level < self:getVerbosity() then return end

  Debug.log(message, self.Type, level)
end

function CAEC_ItemCategorizer:categorize(_item, _instance)
  return nil, false
end

function CAEC_ItemCategorizer:validate(_item, _instance)
  return true
end

function CAEC_ItemCategorizer:execute(item, instance)
  if not self:validate(item, instance) then
    return nil, false
  end

  local category, instanceSpecific = self:categorize(item, instance)

  if self:isDebug() then
    local verbosity = category and Debug.Level.Debug or Debug.Level.Info

    if category --[[and not Debug.isLevel(verbosity)]]
    then
      return category, instanceSpecific
    end

    local instanceSpecificText = instanceSpecific and " (instance specific)" or ""
    local name = item:getFullName():gsub("^Base%.", "")

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

CAEC_ItemCategorizer.createTagCategorizer = function (name, tags, category)
  ---@type CAEC_TagCategorizer
  local categorizer = CAEC_ItemCategorizer:derive(name)

  categorizer.tags = tags

  function categorizer.registerTag(tag)
    table.insert(categorizer.tags, Utils.toTag(tag))
  end

  function categorizer:validate(item, _instance)
    return Utils.hasAnyTag(item, categorizer.tags)
  end

  function categorizer:categorize(_item, _instance)
    return category or name
  end

  return categorizer
end

return CAEC_ItemCategorizer
