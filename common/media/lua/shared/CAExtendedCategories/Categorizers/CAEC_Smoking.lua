local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

--- @class CAEC_SmokingCategorizer: CAEC_ItemCategorizer
local Smoking = CAEC_ItemCategorizer:derive("Smoking")

local SmokingTags = table.newarray({ ItemTag.SMOKABLE, ItemTag.ROLLING_PAPER, ItemTag.CHEWING_TOBACCO, ItemTag.TOBACCO })

--- @param item Item
--- @param _instance InventoryItem
--- @return boolean
function Smoking:validate(item, _instance)
  local isSmoking = Utils.hasAnyTag(item, SmokingTags)
      or item:getDoubleClickRecipe() == "UnpackCigaretteCarton"

  if isSmoking then
    return true
  end

  local eatType = item:getEatType()

  return eatType == "Cigarettes" or eatType == "Pipe"
end

--- @param _item Item
--- @param _instance InventoryItem
--- @return string
function Smoking:categorize(_item, _instance)
  return "Smoking"
end

return Smoking
