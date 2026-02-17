local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_FluidContainer : CAEC_ItemCategorizer
---@field searchTags ItemTag[]
local FluidContainer = CAEC_ItemCategorizer:derive("FluidContainer")

function FluidContainer:new()
  ---@type CAEC_FluidContainer
  local o = CAEC_ItemCategorizer.new(self)

  o.searchTags = {
    ItemTag.GLASS_BOTTLE,
    ItemTag.GLASS_BOTTLE_SMALL,
    ItemTag.SEALED_BEVERAGE_CAN,
    ItemTag.GLASS_BOTTLE,
    ItemTag.EMPTY_CAN,
    ItemTag.ALCOHOLIC_BEVERAGE,
  }

  return o
end

function FluidContainer:validate(item, instance)
  if instance ~= nil then
    return instance:isFluidContainer()
  end

  if not item:isItemType(ItemType.NORMAL) then
    return false
  end

  if item:getPourType() ~= "" then
    return true
  end

  return Utils.HasAnyTag(item, self.searchTags)
end

function FluidContainer:categorize(item, instance)
  if not instance then
    return nil, true
  end

  ---@type string|nil
  local category = nil

  local container = instance:getFluidContainer()
  local containerName = container:getContainerName():lower()

  if container:isEmpty() then
    category = "ContainerLiquid"

    if containerName == "pot"
        or containerName == "pan"
        or containerName == "saucepan"
    then
      category = "CookingPan"
    elseif containerName == "cup"
        or containerName:contains("mug")
        or containerName:contains("glass")
    then
      category = "CookingCup"
    end

    return category, true
  end

  local fluid = container:getPrimaryFluid()
  local fluidType = fluid:getFluidType()
  local fluidTypeString = fluid:getFluidTypeString():lower()

  if fluid:isCategory(FluidCategory.Dyes) then
    category = "LiquidDye"
  elseif fluid:isCategory(FluidCategory.HairDyes) then
    category = "AppearanceOrLiquid"
  elseif fluid:isCategory(FluidCategory.Fuel) then
    category = "LiquidFuel"
  elseif fluid:isCategory(FluidCategory.Medical) then
    category = "FirstAidOrLiquid"
  elseif fluidTypeString == "cookingoil" then
    category = "CookingOrLiquid"
  elseif fluidTypeString == "cleaningliquid"
    or fluidTypeString == "bleach" then
    category = "HouseholdOrLiquid"
  end

  if category then
    return category, true
  end

  if fluid:isCategory(FluidCategory.Water) then
    category = "BeverageWater"
  elseif fluidType:equals(FluidType.CowMilk)
      or fluidType:equals(FluidType.SheepMilk)
      or fluidType:equals(FluidType.AnimalMilk)
      or fluidTypeString:contains("milk")
  then
    category = "BeverageMilk"
  elseif fluidType:equals(FluidType.Coffee) then
    category = "BeverageCoffee"
  elseif fluidType:equals(FluidType.Tea)
      or item:hasTag(ItemTag.HERBAL_TEA) then
    category = "BeverageTea"
  elseif fluidType:equals(FluidType.SodaPop)
      or fluidTypeString:contains("soda")
      or fluidTypeString:contains("cola")
      or fluidTypeString:contains("gingerale")
  then
    category = "BeverageSoftDrink"
  elseif fluidType:equals(FluidType.SpiffoJuice)
      or fluidTypeString:contains("juice")
  then
    category = "BeverageJuice"
  elseif fluidType:equals(FluidType.Beer) then
    category = "BeverageBeer"
  elseif fluidType:equals(FluidType.Wine) then
    category = "BeverageWine"
  elseif fluid:isCategory(FluidCategory.Alcoholic) then
    category = "BeverageAlcohol"
  elseif fluidTypeString:contains( --[[Sapph's Cooking]] "energydrink") then
    category = "BeverageEnergyDrink"
  else
    category = "Beverage"
  end

  if category
      and container:isMixture()
      and container:isCategory(FluidCategory.Alcoholic) then
    category = "BeverageCocktail"
  end

  return category, true
end

return FluidContainer
