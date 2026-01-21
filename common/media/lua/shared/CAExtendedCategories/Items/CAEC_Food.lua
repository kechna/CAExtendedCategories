local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local Categorizer = CAEC_ItemCategorizer:derive("Food")

---@param item Item
---@return string|nil
local function fromTags(item)
  local category = nil

  if item:hasTag(ItemTag.PRESERVED_FOOD) then
    category = "FoodPreserved";
  elseif item:hasTag(ItemTag.CAN_BE_DIVIDED_IN_BOWLS) then
    category = "FoodCrafted";
  elseif item:hasTag(ItemTag.FISH_MEAT) then
    category = "FoodFish";
  elseif item:hasTag(ItemTag.CHEESE) then
    category = "FoodCheese";
  elseif item:hasTag(ItemTag.EGG) then
    category = "FoodEgg";
  elseif item:hasTag(ItemTag.SALT) then
    category = "FoodSpice";
  elseif item:hasTag(ItemTag.BAKING_FAT) then
    category = "FoodBakingFat";
  elseif item:hasTag(ItemTag.FLOUR) then
    category = "FoodFlour";
  end

  return category
end

---@param item Item
---@return string|nil
local function fromEatType(item)
  local eatType = item:getEatType()

  if eatType == "2handbowl"
      or eatType == "Bowl"
      or eatType == "Plate"
  then
    return "FoodPortion";
  elseif eatType == "Pot" then
    return "FoodCrafted"
  end

  return nil
end

---@param item Item
---@param instance Food
---@return string|nil
local function fromFoodType(item, instance)
  ---@type string|nil
  local foodType = instance:getFoodType()

  if not foodType then
    return nil
  end

  return "Food" .. foodType
end

---@param item Item
---@param instance Food
---@return string|nil, boolean
local function fromInstance(item, instance)
  local category = nil

  ---@type string|nil
  local foodType = instance:getFoodType()

  if instance:canAge() then
    if foodType then
      category = "Food" .. foodType

      -- these types are not always perishable
      if "NoExplicit" == foodType or "Spice" == foodType
      then
        category = category .. "Perishable"
      end
    else
      category = "FoodPerishable"
    end
  elseif instance:isSpice() then
    local eatType = item:getEatType()

    if foodType then
      category = "Food" .. foodType
    elseif eatType == "GlugFood" or eatType == "Candrink" then
      print("  ---> no food type for spice item: " .. item:getName() .. ", defaulting to FoodNoExplicit")
      category = "FoodNoExplicit";
    else
      print("  ---> no food type for spice item: " .. item:getName() .. ", defaulting to FoodSpice")
      category = "FoodSpice";
    end
  elseif instance:getLootType() == "CannedFood"
      and item:hasTag(ItemTag.HAS_METAL) then
    category = "FoodCanned", false;
  end

  return category or fromFoodType(item, instance), false
end

function Categorizer:validate(item, _instance)
  return item:isItemType(ItemType.FOOD)
      and not item:hasTag(ItemTag.ANIMAL_HEAD)
end

function Categorizer:categorize(item, instance)
  if not item:isItemType(ItemType.FOOD) then
    return nil, false
  end

  local category = fromTags(item) or fromEatType(item)

  if category then
    return category, false
  end

  local resolved, cleanup = Utils.CreateInstanceIfNeeded(item, instance)
  category = fromInstance(item, resolved)

  if category == "FoodVegetable" then
    category = "FoodVegetables"
  end

  if category and item:hasTag(ItemTag.DRIED_FOOD) then
    category = category .. "Dried"
  end

  cleanup()

  return category, false
end

return Categorizer
