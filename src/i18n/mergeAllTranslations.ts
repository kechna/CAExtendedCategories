import type { Language, FullModContext } from "@pz/console";
import type { TranslationsDict } from "../types.ts";
import { ALL_TRANSLATIONS } from "./translations";
import { parseExternalTranslations } from "./parseExternalTranslations.ts";

export const mergeAllTranslations = (
  context: FullModContext,
  existingTranslations: Record<string, Record<Language, string>>,
): TranslationsDict => {
  const modTranslations: TranslationsDict = {};

  Object.entries(ALL_TRANSLATIONS)
    .map(([lang, translations]) => parseExternalTranslations(context, lang as Language, translations))
    .forEach((dict) => {
      Object.entries(dict).forEach(([key, value]) => {
        // @ts-expect-error todo
        modTranslations[key] ??= {};

        Object.entries(value).forEach(([lang, translation]) => {
          // @ts-expect-error todo
          modTranslations[key][lang as Language] = translation;
        });
      });
    });

  return {
    ...existingTranslations,
    ...modTranslations,
  };
};
