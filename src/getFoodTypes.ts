import { CustomFoodType } from "./constants.ts";
import { BaseFoodType } from "./zomboid/foodTypes.ts";

const TO_DELETE = [
  /** Replaced by Beans */
  BaseFoodType.Bean,
  /** Replaced by Produce */
  BaseFoodType.Berry,
  BaseFoodType.Citrus,
  BaseFoodType.Fruits,
  BaseFoodType.Greens,
  BaseFoodType.HotPepper,
  BaseFoodType.Mushroom,
  BaseFoodType.Vegetable,
  BaseFoodType.Vegetables,
  /** Replaced by Dairy */
  BaseFoodType.Cheese,
  BaseFoodType.Egg,
  /** Replaced by Beverage */
  BaseFoodType.Coffee,
  BaseFoodType.Tea,
  /** Replaced by Snack */
  BaseFoodType.Nut,
  BaseFoodType.Seed,
  /** Replaced by PetFood */
  BaseFoodType.DogFood,
  BaseFoodType.CatFood,
  /** Replaced by Meat */
  BaseFoodType.Bacon,
  BaseFoodType.Beef,
  BaseFoodType.Game,
  BaseFoodType.Poultry,
  BaseFoodType.Poulty,
  BaseFoodType.Sausage,
  BaseFoodType.Venison,
  BaseFoodType.Insect,
  /** Handled by Gardening */
  BaseFoodType.AnimalFeed,
  /** Replaced by Staple */
  BaseFoodType.Bean,
  BaseFoodType.Pasta,
  BaseFoodType.Rice,
  /** Replaced by seafood */
  BaseFoodType.Fish,
  BaseFoodType.Roe,
  /** Replaced by Baking */
  BaseFoodType.Oil,
  BaseFoodType.Sugar,
  BaseFoodType.Thickener,
  /** Replaced by Candy */
  BaseFoodType.Chocolate,
  /** Replaced by Condiment */
  BaseFoodType.Cocoa,
  BaseFoodType.Dressing,
  BaseFoodType.Garnish,
  BaseFoodType.Sauce,
  BaseFoodType.Spread,
  /** Replaced by Spice */
  BaseFoodType.Pepper,
  BaseFoodType.Stock,
  /** Replaced by Herb */
  BaseFoodType.Herbal,
  /** not handled as food */
  BaseFoodType.Beer,
  BaseFoodType.Champagne,
  BaseFoodType.Juice,
  BaseFoodType.Liquor,
  BaseFoodType.Milk,
  BaseFoodType.SoftDrink,
  BaseFoodType.Wine,

  BaseFoodType.NoExplicit,
] as const;

export const getFoodTypes = (): string[] => {
  const foodTypes = new Set([...Object.values(CustomFoodType), ...Object.values(BaseFoodType)]);

  for (const toDelete of TO_DELETE) {
    foodTypes.delete(toDelete);
  }

  return [...foodTypes];
};
