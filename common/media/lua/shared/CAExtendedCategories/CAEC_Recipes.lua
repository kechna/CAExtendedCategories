local Processors = require("CAExtendedCategories/CAEC_Processors")

local Recipes = {}

local BAKING_CATEGORY = "Baking"
local FARMING_CATEGORY = "Farming"
-- pie dough also goes into a few recipes that only move it into a pan
local COOKABLE_USE_SHARE = 0.5
local CHUM_RECIPE = "AddBaitToChum"
local OPEN_CAN_ACTION = "OpenTinCan"
-- some cans only have vanilla's knife recipe, which mods copy by name
local OPEN_CAN_RECIPE = "OpenCannedFood"

---@type table<string, boolean> | nil
local bakingIngredients = nil

--- everything a baking recipe uses up, including finished cakes that get sliced or frosted
---@type table<string, boolean>
local bakingUses = {}

---@param recipe CraftRecipe
---@return boolean
local function hasCookableOutput(recipe)
  local outputs = recipe:getOutputs()

  for i = 0, outputs:size() - 1 do
    local items = outputs:get(i):getPossibleResultItems()

    if items then
      for j = 0, items:size() - 1 do
        if items:get(j):isIsCookable() then
          return true
        end
      end
    end
  end

  return false
end

-- mixes can't be eaten as-is, batters are carried over (InheritFoodAge) into something that still needs baking,
-- while finished cakes and pies only go into baking recipes that slice or frost them
---@return table<string, boolean>
local function buildBakingIngredients()
  local result = {}
  local recipes = getScriptManager():getAllCraftRecipes()

  for i = 0, recipes:size() - 1 do
    local recipe = recipes:get(i)

    if recipe:getCategory() == BAKING_CATEGORY then
      local carriesIntoCookable = nil
      local inputs = recipe:getInputs()

      for j = 0, inputs:size() - 1 do
        local input = inputs:get(j)
        local items = not input:isKeep() and not input:isTool() and input:getPossibleInputItems()

        if items then
          if carriesIntoCookable == nil then
            carriesIntoCookable = hasCookableOutput(recipe)
          end

          local carried = carriesIntoCookable and input:hasFlag(InputFlag.InheritFoodAge)

          for k = 0, items:size() - 1 do
            local item = items:get(k)

            bakingUses[item:getFullName()] = true

            if item:isCantEat() or (carried and not item:isIsCookable()) then
              result[item:getFullName()] = true
            end
          end
        end
      end
    end
  end

  return result
end

local SAVORY_FOOD_TYPES = { Meat = true, Seafood = true, Fish = true, Egg = true, Vegetables = true, Cheese = true }
local SWEET_FOOD_TYPES = { Fruits = true, Sugar = true, Candy = true, Chocolate = true, Snack = true }

---@type table<string, "result" | "base"> | nil
local mealItems = nil

---@param fullType string
---@param cache table<string, string | false>
---@return string | false
local function getIngredientFoodType(fullType, cache)
  local foodType = cache[fullType]

  if foodType == nil then
    local instance = instanceItem(fullType)

    foodType = instance and instance.getFoodType and instance:getFoodType() or false
    cache[fullType] = foodType
  end

  return foodType
end

---@param fullType string | nil
---@return string | nil
local function withModule(fullType)
  if not fullType or fullType == "" then return nil end

  return fullType:find(".", 1, true) and fullType or ("Base." .. fullType)
end

