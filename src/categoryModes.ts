import type { FullModContext } from "@pz/console";
import { useTranslations } from "./i18n/useTranslations.ts";
import { SUPPORTED_LANGUAGES } from "./constants.ts";

export enum CategoryDetail {
  Hoarder = 1,
  Balanced = 2,
  Lite = 3,
}

/**
 * Full-detail category key and the keys to apply instead in Balanced and Lite. Categorizers always produce
 * full-detail keys, the mode is applied when the category is set on the item.
 */
export type CategoryModeEntry = [key: string, balanced: string, lite: string];

// LiteratureAdult	LiteratureAdult	LiteratureEntertainment
// LiteratureBook	LiteratureBook	LiteratureBook
// LiteratureBox	LiteratureBox	LiteratureBox
// LiteratureBrochure	LiteratureBrochure	LiteratureBrochure
// LiteratureCartography	LiteratureCartography	LiteratureCartography
// LiteratureComic	LiteratureMagazine	LiteratureEntertainment
// LiteratureConsumable	LiteratureConsumable	LiteratureConsumable
// LiteratureEntertainment	LiteratureEntertainment	LiteratureEntertainment
// LiteratureFancyBook	LiteratureBook	LiteratureEntertainment
// LiteratureFlier	LiteratureBrochure	LiteratureBrochure
// LiteratureHardcover	LiteratureBook	LiteratureEntertainment
// LiteratureMagazine	LiteratureMagazine	LiteratureEntertainment
// LiteratureNewspaper	LiteratureMagazine	LiteratureEntertainment
// LiteraturePictureBook	LiteratureBook	LiteratureEntertainment
// LiteratureRecipe	LiteratureRecipe	LiteratureRecipe
// LiteratureRpgManual	LiteratureBook	LiteratureEntertainment
// LiteratureSoftcover	LiteratureBook	LiteratureEntertainment
// LiteratureWriting	LiteratureWriting	LiteratureWriting

const modeMatchers: { search: RegExp; balanced: string; lite?: string }[] = [
  { search: /Seafood$/, balanced: "Meat" },
  { search: /Adult$/, balanced: "Magazine", lite: "Entertainment" },
  { search: /Comic$/, balanced: "Magazine", lite: "Entertainment" },
  { search: /Flier$/, balanced: "Brochure", lite: "Brochure" },
  { search: /Hardcover$/, balanced: "Book", lite: "Entertainment" },
  { search: /PictureBook$/, balanced: "Book", lite: "Entertainment" },
  { search: /RpgManual$/, balanced: "Book", lite: "Entertainment" },
  { search: /Softcover$/, balanced: "Book", lite: "Entertainment" },
] as const;

const ITEM_CATEGORY_PREFIX = "IGUI_ItemCat_";

export const getCategoryModes = async (context: FullModContext): Promise<CategoryModeEntry[]> => {
  const { created } = await useTranslations(context, SUPPORTED_LANGUAGES);

  const keys = Object.keys(created.EN!)
    .filter((key) => key.startsWith(ITEM_CATEGORY_PREFIX))
    .map((key) => key.slice(ITEM_CATEGORY_PREFIX.length));

  const knownKeys = new Set(keys);

  const entries = keys
    .map((key): CategoryModeEntry => {
      return modeMatchers.reduce<CategoryModeEntry>(
        ([original, balanced, lite], { search, balanced: toBalanced, lite: toLite }) => [
          original,
          balanced.replace(search, toBalanced),
          lite.replace(search, toLite ?? toBalanced),
        ],
        [key, key, key],
      );
    })
    .filter(([key, balanced, lite]) => key !== balanced || key !== lite)
    .toSorted(([a], [b]) => a.localeCompare(b));

  entries
    .flatMap(([, balanced, lite]) => [balanced, lite])
    .filter((target, index, all) => !knownKeys.has(target) && all.indexOf(target) === index)
    .forEach((target) => {
      context.logger.warn(`Category mode target ${target} has no translation`);
    });

  return entries;
};
