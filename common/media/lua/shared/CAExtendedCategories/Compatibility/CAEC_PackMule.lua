local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

if not Utils.modIsActive("B42PackMule") then return end

CAEC.registerInitHook("Mod:PackMule", function ()
  local Category = Apparel.Category

  Apparel.registerBodyLocation("mule:canteen", Category.ACCESSORY)
  Apparel.registerBodyLocation("mule:ear_protection", Category.ACCESSORY_HEAD)
  Apparel.registerBodyLocation("mule:lower_back", Category.ACCESSORY)
  Apparel.registerBodyLocation("mule:pocket", Category.ACCESSORY)
  Apparel.registerBodyLocation("mule:rifle_case", Category.ACCESSORY)
  Apparel.registerBodyLocation("mule:wrist_l", Category.ACCESSORY_ARMS)
  Apparel.registerBodyLocation("mule:wrist_r", Category.ACCESSORY_ARMS)
end)
