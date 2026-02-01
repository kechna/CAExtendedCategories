import type { TranslationsDict } from "../types.ts";
import type { Language } from "@pz/console";

export const translate = (
  translations: TranslationsDict,
  key: string | undefined,
  language: Language,
): string | undefined => {
  if (!key) {
    return undefined;
  }

  // @ts-expect-error todo
  return (translations[key]?.[language] as string | undefined)?.trim();
};