-- burgers, tacos and pizza take meat and vegetables, doughnuts and pancakes take fruit and sugar
---@return table<string, "result" | "base">
local function buildMealItems()
  local result = {}
  local cache = {}
  local recipes = getScriptManager():getAllEvolvedRecipesList()

  for i = 0, recipes:size() - 1 do
    local recipe = recipes:get(i)
    local items = recipe:getPossibleItems()
    local savory, sweet = 0, 0

    -- chum is fish bait, not a meal
    if recipe:getUntranslatedName() == CHUM_RECIPE then items = nil end

    for j = 0, (items and items:size() or 0) - 1 do
      local foodType = getIngredientFoodType(items:get(j):getFullType(), cache)

      if SAVORY_FOOD_TYPES[foodType] then
        savory = savory + 1
      elseif SWEET_FOOD_TYPES[foodType] then
        sweet = sweet + 1
      end
    end


    if savory > 0 and savory >= sweet * 3 then
      local base = withModule(recipe:getBaseItem())
      local res = withModule(recipe:getFullResultItem())

      if base and not result[base] then result[base] = "base" end
      if res then result[res] = "result" end
    end
  end

  return result
end

---@type table<string, boolean> | nil
local cannedFood = nil

---@return table<string, boolean>
local function buildCannedFood()
  local result = {}
  local recipes = getScriptManager():getAllCraftRecipes()

  for i = 0, recipes:size() - 1 do
    local recipe = recipes:get(i)

    local action = recipe:getTimedActionScript()

    if (action and action:getName() == OPEN_CAN_ACTION) or recipe:getName():find(OPEN_CAN_RECIPE, 1, true) then
      local inputs = recipe:getInputs()

      for j = 0, inputs:size() - 1 do
        local input = inputs:get(j)
        local items = not input:isKeep() and not input:isTool() and input:getPossibleInputItems()

        for k = 0, (items and items:size() or 0) - 1 do
          result[items:get(k):getFullName()] = true
        end
      end
    end
  end

  return result
end

---@type table<string, boolean> | nil
local farmingInputs = nil

--- sealed food -> the edible food that opening it gives
---@type table<string, string> | nil
local openedInto = nil

--- anything a recipe uses up when it is the only thing used up -> the first other item it gives
---@type table<string, string> | nil
local unpackedInto = nil

--- how many recipes use an item up, and how many of those give food that still needs cooking
---@type table<string, integer> | nil
local useCount = nil
---@type table<string, integer>
local cookableUseCount = {}

---@param recipe  CraftRecipe
---@param exclude string
---@return string | nil
local function getEdibleFoodOutput(recipe, exclude)
  local outputs = recipe:getOutputs()

  for i = 0, outputs:size() - 1 do
    local items = outputs:get(i):getPossibleResultItems()

    for j = 0, (items and items:size() or 0) - 1 do
      local item = items:get(j)

      if item:isItemType(ItemType.FOOD) and not item:isCantEat() and item:getFullName() ~= exclude then
        return item:getFullName()
      end
    end
  end

  return nil
end

---@param recipe  CraftRecipe
---@param exclude string
---@return string | nil
local function getOtherOutput(recipe, exclude)
  local outputs = recipe:getOutputs()

  for i = 0, outputs:size() - 1 do
    local items = outputs:get(i):getPossibleResultItems()

    for j = 0, (items and items:size() or 0) - 1 do
      local name = items:get(j):getFullName()

      if name ~= exclude then return name end
    end
  end

  return nil
end

--- input -> result for recipes like "open box" that map each input to its own result, nil for other recipes
---@param recipe CraftRecipe
---@return table<string, Item> | nil
local function getMappedResults(recipe)
  local outputs = recipe:getOutputs()
  local mapped = nil

  for i = 0, outputs:size() - 1 do
    local mapper = outputs:get(i):getOutputMapper()
    local results = mapper and mapper:getResultItems()

    for j = 0, (results and results:size() or 0) - 1 do
      local result = results:get(j)
      local inputs = mapper:getPatternForResult(result)

      for k = 0, (inputs and inputs:size() or 0) - 1 do
        mapped = mapped or {}
        mapped[inputs:get(k):getFullName()] = result
      end
    end
  end

  return mapped
end

