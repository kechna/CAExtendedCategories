local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_CookingCategorizer: CAEC_ItemCategorizer
local Cooking = CAEC_ItemCategorizer:derive("Cooking")

function Cooking:validate(item, _instance)
  local category = item:getDisplayCategory()

  if not category then
    return item:getLootType() == "Cookware"
  end

  return category:contains("Cooking") or item:getLootType() == "Cookware"
end

function Cooking:categorize(item, instance)
  ---@type string|nil
  local category = nil

  if Utils.HasAnyTag(item, table.newarray({ ItemTag.FORK, ItemTag.SPOON, ItemTag.DULL_KNIFE })) then
    category = "CookingCutlery"
  elseif Utils.HasAnyTag(item, table.newarray({
        ItemTag.BOTTLE_OPENER,
        ItemTag.CAN_OPENER,
        ItemTag.DULL_KNIFE,
        ItemTag.GRATER,
        ItemTag.MIXING_UTENSIL,
        ItemTag.PIZZA_CUTTER,
        ItemTag.ROLLING_PIN,
        ItemTag.SHARP_KNIFE,
      }))
      or (item:hasTag(ItemTag.CRUDE_TONGS) and item:hasTag(ItemTag.BREAK_ON_SMITHING))
  then
    category = "CookingUtensil"
  elseif item:isItemType(ItemType.WEAPON) then
    if item:hasTag(ItemTag.HAS_METAL)
        and (instance:isCookable() or item:getName():lower():contains("pan"))
    then
      category = "CookingPan"
    elseif not item:getWeaponCategories():isEmpty() and not item:containsWeaponCategory(WeaponCategory.IMPROVISED) then
      category = "CookingUtensil"
    --else
    --  local it = item:getWeaponCategories():iterator()
    --
    --  while it:hasNext() do
    --    local cat = it:next()
    --
    --    self:log(" - " .. tostring(cat))
    --  end
    end
  end

  if not category then
    local resolved= Utils.CreateInstanceIfNeeded(item, instance)
    local container = resolved:getFluidContainer()

    if (item:getPourType() == "Mug" or (not container and resolved:canStoreWater()))
        and (not container or container:isEmpty())
    then
      return "CookingCup", true
    end
  end

  return category, false
end

return Cooking
