local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

---@class CAEC_EntertainmentCategorizer: CAEC_ItemCategorizer
local Entertainment = CAEC_ItemCategorizer:derive("Entertainment")

function Entertainment:validate(item, _instance)
  local existingCategory = item:getDisplayCategory()

  return ((existingCategory and existingCategory:contains("Entertainment")))
end

function Entertainment:categorize(item, _instance)
  local mediaCategory = item:getRecordedMediaCat()

  if not mediaCategory then
    return nil
  end

  ---@type string | nil
  local category = "Entertainment"
  local type = mediaCategory:lower()

  if type:contains("vhs") then
    category = category .. "VHS"
  elseif type:contains("cd") then
    category = category .. "CD"
  elseif type:contains("cassette") then
    -- what happened to true music?
    category = category .. "Cassette"
  end

  return category
end

return Entertainment
