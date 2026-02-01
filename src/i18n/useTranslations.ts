import { type FullModContext, Language } from "@pz/console";
import type { CAECTranslations } from "../types.ts";
import { getGameTranslations } from "./getGameTranslations.ts";
import { mergeAllTranslations } from "./mergeAllTranslations.ts";
import { translate } from "./translate.ts";

export const useTranslations = async (context: FullModContext, languages: readonly Language[]) => {
  const { logger } = context;

  const createdTranslations: Record<Language, CAECTranslations> = languages.reduce(
    (acc, lang) => ({ ...acc, [lang]: {} }),
    {} as Record<Language, CAECTranslations>,
  );

  const existingTranslations = await getGameTranslations();
  const allTranslations = mergeAllTranslations(context, existingTranslations);

  const save = (language: Language, key: string, value: string): void => {
    const fullKey = `IGUI_ItemCat_${key}`;

    if (existingTranslations[fullKey]?.[language]) {
      return;
    }

    createdTranslations[language][key] = value;
  };

  const reported = new Set<string>();

  const t = (searchKeys: string[], key: string, language: Language): string | undefined => {
    const allSearchKeys =
      // Polish game translations' encoding is messed up
      language === Language.PL
        ? ["CA_Override_%s", "CA_Fallback_%s", ...searchKeys]
        : ["CA_Override_%s", ...searchKeys, "CA_Fallback_%s"];

    for (const searchKey of [...new Set(allSearchKeys)]) {
      const k = searchKey.replace("%s", key);
      const translation = createdTranslations[language][key] ?? translate(allTranslations, k, language);

      if (translation) {
        return translation;
      }
    }

    const identifier = `${language}.${key}`;

    if (reported.has(identifier)) {
      return undefined;
    }

    // if (language === Language.EN) {
    //   logger.error(chalk.cyan(identifier), `Translation not found`);
    // } else {
    //   logger.warn(chalk.cyan(identifier), `Translation not found`);
    // }

    reported.add(identifier);

    return undefined;
  };

  const addOr = (keyA: string, keyB: string, language: Language, searchKeys: string[] = []): void => {
    const key = `${keyA}Or${keyB}`;
    const allKeys = [...searchKeys, "IGUI_ItemCat_%s"];
    const translationA = t(allKeys, keyA, language);
    const translationB = t(allKeys, keyB, language);
    const translation = `${translationA} / ${translationB}`;

    save(language, key, translation);
  };

  return {
    created: createdTranslations,
    existing: existingTranslations,
    all: allTranslations,

    addOr,
    save,
    t,
  };
};
