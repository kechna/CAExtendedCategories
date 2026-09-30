local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_Writing: CAEC_ItemCategorizer
local Writing = CAEC_ItemCategorizer:derive("Writing")

Writing.tags = table.newarray(
  ItemTag.PEN, ItemTag.PENCIL, ItemTag.BLUE_PEN, ItemTag.RED_PEN, ItemTag.GREEN_PEN, ItemTag.Pen
)

function Writing:validate(item, _instance)
  local displayCategory = item:getDisplayCategory()

  return Utils.hasAnyTag(item, Writing.tags)
end
function Writing:categorize(item, instance)

  return "Household__Literature"
end

return Writing
