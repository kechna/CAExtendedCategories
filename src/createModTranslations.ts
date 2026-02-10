import type { ModDefinition, FullModContext, Language } from "@pz/console";
import { SUPPORTED_LANGUAGES, MELEE_WEAPON_CATEGORIES } from "./constants.ts";
import { searchers } from "./searchers.ts";
import { PzCategory, WEAPON_CATEGORIES } from "./zomboid/categories.ts";
import { useTranslations } from "./i18n/useTranslations.ts";
import { ALL_TRANSLATIONS } from "./i18n/translations";
import { TOOL_ADDON } from "./categories.ts";

export const createModTranslations = (async (context: FullModContext) => {
  const { save, t, addOr, created } = await useTranslations(context, SUPPORTED_LANGUAGES);

  searchers.forEach(({ categories, prefix, searchKeys, separator }) => {
    categories.forEach((category) => {
      const suffix = category;

      SUPPORTED_LANGUAGES.forEach((lang) => {
        const parts = prefix ? [prefix, suffix] : [suffix];
        const fullKey = parts.join("");
        let override = false;
        const results: string[] = [];

        parts.forEach((part) => {
          const translated = t(searchKeys ?? [], part, lang);

          results.push(translated[0]?.translation ?? `<${part}>`);
          if (translated.length === 0) {
            // logger.warn(chalk.cyan(`${lang}.${part}`), `Translation not found`);
          } else if (translated[0]?.searchKey.startsWith("CAEC_Override")) {
            override = true;
          }
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

  return created;
}) satisfies ModDefinition["translations"];
