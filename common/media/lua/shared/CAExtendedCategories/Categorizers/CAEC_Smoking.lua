local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local tags = table.newarray({ ItemTag.SMOKABLE, ItemTag.ROLLING_PAPER, ItemTag.CHEWING_TOBACCO, ItemTag.TOBACCO })

local Smoking = CAEC_ItemCategorizer.createTagCategorizer("Smoking", tags)

local baseValidate = Smoking.validate

function Smoking.validate(self, item, instance)
  local isSmoking = baseValidate(self, item, instance) or item:getDoubleClickRecipe() == "UnpackCigaretteCarton"

  if isSmoking then
    return true
  end

  local eatType = item:getEatType()

  return eatType == "Cigarettes" or eatType == "Pipe"
end

return Smoking
