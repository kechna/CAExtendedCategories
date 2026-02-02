local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

--- @class CAEC_ContainerCategorizer: CAEC_ItemCategorizer
local Container = CAEC_ItemCategorizer:derive("Container")

function Container:validate(item, _instance)
  return item:isItemType(ItemType.CONTAINER)
end

function Container:categorize(item, _instance)
  if item:hasTag(ItemTag.KEY_RING) then
    return "KeyRing"
  end

  ---@type string|nil
  local category = nil
  local existingCategory = item:getDisplayCategory()

  local bloodClothingType = item:getBloodClothingType()

  ---@diagnostic disable-next-line: unnecessary-if
  if item:getBodyLocation() ~= nil
      or existingCategory == "Bag"
      or (bloodClothingType and bloodClothingType:contains(BloodClothingType.Bag))
  then
    category = "ContainerWearable"
  end

  return category
end

return Container
