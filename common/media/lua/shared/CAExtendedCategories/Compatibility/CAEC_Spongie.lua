local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

if not Utils.modIsActive("SpnOpenClothBase") then return end

CAEC.registerInitHook("Mod:Spongie", function ()
  local Category = Apparel.Category

  Apparel.registerBodyLocation("spnopencloth:jacket_open", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("spnopencloth:jacket_roll", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("spnopencloth:jacket_openroll", Category.CLOTHING_OUTERWEAR)
end)
