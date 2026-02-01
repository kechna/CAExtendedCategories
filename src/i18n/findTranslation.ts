import type { TranslationsDict } from "../types.ts";
import type { Language } from "@pz/console";
import { translate } from "./translate.ts";

export const findTranslation = (
  translations: TranslationsDict,
  searchKeys: readonly string[] | string[],
  key: string,
  language: Language,
): string | undefined => {
  for (const searchKey of searchKeys) {
    const k = searchKey.replace("%s", key);
    const translation = translate(translations, k, language);

    if (translation) {
      return translation;
    }
  }

  return undefined;
};
