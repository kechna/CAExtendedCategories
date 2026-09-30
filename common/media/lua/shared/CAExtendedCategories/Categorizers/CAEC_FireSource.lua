local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local tags = table.newarray(ItemTag.START_FIRE)
local FireSource = CAEC_ItemCategorizer.createTagCategorizer("FireSource", tags)

return FireSource
