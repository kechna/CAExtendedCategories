local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_CookingCategorizer: CAEC_ItemCategorizer
local Cooking = CAEC_ItemCategorizer:derive("Cooking")

function Cooking:validate(item, _instance)
  local category = item:getDisplayCategory()

  if not category then
    return item:getLootType() == "Cookware"
  end

  return category:contains("Cooking") or item:getLootType() == "Cookware"
end

local CUTLERY_TAGS = table.newarray(
  ItemTag.FORK,
  ItemTag.SPOON,
  ItemTag.DULL_KNIFE
)

local UTENSIL_TAGS = table.newarray(
  ItemTag.BOTTLE_OPENER,
  ItemTag.CAN_OPENER,
  ItemTag.DULL_KNIFE,
  ItemTag.GRATER,
  ItemTag.MIXING_UTENSIL,
  ItemTag.PIZZA_CUTTER,
  ItemTag.ROLLING_PIN,
  ItemTag.SHARP_KNIFE
)

function Cooking:categorize(item, instance)
  ---@type string | nil
  local category = nil

  if Utils.hasAnyTag(item, CUTLERY_TAGS) then
    category = "CookingCutlery"
  elseif Utils.hasAnyTag(item, UTENSIL_TAGS)
    or (item:hasTag(ItemTag.CRUDE_TONGS) and item:hasTag(ItemTag.BREAK_ON_SMITHING)) then
    category = "CookingUtensil"
  elseif item:isItemType(ItemType.WEAPON) and not item:getWeaponCategories():isEmpty()
    and not item:containsWeaponCategory(WeaponCategory.IMPROVISED) then
    category = "CookingUtensil"
  elseif item:hasTag(ItemTag.HAS_METAL) and (instance:isCookable() or item:getName():lower():contains("pan")) then
    category = "CookingPan"
  end

  if not category then
    local resolved = Utils.createInstanceIfNeeded(item, instance)
    local container = Utils.getFluidContainer(resolved)

    if (item:getPourType() == "Mug"
      or (not container and resolved:canStoreWater())
      or item:hasTag(ItemTag.GLASS))
      and (not container or container:isEmpty()) then
      return "CookingCup", true
    end
  end

  return category, false
end

return Cooking
