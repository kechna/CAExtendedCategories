local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_GardeningCategorizer: CAEC_ItemCategorizer
local Gardening = CAEC_ItemCategorizer:derive("Gardening")

local GardeningTags = table.newarray(
  ItemTag.IS_COMPOSTABLE,
  ItemTag.IS_SEED,
  ItemTag.CUT_PLANT,
  ItemTag.FARMING_LOOT
)

function Gardening:validate(item, _instance)
  local existingCategory = item:getDisplayCategory()

  return (
    (existingCategory and existingCategory:contains("Gardening"))
    or Utils.hasAnyTag(item, GardeningTags)
  ) and not item:isItemType(ItemType.MOVEABLE)
end

function Gardening:categorize(item, instance)
  ---@type string|nil
  local category = nil
  local isFood = item:isItemType(ItemType.FOOD)

  if not isFood
      and item:hasTag(ItemTag.IS_SEED)
      and not item:hasTag(ItemTag.IS_CUTTING)
  then
    category = "GardeningSeed"
  elseif item:hasTag(ItemTag.IS_COMPOSTABLE) then
    category = "GardeningCompostable"
  elseif not isFood then
    local recipe = item:getDoubleClickRecipe()

    if recipe == "OpenPacketOfSeeds"
        or (item:isItemType(ItemType.LITERATURE) and item:hasTag(ItemTag.FAST_READ)) then
      category = "GardeningSeedPacket"
    end
  end

  return category
end

return Gardening
