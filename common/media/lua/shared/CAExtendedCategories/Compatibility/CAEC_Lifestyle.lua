local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Static = require("CAExtendedCategories/Categorizers/CAEC_Static")

if not Utils.modIsActive("LifestyleHobbies") then return end

CAEC.registerInitHook("Mod:Lifestyle", function ()
  Static.registerCategory("Base.Toothbrush", "Appearance")
  Static.registerCategory("Base.Toothpaste", "Appearance")
  Static.registerCategory("Base.Comb", "Appearance")
  Static.registerCategory("Base.Razor", "Appearance")
  Static.registerCategory("Base.Hairgel", "Appearance")
end)
