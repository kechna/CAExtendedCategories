import type { Language, FullModContext } from "@pz/console";
import type { TranslationsDict } from "../types.ts";
import { TRANSLATIONS_ARR } from "../translations.ts";
import { resolveKey } from "./resolveKey.ts";

export const parseExternalTranslations = (
  context: FullModContext,
  language: Language,
  obj: Record<string, string>,
): TranslationsDict => {
  const { logger } = context;
  const parsed: TranslationsDict = {};

  Object.entries(obj).forEach(([searchKey, value]) => {
    const resolvedSearchKey = searchKey.replace(/^CAEC_(?:Override|Fallback)_(.+)$/, "$1");

    const match = TRANSLATIONS_ARR.find(([, key]) => key === resolvedSearchKey);

    if (!match) {
      logger.warn(`No definition found for key "${resolvedSearchKey}" in language "${language}"`);

      return;
    }

    const [, key, , priority] = match;
    const resolvedKey = searchKey === resolvedSearchKey ? resolveKey(priority, key) : searchKey;

    // @ts-expect-error todo
    parsed[resolvedKey] ??= {};
    // @ts-expect-error todo
    parsed[resolvedKey][language] = value;
  });

  return parsed;
};
