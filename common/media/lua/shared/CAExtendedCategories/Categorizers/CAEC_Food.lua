local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local FoodType = require("CAExtendedCategories/Data/CAEC_FoodType")
local BoxesAndStacks = require("CAExtendedCategories/Categorizers/CAEC_BoxesAndStacks")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local FoodTypes = {}
for _, v in pairs(FoodType) do
  FoodTypes[v] = true
end

---@class CAEC_FoodCategorizer: CAEC_ItemCategorizer
---@field public foodTypeMap table<string, CAEC_FoodType>
---@field public categorize fun(self: CAEC_ItemCategorizer, item: Item, instance: Food): (string|nil?, boolean?)
---@field public getFoodType fun(self: CAEC_FoodCategorizer, item: Item, instance: Food): string|nil, boolean
---@field public guessFoodOrSnack fun(self: CAEC_FoodCategorizer, item: Item, instance: Food): string|nil
local Food = CAEC_ItemCategorizer:derive("Food")

local BASE_CATEGORY = "Food"
local BAKING_TAGS = table.newarray(ItemTag.BAKING_FAT, ItemTag.OIL, ItemTag.FLOUR)
local HERB_TAGS = table.newarray(ItemTag.COMFREY, ItemTag.COMMON_MALLOW, ItemTag.WILD_GARLIC)
local SPICE_TAGS = table.newarray(ItemTag.SALT, ItemTag.DRIED_FOOD)

function Food:new()
  --- @type CAEC_FoodCategorizer
  local o = CAEC_ItemCategorizer.new(self)

  o.foodTypeMap = {
    BakingFat = FoodType.BAKING,
    Oil = FoodType.BAKING,
    Thickener = FoodType.BAKING,

    Chocolate = FoodType.CANDY,

    Berry = FoodType.FRUITS,
    Citrus = FoodType.FRUITS,
    Fruits = FoodType.FRUITS,

    Herbal = FoodType.HERB,

    AnimalFeed = FoodType.LIVESTOCK,

    Bacon = FoodType.MEAT,
    Beef = FoodType.MEAT,
    Game = FoodType.MEAT,
    Meats = FoodType.MEAT,
    Poultry = FoodType.MEAT,
    Sausage = FoodType.MEAT,
    Venison = FoodType.MEAT,
    Poulty = FoodType.MEAT,

    Cocoa = FoodType.NO_EXPLICIT,
    Dressing = FoodType.NO_EXPLICIT,
    Garnish = FoodType.NO_EXPLICIT,
    Sauce = FoodType.NO_EXPLICIT,
    Spread = FoodType.NO_EXPLICIT,

    CatFood = FoodType.PET_FOOD,
    DogFood = FoodType.PET_FOOD,

    Fish = FoodType.SEAFOOD,
    Roe = FoodType.SEAFOOD,

    Pepper = FoodType.SPICE,

    Bean = FoodType.STAPLE,
    Pasta = FoodType.STAPLE,
    Rice = FoodType.STAPLE,

    Greens = FoodType.VEGETABLES,
    Vegetable = FoodType.VEGETABLES,

    Beer = FoodType.SKIP,
    Champagne = FoodType.SKIP,
    Juice = FoodType.SKIP,
    Liquor = FoodType.SKIP,
    Milk = FoodType.SKIP,
    SoftDrink = FoodType.SKIP,
    Wine = FoodType.SKIP,

    -- Vanilla Foods Expanded (VFX)
    Beans = FoodType.STAPLE,
    Soup = FoodType.PORTION,

    -- Sapph's Cooking
    Salt = FoodType.SPICE,
    Curry = FoodType.PORTION,
    Ice = FoodType.NO_EXPLICIT,
    Sake = FoodType.SKIP,
    Gin = FoodType.SKIP,
  }

  return o
end

---@param item Item
---@param instance Food?
---@return boolean
function Food:validate(item, instance)
  if instance and instance:hasComponent(ComponentType.FluidContainer) then
    return false
  end

  return item:isItemType(ItemType.FOOD)
      and instanceof(instance, "Food")
      and not item:hasTag(ItemTag.ANIMAL_HEAD)
      and not item:hasTag(ItemTag.FEATHER)
      -- animal dung
      and not item:hasTag(ItemTag.IS_COMPOSTABLE)
      and not item:hasTag(ItemTag.ANIMAL_BRAIN)
      and not item:hasTag(ItemTag.SMOKABLE)
end

