local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Recipes = require("CAExtendedCategories/CAEC_Recipes")
local BoxContents = require("CAExtendedCategories/CAEC_BoxContents")
local FoodType = require("CAExtendedCategories/Data/CAEC_FoodType")
local BoxesAndStacks = require("CAExtendedCategories/Categorizers/CAEC_BoxesAndStacks")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local BASE_CATEGORY = "Food"
local BAIT_CATEGORY = "FishingBait"
local FARMING_CATEGORY = "MaterialFarming"
local CHUM_RECIPE = "AddBaitToChum"
-- also matches mod variants such as "HotDrinkTea"
local HOT_DRINK_RECIPE = "HotDrink"
local DRINK_MENU = "Drink"
-- the game's food type for items without one, mostly condiments
local NO_EXPLICIT = "NoExplicit"

---@class CAEC_FoodCategorizer: CAEC_ItemCategorizer
---@field public categorize       fun(self: CAEC_ItemCategorizer, item: Item, instance: Food): (string | nil?, boolean?)
---@field public getFoodType      fun(self: CAEC_FoodCategorizer, item: Item, instance: Food): CAEC_FoodType | nil, boolean
---@field public guessFoodOrSnack fun(self: CAEC_FoodCategorizer, item: Item, instance: Food): CAEC_FoodType | nil
local Food = CAEC_ItemCategorizer:derive(BASE_CATEGORY)

Food.NonFoodTags = table.newarray(
  --
  ItemTag.ANIMAL_HEAD,
  ItemTag.FEATHER,
  ItemTag.IS_COMPOSTABLE,
  ItemTag.ANIMAL_BRAIN,
  ItemTag.SMOKABLE,
  ItemTag.SEALED_BEVERAGE_CAN,
  ItemTag.ALCOHOLIC_BEVERAGE,
  ItemTag.CHEWING_TOBACCO,
  ItemTag.TOBACCO
)

-- tags that will map to specific food types
---@type table<CAEC_FoodType, ItemTag[] | nil>
Food.TagMaps = {
  [FoodType.Baking] = table.newarray(ItemTag.BAKING_FAT, ItemTag.OIL, ItemTag.FLOUR),
  [FoodType.Dish] = table.newarray(ItemTag.CAN_BE_DIVIDED_IN_BOWLS),
  [FoodType.Herb] = table.newarray(ItemTag.COMFREY, ItemTag.PLANTAIN, ItemTag.COMMON_MALLOW, ItemTag.WILD_GARLIC),
  [FoodType.Seafood] = table.newarray(ItemTag.FISH_MEAT, ItemTag.UNCUT_FISH),
  [FoodType.Spice] = table.newarray(ItemTag.SALT),
  [FoodType.Staple] = table.newarray(ItemTag.PASTA),
  [FoodType.Dairy] = table.newarray(ItemTag.CHEESE),
  [FoodType.Snack] = table.newarray(ItemTag.IS_SEED),
  [FoodType.Beverage] = nil,
  [FoodType.Bread] = nil,
  [FoodType.Candy] = nil,
  [FoodType.Canned] = nil,
  [FoodType.Condiment] = nil,
  [FoodType.Frozen] = table.newarray(ItemTag.GOOD_FROZEN),
  [FoodType.Meat] = nil,
  [FoodType.PetFood] = nil,
  [FoodType.Meal] = nil,
  [FoodType.Preserved] = nil,
  [FoodType.Produce] = nil
}

