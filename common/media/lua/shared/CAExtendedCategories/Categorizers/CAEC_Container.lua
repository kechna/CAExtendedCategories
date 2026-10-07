local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_ContainerCategorizer: CAEC_ItemCategorizer
local Container = CAEC_ItemCategorizer:derive("Container")

-- wearable containers with these tags are categorized as ammo containers
---@type (ItemTag | string)[]
Container.AmmoTags = table.newarray({
  ItemTag.AMMO_CASE,
  ItemTag.RELOAD_FAST_BULLETS,
  ItemTag.RELOAD_FAST_MAGAZINES,
  ItemTag.RELOAD_FAST_SHELLS
})

---@param tag ItemTag | string
function Container.registerAmmoTag(tag)
  table.insert(Container.AmmoTags, tag)
end

function Container:validate(item, _instance)
  return item:isItemType(ItemType.CONTAINER)
      and not item:hasTag(ItemTag.HOLLOW_BOOK)
end

function Container:categorize(item, _instance)
  if item:hasTag(ItemTag.KEY_RING) then
    return "KeyRing"
  end

  ---@type string|nil
  local category = "Container"

  local bloodClothingType = item:getBloodClothingType()

  ---@diagnostic disable-next-line: unnecessary-if
  if item:getBodyLocation() ~= nil
      or (bloodClothingType and bloodClothingType:contains(BloodClothingType.Bag))
  then
    if Utils.hasAnyTag(item, self.AmmoTags) then
      category = "ContainerWearableAmmo"
    else
      category = "ContainerWearable"
    end
  elseif item:hasTag(ItemTag.IS_MEMENTO) then
    category = "Memento__Container"
  elseif item:hasTag(ItemTag.AMMO_CASE) then
    category = "ContainerAmmo"
  end

  return category
end

return Container
