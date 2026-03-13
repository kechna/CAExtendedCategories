import {
  type ModDefinition,
  type FullModContext,
  type Language,
  type ModTranslations,
  Translations,
} from "@pz/console";
import { SUPPORTED_LANGUAGES, MELEE_WEAPON_CATEGORIES } from "./constants.ts";
import { searchers } from "./searchers.ts";
import { PzCategory, WEAPON_CATEGORIES } from "./zomboid/categories.ts";
import { useTranslations } from "./i18n/useTranslations.ts";
import { ALL_TRANSLATIONS } from "./i18n/translations";
import { TOOL_ADDON } from "./categories.ts";

export const createModTranslations = (async (context: FullModContext): Promise<ModTranslations> => {
  const { save, t, addOr, created } = await useTranslations(context, SUPPORTED_LANGUAGES);

  searchers.forEach(({ categories, prefix, searchKeys, separator }) => {
    const allKeys: { fullKey: string; parts: string[] }[] = [];

    if (prefix) {
      allKeys.push({ fullKey: prefix, parts: [] });
    }

    categories.forEach((category) => {
      const suffix = category;

      const parts = prefix ? [prefix, suffix] : [suffix];
      const fullKey = parts.join("");

      allKeys.push({ fullKey: category, parts: [] });
      allKeys.push({ fullKey, parts });
    });

    allKeys.forEach(({ fullKey, parts }) => {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        let override = false;
        const results: string[] = [];

        if (!parts.length) {
          parts = [fullKey];
        }

        parts.forEach((part) => {
          const translated = t(searchKeys ?? [], part, lang);

          if (translated.length) {
            override = translated[0]?.searchKey.startsWith("CAEC_Override") ?? false;
          } else if (parts.length === 1) {
            return;
          }

          results.push(translated[0]?.translation ?? part);
        });
        // const translated = found.map((t) => t?.[0]?.translation ?? `<${part}>`);

        const text = results.join(` ${separator ?? "-"} `);

        save(lang, fullKey, text, override);
      });
    });
  });

  const WEAPON_ADDON = WEAPON_CATEGORIES.filter((category) => category !== PzCategory.Weapon).map((category) =>
    category.replace(PzCategory.Weapon, ""),
  );

  SUPPORTED_LANGUAGES.forEach((language) => {
    addOr(PzCategory.Literature, PzCategory.Junk, language);
    addOr(PzCategory.Material, PzCategory.Junk, language);
    addOr(PzCategory.Memento, PzCategory.Container, language);
    addOr(PzCategory.Tool, PzCategory.Junk, language);

    addOr(PzCategory.Cooking, "ContainerLiquid", language);

    addOr(PzCategory.Appearance, "Liquid", language);
    addOr(PzCategory.Cooking, "Liquid", language);
    addOr(PzCategory.FirstAid, "Liquid", language);
    addOr(PzCategory.Household, "Liquid", language);

    addOr(PzCategory.Accessory + "Top", PzCategory.Container, language);
    addOr(PzCategory.Accessory + "Top", PzCategory.Gardening, language);

    addOr("FoodHerb", PzCategory.FirstAid, language);
    addOr("FoodPerishableHerb", PzCategory.FirstAid, language);
    addOr("FoodSpice", PzCategory.FirstAid, language);
    addOr("FoodPerishableSpice", PzCategory.FirstAid, language);

    [...WEAPON_ADDON, ...TOOL_ADDON.map((i) => "Tool" + i)]
      .filter((category) => !category.includes(PzCategory.Weapon))
      .forEach((category) => {
        MELEE_WEAPON_CATEGORIES.forEach((skill) => {
          addOr(category, `${PzCategory.Weapon}${skill}`, language);
        });
      });
  });

  Object.entries(ALL_TRANSLATIONS).forEach(([lang, translations]) => {
    Object.entries(translations).forEach(([key, value]) => {
      if (key.startsWith("CAEC_")) return;
      context.logger.debug(`[${lang}] Adding extra translation key: ${key}`);
      save(lang as Language, key, value, false);
    });
  });

  return {
    [Translations.IGUI]: created,
  };
}) satisfies ModDefinition["translations"];
