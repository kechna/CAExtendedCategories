require "ISBaseObject"

local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_ItemCategorizer : ISBaseObject
---@field public new fun(self: CAEC_ItemCategorizer): CAEC_ItemCategorizer
---@field public derive fun(self: CAEC_ItemCategorizer, className: string): CAEC_ItemCategorizer
---@field public execute fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem?): (string|nil?, boolean?)
---@field public categorize fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem?): (string|nil?, boolean?)
---@field public validate fun(self: CAEC_ItemCategorizer, item: Item, instance: InventoryItem?): boolean

--- @type CAEC_ItemCategorizer
local CAEC_ItemCategorizer = ISBaseObject:derive("CAEC_ItemCategorizer")

function CAEC_ItemCategorizer:categorize(item, instance)
  return nil, false
end

function CAEC_ItemCategorizer:validate(item, instance)
  error("Validate method not implemented in categorizer: " .. tostring(self.Type))
end

function CAEC_ItemCategorizer:execute(item, instance)
  if not self:validate(item, instance) then
    return nil, false
  end

  local category =  self:categorize(item, instance)

  if not category then
    Debug.log("---> no category found for item: " .. item:getName(), self.Type)
  end

  return category
end

function CAEC_ItemCategorizer:new()
  ---@type CAEC_ItemCategorizer
  local o = ISBaseObject.new(self)

  return o
end

return CAEC_ItemCategorizer
