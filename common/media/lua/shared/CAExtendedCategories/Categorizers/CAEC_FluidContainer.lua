local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_FluidContainer: CAEC_ItemCategorizer
---@field searchTags ItemTag[]
local Fluid = CAEC_ItemCategorizer:derive("FluidContainer")

Fluid.tags = table.newarray(
  ItemTag.GLASS_BOTTLE, ItemTag.GLASS_BOTTLE_SMALL, ItemTag.SEALED_BEVERAGE_CAN, ItemTag.EMPTY_CAN,
  ItemTag.ALCOHOLIC_BEVERAGE
)

---@enum CAEC_FluidType
Fluid.FluidType = {
  Beer = "Beer",
  Coffee = "Coffee",
  Juice = "Juice",
  Milk = "Milk",
  Soda = "Soda",
  Tea = "Tea",
  Wine = "Wine",
  -- not in vanilla
  EnergyDrink = "EnergyDrink"
}

---@param ... string
---@return table<string, boolean>
local fluidSet = function (...)
  local set = {}

  for _, name in ipairs({ ... }) do
    set[name:lower()] = true
  end

  return set
end

--- Lowercase fluid names per category. Modded fluids all share FluidType.Modded, so matching is done on
--- Fluid:getFluidTypeString() instead of the FluidType enum.
---@type table<CAEC_FluidType, table<string, boolean>>
Fluid.FluidTypeMap = {
  [Fluid.FluidType.Beer] = fluidSet("Beer"),
  [Fluid.FluidType.Coffee] = fluidSet("Coffee"),
  [Fluid.FluidType.Juice] = fluidSet("SpiffoJuice"),
  [Fluid.FluidType.Milk] = fluidSet("AnimalMilk", "CowMilk", "SheepMilk"),
  [Fluid.FluidType.Soda] = fluidSet("SodaPop"),
  [Fluid.FluidType.Tea] = fluidSet("Tea"),
  [Fluid.FluidType.Wine] = fluidSet("Wine"),
  [Fluid.FluidType.EnergyDrink] = fluidSet("EnergyDrink")
}

---@param fluidType string Fluid name as defined in the fluid script, e.g. "VFX_HomemadeBeer"
---@param category  CAEC_FluidType
function Fluid.registerFluidType(fluidType, category)
  if type(fluidType) ~= "string" or not Fluid.FluidTypeMap[category] then
    Debug.log(
      string.format("Failed to register fluid type %s for category %s", tostring(fluidType), tostring(category)), "Fluid"
    )
    return
  end

  Fluid.FluidTypeMap[category][fluidType:lower()] = true
end

function Fluid:validate(item, instance)
  if not item:isItemType(ItemType.NORMAL) then
    return false
  end

  if instance ~= nil then
    return Utils.getFluidContainer(instance) ~= nil
  end

  if item:getPourType() ~= "" then
    return true
  end

  return Utils.hasAnyTag(item, self.tags)
end

function Fluid:categorize(item, instance)
  if not instance then
    return nil, true
  end

  ---@type string | nil
  local category = nil

  local container = Utils.getFluidContainer(instance)
  ---@cast container FluidContainer
  local containerName = container:getContainerName():lower()

  if container:isEmpty() then
    category = "ContainerLiquid"

    if containerName == "pot" or containerName == "pan" or containerName == "saucepan" then
      category = "CookingPan"
    elseif containerName == "cup" or containerName:contains("mug") or containerName:contains("glass") then
      category = "CookingCup"
    end

    return category, true
  end

  local fluid = container:getPrimaryFluid()
  local fluidTypeString = fluid:getFluidTypeString():lower()

  if fluidTypeString == "cookingoil" then
    category = "Cooking__Liquid"
  elseif fluidTypeString == "cleaningliquid" or fluidTypeString == "bleach" then
    category = "Household__Liquid"
  elseif fluid:isCategory(FluidCategory.Dyes) then
    category = "LiquidDye"
  elseif fluid:isCategory(FluidCategory.HairDyes) then
    category = "Appearance__Liquid"
  elseif fluid:isCategory(FluidCategory.Fuel) then
    category = "LiquidFuel"
  elseif fluid:isCategory(FluidCategory.Medical) then
    category = "FirstAid__Liquid"
  elseif fluid:isCategory(FluidCategory.Poisons) or fluid:isCategory(FluidCategory.Industrial) then
    -- perfume, cologne = poison, not sure what industrial is
    category = "Liquid"
  end

  if category then
    return category, true
  end

  if fluid:isCategory(FluidCategory.Water) then
    category = "BeverageWater"
  elseif fluidTypeString:contains("milk") or self.FluidTypeMap.Milk[fluidTypeString] then
    category = "BeverageMilk"
  elseif self.FluidTypeMap.Coffee[fluidTypeString] then
    category = "BeverageCoffee"
  elseif item:hasTag(ItemTag.HERBAL_TEA) or self.FluidTypeMap.Tea[fluidTypeString] then
    category = "BeverageTea"
  elseif fluidTypeString:contains("soda") or fluidTypeString:contains("cola")
    or fluidTypeString:contains("gingerale") or self.FluidTypeMap.Soda[fluidTypeString] then
    category = "BeverageSoftDrink"
  elseif fluidTypeString:contains("juice") or self.FluidTypeMap.Juice[fluidTypeString] then
    category = "BeverageJuice"
  elseif fluidTypeString:contains("energydrink") or self.FluidTypeMap.EnergyDrink[fluidTypeString] then
    category = "BeverageEnergyDrink"
  elseif self.FluidTypeMap.Beer[fluidTypeString] then
    category = "BeverageBeer"
  elseif self.FluidTypeMap.Wine[fluidTypeString] then
    category = "BeverageWine"
  elseif fluid:isCategory(FluidCategory.Alcoholic) then
    category = "BeverageAlcohol"
  else
    category = "Beverage"
  end

  if category and container:isMixture() and container:isCategory(FluidCategory.Alcoholic) then
    category = "BeverageCocktail"
  end

  return category, true
end

return Fluid
