import { type FullModContext, Language } from "@pz/console";
import type { CAECTranslations } from "../types.ts";
import { getGameTranslations } from "./getGameTranslations.ts";
import { mergeAllTranslations } from "./mergeAllTranslations.ts";
import { translate } from "./translate.ts";

export type TranslationDef = { translation: string; searchKey: string };

export const useTranslations = async (context: FullModContext, languages: readonly Language[]) => {
  const existingTranslations = await getGameTranslations();
  const allTranslations = mergeAllTranslations(context, existingTranslations);
  const reported = new Set<string>();
  const createdTranslations: Record<Language, CAECTranslations> = languages.reduce(
    (acc, lang) => ({ ...acc, [lang]: {} }),
    {} as Record<Language, CAECTranslations>,
  );

  const save = (language: Language, key: string, value: string): void => {
    const fullKey = `IGUI_ItemCat_${key}`;

    if (existingTranslations[fullKey]?.[language]) {
      return;
    }

    createdTranslations[language][key] = value;
  };

  const t = (searchKeys: string[], key: string, language: Language): TranslationDef[] => {
    /**
     * Polish and Czech game translations' encoding is messed up
     */
    const allSearchKeys = [Language.PL, Language.CS].includes(language)
      ? ["CAEC_Override_%s", "CAEC_Fallback_%s", ...searchKeys]
      : ["CAEC_Override_%s", ...searchKeys, "CAEC_Fallback_%s"];

    const found: TranslationDef[] = [];

    for (const searchKey of [...new Set(allSearchKeys)]) {
      const k = searchKey.replace("%s", key);
      const translation = createdTranslations[language][key] ?? translate(allTranslations, k, language);

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
    const key = `${keyA}Or${keyB}`;
    const allKeys = [...searchKeys, "IGUI_ItemCat_%s"];
    const [a] = t(allKeys, keyA, language);
    const [b] = t(allKeys, keyB, language);

    const translation = `${a?.translation ?? `<${keyA}>`} / ${b?.translation ?? `<${keyB}>`}`;

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
