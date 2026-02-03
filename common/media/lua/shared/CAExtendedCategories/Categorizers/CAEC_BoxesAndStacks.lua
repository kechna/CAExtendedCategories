local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_BoxesAndStacksCategorizer: CAEC_ItemCategorizer
local BoxesAndStacks = CAEC_ItemCategorizer:derive("BoxesAndStacks")

function BoxesAndStacks:validate(item, _instance)
  return item:getDoubleClickRecipe() ~= nil
end

local function byName(item)
  local name = item:getName():lower()

  if name:contains("box") then
    return "Box"
  elseif name:contains("carton") then
    return "Carton"
  end

  return nil
end

local function byRecipe(item)
  ---@type string|nil
  local recipe = item:getDoubleClickRecipe()

  if not recipe then
    return nil
  end

  recipe = recipe:lower()

  if recipe:contains("box") then
    return "Box"
  elseif recipe:contains("carton") then
    return "Carton"
  elseif recipe:contains("stack") then
    return "Stack"
  end

  return nil
end

function BoxesAndStacks.addToCategory(existingCategory, item)
  ---@type string|nil
  local category = nil
  local suffix = byRecipe(item) or byName(item)

  if suffix and not Utils.EndsWith(suffix, existingCategory)then
    category = existingCategory .. suffix
  end

  return category
end

function BoxesAndStacks:categorize(item, _instance)
  local existingCategory = item:getDisplayCategory()

  return self.addToCategory(existingCategory, item)
end

return BoxesAndStacks
