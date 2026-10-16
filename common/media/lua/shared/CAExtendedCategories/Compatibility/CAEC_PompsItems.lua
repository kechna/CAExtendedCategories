local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC = require("CAExtendedCategories/CAEC")

local Food = require("CAExtendedCategories/Categorizers/CAEC_Food")
local Fluid = require("CAExtendedCategories/Categorizers/CAEC_FluidContainer")
local Static = require("CAExtendedCategories/Categorizers/CAEC_Static")

-- "PompsItemsFood" is the food-only cut of "PompsItems". both ship the same food scripts under the
-- "PompsItems" module and the same fluids, so everything food related below applies to either one.
local hasFull = Utils.modIsActive("PompsItems")
local hasFood = Utils.modIsActive("PompsItemsFood")

if not hasFull and not hasFood then return end

CAEC.registerInitHook("Mod:PompsItems", function ()
  ------
  -- food (shared by PompsItems and PompsItemsFood)
  ------
  -- TODO: map items whose FoodType doesn't fit, e.g.
  -- Food.registerItemFoodType("PompsItems.PIPepperoni", Food.FoodType.Meat)

  ------
  -- non-food items that belong with food (shared)
  ------
  -- TODO: e.g. drink mixes or boxes that aren't Food items
  -- Static.registerCategory("PompsItems.RootBeerBox", "FoodBeverage")

  ------
  -- fluids (shared)
  ------
  -- the alcoholic ones (incl. PIWildPegasus) are detected by their `alcohol` property, so they're not listed here
  Fluid.registerFluid("BeverageEnergyDrink", "PIBrawndo")
  Fluid.registerFluid("BeverageEnergyDrink", "PIStallionStuff")

  Fluid.registerFluid("BeverageEnergyDrink", "PISportsDrinkBlue")
  Fluid.registerFluid("BeverageEnergyDrink", "PISportsDrinkFruit")
  Fluid.registerFluid("BeverageEnergyDrink", "PISportsDrinkGrape")
  Fluid.registerFluid("BeverageEnergyDrink", "PISportsDrinkLemonade")
  Fluid.registerFluid("BeverageEnergyDrink", "PISportsDrinkLime")
  Fluid.registerFluid("BeverageEnergyDrink", "PISportsDrinkOrange")

  Fluid.registerFluid("BeverageSoftDrink", "PICraftRootBeer")
  Fluid.registerFluid("BeverageSoftDrink", "PIDrDoctor")
  Fluid.registerFluid("BeverageSoftDrink", "PIFizzyFazGrape")
  Fluid.registerFluid("BeverageSoftDrink", "PIFizzyFazOrange")
  Fluid.registerFluid("BeverageSoftDrink", "PIFizzyFazPinkLemonade")
  Fluid.registerFluid("BeverageSoftDrink", "PIFizzyFazSourLime")
  Fluid.registerFluid("BeverageSoftDrink", "PIRootBeer")

  -- TODO: verify these are juice drinks and not sports drinks
  Fluid.registerFluid("BeverageJuice", "PIBlueRaspberry")
  Fluid.registerFluid("BeverageJuice", "PIKiwiStrawberry")
  Fluid.registerFluid("BeverageJuice", "PIVeggieDrank")
  Fluid.registerFluid("BeverageJuice", "PIWWPunch")

  Fluid.registerFluid("BeverageTea", "PIExtraSweetTea")
  Fluid.registerFluid("BeverageTea", "PIGreenTea")
  Fluid.registerFluid("BeverageTea", "PILemonTea")
  Fluid.registerFluid("BeverageTea", "PIPeachTea")
  Fluid.registerFluid("BeverageTea", "PIRaspberryTea")
  Fluid.registerFluid("BeverageTea", "PISweetTea")
  Fluid.registerFluid("BeverageTea", "PIUnsweetTea")

  if not hasFull then return end

  ------
  -- full PompsItems only (plushies, toys, literature, bathroom items, ...)
  ------
  -- TODO: e.g.
  -- Static.registerCategory("PompsItems.SomePlushie", "Toy")
end)
