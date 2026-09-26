local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")

if not Utils.modIsActive("LifestyleHobbies") then return end

CAEC.registerInitHook("Mod:Lifestyle", function ()
  CAEC.setStaticCategory("Base.Toothbrush", "Appearance")
  CAEC.setStaticCategory("Base.Toothpaste", "Appearance")
  CAEC.setStaticCategory("Base.Comb", "Appearance")
  CAEC.setStaticCategory("Base.Razor", "Appearance")
  CAEC.setStaticCategory("Base.Hairgel", "Appearance")
end)
