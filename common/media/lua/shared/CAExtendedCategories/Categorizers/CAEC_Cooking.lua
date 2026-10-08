local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Container = require("CAExtendedCategories/Categorizers/CAEC_Container")

local NAME = "Cooking"

---@class CAEC_CookingCategorizer: CAEC_ItemCategorizer
local Cooking = CAEC_ItemCategorizer:derive(NAME)

---@type (ItemTag | string)[]
Cooking.CutleryTags = table.newarray(
  ItemTag.FORK,
  ItemTag.SPOON,
  ItemTag.DULL_KNIFE
)

---@type (ItemTag | string)[]
Cooking.UtensilTags = table.newarray(
  ItemTag.BOTTLE_OPENER,
  ItemTag.CAN_OPENER,
  ItemTag.DULL_KNIFE,
  ItemTag.GRATER,
  ItemTag.MIXING_UTENSIL,
  ItemTag.PIZZA_CUTTER,
  ItemTag.ROLLING_PIN,
  ItemTag.SHARP_KNIFE
)

---@param tag ItemTag | string
function Cooking.registerCutleryTag(tag)
  table.insert(Cooking.CutleryTags, tag)
end

---@param tag ItemTag | string
function Cooking.registerUtensilTag(tag)
  table.insert(Cooking.UtensilTags, tag)
end

function Cooking:validate(item, _instance)
  local category = Utils.getOriginalCategory(item)

  if not category then
    return item:getLootType() == "Cookware"
  end

  return category:contains("Cooking") or item:getLootType() == "Cookware"
end

function Cooking:categorize(item, instance)
  ---@type string | nil
  local category = nil

  if Utils.hasAnyTag(item, self.CutleryTags) then
    category = "CookingCutlery"
  elseif Utils.hasAnyTag(item, self.UtensilTags)
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
