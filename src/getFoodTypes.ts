import { CustomFoodType } from "./constants.ts";
import { BaseFoodType } from "./zomboid/foodTypes.ts";

const TO_DELETE = [
  /** Replaced by Beans */
  BaseFoodType.Bean,
  /** Replaced by Fruits */
  BaseFoodType.Berry,
  BaseFoodType.Citrus,
  /** Replaced by Vegetables */
  BaseFoodType.Vegetable,
  BaseFoodType.Greens,
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
  /** Replaced by Livestock */
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
] as const;

export const getFoodTypes = (): string[] => {
  const foodTypes = new Set([...Object.values(CustomFoodType), ...Object.values(BaseFoodType)]);

  for (const toDelete of TO_DELETE) {
    foodTypes.delete(toDelete);
  }

  return [...foodTypes];
};
