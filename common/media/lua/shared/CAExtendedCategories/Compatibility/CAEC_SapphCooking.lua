local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC = require("CAExtendedCategories/CAEC")

local Food = require("CAExtendedCategories/Categorizers/CAEC_Food")
local Fluid = require("CAExtendedCategories/Categorizers/CAEC_FluidContainer")

if not Utils.modIsActive("SapphCooking_B42") then return end

CAEC.registerInitHook("Mod:SapphCooking", function ()
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
  Food.registerFoodTypeTag("sapphcooking:beets", Food.FoodType.Vegetables)
  Food.registerFoodTypeTag("sapphcooking:berry", Food.FoodType.Fruits)
  Food.registerFoodTypeTag("sapphcooking:bread", Food.FoodType.Bread)
  Food.registerFoodTypeTag("sapphcooking:carrot", Food.FoodType.Vegetables)
  Food.registerFoodTypeTag("sapphcooking:chicken", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:chocolate", Food.FoodType.Candy)
  Food.registerFoodTypeTag("sapphcooking:citrus", Food.FoodType.Fruits)
  Food.registerFoodTypeTag("sapphcooking:cookedrice", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:dontreturnbowl", Food.FoodType.Portion)
  Food.registerFoodTypeTag("sapphcooking:icing", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:iscake", Food.FoodType.Snack)
  Food.registerFoodTypeTag("sapphcooking:meltedchocolate", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:mincedmeat", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:mushroom", Food.FoodType.Mushroom)
  Food.registerFoodTypeTag("sapphcooking:pastrycream", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:peas", Food.FoodType.Vegetables)
  Food.registerFoodTypeTag("sapphcooking:pepper", Food.FoodType.Spice)
  Food.registerFoodTypeTag("sapphcooking:pork", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:potato", Food.FoodType.Vegetables)
  Food.registerFoodTypeTag("sapphcooking:returnbowl", Food.FoodType.Portion)
  Food.registerFoodTypeTag("sapphcooking:returnsaucepan", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:returnwokpan", Food.FoodType.Dish)
  Food.registerFoodTypeTag("sapphcooking:ricegrain", Food.FoodType.Staple)
  Food.registerFoodTypeTag("sapphcooking:salt", Food.FoodType.Spice)
  Food.registerFoodTypeTag("sapphcooking:sausage", Food.FoodType.Meat)
  Food.registerFoodTypeTag("sapphcooking:slicedvegetables", Food.FoodType.Vegetables)
  Food.registerFoodTypeTag("sapphcooking:sourcream", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:soysauce", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:syrup", Food.FoodType.NoExplicit)
  Food.registerFoodTypeTag("sapphcooking:turkey", Food.FoodType.Meat)

  -- these depend on other tags or properties
  -- Food.registerFoodTypeTag("sapphcooking:isrisotto", nil)
  -- Food.registerFoodTypeTag("sapphcooking:oilpan", nil)
  -- Food.registerFoodTypeTag("sapphcooking:oilpanbig", nil)

  -- seems removed but keeping for compatibility just in case
  Food.registerFoodTypeTag("sapphcooking:broth", Food.FoodType.Stock)
  Food.registerFoodTypeTag("sapphcooking:eggboiled", Food.FoodType.Egg)

  Food.registerItemFoodType("SapphCooking.SapphCroissant", Food.FoodType.Bread)
  Food.registerItemFoodType("SapphCooking.CroissaintDough", Food.FoodType.Baking)

  -- fluids
  Fluid.registerFluidType("BrewedCoffee", Fluid.FluidType.Coffee)
  Fluid.registerFluidType("LatteCoffee", Fluid.FluidType.Coffee)
  Fluid.registerFluidType("CappuccinoCoffee", Fluid.FluidType.Coffee)
  Fluid.registerFluidType("AmericanoCoffee", Fluid.FluidType.Coffee)
  Fluid.registerFluidType("FrappeCoffee", Fluid.FluidType.Coffee)
  Fluid.registerFluidType("IrishCoffee", Fluid.FluidType.Coffee)
  Fluid.registerFluidType("MochaCoffee", Fluid.FluidType.Coffee)

  Fluid.registerFluidType("JuicePineapple", Fluid.FluidType.Juice)
  Fluid.registerFluidType("JuiceStrawberry", Fluid.FluidType.Juice)
  Fluid.registerFluidType("JuiceWatermelon", Fluid.FluidType.Juice)
  Fluid.registerFluidType("JuicePeach", Fluid.FluidType.Juice)

  Fluid.registerFluidType("MilkStrawberry", Fluid.FluidType.Milk)
  Fluid.registerFluidType("ProteinShake", Fluid.FluidType.Milk)

  -- CookingOil and EnergyDrink are handled by the categorizer, SapphCachaca and SapphSake fall back to their alcoholic fluid category
  -- Fluid.registerFluidType("FryBatter", nil)
end)
