local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

--- @class CAEC_ContainerCategorizer: CAEC_ItemCategorizer

--- @type CAEC_ContainerCategorizer
local Container = CAEC_ItemCategorizer:derive("Container")

function Container:validate(item, _instance)
  return item:isItemType(ItemType.CONTAINER)
end

function Container:categorize(item, instance)
  ---@type string|nil
  local category = nil
  local existingCategory = item:getDisplayCategory()

  if item:hasTag(ItemTag.KEY_RING) then
    category = "KeyRing"
  else
    local bloodClothingType = item:getBloodClothingType()

    ---@diagnostic disable-next-line: unnecessary-if
    if existingCategory == "Bag" or (bloodClothingType and bloodClothingType:contains(BloodClothingType.Bag)) then
      category = "AccessoryBag"
    end
  end

  return category
end

return Container
