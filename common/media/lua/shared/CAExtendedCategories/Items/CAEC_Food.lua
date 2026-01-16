local Utils = require("CAExtendedCategories/CAEC_Utils")

local Food = {}

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
      or eatType == "Pot"
  then
    return "FoodPortion";
  end

  return nil
end

---@param item Item
---@param instance Food
---@return string|nil
local function fromFoodType(item, instance)
  if item:hasTag(ItemTag.DRIED_FOOD) then
    return "FoodDried";
  end

  ---@type string|nil
  local foodType = instance:getFoodType()

  if not foodType then
    return nil
  end

  return "Food" .. foodType
end

---@param item Item
---@param instance Food
---@return string|nil
function Food.FromInstance(item, instance)
  local category = nil

  ---@type string|nil
  local foodType = instance:getFoodType()

  if instance:canAge() then
    if foodType then
      category = "Food" .. foodType

      -- these types are not always perishable
      if foodType == "NoExplicit" or foodType == "Spice" then
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
      category = "FoodCondiment"
    else
      category = "FoodSpice";
    end
  elseif instance:getLootType() == "CannedFood" and item:hasTag(ItemTag.HAS_METAL) then
    category = "FoodCanned";
  end

  return category or fromFoodType(item, instance)
end

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil, boolean
function Food.Categorize(item, instance)
  local category = fromTags(item) or fromEatType(item)

  if category then return category, false end

  local resolved, cleanup = Utils.CreateInstanceIfNeeded(item, instance)
  category = Food.FromInstance(item, resolved)
  cleanup()

  return category, true
end

return Food
