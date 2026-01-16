local NONE = "__NONE__"

local verboseLogging = true
local ItemTweaks = {};
local BodyLocation = {
  Bottom = "ClothingBottom",
  Feet = "ClothingFeet",
  FullBody = "ClothingFullBody",
  Hands = "ClothingHands",
  Head = "ClothingHead",
  Top = "ClothingTop",
}

---@type ScriptManager
local scriptManager = getScriptManager()

Events.OnGameStart.Add(function()
  scriptManager = scriptManager or getScriptManager()
end)


---@param message string
local function log(message)
  print('CAEC: ' .. message);
end

---@param message string
local function debug(message)
  --if not verboseLogging then return end
  log(message)
end

local function safeCall(object, methodName, ...)
  if object and type(object[methodName]) == 'function' then
    return object[methodName](object, ...)
  else
    debug('Method "' .. methodName .. '" does not exist on the given object.')
    return nil
  end
end

---@param item Item
local function reportItem(item)
  if not verboseLogging then return end

  local properties = {
    "getDisplayCategory",
    "getDoubleClickRecipe",
    "getAmmoType",
    "getBloodClothingType",
    "getDigType",
    "getEatType",
    "getFabricType",
    "getHerbalistType",
    "getItemType",
    "getLootType",
    "getPourType",
    "getReadType",
    "getShoutType",

    "getAcceptItemFunction",
    "getBodyLocation",
    "getClothingItem",
    "getLevelSkillTrained",
    "getSkillTrained",
    "getWithDrainable",
    "isCanBandage",
    "isIsCookable",
  }

  for _, prop in ipairs(properties) do
    local value = safeCall(item, prop)

    if value ~= nil and value ~= '' then
      print('        ', prop, " = ", tostring(value))
    end
  end

  ---@type List<string>|nil
  local learnedRecipes = item:getLearnedRecipes()

  if learnedRecipes then
    local amt = learnedRecipes:size()
    local learnedRecipesString = ""
    for i = 0, amt - 1 do
      local recipe = learnedRecipes:get(i)
      learnedRecipesString = learnedRecipesString .. recipe
      if i < amt - 1 then
        learnedRecipesString = learnedRecipesString .. ", "
      end
    end
    print('        ', 'Learned Recipes: ', learnedRecipesString)
  end

  local tags = item:getTags()
  local it = tags:iterator()
  local tagsString = ""
  local hasNext = it:hasNext()
  while hasNext do
    ---@type ItemTag
    local tag = it:next()
    hasNext = it:hasNext()
    tagsString = tagsString .. tag:toString()
    if hasNext then tagsString = tagsString .. ", " end
  end

  if tagsString ~= "" then
    print('        ', 'Tags: ', tagsString)
  end
end

