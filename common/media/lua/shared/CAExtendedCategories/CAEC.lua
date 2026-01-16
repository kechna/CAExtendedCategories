local Data = require("CAExtendedCategories/CAEC_Data")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Food = require("CAExtendedCategories/Items/CAEC_Food")

local CAEC = {}

CAEC.AddedCategories = {};
CAEC.InstanceSpecific = {};
CAEC.ItemTweaks = {};

CAEC_Global = CAEC_Global or {}

local NONE = "__NONE__"

function CAEC.LogCategories(total, categorized)
  if not Data.VerboseLogging then return end

  --print("=== Added Categories ===")
  --print("Total Items: ", tostring(total))
  --print("Categorized Items: ", tostring(categorized))
  --print("------------------------")
  --
  --local string1 = ""
  --for str1, _ in pairs(CAEC.AddedCategories) do
  --  string1 = string1 .. str1 .. ", "
  --end
  --print("Categories Added:")
  --print(string1)
  --
  --local string2 = ""
  --for str2, _ in pairs(CAEC.InstanceSpecific) do
  --  string2 = string2 .. str2 .. ", "
  --end
  --print("Instance Specific Items:")
  --print(string2)
  --print("========================")
end

Data.VerboseLogging = true

function CAEC.UpdateEnd()
  local ToSave = {}

  ToSave.AddedCategories = CAEC.AddedCategories
  ToSave.InstanceSpecific = CAEC.InstanceSpecific
  ToSave.ItemTweaks = CAEC.ItemTweaks

  CAEC_Global = ToSave
end

function CAEC.UpdateStart()
  local saved = CAEC_Global

  CAEC.AddedCategories = saved.AddedCategories or {}
  CAEC.InstanceSpecific = saved.InstanceSpecific or {}
  CAEC.ItemTweaks = saved.ItemTweaks or {}
end

---@param trigger string
function CAEC.CategorizeAllItems(trigger)
  CAEC.UpdateStart()
  Debug.log("[CAExtendedCategories] CATEGORIZING ALL ITEMS..." ..
    (trigger and (" (triggered by " .. trigger .. ")") or ""))

  local items = getAllItems()
  local total = items:size()
  --local categorized = 0

  for i = 0, total - 1 do
    local item = items:get(i)
    CAEC.CategorizeItem(item)

    --if category then
    --  categorized = categorized + 1
    --end
  end

  --CAEC.LogCategories(total, categorized)
  CAEC.UpdateEnd()
end

---@param item Item
---@return string|nil
function CAEC.CategorizeMaterial(item)
  local category = CAEC.CategorizeBasedOnRecipe(item)
  if category then return category end

  --print("> Material Item: ", item:getName())

  return category
end

---@param item Item
---@return string|nil
function CAEC.CategorizeLiterature(item)
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
function CAEC.CategorizeClothing(item)
  local category = nil

  if item:isBodyLocation(ItemBodyLocation.PANTS)
      or item:isBodyLocation(ItemBodyLocation.PANTS_SKINNY) then
    category = Data.BodyLocation.Bottom;
  elseif item:isBodyLocation(ItemBodyLocation.SHOES)
      or item:isBodyLocation(ItemBodyLocation.SOCKS) then
    category = Data.BodyLocation.Feet;
  elseif item:isBodyLocation(ItemBodyLocation.BODY_COSTUME)
      or item:isBodyLocation(ItemBodyLocation.FULL_SUIT) then
    category = Data.BodyLocation.FullBody;
  elseif item:isBodyLocation(ItemBodyLocation.HANDS)
      or item:isBodyLocation(ItemBodyLocation.HANDS_LEFT)
      or item:isBodyLocation(ItemBodyLocation.HANDS_RIGHT) then
    category = Data.BodyLocation.Hands;
  elseif item:isBodyLocation(ItemBodyLocation.FULL_HAT)
      or item:isBodyLocation(ItemBodyLocation.HAT) then
    category = Data.BodyLocation.Head;
  elseif item:isBodyLocation(ItemBodyLocation.JACKET)
      or item:isBodyLocation(ItemBodyLocation.JACKET_BULKY)
      or item:isBodyLocation(ItemBodyLocation.JACKET_DOWN)
      or item:isBodyLocation(ItemBodyLocation.JACKET_SUIT)
      or item:isBodyLocation(ItemBodyLocation.SHIRT)
      or item:isBodyLocation(ItemBodyLocation.TSHIRT) then
    category = Data.BodyLocation.Top;
  end

  return category
end

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil, boolean
function CAEC.CategorizeWeapon(item, instance)
  return nil, false
end

---@param item Item
---@return string|nil
function CAEC.CategorizeAmmo(item)
  if item:hasTag(ItemTag.RIFLE_MAGAZINE) or item:hasTag(ItemTag.PISTOL_MAGAZINE) then
    return "AmmoMagazine";
  end

  return nil
end

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil
function CAEC.CategorizeFluidContainer(item, instance)
  if not instance then return nil end

  local fluidContainer = instance:getFluidContainer()

  if fluidContainer:isEmpty() then
    return "ContainerLiquid";
  end

  local category = nil
  local primaryFluid = fluidContainer:getPrimaryFluid()
  local fluidType = primaryFluid:getFluidType()

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
  elseif primaryFluid:isCategory(FluidCategory.Beverage) then
    category = "BeverageDrink";
  end

  return category
end

