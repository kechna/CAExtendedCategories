local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

if not Utils.modIsActive("GanydeBielovzki's Frockin Splendor! Vol.2") then return end

CAEC.registerInitHook("Mod:FrockinSplendor", function ()
  local Category = Apparel.Category

  Apparel.registerBodyLocation("fcknspldr:bathrobecoat", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("fcknspldr:jacketopen", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("fcknspldr:jacketshort", Category.CLOTHING_OUTERWEAR)
  Apparel.registerBodyLocation("fcknspldr:kiu0", Category.CLOTHING_UNDERWEAR)
  Apparel.registerBodyLocation("fcknspldr:kiu1", Category.ACCESSORY_ARMS)
  Apparel.registerBodyLocation("fcknspldr:kiu2", Category.CLOTHING_UNDERWEAR)
  Apparel.registerBodyLocation("fcknspldr:kiu3", Category.CLOTHING_UNDERWEAR)
  Apparel.registerBodyLocation("fcknspldr:kiua", Category.CLOTHING_HEAD)
  Apparel.registerBodyLocation("fcknspldr:kiub", Category.ACCESSORY_TOP)
  Apparel.registerBodyLocation("fcknspldr:kiuc", Category.ACCESSORY_ARMS)
  Apparel.registerBodyLocation("fcknspldr:kiux", Category.ACCESSORY_TOP)
  Apparel.registerBodyLocation("fcknspldr:kiuy", Category.ACCESSORY)
  Apparel.registerBodyLocation("fcknspldr:leftleg", Category.ACCESSORY_LEGS)
  Apparel.registerBodyLocation("fcknspldr:rightleg", Category.ACCESSORY_LEGS)
end)