Food.FoodTypeMap = {
  NoExplicit = nil,

  BakingFat = FoodType.Baking,
  Oil = FoodType.Baking,
  Sugar = FoodType.Baking,
  Thickener = FoodType.Baking,

  Coffee = FoodType.Beverage,
  Tea = FoodType.Beverage,

  Chocolate = FoodType.Candy,

  Cheese = FoodType.Dairy,
  Egg = FoodType.Dairy,

  Herbal = FoodType.Herb,

  Bacon = FoodType.Meat,
  Beef = FoodType.Meat,
  Game = FoodType.Meat,
  Insect = FoodType.Meat,
  Meats = FoodType.Meat,
  Poultry = FoodType.Meat,
  Sausage = FoodType.Meat,
  Venison = FoodType.Meat,

  Cocoa = FoodType.Condiment,
  Dressing = FoodType.Condiment,
  Garnish = FoodType.Condiment,
  Sauce = FoodType.Condiment,
  Spread = FoodType.Condiment,

  CatFood = FoodType.PetFood,
  DogFood = FoodType.PetFood,

  Berry = FoodType.Produce,
  Citrus = FoodType.Produce,
  Fruits = FoodType.Produce,
  Greens = FoodType.Produce,
  HotPepper = FoodType.Produce,
  Mushroom = FoodType.Produce,
  Vegetable = FoodType.Produce,
  Vegetables = FoodType.Produce,

  Fish = FoodType.Seafood,
  Roe = FoodType.Seafood,

  Nut = FoodType.Snack,
  Seed = FoodType.Snack,

  Pepper = FoodType.Spice,
  Stock = FoodType.Spice,

  Bean = FoodType.Staple,
  Pasta = FoodType.Staple,
  Rice = FoodType.Staple,

  -- animal feed is handled by the Gardening categorizer
  AnimalFeed = FoodType._SKIP_,

  -- Any drink items not caught by the tags check should be skipped so FluidContainer can handle them
  Beer = FoodType._SKIP_,
  Champagne = FoodType._SKIP_,
  Juice = FoodType._SKIP_,
  Liquor = FoodType._SKIP_,
  Milk = FoodType._SKIP_,
  SoftDrink = FoodType._SKIP_,
  Wine = FoodType._SKIP_,

  -- generic modded names that may or may not exist in multiple mods
  Beans = FoodType.Staple,  -- vfx
  Drink = FoodType.Beverage, -- vfx pickle juice
  Fruit = FoodType.Produce, -- vfx
  Salt = FoodType.Spice     -- sapph
}

-- static item -> food type map
Food.ItemFoodTypeMap = {
  ["Base.ChickenFried"] = FoodType.Meat,
  ["Base.PancakeMix"] = FoodType.Baking,
  ["Base.Pumpkin"] = FoodType.Produce,
  ["Base.PumpkinSliced"] = FoodType.Produce,
  ["Base.PumpkinSmashed"] = FoodType.Produce,
  ["Base.Squash"] = FoodType.Produce,
}

-- expose FoodType table for mods
Food.FoodType = FoodType

---@param item   Item
---@param prefix string
---@return boolean
local function usesEvolvedRecipe(item, prefix)
  local recipes = item:getEvolvedRecipe()

  if not recipes then return false end

  for i = 0, recipes:size() - 1 do
    -- entries are "<recipe>:<amount>"
    if recipes:get(i):sub(1, #prefix) == prefix then
      return true
    end
  end

  return false
end

---@param item     Item
---@param instance Food?
---@return boolean
function Food:validate(item, instance)
  if instance and Utils.getFluidContainer(instance) then
    return false
  end

  -- mixes, tea bags and packs the game lists as food without being food items
  if not item:isItemType(ItemType.FOOD) then
    return Utils.getOriginalCategory(item) == BASE_CATEGORY
  end

  if not instanceof(instance, "Food") then
    return false
  end

  -- hot drinks are tagged alcoholic because liquor can be added to them
  if instance:getCustomMenuOption() == DRINK_MENU then
    return true
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

local instanceSpecificFoodTypes = table.newarray(FoodType.Dish, FoodType.Meal)

-- food types checked first, in priority order (Dish is checked separately before these)
local priorityFoodTypes = table.newarray(
  FoodType.Dish, FoodType.Seafood, FoodType.Dairy, FoodType.Spice, FoodType.Baking, FoodType.Herb
)

-- food types to skip in the fallback tag search
local alreadyCheckedFoodTypes = {}

for i = 1, #priorityFoodTypes do
  alreadyCheckedFoodTypes[priorityFoodTypes[i]] = true
end

alreadyCheckedFoodTypes[FoodType.Frozen] = true

local SERVING_EAT_TYPES = { ["2handbowl"] = true, bowl = true, plate = true, ["2hand"] = true }

---@param item Item
---@return Item | nil
local function getLeftover(item)
  local name = item:getReplaceOnUse()

  if not name then return nil end

  local scriptManager = getScriptManager()

  return scriptManager:FindItem(name) or scriptManager:FindItem(item:getModuleName() .. "." .. name)
end

-- what's left after eating tells the two apart: food in a pot or pan is a Dish to divide, food left in a bowl, plate
-- or mug is a Meal
---@param item     Item
---@param instance Food
---@param eatType  string | nil
---@return CAEC_FoodType | nil
local function getServingFoodType(item, instance, eatType)
  if eatType == "pot" then
    return FoodType.Dish
  end

  local isServed = eatType and SERVING_EAT_TYPES[eatType] and not instance:isSpice()

  if not item:getReplaceOnUse() then
    -- plated meals that leave nothing behind, whole cakes and pies get sliced in baking recipes instead
    if isServed and eatType == "plate" and not Recipes.isUsedInBaking(item) then
      return FoodType.Meal
    end

    return nil
  end

  local leftover = getLeftover(item)

  -- some mods leave behind dishware that doesn't exist (SapphCooking's PlateFancy)
  if not leftover then
    return isServed and FoodType.Meal or nil
  end

  -- tin cans and buckets are metal too, but not cookware
  if leftover:hasTag(ItemTag.HAS_METAL) then
    return Utils.getOriginalLootType(leftover) == "Cookware" and FoodType.Dish or nil
  end

  -- a bowl of sauce is a condiment, not a portion
  if not instance:isSpice() and (leftover:hasTag(ItemTag.BOWL) or isServed) then
    return FoodType.Meal
  end

  return nil
