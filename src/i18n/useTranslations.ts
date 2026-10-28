import type { FullModContext, Language, TranslationsDict } from "@pz/console";
import { getGameTranslations } from "./getGameTranslations.ts";
import { mergeAllTranslations } from "./mergeAllTranslations.ts";
import { translate } from "./translate.ts";
import chalk from "chalk";
import { memoize } from "lodash-unified";

export type TranslationDef = { translation: string; searchKey: string };

const CRAFT_CAT = "IGUI_CraftCategory_%s";
const PERK = "IGUI_perks_%s";

const KEYS_MAP: Record<string, string[]> = Object.freeze({
  Axe: [PERK],
  Blacksmith: [PERK],
  Blunt: [PERK],
  Butchering: [PERK],
  Carpentry: [CRAFT_CAT, PERK],
  Carving: [PERK],
  Electrical: [CRAFT_CAT],
  Farming: [CRAFT_CAT, PERK],
  Fishing: [CRAFT_CAT, PERK],
  FlintKnapping: [PERK],
  Foraging: [PERK],
  Glassmaking: [PERK],
  LongBlade: [PERK],
  Maintenance: [PERK],
  Masonry: [PERK],
  Mechanics: [PERK],
  Metalworking: [PERK],
  Pottery: [PERK],
  SmallBlade: [PERK],
  SmallBlunt: [PERK],
  Spear: [PERK],
  Tailoring: [PERK],
  Tracking: [PERK],
  Welding: [CRAFT_CAT, PERK],
});

// our key differs from the game's, so game translations are searched under the game's name
const GAME_KEY_ALIASES: Record<string, string> = Object.freeze({
  Condiment: "NoExplicit",
});

export const useTranslations = memoize(async (context: FullModContext, languages: readonly Language[]) => {
  const existingTranslations = await getGameTranslations();
  const allTranslations = mergeAllTranslations(context, existingTranslations);
  const reported = new Set<string>();
  const createdTranslations: TranslationsDict = languages.reduce(
    (acc, lang) => ({ ...acc, [lang]: {} }),
    {} as TranslationsDict,
  );

  // const allExistingKeys = new Set(Object.keys(allTranslations));

  const doSave = (language: Language, fullKey: string, value: string): void => {
    if (!value) {
      return;
    }

    const existing = existingTranslations[fullKey]?.[language];

    // if (!fullKey.startsWith("IGUI_ItemCat_")) {
    //   context.logger.warn(`[${language}] Saving translation for ${chalk.white(fullKey)} = ${chalk.green(value)}`);
    // }

    if (existing) {
      if (existing !== value) {
        context.logger.info(
          `[${language}] Overriding ${chalk.white(fullKey)} = ${chalk.red(existing)} -> ${chalk.green(value)}`,
        );
      } else {
        return;
      }
      // } else if (allExistingKeys.has(fullKey)) {
      //   context.logger.debug(`[${language}] Adding ${chalk.white(fullKey)} = ${chalk.green(value)}`);
    }

    createdTranslations[language][fullKey] = value;
  };

  const save = (language: Language, key: string, value: string): void => {
    [`IGUI_ItemCat_${key}`, ...(KEYS_MAP[key] ?? [])].forEach((k) => {
      doSave(language, k.replace("%s", key), value);
    });
  };

  const t = (searchKeys: string[], key: string, language: Language): TranslationDef[] => {
    const found: TranslationDef[] = [];
    const allSearchKeys = ["CAEC_Override_%s", ...searchKeys, "CAEC_Fallback_%s"];

    const gameKey = GAME_KEY_ALIASES[key] ?? key;

    for (const searchKey of [...new Set(allSearchKeys)]) {
      const k = searchKey.replace("%s", searchKey.startsWith("CAEC_") ? key : gameKey);
      const translation = createdTranslations[language][k] ?? translate(allTranslations, k, language);

      if (translation) {
        found.push({ translation, searchKey: k });
      }
    }

    if (found.length > 0) {
      return found;
    }

    const identifier = `${language}.${key}`;
    if (reported.has(identifier)) {
      return [];
    }

    // if (language === Language.EN) {
    //   logger.error(chalk.cyan(identifier), `Translation not found`);
    // } else {
    //   logger.warn(chalk.cyan(identifier), `Translation not found`);
    // }

    reported.add(identifier);

    return [];
  };

  const addOr = (keyA: string, keyB: string, language: Language, searchKeys: string[] = []): void => {
    const key = `${keyA}__${keyB}`;
    const allKeys = [...searchKeys, "IGUI_ItemCat_%s"];
    const [a] = t(allKeys, keyA, language);
    const [b] = t(allKeys, keyB, language);

    const translation = `${a?.translation ?? keyA} / ${b?.translation ?? keyB}`;

    save(language, key, translation);
  };

  return {
    created: createdTranslations,
    existing: existingTranslations,
    all: allTranslations,
    reported,
    addOr,
    save,
    t,
  };
});