---@param instance InventoryItem
local function reportInstanceItem(instance)
  if not verboseLogging then return end

  local properties = {
    "IsDrainable",
    "IsFood",
    "IsInventoryContainer",
    "isWaterSource",
    "IsClothing",
    "isFluidContainer",
    "isEmptyOfFluid",
  }

  if instanceof(instance, "Food") then
    properties[#properties + 1] = "canAge"
    properties[#properties + 1] = "canBeFrozen"
    properties[#properties + 1] = "getCategory"
    properties[#properties + 1] = "getChef"
    properties[#properties + 1] = "getFoodType"
    properties[#properties + 1] = "getHerbalistType"
    properties[#properties + 1] = "getMaxUses"
    properties[#properties + 1] = "getMilkQty"
    properties[#properties + 1] = "getMilkType"
    properties[#properties + 1] = "getOnCooked"
    properties[#properties + 1] = "getOnEat"
    properties[#properties + 1] = "getPainReduction"
    properties[#properties + 1] = "getPoisonDetectionLevel"
    properties[#properties + 1] = "getPoisonLevelForRecipe"
    properties[#properties + 1] = "getPoisonPower"
    properties[#properties + 1] = "getSpices"
    properties[#properties + 1] = "getUseForPoison"
    properties[#properties + 1] = "getUseOnConsume"
    properties[#properties + 1] = "hasAnimalParts"
    properties[#properties + 1] = "isAnimalSkeleton"
    properties[#properties + 1] = "isBadCold"
    properties[#properties + 1] = "isBadInMicrowave"
    properties[#properties + 1] = "isCookedInMicrowave"
    properties[#properties + 1] = "isFertilized"
    properties[#properties + 1] = "isFood"
    properties[#properties + 1] = "isGoodHot"
    properties[#properties + 1] = "isNormalAndFullFood"
    properties[#properties + 1] = "isPackaged"
    properties[#properties + 1] = "isRemoveNegativeEffectOnCooked"
    properties[#properties + 1] = "isSpice"
    properties[#properties + 1] = "isWholeFoodItem"
  end

  for _, prop in ipairs(properties) do
    local value = safeCall(instance, prop)

    if value ~= nil and value then
      print('        ', "instance:", prop, " = ", value)
    end
  end
end

---@param item Item
---@return string|nil
local function categorizeLiterature(item)
  local category = nil

  if item:hasTag(ItemTag.CONSUME_ON_READ) then
    category = "LiteratureConsumable";
  elseif item:hasTag(ItemTag.NEWSPAPER) then
    category = "LiteratureNewspaper";
  elseif item:hasTag(ItemTag.PICTUREBOOK) then
    category = "LiteraturePictureBook";
  elseif item:hasTag(ItemTag.FANCY_BOOK) then
    category = "LiteratureFancyBook";
  elseif item:hasTag(ItemTag.SOFTCOVER) then
    category = "LiteratureSoftcover";
  elseif item:hasTag(ItemTag.HARDCOVER) then
    category = "LiteratureHardcover";
  elseif item:hasTag(ItemTag.MAGAZINE) then
    if item:getLearnedRecipes() ~= nil then
      category = "SkillMagazine";
    else
      category = "LiteratureMagazine";
    end
  else
    local itemName = item:getName()

    if itemName == "Brochure" then
      category = "LiteratureBrochure";
    elseif itemName == "Flier" then
      category = "LiteratureFlier";
    end
  end

  return category
end

---@param item Item
---@return string|nil
local function categorizeClothing(item)
  local category = nil

  if item:isBodyLocation(ItemBodyLocation.PANTS)
      or item:isBodyLocation(ItemBodyLocation.PANTS_SKINNY) then
    category = BodyLocation.Bottom;
  elseif item:isBodyLocation(ItemBodyLocation.SHOES)
      or item:isBodyLocation(ItemBodyLocation.SOCKS) then
    category = BodyLocation.Feet;
  elseif item:isBodyLocation(ItemBodyLocation.BODY_COSTUME)
      or item:isBodyLocation(ItemBodyLocation.FULL_SUIT) then
    category = BodyLocation.FullBody;
  elseif item:isBodyLocation(ItemBodyLocation.HANDS)
      or item:isBodyLocation(ItemBodyLocation.HANDS_LEFT)
      or item:isBodyLocation(ItemBodyLocation.HANDS_RIGHT) then
    category = BodyLocation.Hands;
  elseif item:isBodyLocation(ItemBodyLocation.FULL_HAT)
      or item:isBodyLocation(ItemBodyLocation.HAT) then
    category = BodyLocation.Head;
  elseif item:isBodyLocation(ItemBodyLocation.JACKET)
      or item:isBodyLocation(ItemBodyLocation.JACKET_BULKY)
      or item:isBodyLocation(ItemBodyLocation.JACKET_DOWN)
      or item:isBodyLocation(ItemBodyLocation.JACKET_SUIT)
      or item:isBodyLocation(ItemBodyLocation.SHIRT)
      or item:isBodyLocation(ItemBodyLocation.TSHIRT) then
    category = BodyLocation.Top;
  end

  return category
end

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil
local function categorizeFluidContainer(item, instance)
  if not instance then return nil end

  local category = nil

  debug("> Fluid Container: " .. item:getName())

  if instance:isEmptyOfFluid() then
    category = "ContainerLiquid";
  else
    local fluidContainer = instance:getFluidContainerFromSelfOrWorldItem()
    local fluid = fluidContainer:getPrimaryFluid()
    local fluidType = fluid:getFluidType()
    debug("    Fluid: " .. fluid:getDisplayName())
    debug("    FluidType: " .. fluidType:toString())

    if fluidType == FluidType.Water
        or fluidType == FluidType.CarbonatedWater
        or fluidType == FluidType.TaintedWater
    then
      category = "BeverageWater";
    elseif fluidType == FluidType.CowMilk
        or fluidType == FluidType.SheepMilk
        or fluidType == FluidType.AnimalMilk
    then
      category = "BeverageMilk";
    elseif fluidType == FluidType.Coffee then
      category = "BeverageCoffee";
    elseif fluidType == FluidType.Tea
        or item:hasTag(ItemTag.HERBAL_TEA) then
      category = "BeverageTea";
    elseif fluidType == FluidType.SodaPop
        or fluidType == FluidType.SpiffoJuice
    then
      category = "BeverageSoda";
    elseif fluidType == FluidType.Beer then
      category = "BeverageBeer";
    elseif fluidType == FluidType.Wine then
      category = "BeverageWine";
    elseif fluidType == FluidType.Alcohol
        or fluidType == FluidType.Whiskey
        or fluidType == FluidType.Mead
        or item:hasTag(ItemTag.ALCOHOLIC_BEVERAGE)
    then
      category = "BeverageAlcohol";
    elseif fluid:isCategory(FluidCategory.Beverage) then
      category = "BeverageDrink";
    end
  end

  return category
end

---@param item Item
---@return string|nil, boolean
local function categorizeFood(item, instance)
  local category = nil
  local instanceSpecific = false
  local removeInstance = false

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
  else
    local eatType = item:getEatType()

    if eatType == "2handbowl"
        or eatType == "Bowl"
        or eatType == "Plate"
        or eatType == "Pot"
    then
      category = "FoodServing";
    else
      instanceSpecific = true
      if not instance then
        removeInstance = true
        instance = instanceItem(item:getFullName())
        debug("> Creating temporary instance for food item: " .. item:getName())
      end

      ---@type Food
      local foodItem = instance
      ---@type string|nil
      local foodType = foodItem:getFoodType()

      if foodItem:canAge() then
        if foodType then
          category = "Food" .. foodType .. "Perishable"
          print('> Food Type: ' .. category)
        else
          category = "FoodPerishable"
        end
      elseif foodItem:isSpice() then
        if foodType then
          category = "Food" .. foodType
        elseif eatType == "GlugFood"
            or eatType == "Candrink" then
          category = "FoodCondiment"
        else
          category = "FoodSpice";
        end
      elseif foodItem:getLootType() == "CannedFood" and item:hasTag(ItemTag.HAS_METAL) then
        category = "FoodCanned";
      end
    end

    if not category then
      if item:hasTag(ItemTag.DRIED_FOOD) then
        category = "FoodDried";
      else
        local foodType = instance:getFoodType()

        if foodType then
          category = "Food" .. foodType
        end
      end
    end

    if instance and removeInstance then instance:Remove() end
  end

  return category, instanceSpecific
end

---@param item Item
---@param logging boolean
---@return string|nil
local function categorizeItem(item, logging, instance)
  ---@type string|nil
  local category = nil;
  local itemName = item:getName();
  local instanceSpecific = false

  if item:isItemType(ItemType.CLOTHING) then
    category = categorizeClothing(item)
  elseif item:isItemType(ItemType.LITERATURE) then
    category = categorizeLiterature(item)
  elseif item:isItemType(ItemType.FOOD) then
    category, instanceSpecific = categorizeFood(item, instance)
  elseif item:containsComponent(ComponentType.FluidContainer) then
    category = categorizeFluidContainer(item, instance)
    instanceSpecific = true
  elseif item:getDoubleClickRecipe() == "OpenBoxOfCannedFood" then
    category = "FoodBoxed";
  elseif item:isItemType(ItemType.DRAINABLE) then
    debug(itemName .. ' is Drainable')
  end

  if not instanceSpecific then
    ItemTweaks[itemName] = category or NONE
  end

  if category then
    debug("> " .. itemName .. ' -> ' .. category)
    item:DoParam("DisplayCategory", category)
  end

  if not category and logging then
    debug("----------------------")
    debug("--- " .. itemName .. " ---")
    reportItem(item)
    reportInstanceItem(instance or instanceItem(item:getFullName()))
  end

  return category
end

local function updateItemsByName()
  scriptManager = scriptManager or getScriptManager()

  for itemName, newCategory in pairs(ItemTweaks) do
    local item = scriptManager:getItem(itemName)

    if item ~= nil and newCategory ~= NONE then
      item:DoParam("DisplayCategory", newCategory)
    end
  end
end

---@param items ArrayList<InventoryItem>
local function categorizeItemInstances(items)
  -- cache categories for same item in multiple quantities
  local cache = {}

  for i = 0, items:size() - 1 do
    local item = items:get(i)
    local itemName = item:getName()

    if ItemTweaks[itemName] == nil then
      local category = cache[itemName] or categorizeItem(item:getScriptItem(), verboseLogging, item)

      if category and category ~= NONE then
        debug("  > " .. itemName .. ' -> ' .. category)
        item:setDisplayCategory(category)
      end

      if not cache[itemName] then
        cache[itemName] = category or NONE
      end
    else
      debug("  > " .. itemName .. " is cached -> " .. ItemTweaks[itemName])
    end
  end
end

local function categorizeInventory()
  local player = getPlayer()
  local inventory = player:getInventory()
  local items = inventory:getItems()

  categorizeItemInstances(items)
end

local function categorizeAllItems()
  local items = getAllItems()

  for i = 0, items:size() - 1 do
    local item = items:get(i)
    categorizeItem(item, verboseLogging)
  end

  updateItemsByName()
end

---@param _roomType string
---@param _containerType string
---@param container ItemContainer
local function categorizeContainerItems(_roomType, _containerType, container)
  categorizeItemInstances(container:getItems())
end

---
-- Recipe cooking override
---
local defaultAddItemInRecipeComplete = ISAddItemInRecipe.complete

function ISAddItemInRecipe:complete()
  local result = defaultAddItemInRecipeComplete(self)
  debug("> Re-categorizing item after recipe complete: " .. self.baseItem:getName())
  categorizeFood(self.baseItem:getScriptItem(), self.baseItem)
  return result
end

---
-- Eating food override (drink)
---
local defaultEatFoodActionComplete = ISEatFoodAction.complete

function ISEatFoodAction:complete()
  local result = defaultEatFoodActionComplete(self)

  if self.character:getInventory():contains(self.item) then
    print("> Re-categorizing item after eating food: " .. self.item:getName())
    categorizeFood(self.item:getScriptItem(), self.item)
  else
    print("> Item fully consumed after eating: " .. self.item:getName())
  end

  return result
end

CAExtendedCategories = CAExtendedCategories or {}
CAExtendedCategories.CategorizeInventory = categorizeInventory
CAExtendedCategories.CategorizeAllItems = categorizeAllItems
CAExtendedCategories.CategorizeItem = categorizeItem

Events.OnGameBoot.Add(categorizeAllItems)
Events.OnGameStart.Add(categorizeInventory)
Events.OnFillContainer.Add(categorizeContainerItems)
