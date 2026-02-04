local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

--- @class CAEC_MaterialCategorizer: CAEC_ItemCategorizer

--- @type CAEC_MaterialCategorizer
local Material = CAEC_ItemCategorizer:derive("Material")

function Material:validate(item, _instance)
  return item:getLootType() == "Material"
end

function Material:categorize(item, _instance)
  ---@type string|nil
  local category = nil

  return category

end

return Material
