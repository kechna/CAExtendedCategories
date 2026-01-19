local Debug = {}

---@type boolean
Debug.VerboseLogging = false

---@param message string
---@param suffix string?
function Debug.log(message, suffix)
  if not Debug.VerboseLogging then return end

  local prefix = suffix ~= nil and ('[CAEC:' .. suffix .. '] ') or '[CAEC] '
  print(prefix, message);
end

local function safeCall(object, methodName, ...)
  if object and type(object[methodName]) == 'function' then
    return object[methodName](object, ...)
  else
    Debug.log('Method "' .. methodName .. '" does not exist on the given object.', "safeCall")
    return nil
  end
end

---@param item Item
local function reportItem(item)
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
      Debug.log( prop .. " = " .. tostring(value), "report")
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
    Debug.log("Learned Recipes: " .. learnedRecipesString, 'report')
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
    Debug.log("Tags: " .. tagsString, "report")
  end
end

---@param instance InventoryItem
local function reportInstanceItem(instance)
  local properties = {
    "IsDrainable",
    "IsFood",
    "IsInventoryContainer",
    "isWaterSource",
    "IsClothing",
    "isFluidContainer",
    "isEmptyOfFluid",
    "getAmmoType",
    "getAnimalFeedType",
    "getAttachedSlotType",
    "getAttachmentType",
    "getBloodClothingType",
    "getCoverType",
    "getDigType",
    "getEatType",
    "getFabricType",
    "getGameEntityType",
    "getGunType",
    "getJobType",
    "getLootType",
    "getMakeUpType",
    "getMechanicType",
    "getMediaType",
    "getPourType",
    "getReplaceOnUseFullType",
    "getShoutType",
    "getStringItemType",
  }

  if instanceof(instance, "Literature") then
    ---@cast instance Literature
    Debug.log("--- Instance is Literature ---", "report:instance")
    properties[#properties + 1] = "containsBuildRecipe"
    properties[#properties + 1] = "containsCraftOrBuildRecipe"
    properties[#properties + 1] = "containsCraftRecipe"
    properties[#properties + 1] = "containsGrowingSeason"
    properties[#properties + 1] = "containsMiscRecipe"
    properties[#properties + 1] = "getCategory"
    end


  if instanceof(instance, "Food") then
    ---@cast instance Food
    Debug.log("--- Instance is Food ---", "report:instance")
    properties[#properties + 1] = "getFoodType"
    properties[#properties + 1] = "getHerbalistType"
    properties[#properties + 1] = "getMilkType"
    properties[#properties + 1] = "canAge"
    properties[#properties + 1] = "canBeFrozen"
    properties[#properties + 1] = "getCategory"
    properties[#properties + 1] = "getMilkQty"
    properties[#properties + 1] = "getOnCooked"
    properties[#properties + 1] = "getOnEat"
    properties[#properties + 1] = "getPainReduction"
    properties[#properties + 1] = "getSpices"
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
      Debug.log( prop .. " = " .. tostring(value), "report:instance")
    end
  end
end

---@param itemName string
---@param item Item
---@param instance InventoryItem|nil
function Debug.report(itemName, item, instance)
  if not Debug.VerboseLogging then return end

  Debug.log("----------------------", "report")
  Debug.log("--- " .. itemName .. " ---", "report")

  reportItem(item)
  reportInstanceItem(instance or instanceItem(item:getFullName()))
end

return Debug
