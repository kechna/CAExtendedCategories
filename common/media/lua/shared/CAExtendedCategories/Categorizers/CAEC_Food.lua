local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local FoodType = require("CAExtendedCategories/Data/CAEC_FoodType")
local BoxesAndStacks = require("CAExtendedCategories/Categorizers/CAEC_BoxesAndStacks")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local BASE_CATEGORY = "Food"

---@class CAEC_FoodCategorizer: CAEC_ItemCategorizer
---@field public categorize       fun(self: CAEC_ItemCategorizer, item: Item, instance: Food): (string | nil?, boolean?)
---@field public getFoodType      fun(self: CAEC_FoodCategorizer, item: Item, instance: Food): CAEC_FoodType | nil, boolean
---@field public guessFoodOrSnack fun(self: CAEC_FoodCategorizer, item: Item, instance: Food): CAEC_FoodType | nil
local Food = CAEC_ItemCategorizer:derive(BASE_CATEGORY)

Food.NonFoodTags = table.newarray(
  ItemTag.ANIMAL_HEAD, ItemTag.FEATHER, ItemTag.IS_COMPOSTABLE, ItemTag.ANIMAL_BRAIN, ItemTag.SMOKABLE,ItemTag.SEALED_BEVERAGE_CAN, ItemTag.ALCOHOLIC_BEVERAGE, ItemTag.CHEWING_TOBACCO, ItemTag.TOBACCO
)

-- tags that will map to specific food types
---@type table<CAEC_FoodType, ItemTag[] | nil>
Food.TagMaps = {
  [FoodType.Baking] = table.newarray(ItemTag.BAKING_FAT, ItemTag.OIL, ItemTag.FLOUR),
  [FoodType.Dish] = table.newarray(ItemTag.CAN_BE_DIVIDED_IN_BOWLS),
  [FoodType.Herb] = table.newarray(ItemTag.COMFREY, ItemTag.COMMON_MALLOW, ItemTag.WILD_GARLIC),
  [FoodType.Seafood] = table.newarray(ItemTag.FISH_MEAT, ItemTag.UNCUT_FISH),
  [FoodType.Spice] = table.newarray(ItemTag.SALT),
  [FoodType.Staple] = table.newarray(ItemTag.PASTA),
  [FoodType.Cheese] = table.newarray(ItemTag.CHEESE),
  [FoodType.Seed] = table.newarray(ItemTag.IS_SEED),
  [FoodType.Bread] = nil,
  [FoodType.Candy] = nil,
  [FoodType.Canned] = nil,
  [FoodType.Coffee] = nil,
  [FoodType.Egg] = nil,
  [FoodType.Fruits] = nil,
  [FoodType.HotPepper] = nil,
  [FoodType.Insect] = nil,
  [FoodType.Livestock] = nil,
  [FoodType.Meat] = nil,
  [FoodType.Mushroom] = nil,
  [FoodType.NoExplicit] = nil,
  [FoodType.Nut] = nil,
  [FoodType.PetFood] = nil,
  [FoodType.Portion] = nil,
  [FoodType.Preserved] = nil,
  [FoodType.Snack] = nil,
  [FoodType.Stock] = nil,
  [FoodType.Sugar] = nil,
  [FoodType.Tea] = nil,
  [FoodType.Vegetables] = nil
}

Food.FoodTypeMap = {
  BakingFat = FoodType.Baking,
  Oil = FoodType.Baking,
  Thickener = FoodType.Baking,

  Chocolate = FoodType.Candy,

  Berry = FoodType.Fruits,
  Citrus = FoodType.Fruits,
  Fruits = FoodType.Fruits,

  Herbal = FoodType.Herb,

  AnimalFeed = FoodType.Livestock,

  Bacon = FoodType.Meat,
  Beef = FoodType.Meat,
  Game = FoodType.Meat,
  Meats = FoodType.Meat,
  Poultry = FoodType.Meat,
  Sausage = FoodType.Meat,
  Venison = FoodType.Meat,
  Poulty = FoodType.Meat,

  -- "NoExplicit" = Condiment
  Cocoa = FoodType.NoExplicit,
  Dressing = FoodType.NoExplicit,
  Garnish = FoodType.NoExplicit,
  Sauce = FoodType.NoExplicit,
  Spread = FoodType.NoExplicit,

  CatFood = FoodType.PetFood,
  DogFood = FoodType.PetFood,

  Fish = FoodType.Seafood,
  Roe = FoodType.Seafood,

  Pepper = FoodType.Spice,

  Bean = FoodType.Staple,
  Pasta = FoodType.Staple,
  Rice = FoodType.Staple,

  Greens = FoodType.Vegetables,
  Vegetable = FoodType.Vegetables,

  -- Any drink items not caught by the tags check should be skipped so FluidContainer can handle them
  Beer = FoodType._SKIP_,
  Champagne = FoodType._SKIP_,
  Juice = FoodType._SKIP_,
  Liquor = FoodType._SKIP_,
  Milk = FoodType._SKIP_,
  SoftDrink = FoodType._SKIP_,
  Wine = FoodType._SKIP_,

  -- Vanilla Foods Expanded (VFX)
  Beans = FoodType.Staple
}

