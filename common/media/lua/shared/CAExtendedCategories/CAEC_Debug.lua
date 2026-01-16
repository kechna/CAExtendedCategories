local Data = require("CAExtendedCategories/CAEC_Data")


local Debug = {}

function safeCall(object, methodName, ...)
  if object and type(object[methodName]) == 'function' then
    return object[methodName](object, ...)
  else
    Debug.log('Method "' .. methodName .. '" does not exist on the given object.')
    return nil
  end
end

---@param item Item
function reportItem(item)
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
function reportInstanceItem(instance)
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

---@param message string
function Debug.log(message)
  if not Data.VerboseLogging then return end

  print('[CAEC] ' .. message);
end

function Debug.report(itemName, item, instance)
  if not Data.VerboseLogging then return end

  Debug.log("----------------------")
  Debug.log("--- " .. itemName .. " ---")

  reportItem(item)
  reportInstanceItem(instance)
end

return Debug
