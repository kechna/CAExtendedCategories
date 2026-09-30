local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local tags = table.newarray(ItemTag.MUFFLE_SNEEZE, ItemTag.CLEAN_STAINS)

return CAEC_ItemCategorizer.createTagCategorizer("Household", tags)
