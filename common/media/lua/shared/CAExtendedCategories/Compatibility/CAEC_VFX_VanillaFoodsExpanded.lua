local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC = require("CAExtendedCategories/CAEC")
local Fluid = require("CAExtendedCategories/Categorizers/CAEC_FluidContainer")
local Static = require("CAExtendedCategories/Categorizers/CAEC_Static")
local Food = require("CAExtendedCategories/Categorizers/CAEC_Food")

if not Utils.modIsActive("VanillaFoodsExpanded") then return end

local getScriptManager = getScriptManager

local ARCHIVE_SUFFIX = "_2"

-- VFX keeps replaced items in an archive for old saves, every one has a "<name>_2" replacement that recipes use
---@param item Item
---@return string | nil, boolean
local function categorizeArchived(item)
  if item:getModuleName() ~= "VFX" then return nil, false end

  local replacement = getScriptManager():FindItem(item:getFullName() .. ARCHIVE_SUFFIX)

  if not replacement then return nil, false end

  local category = CAEC.categorizeItem(replacement)

  -- the archived versions of food are often normal items that don't spoil
  if category and not item:isItemType(ItemType.FOOD) then
    category = category:gsub("^FoodPerishable", "Food")
  end

  return category, false
end

CAEC.registerInitHook("Mod:VanillaFoodsExpanded", function ()
  CAEC.registerCategorizer("VFX:Archive", categorizeArchived, 2)

  Food.registerFoodType("Pasta", Food.FoodType.Staple)

  Food.registerFoodTypeTag("VFX:Frosting", Food.FoodType.Condiment)
  Food.registerFoodTypeTag("VFX:AnyFlour", Food.FoodType.Baking)
  Food.registerFoodTypeTag("VFX:BeerBottle", Food.FoodType._SKIP_)
  Food.registerFoodTypeTag("VFX:BouillionCube", Food.FoodType.Spice)
  Food.registerFoodTypeTag("VFX:Cereal", Food.FoodType.Snack)
  Food.registerFoodTypeTag("VFX:DivideBowls", Food.FoodType.Dish)
  Food.registerFoodTypeTag("VFX:DivideCanBowls", Food.FoodType.Dish)
  Food.registerFoodTypeTag("VFX:DivideFoodContainer", Food.FoodType.Dish)
  Food.registerFoodTypeTag("VFX:DividePlates", Food.FoodType.Dish)
  Food.registerFoodTypeTag("VFX:EvaporatedMilk", Food.FoodType._SKIP_)
  Food.registerFoodTypeTag("VFX:GroundMeat", Food.FoodType.Meat)
  Food.registerFoodTypeTag("VFX:Icecream", Food.FoodType.Frozen)
  -- Food.registerFoodTypeTag("VFX:MakesGroundBeef", nil)
  Food.registerFoodTypeTag("VFX:Meatball", Food.FoodType.Meat)
  -- Food.registerFoodTypeTag("VFX:NutritionTarget", nil)
  Food.registerFoodTypeTag("VFX:Pasta", Food.FoodType.Staple)
  Food.registerFoodTypeTag("VFX:Patty", Food.FoodType.Meat)
  Food.registerFoodTypeTag("VFX:Pitcher", Food.FoodType._SKIP_)
  Food.registerFoodTypeTag("VFX:PizzaDough", Food.FoodType.Baking)
  Food.registerFoodTypeTag("VFX:ProteinShaker", Food.FoodType._SKIP_)
  Food.registerFoodTypeTag("VFX:Rice", Food.FoodType.Staple)
  Food.registerFoodTypeTag("VFX:Sausage", Food.FoodType.Meat)
  Food.registerFoodTypeTag("VFX:SourdoughStarter", Food.FoodType.Baking)
  Food.registerFoodTypeTag("VFX:StarterBlue", Food.FoodType.Dairy)
  Food.registerFoodTypeTag("VFX:StarterFrench", Food.FoodType.Dairy)
  Food.registerFoodTypeTag("VFX:StarterMesophilic", Food.FoodType.Dairy)
  Food.registerFoodTypeTag("VFX:StarterParmesan", Food.FoodType.Dairy)
  Food.registerFoodTypeTag("VFX:StarterSwiss", Food.FoodType.Dairy)
  Food.registerFoodTypeTag("VFX:StarterThermophilic", Food.FoodType.Snack)
  Food.registerFoodTypeTag("VFX:Toast", Food.FoodType.Snack)
  Food.registerFoodTypeTag("VFX:TraditionalFlour", Food.FoodType.Baking)
  Food.registerFoodTypeTag("VFX:VinegarStarter", Food.FoodType._SKIP_)
  -- Food.registerFoodTypeTag("VFX:Whey", nil)
  Food.registerFoodTypeTag("VFX:Yeast", Food.FoodType.Baking)

  -- items
  Food.registerItemFoodType("VFX.BatteredChicken", Food.FoodType.Meat)
  -- these have the drink menu and no food type, so they would be beverages
  Food.registerItemFoodType("VFX.HomemadeVinegar", Food.FoodType.Condiment)
  Food.registerItemFoodType("VFX.HeavyCream", Food.FoodType.Dairy)
  Food.registerItemFoodType("VFX.HeavyCreamHomemade", Food.FoodType.Dairy)

  -- beverages that aren't Food items, so the food categorizer doesn't see them
  for _, itemType in ipairs({
    "VFX.DrinkMixCherry",
    "VFX.DrinkMixFruitPunch",
    "VFX.DrinkMixGrape",
    "VFX.DrinkMixLemonade",
    "VFX.DrinkMixPinkLemonade",
    "VFX.DrinkMixSweetTea",
    "VFX.BlackTeaBox",
    "VFX.BreakfastTeaBox",
    "VFX.ChamomileTeaBox",
    "VFX.EarlGrayTeaBox",
    "VFX.GingerTeaBox",
    "VFX.GreenTeaBox",
    "VFX.LemonTeaBox",
    "VFX.PeppermintTeaBox",
    "VFX.BananaProteinPowder",
    "VFX.ChocolateProteinPowder",
    "VFX.StrawberryProteinPowder",
    "VFX.VanillaProteinPowder",
  }) do
    Static.registerCategory(itemType, "FoodBeverage")
  end

  Static.registerCategory("FoodStorageContainerEmpty", "ContainerCooking")
  Static.registerCategory("MetalFoodStorageContainerEmpty", "ContainerCooking")

  ------
  -- fluids
  ------
  Fluid.registerFluid("BeverageSoftDrink", "VFX_CreamSoda")
  Fluid.registerFluid("BeverageSoftDrink", "VFX_LemonSoda")
  Fluid.registerFluid("BeverageSoftDrink", "VFX_LemonLimeSoda")
  Fluid.registerFluid("BeverageSoftDrink", "VFX_OrangeSoda")
  Fluid.registerFluid("BeverageSoftDrink", "VFX_VanillaCola")
  Fluid.registerFluid("BeverageSoftDrink", "VFX_CherryCola")
  Fluid.registerFluid("BeverageSoftDrink", "VFX_RootBeer")

  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsBerryBlast")
  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsFruitPunch")
  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsGrape")
  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsLemonLime")
  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsOrange")
  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsMelon")
  Fluid.registerFluid("BeverageEnergyDrink", "VFX_SportsWhiteCherry")

  Fluid.registerFluid("BeverageJuice", "VFX_JuiceGrapefruit")
  Fluid.registerFluid("BeverageJuice", "VFX_JuicePineapple")
  Fluid.registerFluid("BeverageJuice", "VFX_JuiceTropical")
  Fluid.registerFluid("BeverageJuice", "VFX_JuicePrune")
  Fluid.registerFluid("BeverageJuice", "VFX_LemonadeDrink")
  Fluid.registerFluid("BeverageJuice", "VFX_PinkLemonadeDrink")
  Fluid.registerFluid("BeverageJuice", "VFX_CherryDrink")
  Fluid.registerFluid("BeverageJuice", "VFX_GrapeDrink")
  Fluid.registerFluid("BeverageJuice", "VFX_FruitPunchDrink")

  Fluid.registerFluid("BeverageTea", "VFX_IcedTeaSweet")
  Fluid.registerFluid("BeverageTea", "VFX_IcedTeaLemon")
  Fluid.registerFluid("BeverageTea", "VFX_IcedTeaGreen")
  Fluid.registerFluid("BeverageTea", "VFX_IcedTeaPeach")
  Fluid.registerFluid("BeverageTea", "VFX_IcedTeaRaspberry")

  Fluid.registerFluid("BeverageMilk", "VFX_SoyMilk")
  Fluid.registerFluid("BeverageMilk", "VFX_ChocolateMilk")
  Fluid.registerFluid("BeverageMilk", "VFX_StrawberryMilk")
  Fluid.registerFluid("BeverageMilk", "VFX_BananaMilk")
  Fluid.registerFluid("BeverageMilk", "VFX_VanillaProteinShake")
  Fluid.registerFluid("BeverageMilk", "VFX_ChocolateProteinShake")
  Fluid.registerFluid("BeverageMilk", "VFX_StrawberryProteinShake")
  Fluid.registerFluid("BeverageMilk", "VFX_BananaProteinShake")

  Fluid.registerFluid("BeverageWine", "VFX_CabernetSauvignon")
  Fluid.registerFluid("BeverageWine", "VFX_Merlot")
  Fluid.registerFluid("BeverageWine", "VFX_PinotNoir")
  Fluid.registerFluid("BeverageWine", "VFX_Chardonnay")
  Fluid.registerFluid("BeverageWine", "VFX_SauvignonBlanc")
  Fluid.registerFluid("BeverageWine", "VFX_PinotGris")
  Fluid.registerFluid("BeverageWine", "VFX_Riesling")
  Fluid.registerFluid("BeverageWine", "VFX_HomemadeWine")

  Fluid.registerFluid("BeverageBeer", "VFX_AmericanLightLager")
  Fluid.registerFluid("BeverageBeer", "VFX_AmericanLager")
  Fluid.registerFluid("BeverageBeer", "VFX_Pilsner")
  Fluid.registerFluid("BeverageBeer", "VFX_ViennaLager")
  Fluid.registerFluid("BeverageBeer", "VFX_PaleAle")
  Fluid.registerFluid("BeverageBeer", "VFX_AmberAle")
  Fluid.registerFluid("BeverageBeer", "VFX_Porter")
  Fluid.registerFluid("BeverageBeer", "VFX_Stout")
  Fluid.registerFluid("BeverageBeer", "VFX_AmericanWheatBeer")
  Fluid.registerFluid("BeverageBeer", "VFX_HomemadeBeer")

  -- coffee additives, not drinks on their own
  Fluid.registerFluid("FoodBeverage", "VFX_CoffeeCreamerAlmond")
  Fluid.registerFluid("FoodBeverage", "VFX_CoffeeCreamerFrenchVanilla")
  Fluid.registerFluid("FoodBeverage", "VFX_CoffeeCreamerHazelnut")
  Fluid.registerFluid("FoodBeverage", "VFX_CoffeeCreamerIrishCream")
  Fluid.registerFluid("FoodBeverage", "VFX_CoffeeCreamerOriginal")
end)
