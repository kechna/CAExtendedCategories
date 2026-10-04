local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

if not Utils.modIsActive("SpnOpenClothBase") then return end

CAEC.registerInitHook("Mod:Spongie", function ()
  local Category = Apparel.Category

  Apparel.registerBodyLocation("SpnOpenCloth:JACKET_OPEN", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("SpnOpenCloth:JACKET_ROLL", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("SpnOpenCloth:JACKET_OPENROLL", Category.CLOTHING_OUTERWEAR)
end)
