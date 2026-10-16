local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC = require("CAExtendedCategories/CAEC")

local Food = require("CAExtendedCategories/Categorizers/CAEC_Food")
local Fluid = require("CAExtendedCategories/Categorizers/CAEC_FluidContainer")
local Static = require("CAExtendedCategories/Categorizers/CAEC_Static")

if not Utils.modIsActive("SapphCooking_B42") then return end

CAEC.registerInitHook("Mod:SapphCooking", function ()
  -- no body location for the chef aprons: they're all containers, so the Container categorizer handles them
  -- (ContainerWearable), and the location isn't in the Human group anyway

  Food.registerFoodType("Cachaca", Food.FoodType._SKIP_)
  -- curry powder
  Food.registerFoodType("Curry", Food.FoodType.Spice)
  Food.registerFoodType("Hotsauce", Food.FoodType.NoExplicit)
  Food.registerFoodType("Ice", Food.FoodType.NoExplicit)

  Food.registerFoodType("Gin", Food.FoodType._SKIP_)
  Food.registerFoodType("Liqueur", Food.FoodType._SKIP_)
  Food.registerFoodType("Rum", Food.FoodType._SKIP_)
  Food.registerFoodType("Sake", Food.FoodType._SKIP_)
  Food.registerFoodType("Salt", Food.FoodType.Spice)
  Food.registerFoodType("Tequila", Food.FoodType._SKIP_)
  Food.registerFoodType("Vodka", Food.FoodType._SKIP_)

  Food.registerFoodTypeTag("sapphcooking:coffeecup", Food.FoodType._SKIP_)
  Food.registerFoodTypeTag("sapphcooking:juice", Food.FoodType._SKIP_)
  Food.registerFoodTypeTag("sapphcooking:custombottles", Food.FoodType._SKIP_)

  Food.registerFoodTypeTag("sapphcooking:baconeggspan", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:beans", Food.FoodType.Staple)
  Food.registerFoodTypeTag("sapphcooking:beef", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:beets", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:berry", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:bread", Food.FoodType.Bread)
  Food.registerFoodTypeTag("sapphcooking:carrot", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:chicken", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:chocolate", Food.FoodType.Candy)
  Food.registerFoodTypeTag("sapphcooking:citrus", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:cookedrice", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:dontreturnbowl", Food.FoodType.Portion)
  Food.registerFoodTypeTag("sapphcooking:icing", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:iscake", Food.FoodType.Snack)
  Food.registerFoodTypeTag("sapphcooking:meltedchocolate", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:mincedmeat", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:mushroom", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:pastrycream", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:peas", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:pepper", Food.FoodType.Spice)
  Food.registerFoodTypeTag("sapphcooking:pork", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:potato", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:returnbowl", Food.FoodType.Portion)
  Food.registerFoodTypeTag("sapphcooking:returnsaucepan", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:returnwokpan", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:ricegrain", Food.FoodType.Staple)
  Food.registerFoodTypeTag("sapphcooking:salt", Food.FoodType.Spice)
  Food.registerFoodTypeTag("sapphcooking:sausage", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:slicedvegetables", Food.FoodType.Produce)
  Food.registerFoodTypeTag("sapphcooking:sourcream", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:soysauce", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:syrup", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:turkey", Food.FoodType.Meat)

  -- these depend on other tags or properties
  -- Food.registerFoodTypeTag("sapphcooking:isrisotto", nil)
  -- Food.registerFoodTypeTag("sapphcooking:oilpan", nil)
  -- Food.registerFoodTypeTag("sapphcooking:oilpanbig", nil)

  -- seems removed but keeping for compatibility just in case
  Food.registerFoodTypeTag("sapphcooking:broth", Food.FoodType.Spice)
  Food.registerFoodTypeTag("sapphcooking:eggboiled", Food.FoodType.Dairy)

  Food.registerItemFoodType("SapphCooking.SapphCroissant", Food.FoodType.Bread)
  Food.registerItemFoodType("SapphCooking.CroissaintDough", Food.FoodType.Baking)
  Food.registerItemFoodType("SapphCooking.CanofPowderedMilk", Food.FoodType.Dairy)

  -- beverages
  Food.registerItemFoodType("SapphCooking.Drinkmix_Apple", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Grape", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Lemon", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Orange", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Peach", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Pineapple", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Strawberry", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.Drinkmix_Watermelon", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.CanofProteinPowder", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.GrindedCoffee", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.HotChocolate", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.HotChocolate2", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.HotChocolate3", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.HotChocolate4", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.EnergyDrink", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.BeverageMilkshake", Food.FoodType.Beverage)
  Food.registerItemFoodType("SapphCooking.BeverageSmoothie", Food.FoodType.Beverage)

  -- not Food items, so the food categorizer doesn't see them
  Static.registerCategory("SapphCooking.BoxofTeaBags", "FoodBeverage")
  Static.registerCategory("SapphCooking.CoffeeBeans", "FoodBeverage")
  Static.registerCategory("SapphCooking.CoffeeBeansBag", "FoodBeverage")

  -- fluids
  Fluid.registerFluid("BeverageCoffee", "BrewedCoffee")
  Fluid.registerFluid("BeverageCoffee", "LatteCoffee")
  Fluid.registerFluid("BeverageCoffee", "CappuccinoCoffee")
  Fluid.registerFluid("BeverageCoffee", "AmericanoCoffee")
  Fluid.registerFluid("BeverageCoffee", "FrappeCoffee")
  Fluid.registerFluid("BeverageCoffee", "IrishCoffee")
  Fluid.registerFluid("BeverageCoffee", "MochaCoffee")

  Fluid.registerFluid("BeverageJuice", "JuicePineapple")
  Fluid.registerFluid("BeverageJuice", "JuiceStrawberry")
  Fluid.registerFluid("BeverageJuice", "JuiceWatermelon")
  Fluid.registerFluid("BeverageJuice", "JuicePeach")

  Fluid.registerFluid("BeverageMilk", "MilkStrawberry")
  Fluid.registerFluid("BeverageMilk", "ProteinShake")

  Fluid.registerFluid("BeverageEnergyDrink", "EnergyDrink")

  -- CookingOil is handled by the categorizer, SapphCachaca and SapphSake fall back to their alcoholic fluid category
  -- Fluid.registerFluid("<category>", "FryBatter")

  -- missing a category entirely
  Static.registerCategory("SapphCooking.BagofSeaweed", "FoodSeafood")
  Static.registerCategory("SapphCooking.BagofToothpicks", "CookingUtensilBox")
  Static.registerCategory("SapphCooking.BagofWoodenSkewers", "CookingUtensilBox")
  Static.registerCategory("SapphCooking.BakingMolds", "CookingPan")
  Static.registerCategory("SapphCooking.ClothFilter", "CookingUtensil")
  Static.registerCategory("SapphCooking.CoffeeFilter", "CookingUtensil")
  Static.registerCategory("SapphCooking.CoffeeGrinder", "CookingUtensil")
  Static.registerCategory("SapphCooking.DirtyClothFilter", "CookingUtensil")
  Static.registerCategory("SapphCooking.IceTray", "CookingUtensil")
  Static.registerCategory("SapphCooking.MRE_FlamelessRationHeater", "Cooking")
  Static.registerCategory("SapphCooking.Meatgrinder", "CookingUtensil")
  Static.registerCategory("SapphCooking.PipingBags", "CookingUtensil")
  Static.registerCategory("SapphCooking.PlasticFilterHolder", "CookingUtensil")
  Static.registerCategory("SapphCooking.StackBowl2", "ContainerCooking")
  Static.registerCategory("SapphCooking.StackBowl3", "ContainerCooking")
  Static.registerCategory("SapphCooking.TakeoutBox", "ContainerCooking")
  Static.registerCategory("SapphCooking.UsedCoffeeFilter", "Junk")
end)
