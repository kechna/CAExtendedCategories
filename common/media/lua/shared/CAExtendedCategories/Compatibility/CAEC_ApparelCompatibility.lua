local Utils = require("CAExtendedCategories/CAEC_Utils")
local Apparel = require("CAExtendedCategories/Categorizers/CAEC_Apparel")

local original = Apparel.initialise

function Apparel:initialise()
  local Category = self.Category
  local modCompatibility = {
    {
      id = "Authentic Z - Current",
      name = "Authentic Z",
      mapping = {
        ["az:HeadExtra"] = Category.ACCESSORY_HEAD,
        ["az:HeadExtraHair"] = Category.ACCESSORY_HEAD,
        ["az:HeadExtraPlus"] = Category.ACCESSORY_HEAD,
        ["az:NeckExtra"] = Category.ACCESSORY_NECK,
        ["az:LegsExtra"] = Category.ACCESSORY_LEGS,
        ["az:TorsoRigPlus2"] = Category.CLOTHING_OUTERWEAR,
        ["az:TorsoExtraPlus1"] = Category.CLOTHING_OUTERWEAR,
      }
    },
    {
      id = "AuthenticZLite",
      name = "Authentic Z - Lite",
      mapping = {
        ["az:HeadExtra"] = Category.ACCESSORY_HEAD,
        ["az:HeadExtraHair"] = Category.ACCESSORY_HEAD,
        ["az:HeadExtraPlus"] = Category.ACCESSORY_HEAD,
        ["az:NeckExtra"] = Category.ACCESSORY_NECK,
        ["az:LegsExtra"] = Category.ACCESSORY_LEGS,
        ["az:TorsoRigPlus2"] = Category.ACCESSORY_TOP,
        ["az:TorsoExtraPlus1"] = Category.ACCESSORY_TOP,
      }
    },
    {
      id = "AuthenticZBackpacks+",
      name = "Authentic Z - Backpacks+",
      mapping = {
        ["az:TorsoRigPlus2"] = Category.ACCESSORY_TOP,
        ["az:TorsoExtraPlus1"] = Category.ACCESSORY_TOP,
      }
    },

    {
      id = "GanydeBielovzki's Frockin Splendor! Vol.2",
      name = "Frockin Splendor",
      mapping = {
        ["fcknspldr:bathrobecoat"] = Category.CLOTHING_OUTERWEAR,
        ["fcknspldr:jacketopen"] = Category.CLOTHING_OUTERWEAR,
        ["fcknspldr:jacketshort"] = Category.CLOTHING_OUTERWEAR,
        ["fcknspldr:kiu0"] = Category.CLOTHING_UNDERWEAR,
        ["fcknspldr:kiu1"] = Category.ACCESSORY_ARMS,
        ["fcknspldr:kiu2"] = Category.CLOTHING_UNDERWEAR,
        ["fcknspldr:kiu3"] = Category.CLOTHING_UNDERWEAR,
        ["fcknspldr:kiua"] = Category.CLOTHING_HEAD,
        ["fcknspldr:kiub"] = Category.ACCESSORY_TOP,
        ["fcknspldr:kiuc"] = Category.ACCESSORY_ARMS,
        ["fcknspldr:kiux"] = Category.ACCESSORY_TOP,
        ["fcknspldr:kiuy"] = Category.ACCESSORY,
        ["fcknspldr:leftleg"] = Category.ACCESSORY_LEGS,
        ["fcknspldr:rightleg"] = Category.ACCESSORY_LEGS,
      }
    },

    {
      id = "B42PackMule",
      name = "Pack Mule",
      mapping = {
        ["mule:canteen"] = Category.ACCESSORY,
        ["mule:ear_protection"] = Category.ACCESSORY_HEAD,
        ["mule:lower_back"] = Category.ACCESSORY,
        ["mule:pocket"] = Category.ACCESSORY,
        ["mule:rifle_case"] = Category.ACCESSORY,
        ["mule:wrist_l"] = Category.ACCESSORY_ARMS,
        ["mule:wrist_r"] = Category.ACCESSORY_ARMS,
      }
    },

    {
      id = "CustomizableBackpacks",
      name = "Customizable Containers",
      mapping = {
        ["ccbodylocation:CCsatchel"] = Category.ACCESSORY,
        ["ccbodylocation:CCwebbing"] = Category.ACCESSORY,
        ["ccbodylocation:CCShoulderL"] = Category.ACCESSORY_ARMS,
        ["ccbodylocation:CCShoulderR"] = Category.ACCESSORY_ARMS,
        ["ccbodylocation:CCSportShoulderpadOnTop"] = Category.ACCESSORY_ARMS,
      }
    },

    {
      id = "SapphCooking_B42",
      name = "Sapph's Cooking",
      mapping = {
        ["sapphcooking:chefapron"] = Category.ACCESSORY_TOP,
      }
    }
  }

  for _, mod in ipairs(modCompatibility) do
    if Utils.ModIsActive(mod.id) then
      self:log("Registering custom body locations from mod: " .. mod.name)

      for itemId, category in pairs(mod.mapping) do
        self:setGroup(itemId, category)
      end
    end
  end

  return original(self)
end
