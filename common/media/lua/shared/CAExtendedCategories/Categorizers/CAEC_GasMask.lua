local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_GasMaskCategorizer: CAEC_ItemCategorizer
local GasMask = CAEC_ItemCategorizer:derive("GasMask")

local GasMaskFilterTags = table.newarray(ItemTag.GASMASK_FILTER, ItemTag.RESPIRATOR_FILTER, "base:ragfilter")

function GasMask:validate(item, _instance)
  return Utils.hasAnyTag(item, GasMaskFilterTags)
end

function GasMask:categorize(_, __)
  return "ProtectiveGearAccessory"
end

return GasMask