end

local resolving = {}

-- the food type of what an item unpacks or cooks into, for food without a type of its own
---@param self     CAEC_FoodCategorizer
---@param item     Item
---@param target   string | nil
---@return CAEC_FoodType | nil
local function getFoodTypeOf(self, item, target)
  local name = item:getFullName()

  if not target or resolving[name] then return nil end

  local targetItem = getScriptManager():FindItem(target)
  local targetInstance = targetItem and Utils.createInstanceIfNeeded(targetItem)

  if not targetInstance or not instanceof(targetInstance, "Food") then return nil end

  ---@cast targetInstance Food
  resolving[name] = true
  local ok, foodType = pcall(self.getFoodType, self, targetItem, targetInstance)
  resolving[name] = nil

  if not ok or foodType == FoodType._SKIP_ or foodType == FoodType.Dish or foodType == FoodType.Meal then
    return nil
  end

  return foodType
end

---@param instance Food
---@return string | nil
local function getCookedInto(instance)
  local cooked = instance:getReplaceOnCooked()

  return cooked and cooked:size() > 0 and cooked:get(0) or nil
end

-- evolved recipe bases also include tortillas and taco shells, only a filling base is a meal on its own
local MEAL_BASE_HUNGER = 0.2

---@param item     Item
---@param instance Food
---@return boolean
local function isMeal(item, instance)
  if item:isCantEat() then return false end

  local role = Recipes.getMealRole(item)

  return role == "result" or (role == "base" and -instance:getBaseHunger() >= MEAL_BASE_HUNGER)
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

  local gameFoodType = instance:getFoodType()
  -- validate already turned fluid containers away, so whatever has the drink menu here is drunk from the item itself
  local isDrink = instance:getCustomMenuOption() == DRINK_MENU and not instance:isSpice() and not item:isCantEat()

  -- before the eat type checks, batters are eaten from bowls
  if (not gameFoodType or gameFoodType == NO_EXPLICIT) and Recipes.isBakingIngredient(item) then
    return FoodType.Baking, false
  end

  if eatType then eatType = eatType:lower() end

  if eatType == "bottle" or item:getPourType() == "Mug" then
    -- hot drinks are food, not a fluid in a mug, broths are drunk too but are spices to the game
    if isDrink then
      return FoodType.Beverage, false
    end

    return FoodType._SKIP_, true
  end

  if Utils.hasAnyTag(item, tagMaps[FoodType.Frozen]) then
    return FoodType.Frozen, false
  end

  -- a hot drink in a metal mug is no dish
  foodType = not isDrink and getServingFoodType(item, instance, eatType) or nil

  if not foodType then
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
  foodType = foodType or gameFoodType

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
  elseif foodType == NO_EXPLICIT and item:getName():lower():contains("choco") then
    -- catch chocolate items
    foodType = FoodType.Candy
    -- elseif
    -- lipids ^ , unhappiness ^ thirst ^
  end

  ---@type CAEC_FoodType | nil
  local resolved = Food.FoodTypeMap[foodType] or foodType

  -- milk and juice are skipped for FluidContainer, but opened cans of them aren't fluid containers
  if resolved == FoodType._SKIP_ and isDrink then
    resolved = FoodType.Beverage
  end

  if resolved == FoodType._SKIP_ then
    return resolved, false
  elseif resolved and nil == FoodType[resolved] then
    if resolved ~= "NoExplicit" then
      self:log(
        "Unrecognized food type '" .. tostring(resolved) .. "' for item: " .. item:getFullName(),
        Debug.Level.Warning
      )
    end

    resolved = nil
  end

  if instance:isSpice() and resolved ~= FoodType.Herb then
    -- resolve condiments/spices and stock
    -- condiments are spices to the game too, so only dried ones count as spice
    if item:hasTag(ItemTag.DRIED_FOOD) then
      -- includes bouillon cubes
      resolved = FoodType.Spice
    elseif not resolved then
      resolved = FoodType.Condiment
    end
  elseif not instance:canAge() and not isDrink
    and (Recipes.isCannedFood(item)
      or (item:hasTag(ItemTag.HAS_METAL) and Utils.getOriginalLootType(item) == "CannedFood")) then
    resolved = FoodType.Canned
  elseif item:hasTag(ItemTag.VERMIN) or instance:getCustomEatSound() == "EatingDeadAnimal" then
    resolved = FoodType.Meat
  end

  if not resolved then
    resolved = getFoodTypeOf(self, item, BoxContents.getFoodContents(item:getFullName()))
  end

  if not resolved then
    resolved = getFoodTypeOf(self, item, getCookedInto(instance))

    -- dough that bakes into bread
    if resolved == FoodType.Bread then
      resolved = FoodType.Baking
    end
  end

  if not resolved and item:isCantEat() then
    resolved = getFoodTypeOf(self, item, Recipes.getOpenedInto(item))
  elseif not resolved and isDrink then
    -- condiments and pots of stew have the drink menu too, so only as a last resort
    resolved = FoodType.Beverage
  elseif not resolved then
    resolved = self:guessFoodOrSnack(item, instance)
  end

  if (not resolved or resolved == FoodType.Snack) and isMeal(item, instance) then
    resolved = FoodType.Meal
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
    return nil
  end

  local thirst = round(instance:getThirstChange() / weight, 1)

  if thirst > 1 then
    return nil
  end

  local calories = round(instance:getCalories() / weight, 1)
  local proteins = round(instance:getProteins() / weight, 1)

  if calories >= 300 and unhappiness <= 0 then
    if proteins > 0.0 then
      return FoodType.Snack
    else
      return FoodType.Candy
    end
  end

  return nil
