import type { ModDefinition, FullModContext } from "@pz/console";
import { SUPPORTED_LANGUAGES, MELEE_WEAPON_CATEGORIES } from "./constants.ts";
import { searchers } from "./searchers.ts";
import { WeaponCategory, BaseGameCategory } from "./zomboid/categories.ts";
import { useTranslations } from "./i18n/useTranslations.ts";

export const createModTranslations = (async (context: FullModContext) => {
  const { save, t, addOr, created } = await useTranslations(context, SUPPORTED_LANGUAGES);

  searchers.forEach(({ categories, prefix, searchKeys, separator }) => {
    categories.forEach((category) => {
      const suffix = category;

      SUPPORTED_LANGUAGES.forEach((lang) => {
        const parts = prefix ? [prefix, suffix] : [suffix];
        const translated = parts.map((part) => t(searchKeys ?? [], part, lang)?.[0]?.translation ?? `<${part}>`);
        const fullKey = parts.join("");

        const text = translated.filter(Boolean).join(` ${separator ?? "-"} `);

        save(lang, fullKey, text);
      });
    });
  });

  const WEAPON_ADDON = Object.values(WeaponCategory)
    .filter((category) => category !== WeaponCategory.Weapon)
    .map((category) => category.replace(WeaponCategory.Weapon, ""));

  SUPPORTED_LANGUAGES.forEach((language) => {
    addOr(BaseGameCategory.Literature, BaseGameCategory.Junk, language);
    addOr("AccessoryTop", BaseGameCategory.Container, language);
    addOr("AccessoryTop", BaseGameCategory.Gardening, language);

    WEAPON_ADDON.filter((category) => !category.includes(WeaponCategory.Weapon)).forEach((category) => {
      MELEE_WEAPON_CATEGORIES.forEach((skill) => {
        addOr(category, `${WeaponCategory.Weapon}${skill}`, language);
      });
    });
  });

  return created;
}) satisfies ModDefinition["translations"];
