import { CustomFoodType } from "./constants.ts";
import { BaseFoodType } from "./zomboid/foodTypes.ts";

const TO_DELETE = [
  /** Replaced by Beans */
  BaseFoodType.Bean,
  /** Replaced by Fruit */
  BaseFoodType.Fruits,
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
  BaseFoodType.Sausage,
  BaseFoodType.Venison,
  /** Replaced by Staple */
  BaseFoodType.Bean,
  BaseFoodType.Rice,
  BaseFoodType.Pasta,
  /** Replaced by seafood */
  BaseFoodType.Fish,
  BaseFoodType.Roe,
  /** Replaced by Baking */
  BaseFoodType.Oil,
  BaseFoodType.Thickener,
  /** Replaced by Nuts */
  BaseFoodType.Nut,
  /** Replaced by Candy */
  BaseFoodType.Chocolate,
  /** Replaced by Condiment */
  BaseFoodType.Cocoa,
  BaseFoodType.Dressing,
  /** not handled as food */
  BaseFoodType.Juice,
  BaseFoodType.Milk,
] as const;

export const getFoodTypes = (): string[] => {
  const foodTypes = new Set([...Object.values(CustomFoodType), ...Object.values(BaseFoodType)]);

  for (const toDelete of TO_DELETE) {
    foodTypes.delete(toDelete);
  }

  return [...foodTypes];
};
