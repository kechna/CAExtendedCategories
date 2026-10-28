require "ISBaseObject"

local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_ItemCategorizer: ISBaseObject
---@field public verbosity            number
---@field public derive               fun(self: CAEC_ItemCategorizer, className: string): CAEC_ItemCategorizer
---@field public new                  fun(self: CAEC_ItemCategorizer): CAEC_ItemCategorizer
---@field public execute              fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): (string | nil, boolean?)
---@field public categorize           fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): (string | nil, boolean?)
---@field public _originalCategorize  fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): (string | nil, boolean?)
---@field public validate             fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): boolean
---@field public _originalValidate    fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem): boolean
---@field public getVerbosity         fun(self: CAEC_ItemCategorizer): number
---@field public isDebug              fun(self: CAEC_ItemCategorizer): boolean
---@field public log                  fun(self: CAEC_ItemCategorizer, message: string, level?: number)
---@field public isResolving          fun(self: CAEC_ItemCategorizer, item: Item): boolean
---@field public resolveCategory      fun(self: CAEC_ItemCategorizer, owner: Item, target: Item, instance?: InventoryItem): string | nil
---@field public createTagCategorizer fun(name: string, tags: ItemTag[], category?: string): CAEC_TagCategorizer

-- specialized subtype for simple tag-based categorization
---@class CAEC_TagCategorizer: CAEC_ItemCategorizer
---@field public tags        ItemTag[]
---@field public registerTag fun(tag: ItemTag | string)

---@type CAEC_ItemCategorizer
local ItemCategorizer = ISBaseObject:derive("CAEC_ItemCategorizer")

--- items each categorizer is resolving a category for, to break cycles
---@type table<string, table<string, boolean>>
local resolving = {}

function ItemCategorizer:isDebug()
  return Debug.isLevel(Debug.Level.Debug)
end

function ItemCategorizer:getVerbosity()
  return self.verbosity or Debug.Level.Error
end

function ItemCategorizer:log(message, level)
  level = level or Debug.Level.Debug

  if level < Debug.Level.Warning and level < self:getVerbosity() then return end

  Debug.log(message, self.Type, level)
end

function ItemCategorizer:categorize(_item, _instance)
  return nil, false
end

function ItemCategorizer:validate(_item, _instance)
  return true
end

function ItemCategorizer:isResolving(item)
  local active = resolving[self.Type]

  return active ~= nil and active[item:getFullName()] == true
end

--- Categorizes `target` through the full (cached) pipeline on behalf of `owner`.
--- While this runs, this categorizer skips `owner`, so the lookup can't recurse into itself.
---@param owner     Item           item this categorizer is categorizing (guard key)
---@param target    Item           item whose category is wanted (may be `owner` itself)
---@param instance? InventoryItem
---@return string | nil
function ItemCategorizer:resolveCategory(owner, target, instance)
  local CAEC = require("CAExtendedCategories/CAEC")
  local name = owner:getFullName()
  local active = resolving[self.Type] or {}

  resolving[self.Type] = active

  active[name] = true
  local ok, category = pcall(CAEC.categorizeItem, target, instance)
  active[name] = nil

  if not ok then
    self:log(
      string.format("Failed to resolve category of %s for %s: %s", target:getFullName(), name, tostring(category)),
      Debug.Level.Warning
    )
    return nil
  end

  return category
end

function ItemCategorizer:execute(item, instance)
  if self:isResolving(item) then
    return nil, false
  end

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
function ItemCategorizer.new(self)
  ---@type CAEC_ItemCategorizer
  local o = ISBaseObject.new(self)

  o.verbosity = Debug.Level.Error

  return o
end

ItemCategorizer.createTagCategorizer = function (name, tags, category)
  ---@type CAEC_TagCategorizer
  local categorizer = ItemCategorizer:derive(name)

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

return ItemCategorizer
