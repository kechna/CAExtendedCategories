local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_FluidContainer: CAEC_ItemCategorizer
---@field searchTags ItemTag[]
local Fluid = CAEC_ItemCategorizer:derive("FluidContainer")

Fluid.tags = table.newarray(
  ItemTag.GLASS_BOTTLE,
  ItemTag.GLASS_BOTTLE_SMALL,
  ItemTag.SEALED_BEVERAGE_CAN,
  ItemTag.EMPTY_CAN,
  ItemTag.ALCOHOLIC_BEVERAGE
)

--- lowercase fluid name -> category. Modded fluids are FluidType.Modded, so matching is done on
--- `Fluid:getFluidTypeString()` instead of the FluidType enum. Checked before any other rule.
---@type table<string, string?>
Fluid.FluidTypes = {
  -- beverages
  ["animalmilk"] = "BeverageMilk",
  ["beer"] = "BeverageBeer",
  ["coffee"] = "BeverageCoffee",
  ["cowmilk"] = "BeverageMilk",
  ["energydrink"] = "BeverageEnergyDrink",
  ["sheepmilk"] = "BeverageMilk",
  ["sodapop"] = "BeverageSoftDrink",
  ["spiffojuice"] = "BeverageJuice",
  ["tea"] = "BeverageTea",
  ["wine"] = "BeverageWine",

  -- non-beverages
  ["bleach"] = "Household__Liquid",
  ["cleaningliquid"] = "Household__Liquid",
  ["cookingoil"] = "Cooking__Liquid",
  ["simplesyrup"] = "FoodNoExplicit",
}

---@param category  string Category for containers holding this fluid, e.g. "BeverageSoftDrink"
---@param fluidType string Fluid name as defined in the fluid script, e.g. "VFX_HomemadeBeer"
function Fluid.registerFluid(category, fluidType)
  if type(category) ~= "string" or type(fluidType) ~= "string" then
    Debug.log(
      string.format("Failed to register fluid type %s for category %s", tostring(fluidType), tostring(category)),
      "Fluid",
      Debug.Level.Warning
    )
    return
  end

  Fluid.FluidTypes[fluidType:lower()] = category
end

---@param fluidType string
---@return string | nil
function Fluid.getCategory(fluidType)
  return Fluid.FluidTypes[fluidType:lower()]
end

-- some mods give their liquor an `alcohol` property but leave out the Alcoholic category, so check both

---@param fluid Fluid
---@return boolean
local function isAlcoholicFluid(fluid)
  if fluid:isCategory(FluidCategory.Alcoholic) then return true end

  local properties = fluid:getProperties()

  return properties ~= nil and properties:getAlcohol() > 0
end

---@param container FluidContainer
---@return boolean
local function isAlcoholicContainer(container)
  if container:isCategory(FluidCategory.Alcoholic) then return true end

  local properties = container:getProperties()

  return properties ~= nil and properties:getAlcohol() > 0
end

---@param category  string
---@param container FluidContainer
---@return string
local function withCocktail(category, container)
  if container:isMixture() and isAlcoholicContainer(container) then
    return "BeverageCocktail"
  end

  return category
end

function Fluid:validate(item, instance)
  if not item:isItemType(ItemType.NORMAL) and not item:isItemType(ItemType.FOOD) then
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

  category = self.FluidTypes[fluidTypeString]

  if category then
    if Utils.startsWith("Beverage", category) then
      return withCocktail(category, container), true
    end

    return category, true
  end

  if fluid:isCategory(FluidCategory.Dyes) then
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
  elseif fluidTypeString:contains("milk") then
    category = "BeverageMilk"
  elseif item:hasTag(ItemTag.HERBAL_TEA) then
    category = "BeverageTea"
  elseif
    fluidTypeString:contains("soda")
    or fluidTypeString:contains("cola")
    or fluidTypeString:contains("gingerale")
  then
    category = "BeverageSoftDrink"
  elseif fluidTypeString:contains("juice") then
    category = "BeverageJuice"
  elseif fluidTypeString:contains("energydrink") then
    category = "BeverageEnergyDrink"
  elseif isAlcoholicFluid(fluid) then
    category = "BeverageAlcohol"
  else
    category = "Beverage"
  end

  return withCocktail(category, container), true
end

return Fluid
