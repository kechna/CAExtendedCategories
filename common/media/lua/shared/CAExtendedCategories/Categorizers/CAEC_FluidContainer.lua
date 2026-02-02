local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_FluidContainer : CAEC_ItemCategorizer
---@field searchTags ItemTag[]
local FluidContainer = CAEC_ItemCategorizer:derive("FluidContainer")
function FluidContainer:new()
  ---@type CAEC_FluidContainer
  local o = CAEC_ItemCategorizer.new(self)

  o.verbosity = Debug.Level.Debug
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

  self:log("checking tags")
  return Utils.HasAnyTag(item, self.searchTags)
end

function FluidContainer:categorize(item, instance)
  if not instance then
    return nil, true
  end

  local fluidContainer = instance:getFluidContainer()

  if fluidContainer:isEmpty() then
    return "ContainerLiquid", true
  end

  local category = nil
  local primaryFluid = fluidContainer:getPrimaryFluid()
  local fluidType = primaryFluid:getFluidType()
  local fluidTypeString = primaryFluid:getFluidTypeString()

  if not primaryFluid:isCategory(FluidCategory.Beverage) then
    return nil, true
  end

  if primaryFluid:isCategory(FluidCategory.Water) then
    category = "BeverageWater";
  elseif primaryFluid:isCategory(FluidCategory.Alcoholic) then
    category = "BeverageAlcohol";
  elseif fluidType:equals(FluidType.CowMilk)
      or fluidType:equals(FluidType.SheepMilk)
      or fluidType:equals(FluidType.AnimalMilk)
  then
    category = "BeverageMilk";
  elseif fluidType:equals(FluidType.Coffee) then
    category = "BeverageCoffee";
  elseif fluidType:equals(FluidType.Tea)
      or item:hasTag(ItemTag.HERBAL_TEA) then
    category = "BeverageTea";
  elseif fluidType:equals(FluidType.Soda)
      or fluidTypeString:contains("Soda")
  then
    category = "BeverageSoftDrink";
  elseif fluidType:equals(FluidType.SpiffoJuice)
      or fluidTypeString:contains("Juice")
  then
    category = "BeverageJuice";
  elseif fluidType:equals(FluidType.Beer) then
    category = "BeverageBeer";
  elseif fluidType:equals(FluidType.Wine) then
    category = "BeverageWine";
  else
    category = "Beverage";
  end

  if category
      and fluidContainer:isMixture()
      and fluidContainer:isCategory(FluidCategory.Alcoholic) then
    category = "BeverageCocktail";
  end

  return category, true
end
return FluidContainer
