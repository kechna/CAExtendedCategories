import type { FullModContext } from "@pz/console";
import { useTranslations } from "./i18n/useTranslations.ts";
import { SUPPORTED_LANGUAGES } from "./constants.ts";
import { PzCategory } from "./zomboid/categories.ts";

export enum CategoryDetail {
  Hoarder = 1,
  Balanced = 2,
  Lite = 3,
}

/**
 * Full-detail category key and the keys to apply instead in Balanced and Lite. Categorizers always produce
 * full-detail keys, the mode is applied when the category is set on the item.
 */
export type CategoryModeEntry = [key: string, balanced: string | undefined, lite: string | undefined];

/**
 * Applied in order, each to the result of the previous one. The search only matches the segment to replace, use a
 * lookbehind for the parent (e.g. `(?<=Literature)`) so it is kept. `lite` falls back to `balanced`, an empty string
 * removes the segment. A part ends at the end of the key or at the `__` separator of a dual category.
 */
const modeMatchers: { search: RegExp; balanced?: string; lite?: string }[] = [
  // packaging: the amount inside differs, the contents don't
  { search: /Carton(?=$|__)/, lite: "Box" },
  { search: /Drum(?=$|__)/, lite: "Mag" },

  // food
  { search: /(?<=^Food(?:Perishable)?)Seafood/, balanced: "Meat" },
  { search: /(?<=^Food(?:Perishable)?)Candy/, balanced: "Snack" },
  { search: /(?<=^Food(?:Perishable)?)NoExplicit/, balanced: "Spice" },
  { search: /(?<=^Food(?:Perishable)?)Preserved/, lite: "Canned" },
  { search: /(?<=^Food(?:Perishable)?)Portion/, lite: "Dish" },
  { search: /(?<=^Food(?:Perishable)?)Baking/, lite: "Staple" },

  // beverages
  { search: /(?<=Beverage)(?:Beer|Wine|Cocktail)/, balanced: "Alcohol" },
  { search: /(?<=Beverage)(?:Juice|EnergyDrink)/, lite: "SoftDrink" },

  // literature
  { search: /(?<=Literature)Flier/, balanced: "Brochure" },
  { search: /(?<=Literature)(?:Adult|Comic|RpgManual|Consumable)/, balanced: "Magazine", lite: "Entertainment" },
  {
    search: /(?<=Literature)(?:Hardcover|Softcover|PictureBook|FancyBook)/,
    balanced: "Book",
    lite: "Entertainment",
  },
  { search: /(?<=Literature)(?:Magazine|Newspaper)/, lite: "Entertainment" },

  // small sets that end up in the same drawer
  { search: /(?<=Clothing)Socks/, balanced: "Underwear" },
  { search: /(?<=Cooking)Cutlery/, balanced: "Utensil" },
  { search: /(?<=Gardening)SeedPacket/, balanced: "Seed" },
  { search: /(?<=Memento)Plushie/, balanced: "Toy" },
  { search: /(?<=Household)Cleaning/, lite: "" },
  { search: /(?<=Tool)Farming/, lite: "Gardening" },
  { search: /^Entertainment(?:CD|VHS|Cassette)$/, lite: "Entertainment" },

  // body locations: Lite keeps the broad slots
  // { search: /^(Accessory)(?:Arms|Face|Hands|Head|Legs|Neck|Top)$/, lite: "$1" },
  { search: /(?<=Accessory|Clothing|ProtectiveGear)(?:Face|Neck)/, lite: "Head" },
  { search: /(?<=Accessory|Clothing|ProtectiveGear)Socks/, lite: "Underwear" },
  { search: /(?<=Accessory|Clothing|ProtectiveGear)(?:Arms|Outerwear)/, lite: "Top" },
  { search: /(?<=Accessory|Clothing|ProtectiveGear)Socks/, lite: "Footwear" },

  // dual categories: Lite keeps that it's a weapon, not which kind. Standalone weapons keep their skill.
  { search: /(?<=__Weapon)(?:Axe|SmallBlunt|Spear|Blunt|SmallBlade|LongBlade|Crafted)$/, lite: "" },
];

/** vanilla categories, translated by the game instead of the mod */
const VANILLA_KEYS: string[] = Object.values(PzCategory);

const ITEM_CATEGORY_PREFIX = "IGUI_ItemCat_";

export const getCategoryModes = async (context: FullModContext): Promise<CategoryModeEntry[]> => {
  const { created } = await useTranslations(context, SUPPORTED_LANGUAGES);

  const keys = Object.keys(created.EN!)
    .filter((key) => key.startsWith(ITEM_CATEGORY_PREFIX))
    .map((key) => key.slice(ITEM_CATEGORY_PREFIX.length));

  const knownKeys = new Set([...keys, ...VANILLA_KEYS]);

  const entries = keys
    .map((hoarder): CategoryModeEntry => {
      const [balanced, lite] = modeMatchers.reduce(
        ([balanced, lite], { search, balanced: toBalanced, lite: toLite }) => {
          const resolvedToLite = toLite ?? toBalanced;

          return [
            undefined === toBalanced ? balanced : balanced.replace(search, toBalanced),
            undefined === resolvedToLite ? lite : lite.replace(search, resolvedToLite),
          ];
        },
        [hoarder, hoarder],
      );

      return [hoarder, balanced === hoarder ? undefined : balanced, lite === balanced ? undefined : lite];
    })
    .filter(([, balanced, lite]) => balanced !== undefined || lite !== undefined)
    .toSorted(([a], [b]) => a.localeCompare(b));

  entries
    .flatMap(([, balanced, lite]) => [balanced, lite])
    .filter((target, index, all) => target && !knownKeys.has(target) && all.indexOf(target) === index)
    .forEach((target) => {
      context.logger.warn(`Category mode target ${target} has no translation`);
    });

  return entries;
};