-- static item -> food type map
Food.ItemFoodTypeMap = {}

-- expose FoodType table for mods
Food.FoodType = FoodType

---@param item     Item
---@param instance Food?
---@return boolean
function Food:validate(item, instance)
  if instance and instance:hasComponent(ComponentType.FluidContainer) then
    return false
  end

  if not instanceof(instance, "Food") or not item:isItemType(ItemType.FOOD) then
    return false
  end

  return not Utils.hasAnyTag(item, Food.NonFoodTags)
end

---@param foodType string
---@param source   string what the food type is registered for, used in the warning
---@return boolean
local function validateFoodType(foodType, source)
  if not foodType then
    return false
  end

  if not FoodType[foodType] then
    Debug.log(
      string.format("Unrecognized food type '%s' for: %s", tostring(foodType), tostring(source)), "Food",
      Debug.Level.Warning
    )
    return false
  end

  return true
end

function Food.registerFoodType(oldFoodType, newFoodType)
  if not validateFoodType(newFoodType, oldFoodType) then return end

  Food.FoodTypeMap[oldFoodType] = newFoodType
end

function Food.registerItemFoodType(itemType, foodType)
  if not validateFoodType(foodType, itemType) then return end

  Debug.log(string.format("  + Item %-16s -> %s", tostring(itemType), foodType), "Food")
  Food.ItemFoodTypeMap[itemType] = foodType
end

function Food.registerFoodTypeTag(tag, foodType)
  if not tag or not validateFoodType(foodType, tag) then return end

  if nil == Food.TagMaps[foodType] then
    Food.TagMaps[foodType] = table.newarray()
  end

  if foodType == FoodType._SKIP_ then
    table.insert(Food.NonFoodTags, Utils.toTag(tag))
  else
    table.insert(Food.TagMaps[foodType], Utils.toTag(tag))
  end
end

local instanceSpecificFoodTypes = table.newarray(FoodType.Dish, FoodType.Portion)

-- food types checked first, in priority order (Dish is checked separately before these)
local priorityFoodTypes = table.newarray(
  FoodType.Dish, FoodType.Seafood, FoodType.Cheese, FoodType.Spice, FoodType.Baking, FoodType.Herb
)

-- food types to skip in the fallback tag search
local alreadyCheckedFoodTypes = {}

for i = 1, #priorityFoodTypes do
  alreadyCheckedFoodTypes[priorityFoodTypes[i]] = true
end

function Food:getFoodType(item, instance)
  ---@type CAEC_FoodType?
  local foodType = nil
  ---@type string | nil
  local eatType = item:getEatType()
  local tagMaps = Food.TagMaps
  local mapped = Food.ItemFoodTypeMap[item:getFullName()]

  if mapped then
    return mapped, false
  end

  if eatType then eatType = eatType:lower() end

  if eatType == "bottle" or item:getPourType() == "Mug" then
    return FoodType._SKIP_, true
  end

  if eatType and ("2handbowl" == eatType or "bowl" == eatType or "plate" == eatType or "2hand" == eatType) then
    foodType = FoodType.Portion
  elseif eatType == "pot"
    or (eatType ~= "candrink" and not item:hasTag(ItemTag.PRESERVED_FOOD)
      and item:hasTag(ItemTag.HAS_METAL) and item:isIsCookable()) then
    foodType = FoodType.Dish
  else
    for i = 1, #priorityFoodTypes do
      ---@type CAEC_FoodType
      local key = priorityFoodTypes[i]
      local tags = tagMaps[key]

      if tags and Utils.hasAnyTag(item, tags) then
        foodType = key
        break
      end
    end
  end

  ---@cast foodType CAEC_FoodType or nil
  foodType = foodType or instance:getFoodType()

  if not foodType then
    if item:hasTag(ItemTag.PRESERVED_FOOD) then
      foodType = FoodType.Preserved
    else
      -- search via what's left of the tags
      for key, tags in pairs(tagMaps) do
        if not alreadyCheckedFoodTypes[key] and tags and Utils.hasAnyTag(item, tags) then
          foodType = key
          break
        end
      end
    end
  elseif foodType == FoodType.NoExplicit and item:getName():lower():contains("choco") then
    -- Some chocolate items are tagged as condiments
    foodType = FoodType.Candy
    -- elseif
    -- lipids ^ , unhappiness ^ thirst ^
  end

  ---@type CAEC_FoodType | nil
  local resolved = Food.FoodTypeMap[foodType] or foodType

  if resolved == FoodType._SKIP_ then
    return resolved, false
  elseif resolved and nil == FoodType[resolved] then
    self:log(
      "Unrecognized food type '" .. tostring(resolved) .. "' for item: " .. item:getFullName(), Debug.Level.Warning
    )
    resolved = nil
  end

  if instance:isSpice() then
    -- resolve condiments/spices and stock
    if FoodType.NoExplicit == resolved and (eatType ~= "glugfood" and eatType ~= "candrink")
      or (item:hasTag(ItemTag.DRIED_FOOD) and resolved ~= FoodType.Herb) then
      -- bouillon cubes
      if item:hasTag(ItemTag.DRIED_FOOD) and item:hasTag(ItemTag.HERBAL_TEA) then
        resolved = FoodType.Stock
      else
        resolved = FoodType.Spice
      end
    elseif not resolved and item:hasTag(ItemTag.MINOR_INGREDIENT) then
      resolved = FoodType.NoExplicit
    end
  elseif item:hasTag(ItemTag.HAS_METAL) and instance:getLootType() == "CannedFood" then
    resolved = FoodType.Canned
  elseif item:hasTag(ItemTag.VERMIN) or instance:getCustomEatSound() == "EatingDeadAnimal" then
    resolved = FoodType.Meat
  end

  if not resolved then
    local edible = item:isCantEat() == false

    if edible then
      resolved = self:guessFoodOrSnack(item, instance)
    elseif item:isFarmingLoot() then
      resolved = FoodType.Livestock
    end
  end

  return resolved, false
