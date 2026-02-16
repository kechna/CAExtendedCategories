import { type Language, parseAllTranslations } from "@pz/console";

export const getGameTranslations = async (): Promise<Record<string, Record<Language, string>>> => {
  const translations = await parseAllTranslations();

  return {
    ...(translations.get("IG_UI") ?? {}),
    ...(translations.get("ContextMenu") ?? {}),
    ...(translations.get("ItemName") ?? {}),
    ...(translations.get("Farming") ?? {}),
  };
};