local function buildTransforms()
  farmingInputs = {}
  openedInto = {}
  unpackedInto = {}
  useCount = {}
  cookableUseCount = {}

  local recipes = getScriptManager():getAllCraftRecipes()

  for i = 0, recipes:size() - 1 do
    local recipe = recipes:get(i)
    local isFarming = recipe:getCategory() == FARMING_CATEGORY
    local inputs = recipe:getInputs()
    local consumed = nil
    local count = 0
    local cookable = hasCookableOutput(recipe)
    -- shared recipes like "open box" list every possible result as an output
    local mapped = getMappedResults(recipe)

    for j = 0, inputs:size() - 1 do
      local input = inputs:get(j)
      local items = not input:isKeep() and not input:isTool() and input:getPossibleInputItems()

      if items and items:size() > 0 then
        count = count + 1
        consumed = items

        for k = 0, items:size() - 1 do
          local name = items:get(k):getFullName()

          if isFarming then farmingInputs[name] = true end

          local result = mapped and mapped[name]

          useCount[name] = (useCount[name] or 0) + 1

          if (result and result:isIsCookable()) or (not mapped and cookable) then
            cookableUseCount[name] = (cookableUseCount[name] or 0) + 1
          end
        end
      end
    end

    -- opening only uses up the sealed item itself
    if count == 1 then
      for k = 0, consumed:size() - 1 do
        local item = consumed:get(k)
        local name = item:getFullName()

        if item:isCantEat() and not openedInto[name] then
          openedInto[name] = getEdibleFoodOutput(recipe, name)
        end

        if not unpackedInto[name] then
          local result = mapped and mapped[name]

          unpackedInto[name] = result and result:getFullName() or (not mapped and getOtherOutput(recipe, name)) or nil
        end
      end
    end
  end
end

function Recipes.build()
  bakingUses = {}
  bakingIngredients = buildBakingIngredients()
  mealItems = buildMealItems()
  cannedFood = buildCannedFood()
  buildTransforms()
end

---@param item Item
---@return boolean
function Recipes.isUsedInBaking(item)
  bakingIngredients = bakingIngredients or buildBakingIngredients()

  return bakingUses[item:getFullName()] == true
end

--- Whether `item` is consumed by a baking recipe as a mix or batter.
---@param item Item
---@return boolean
function Recipes.isBakingIngredient(item)
  bakingIngredients = bakingIngredients or buildBakingIngredients()

  return bakingIngredients[item:getFullName()] == true
end

--- Whether `item` is the base (`"base"`) or result (`"result"`) of an evolved recipe for a savory meal.
---@param item Item
---@return "result" | "base" | nil
function Recipes.getMealRole(item)
  mealItems = mealItems or buildMealItems()

  return mealItems[item:getFullName()]
end

--- Whether `item` is opened like a tin can.
---@param item Item
---@return boolean
function Recipes.isCannedFood(item)
  cannedFood = cannedFood or buildCannedFood()

  return cannedFood[item:getFullName()] == true
end

--- Whether a farming recipe uses up `item`, like threshing a wheat sheaf.
---@param item Item
---@return boolean
function Recipes.isFarmingInput(item)
  if not farmingInputs then buildTransforms() end

  return farmingInputs[item:getFullName()] == true
end

--- The edible food a recipe turns inedible `item` into when it uses up nothing else, like opening a sealed jar.
---@param item Item
---@return string | nil
function Recipes.getOpenedInto(item)
  if not openedInto then buildTransforms() end

  return openedInto[item:getFullName()]
end

--- The item that `item` is only ever turned into, by a recipe that uses up nothing else, like taking a filter from
--- a pack.
---@param item Item
---@return string | nil
function Recipes.getUnpackedInto(item)
  if not useCount then buildTransforms() end

  local name = item:getFullName()

  return useCount[name] == 1 and unpackedInto[name] or nil
end

--- Whether most recipes that use up `item` make food that still needs cooking, like pancake mix and pie dough.
---@param item Item
---@return boolean
function Recipes.isMadeIntoCookable(item)
  if not useCount then buildTransforms() end

  local name = item:getFullName()
  local count = cookableUseCount[name]

  return count ~= nil and count >= useCount[name] * COOKABLE_USE_SHARE
end

Processors.registerInitHook("Recipes", Recipes.build, 100)

return Recipes