function CAEC.CategorizeBasedOnRecipe(item)
  ---@type string|nil
  local recipe = item:getDoubleClickRecipe()
  if not recipe then return nil end

  local category = nil

  --print("> Item: ", item:getName(), " Recipe: ", recipe)
  local existingCategory = item:getDisplayCategory()
  --  print("> Existing Category: ", existingCategory)

  local suffix = nil

  if recipe == "unstack_items" then
    suffix = "Bundled";
  elseif Utils.EndsWith("Carton", recipe)
      and (Utils.StartsWith("Open", recipe)
        or Utils.StartsWith("Unpack", recipe)) then
    suffix = "Carton";
  elseif Utils.StartsWith("Unpack", recipe)
      or Utils.StartsWith("OpenBox", recipe)
      or Utils.StartsWith("TakeA", recipe) then
    suffix = "Box";
  end

  if suffix then
    category = Utils.EndsWith(suffix, existingCategory)
        and existingCategory
        or (existingCategory .. suffix)

    --    print("> Assigned Category from Recipe: ", category)
  end

  return category
end

---@param item Item
---@param instance InventoryItem|nil
function CAEC.CategorizeDynamicItem(item, instance)
  local category = CAEC.CategorizeBasedOnRecipe(item)

  if category then return category end

  if item:isItemType(ItemType.FOOD) then
    ---@cast instance Food
    category = Food.FromInstance(item, instance)
  else
    local resolved, cleanup = Utils.CreateInstanceIfNeeded(item, instance)

    if resolved:hasComponent(ComponentType.FluidContainer) then
      category = CAEC.CategorizeFluidContainer(item, resolved)
    end

    cleanup()
  end


  return category
end

---@param item Item
---@param instance InventoryItem|nil
---@param additionalLogging boolean|nil
---@return string|nil
function CAEC.CategorizeItem(item, instance, additionalLogging)
  local itemName = item:getName();

  ---@type string|nil
  local category = CAEC.ItemTweaks[itemName] or Data.StaticCategories[itemName];

  if additionalLogging then
    Debug.log("> Categorizing Item: " .. itemName ..
      (category and (" (cached as " .. category .. ")") or ""))
  end

  if NONE == category then
    return nil
  end

  local instanceSpecific = CAEC.InstanceSpecific[itemName] or false

  if not category then
    if instanceSpecific then
      --if not instance then
      --  Debug.log("> Skipping instance-specific item without instance: " .. itemName)
      --  return nil
      --end

      Debug.log("> Dynamic item: " .. itemName)
      category = CAEC.CategorizeDynamicItem(item, instance)
    else
      local lootType = item:getLootType()

      --    Debug.log("> Categorizing Item: " .. itemName .. " (LootType: " .. tostring(lootType) .. ")")
      if lootType == "Material" then
        category = CAEC.CategorizeMaterial(item)
      elseif lootType == "Ammo" then
        category = CAEC.CategorizeAmmo(item)
      elseif item:isItemType(ItemType.CLOTHING) then
        category = CAEC.CategorizeClothing(item)
      elseif item:isItemType(ItemType.LITERATURE) then
        category = CAEC.CategorizeLiterature(item)
      elseif item:isItemType(ItemType.WEAPON) then
        category, instanceSpecific = CAEC.CategorizeWeapon(item, instance)
      elseif item:isItemType(ItemType.FOOD) then
        category, instanceSpecific = Food.Categorize(item, instance)
      elseif item:isItemType(ItemType.NORMAL) then
        local resolved, cleanup = Utils.CreateInstanceIfNeeded(item, instance)

        if resolved:hasComponent(ComponentType.FluidContainer) then
          instanceSpecific = true
        end

        cleanup()
      end
    end

    -- Fallbacks
    if not category then
      --    Debug.log("> No category assigned yet, checking recipe-based categorization...")
      category = CAEC.CategorizeBasedOnRecipe(item)
    end

    if instanceSpecific then
      Debug.log("> Marking item as instance-specific: " .. itemName)
      CAEC.InstanceSpecific[itemName] = true
    else
      Debug.log("> Caching category for item: " .. itemName)
      CAEC.ItemTweaks[itemName] = category or NONE
    end
  end

  if category then
    if not instance then
      Debug.log("> " .. itemName .. ' -> ' .. category)
      item:DoParam("DisplayCategory", category)
    end

    CAEC.AddedCategories[category] = true
  end

  if not category and Data.VerboseLogging and additionalLogging then
    Debug.report(itemName, item, instance or instanceItem(item:getFullName()))
  end

  return category
end

---@param items ArrayList<InventoryItem>
---@param trigger string|nil
function CAEC.CategorizeInventoryItems(items, trigger)
  Debug.log("[CAExtendedCategories] CATEGORIZING INVENTORY ITEMS..." ..
    (trigger and (" (triggered by " .. trigger .. ")") or ""))
  CAEC.UpdateStart()

  local cache = {}
  local total = items:size()
  --local categorized = 0

  for i = 0, total - 1 do
    local item = items:get(i)
    local scriptItem = item:getScriptItem()
    local scriptItemName = scriptItem:getName()
    local itemName = item:getName()

    local category = cache[itemName] or CAEC.CategorizeItem(scriptItem, item, true)

    if category and category ~= NONE then
      item:setDisplayCategory(category)
      Debug.log("> Updated: " .. itemName .. " (" .. scriptItemName .. ") " .. " -> " .. category)
      --categorized = categorized + 1
    end

    if not cache[itemName] then
      cache[itemName] = category or NONE
    end
  end

  --CAEC.LogCategories(total, categorized)
  CAEC.UpdateEnd()
end

--local item = getScriptManager():getItem("WaterBottle")
--print(require("CAExtendedCategories/CAEC").CategorizeItem(item))

--require("CAExtendedCategories/CAEC_ClientEvents").CategorizePlayerInventory(getPlayer())

return CAEC
