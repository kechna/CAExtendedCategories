local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

if not Utils.modIsActive("CustomizableBackpacks") then return end

CAEC.registerInitHook("Mod:CustomizableContainers", function ()
  local Category = Apparel.Category

  Apparel.registerBodyLocation("ccbodylocation:CCsatchel", Category.ACCESSORY)
  Apparel.registerBodyLocation("ccbodylocation:CCwebbing", Category.ACCESSORY)
  Apparel.registerBodyLocation("ccbodylocation:CCShoulderL", Category.ACCESSORY_ARMS)
  Apparel.registerBodyLocation("ccbodylocation:CCShoulderR", Category.ACCESSORY_ARMS)
  Apparel.registerBodyLocation("ccbodylocation:CCSportShoulderpadOnTop", Category.ACCESSORY_ARMS)
end)
