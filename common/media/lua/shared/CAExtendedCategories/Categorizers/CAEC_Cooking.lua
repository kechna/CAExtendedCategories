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
  self.verbosity = Debug.Level.Debug

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
  end

  if not category then
    local resolved= Utils.CreateInstanceIfNeeded(item, instance, self.Type)

    if item:getPourType() == "Mug" or resolved:isFluidContainer() or resolved:canStoreWater() then
      category = "CookingOrContainerLiquid"
    end
  end

  if not category then
    Debug.report(self.Type .. ": " .. item:getFullName(), item, instance)
  end

  return category
end

return Cooking
