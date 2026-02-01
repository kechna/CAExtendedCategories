import type { Language, FullModContext } from "@pz/console";
import type { TranslationsDict } from "../types.ts";
import { TRANSLATIONS_ARR } from "../translations.ts";

export const parseExternalTranslations = (
  context: FullModContext,
  language: Language,
  obj: Record<string, string>,
): TranslationsDict => {
  const { logger } = context;
  const parsed: TranslationsDict = {};

  Object.entries(obj).forEach(([searchKey, value]) => {
    const match = TRANSLATIONS_ARR.find(([, , key]) => key === searchKey);

    if (!match) {
      logger.warn(`No definition found for key "${searchKey}" in language "${language}"`);

      return;
    }

    const [, priority, key] = match;

    const resolvedKey = priority === "override" ? `CA_Override_${key}` : `CA_Fallback_${key}`;
    // @ts-expect-error todo
    parsed[resolvedKey] ??= {};
    // @ts-expect-error todo
    parsed[resolvedKey][language] = value;
  });

  return parsed;
};
