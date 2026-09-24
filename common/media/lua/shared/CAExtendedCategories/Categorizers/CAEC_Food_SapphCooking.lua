local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

local Food = require("CAExtendedCategories/Categorizers/CAEC_Food")
local FoodType = require("CAExtendedCategories/Data/CAEC_FoodType")


local SCTag = Utils.modIsActive("SapphCooking_B42") and require("SapphCookingRegistries").tags or nil

--- @type {tag: ItemTag, type: string}[]
local TagsMap = table.newarray()

local defaultInitialise = Food.initialise
local defaultGetFoodType = Food.getFoodType

function Food:initialise()
  defaultInitialise(self)

  if Utils.modIsActive("SapphCooking_B42") then
    SCTag = require("SapphCookingRegistries").tags

    TagsMap = table.newarray({
      {type = FoodType.BREAD, tag = SCTag.bread},
      {type = FoodType.CANDY, tag = SCTag.chocolate},
      {type = FoodType.DISH, tag = SCTag.baconeggspan},
      {type = FoodType.DISH, tag = SCTag.returnsaucepan},
      {type = FoodType.DISH, tag = SCTag.returnwokpan},
      {type = FoodType.EGG, tag = SCTag.eggboiled},
      {type = FoodType.FRUITS, tag = SCTag.berry},
      {type = FoodType.FRUITS, tag = SCTag.citrus},
      {type = FoodType.MEAT, tag = SCTag.beef},
      {type = FoodType.MEAT, tag = SCTag.chicken},
      {type = FoodType.MEAT, tag = SCTag.mincedmeat},
      {type = FoodType.MEAT, tag = SCTag.pork},
      {type = FoodType.MEAT, tag = SCTag.sausage},
      {type = FoodType.MEAT, tag = SCTag.turkey},
      {type = FoodType.MUSHROOM, tag = SCTag.mushroom},
      {type = FoodType.NO_EXPLICIT, tag = SCTag.icing},
      {type = FoodType.NO_EXPLICIT, tag = SCTag.sourcream},
      {type = FoodType.NO_EXPLICIT, tag = SCTag.soysauce},
      {type = FoodType.NO_EXPLICIT, tag = SCTag.syrup},
      {type = FoodType.NO_EXPLICIT, tag = SCTag.syrup},
      {type = FoodType.PORTION, tag = SCTag.returnbowl},
      {type = FoodType.SKIP, tag = SCTag.coffeecup},
      {type = FoodType.SKIP, tag = SCTag.juice},
      {type = FoodType.SPICE, tag = SCTag.pepper},
      {type = FoodType.SPICE, tag = SCTag.salt},
      {type = FoodType.STAPLE, tag = SCTag.beans},
      {type = FoodType.STAPLE, tag = SCTag.ricegrain},
      {type = FoodType.STOCK, tag = SCTag.broth},
      {type = FoodType.VEGETABLES, tag = SCTag.beets},
      {type = FoodType.VEGETABLES, tag = SCTag.carrot},
      {type = FoodType.VEGETABLES, tag = SCTag.potato},
      {type = FoodType.VEGETABLES, tag = SCTag.slicedvegetables},
    })
  end
end

function Food:getFoodType(item, instance)
  local foodType, instanceSpecific = defaultGetFoodType(self, item, instance)

  if not SCTag then
    return foodType, instanceSpecific
  end

  local module = item:getModuleName()

  if module == "SapphCooking" or not foodType then
    for i = 1, #TagsMap do
      local entry = TagsMap[i]

      if item:hasTag(entry.tag) then
        foodType = entry.type
        break
      end
    end
  end

  return foodType, instanceSpecific
end

return Food