function Food:getFoodType(item, instance)
  ---@type string|nil
  local foodType = nil
  local instanceSpecific = false
  ---@type string|nil
  local eatType = item:getEatType()

  if eatType then eatType = eatType:lower() end

  if eatType and ("2handbowl" == eatType or "bowl" == eatType or "plate" == eatType or "2hand" == eatType) then
    foodType = FoodType.PORTION
    instanceSpecific = true
  elseif eatType == "pot" or item:hasTag(ItemTag.CAN_BE_DIVIDED_IN_BOWLS) then
    foodType = FoodType.DISH
    instanceSpecific = true
  elseif item:hasTag(ItemTag.FISH_MEAT) then
    foodType = FoodType.SEAFOOD
  elseif item:hasTag(ItemTag.CHEESE) then
    foodType = FoodType.CHEESE
  elseif item:hasTag(ItemTag.SALT) then
    foodType = FoodType.SPICE
  elseif Utils.hasAnyTag(item, BAKING_TAGS) then
    foodType = FoodType.BAKING
  elseif Utils.hasAnyTag(item, HERB_TAGS) then
    foodType = FoodType.HERB
  end

  foodType = foodType or instance:getFoodType()

  if not foodType and item:hasTag(ItemTag.PRESERVED_FOOD) then
    foodType = FoodType.PRESERVED
  elseif foodType == FoodType.NO_EXPLICIT and item:getName():lower():contains("chocolate") then
    -- Some chocolate items are tagged as condiments
    foodType = FoodType.CANDY
  end

  ---@type string|nil
  local resolved = self.foodTypeMap[foodType] or foodType

  if resolved and not FoodTypes[resolved] then
    self:log("Unrecognized food type '" .. tostring(resolved) .. "' for item: " .. item:getFullName(), Debug.Level.Warning)
    resolved = nil
  end

  return resolved, instanceSpecific
end

---@param item Item
---@param instance Food
---@return string|nil
function Food:guessFoodOrSnack(item, instance)
  local weight = item:getActualWeight()

  if not weight then
    return nil
  end

  local unhappiness = instance:getUnhappyChangeUnmodified()

  if unhappiness > 0 then
    --self:log("probably not meant for eating: " .. item:getFullName() .. " (unhappiness: " .. tostring(unhappiness) .. ")", Debug.Level.Info)
    return nil
  end

  local calories = round(instance:getCalories() / weight, 1)
  --local carbs = round(instance:getCarbohydrates() / weight, 1)
  --local lipids = round(instance:getLipids() / weight, 1)
  local proteins = round(instance:getProteins() / weight, 1)
  --local hunger = round(instance:getHungerChange() / weight, 1)
  local thirst = round(instance:getThirstChange() / weight, 1)

  --print(string.format(
  --  "guessFoodOrSnack: %s (calories: %s, hunger: %s, thirst: %s, unhappiness: %s)",
  --  item:getFullName(),
  --  tostring(calories),
  --  tostring(hunger),
  --  tostring(thirst),
  --  tostring(unhappiness)
  --))

  if thirst > 1 then
    --self:log("probably not meant for eating: " .. item:getFullName() .. " (thirst: " .. tostring(thirst) .. ")", Debug.Level.Info)
    return nil
  end

  if calories >= 300 and unhappiness <= 0 then
    --self:log(string.format(
    --  "  %s -- caloric density: %s (carbs: %s, lipids: %s, proteins: %s, unhappiness: %s)",
    --  item:getName(),
    --  tostring(round(calories, 2)),
    --  tostring(round(weight, 2)),
    --  tostring(round(carbs, 2)),
    --  tostring(round(lipids, 2)),
    --  tostring(round(proteins, 2)),
    --  tostring(round(unhappiness, 2))
    --))

    if proteins > 0.0 then
      return FoodType.SNACK
    else
      return FoodType.CANDY
    end
  end

  return nil
end

function Food:categorize(item, instance)
  local eatType = item:getEatType()
  local pourType = item:getPourType()

  if pourType == "Mug" or eatType == "bottle" then
    return nil, true
  end

  local foodType, instanceSpecific = self:getFoodType(item, instance)

  if FoodType.SKIP == foodType then
    --self:log("skipping: " .. item:getFullName(), Debug.Level.Info)
    return nil, true
  end

  --- @type string|nil
  local category = BASE_CATEGORY

  if instance:isSpice() then
    if FoodType.NO_EXPLICIT == foodType and (
          eatType ~= "GlugFood"
          and eatType ~= "Candrink"
          or Utils.hasAnyTag(item, SPICE_TAGS)
        )
    then
      foodType = FoodType.SPICE;
    elseif not foodType and item:hasTag(ItemTag.MINOR_INGREDIENT) then
      foodType = FoodType.NO_EXPLICIT
    end
  elseif instance:getLootType() == "CannedFood" and item:hasTag(ItemTag.HAS_METAL) then
    foodType = FoodType.CANNED
  elseif item:hasTag(ItemTag.VERMIN)
      or instance:getCustomEatSound() == "EatingDeadAnimal" then
    foodType = FoodType.MEAT
  end

  if not foodType then
    local edible = item:isCantEat() == false

    if not edible and item:isFarmingLoot() then
      foodType = FoodType.LIVESTOCK
    elseif edible then
      foodType = self:guessFoodOrSnack(item, instance)
    end
  end

  if instance:canAge() then
    category = category .. "Perishable"
  end

  if foodType then
    category = category .. foodType
  else
    local boxed = BoxesAndStacks.addToCategory(category, item, instance)

    if boxed then
      category = boxed
    end
  end

  if item:isMedicalLoot() then
    local calories = instance:getCalories()

    if calories > 0 then
      category = category .. "OrFirstAid"
    else
      -- is first aid, no nutritional value
      category = nil
    end
  end

  return category, instanceSpecific
end

return Food
