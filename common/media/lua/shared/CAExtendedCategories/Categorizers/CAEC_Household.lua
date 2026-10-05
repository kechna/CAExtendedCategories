local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_HouseholdCategorizer: CAEC_ItemCategorizer
---@field cleaningTags ItemTag[]
local Household = CAEC_ItemCategorizer:derive("Household")

Household.cleaningTags = table.newarray(ItemTag.CLEAN_STAINS, ItemTag.TOILET_BRUSH)

function Household:validate(item, _instance)
  return true -- ?
end

function Household:categorize(item, instance)
  ---@type string | nil
  local category = nil
  local baseCategory = "Household"

  if item:hasTag(ItemTag.MUFFLE_SNEEZE) then
    category = baseCategory
  elseif Utils.hasAnyTag(item, Household.cleaningTags) then
    category = baseCategory .. "Cleaning"
  end

  return category, false
end

return Household
