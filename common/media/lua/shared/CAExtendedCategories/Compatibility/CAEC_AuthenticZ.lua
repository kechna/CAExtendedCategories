local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

local isCurrent = Utils.modIsActive("Authentic Z - Current")
local isLite = Utils.modIsActive("AuthenticZLite")
local isBackpacks = Utils.modIsActive("AuthenticZBackpacks+")

if not isCurrent and not isLite and not isBackpacks then return end

CAEC.registerInitHook("Mod:AuthenticZ", function ()
  local Category = Apparel.Category

  if isCurrent or isLite then
    Apparel.registerBodyLocation("az:HeadExtra", Category.ACCESSORY_HEAD)
    Apparel.registerBodyLocation("az:HeadExtraHair", Category.ACCESSORY_HEAD)
    Apparel.registerBodyLocation("az:HeadExtraPlus", Category.ACCESSORY_HEAD)
    Apparel.registerBodyLocation("az:NeckExtra", Category.ACCESSORY_NECK)
    Apparel.registerBodyLocation("az:LegsExtra", Category.ACCESSORY_LEGS)
  end

  -- the full version uses these for coats, Lite and Backpacks+ for rigs and bags
  local torsoCategory = (isLite or isBackpacks) and Category.ACCESSORY_TOP or Category.CLOTHING_OUTERWEAR

  Apparel.registerBodyLocation("az:TorsoRigPlus2", torsoCategory)
  Apparel.registerBodyLocation("az:TorsoExtraPlus1", torsoCategory)
end)
