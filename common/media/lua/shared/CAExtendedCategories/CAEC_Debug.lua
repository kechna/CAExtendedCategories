local Debug = {}

Debug.Level = {
  Debug = 0,
  Info = 1,
  Warning = 2,
  Error = 3,
  Disabled = 4,
}

Debug.Verbosity = Debug.Level.Warning

Debug.ItemProperties = {
  getDisplayCategory = "",
  getDoubleClickRecipe = "",
  getAmmoType = "",
  getBloodClothingType = "",
  getDigType = "",
  getEatType = "",
  getFabricType = "",
  getHerbalistType = "",
  getItemType = "",
  getLootType = "",
  getPourType = "",
  getReadType = "",
  getShoutType = "",

  getBodyLocation = "",
  getClothingItem = "",
  getLevelSkillTrained = -1,
  getSkillTrained = "",
  isCanBandage = "",
  isIsCookable = "",
}

Debug.InstanceProperties = {
  _default = {
    getStringItemType = "",
    getAmmoType = "",
    getAnimalFeedType = "",
    getAttachedSlotType = "",
    getAttachmentType = "",
    getBloodClothingType = "",
    getCoverType = "",
    getDigType = "",
    getFabricType = "",
    --"getGameEntityType" = ",
    getGunType = "",
    getJobType = "",
    getLootType = "",
    getMakeUpType = "",
    getMechanicType = "",
    getMediaType = "",
    getReplaceOnUseFullType = "",
    getShoutType = "",
    IsDrainable = "",
    IsInventoryContainer = "",
    isWaterSource = "",
    --"IsClothing" = ",
    isFluidContainer = "",
    isEmptyOfFluid = "",
  },
  Clothing = {
    getCategory = "Clothing",
    getBiteDefense = 0,
    getBulletDefense = 0,
    getScratchDefense = 0,
    --"getCanHaveHoles" = ",
    --"getChanceToFall" = ",
    --"getClothingDirtynessIncreaseLevel" = ",
    --"getClothingExtraSubmenu" = ",
    --"getCondLossPerHole" = ",
    --"getConditionLowerChance" = ",
    getCorpseSicknessDefense = 0,
    getInsulation = 0,
    --"getFilterType" = ",
    --"getNbrOfCoveredParts" = ",
    --"getPatchesNumber" = ",
    getCombatSpeedModifier = 1,
    getNeckProtectionModifier = 1,
    getRunSpeedModifier = 1,
    getDiscomfortModifier = 0,

    getCoveredParts = "",
    --"getSpriteName" = ",
    --"getStompPower" = ",
    --"getTankType" = ",
    --"getTemperature" = ",
    --"getWaterResistance" = ",
    --"getWetness" = ",
    --"getWindresistance" = ",
  },
  Food = {
    getEatType = "",
    getPourType = "",
    getFoodType = "",
    getHerbalistType = "",
    getMilkType = "",
    canAge = "",
    canBeFrozen = "",
    getCategory = "Food",
    getMilkQty = 0,
    getOnCooked = "",
    getOnEat = "",
    getPainReduction = 0,
    getSpices = "",
    getUseOnConsume = "",
    hasAnimalParts = "",
    isAnimalSkeleton = "",
    isBadCold = "",
    isBadInMicrowave = "",
    isCookedInMicrowave = "",
    isFertilized = "",
    isFood = "",
    isGoodHot = "",
    isNormalAndFullFood = "",
    isPackaged = "",
    isRemoveNegativeEffectOnCooked = "",
    isSpice = "",
    isWholeFoodItem = "",
  },
  --Literature = {
  --  getMediaType = "",
  --  containsBuildRecipe = "",
  --  containsCraftOrBuildRecipe = "",
  --  containsCraftRecipe = "",
  --  getCategory = "",
  --},
}

---@param level number
---@return boolean
function Debug.isLevel(level)
  return Debug.Verbosity <= level
end

---@param message string
---@param suffix string?
function Debug.log(message, suffix, level)
  level = level or Debug.Level.Debug

  if not Debug.isLevel(level) then return end

  if suffix then
    local prefix = '[CAEC:' .. suffix .. ']'
    print(string.format("%-24s %s", prefix, message));
  else
    local prefix = '[CAEC]'
    print(string.format("%s %s", prefix, message));
  end
end

local function safeCall(object, methodName, ...)
  if object and type(object[methodName]) == 'function' then
    return object[methodName](object, ...)
  else
    Debug.log('Method "' .. methodName .. '" does not exist on the given object.', "safeCall")
    return nil
  end
end

---@param obj any
---@param properties table
---@param suffix string
local function reportProperties(obj, properties, suffix)
  for prop, defaultValue in pairs(properties) do
    local value = safeCall(obj, prop)

    if value and value ~= defaultValue then
      Debug.log(prop .. " = " .. tostring(value), suffix)
    end
  end
end


---@param item Item
function Debug.reportItem(item)
  reportProperties(item, Debug.ItemProperties, "report:item")

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
    Debug.log("Learned Recipes: " .. learnedRecipesString, "report:item")
  end

  local tags = item:getTags()
  local it = tags:iterator()
  local tagsString = ""
  local hasNext = it:hasNext()
  while hasNext do
    ---@type ItemTag|nil
    local tag = it:next()
    hasNext = it:hasNext()
    if tag and instanceof(tag, "ItemTag") then
      tagsString = tagsString .. tag:toString()
    end
    if hasNext then tagsString = tagsString .. ", " end
  end

  if tagsString ~= "" then
    Debug.log("Tags: " .. tagsString, "report:item")
  end
end

---@param instance InventoryItem?
---@param includeDefault boolean?
function Debug.reportInventoryItem(instance, includeDefault)
  if not instance then return end

  if includeDefault then
    reportProperties(instance, Debug.InstanceProperties._default, "report:instance")
  end

  for typeName, properties in pairs(Debug.InstanceProperties) do
    if instanceof(instance, typeName) then
      Debug.log("--- Instance: " .. instance:getName() .. " = " .. typeName .. " ---", "report:instance")
      reportProperties(instance, properties, "report:instance")
    end
  end
end

---@param str string
---@param item Item
---@param instance InventoryItem|nil|false
function Debug.report(str, item, instance)
  if not Debug.isLevel(Debug.Level.Debug) then return end

  Debug.log("----------------------", "report")
  Debug.log("--- " .. str, "report")
  Debug.log("----------------------", "report")

  Debug.reportItem(item)
  Debug.reportInventoryItem(instance or (instance == nil and instanceItem(item:getFullName()) or nil))
end

return Debug
