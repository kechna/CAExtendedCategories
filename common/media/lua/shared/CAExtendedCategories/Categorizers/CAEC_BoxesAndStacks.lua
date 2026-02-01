local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_BoxesAndStacksCategorizer: CAEC_ItemCategorizer

--- @type CAEC_BoxesAndStacksCategorizer
local BoxesAndStacks = CAEC_ItemCategorizer:derive("BoxesAndStacks")

function BoxesAndStacks:validate(item, _instance)
  return item:getDoubleClickRecipe() ~= nil
end

function BoxesAndStacks:categorize(item, _instance)
  local existingCategory = item:getDisplayCategory()
  local recipe = item:getDoubleClickRecipe()

  ---@type string|nil
  local category = nil
  local suffix = nil

  if recipe == "unstack_items" then
    suffix = "Bundled";
  elseif recipe:contains("Carton")
      and (Utils.StartsWith("Open", recipe)
        or Utils.StartsWith("Unpack", recipe)) then
    suffix = "Carton";
  elseif Utils.StartsWith("Unpack", recipe)
      or Utils.StartsWith("OpenBox", recipe)
      or Utils.StartsWith("TakeA", recipe) then
    suffix = "Box";
  end

  if suffix then
    category = Utils.EndsWith(suffix, existingCategory)
        and existingCategory
        or (existingCategory .. suffix)
  end

  return category
end

return BoxesAndStacks
