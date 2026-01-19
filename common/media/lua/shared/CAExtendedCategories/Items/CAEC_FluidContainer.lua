local FluidContainer = {}

---@param item Item
---@param instance InventoryItem|nil
---@return string|nil, boolean
function FluidContainer.Categorize(item, instance)
  if not instance then return nil, true end

  local fluidContainer = instance:getFluidContainer()

  if fluidContainer:isEmpty() then
    return "ContainerLiquid", true
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

  return category, true
end

local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local Categorizer = CAEC_ItemCategorizer:derive("FluidContainer")

function Categorizer:validate(item, instance)
  if not item:isItemType(ItemType.NORMAL) then
    return false
  end

  if instance ~= nil then
    return instance:hasComponent(ComponentType.FluidContainer)
  end

  return item:hasTag(ItemTag.GLASS_BOTTLE)
      or item:hasTag(ItemTag.GLASS_BOTTLE_SMALL)
      or item:hasTag(ItemTag.SEALED_BEVERAGE_CAN)
      or item:hasTag(ItemTag.GLASS_BOTTLE)
end

function Categorizer:categorize(item, instance)
  return FluidContainer.Categorize(item, instance)
end

return Categorizer