end


---@param self CAEC_FoodCategorizer
---@param item Item
---@return string | nil
local function categorizeNonFood(self, item)
  if usesEvolvedRecipe(item, HOT_DRINK_RECIPE) then
    return BASE_CATEGORY .. FoodType.Beverage
  end

  if Recipes.isMadeIntoCookable(item) then
    return BASE_CATEGORY .. FoodType.Baking
  end

  local target = Recipes.getUnpackedInto(item)
  local targetItem = target and getScriptManager():FindItem(target)

  return targetItem and self:resolveCategory(item, targetItem) or nil
end

function Food:categorize(item, instance)
  if not instanceof(instance, "Food") then
    return categorizeNonFood(self, item), false
  end

  local foodType, instanceSpecific = self:getFoodType(item, instance)

  if FoodType._SKIP_ == foodType then
    return nil, true
  end

  -- dedicated bait (tadpoles, leeches, fish guts) has no food type of its own
  local isBait = not foodType and (instance:isFishingLure() or usesEvolvedRecipe(item, CHUM_RECIPE))

  if isBait then
    if item:isCantEat() then
      return BAIT_CATEGORY, false
    end

    foodType = FoodType.Seafood
  end

  if item:isCantEat() then
    -- crops like wheat sheaves and grain get processed, not cooked, the game calls the grain a seed (snack)
    if (not foodType or foodType == FoodType.Snack) and Recipes.isFarmingInput(item) then
      return FARMING_CATEGORY, false
    end

    foodType = foodType or FoodType.Preparation
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

  if isBait then
    category = category .. "__" .. BAIT_CATEGORY
  end

  -- not item:isMedicalLoot(), that reads the display category CAEC replaces
  if Utils.getOriginalCategory(item) == "FirstAid" then
    -- medicinal herbs have no calories but rot or have a food type, so keep them with food
    if foodType or instance:canAge() or instance:getCalories() > 0 then
      category = category .. "__FirstAid"
    else
      -- is first aid, no nutritional value, skip
      category = nil
    end
  end

  return category, instanceSpecific
end

return Food