end

function Food:guessFoodOrSnack(item, instance)
  local weight = item:getActualWeight()

  if not weight or weight <= 0 then
    return nil
  end

  local unhappiness = instance:getUnhappyChangeUnmodified()

  if unhappiness > 0 then
    -- self:log("probably not meant for eating: " .. item:getFullName() .. " (unhappiness: " .. tostring(unhappiness) .. ")", Debug.Level.Info)
    return nil
  end

  local thirst = round(instance:getThirstChange() / weight, 1)

  if thirst > 1 then
    -- self:log("probably not meant for eating: " .. item:getFullName() .. " (thirst: " .. tostring(thirst) .. ")", Debug.Level.Info)
    return nil
  end

  local calories = round(instance:getCalories() / weight, 1)
  -- local carbs = round(instance:getCarbohydrates() / weight, 1)
  -- local lipids = round(instance:getLipids() / weight, 1)
  local proteins = round(instance:getProteins() / weight, 1)
  -- local hunger = round(instance:getHungerChange() / weight, 1)

  -- print(string.format(
  --  "guessFoodOrSnack: %s (calories: %s, hunger: %s, thirst: %s, unhappiness: %s)",
  --  item:getFullName(),
  --  tostring(calories),
  --  tostring(hunger),
  --  tostring(thirst),
  --  tostring(unhappiness)
  -- ))

  if calories >= 300 and unhappiness <= 0 then
    -- self:log(string.format(
    --  "  %s -- caloric density: %s (carbs: %s, lipids: %s, proteins: %s, unhappiness: %s)",
    --  item:getName(),
    --  tostring(round(calories, 2)),
    --  tostring(round(weight, 2)),
    --  tostring(round(carbs, 2)),
    --  tostring(round(lipids, 2)),
    --  tostring(round(proteins, 2)),
    --  tostring(round(unhappiness, 2))
    -- ))

    if proteins > 0.0 then
      return FoodType.Snack
    else
      return FoodType.Candy
    end
  end

  return nil
end

function Food:categorize(item, instance)
  local foodType, instanceSpecific = self:getFoodType(item, instance)

  if FoodType._SKIP_ == foodType then
    -- self:log("skipping: " .. item:getFullName(), Debug.Level.Info)
    return nil, true
  end

  ---@type string | nil
  local category = BASE_CATEGORY

  if instance:canAge() then
    category = category .. "Perishable"
  end

  if foodType then
    category = category .. foodType

    for i = 1, #instanceSpecificFoodTypes do
      if foodType == instanceSpecificFoodTypes[i] then
        instanceSpecific = true
        break
      end
    end
  else
    local boxed = BoxesAndStacks.addToCategory(category, item, instance)

    if boxed then
      category = boxed
    end
  end

  if item:isMedicalLoot() then
    local calories = instance:getCalories()

    if calories > 0 then
      category = category .. "__FirstAid"
    else
      -- is first aid, no nutritional value, skip
      category = nil
    end
  end

  return category, instanceSpecific
end

return Food
