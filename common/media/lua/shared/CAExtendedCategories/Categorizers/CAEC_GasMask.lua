local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local tags = table.newarray(ItemTag.GASMASK_FILTER, ItemTag.RESPIRATOR_FILTER, "base:ragfilter")

return CAEC_ItemCategorizer.createTagCategorizer("GasMask", tags, "ProtectiveGearAccessory")
