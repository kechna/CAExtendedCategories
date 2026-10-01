import {
  type ModDefinition,
  type FullModContext,
  Language,
  type ModTranslations,
  Translations,
  translateSandboxOptions,
} from "@pz/console";
import { SUPPORTED_LANGUAGES, MELEE_WEAPON_CATEGORIES } from "./constants.ts";
import { searchers } from "./searchers.ts";
import { PzCategory, WEAPON_CATEGORIES } from "./zomboid/categories.ts";
import { useTranslations } from "./i18n/useTranslations.ts";
import { ALL_TRANSLATIONS } from "./i18n/translations";
import { TOOL_ADDON } from "./categories.ts";
import { MOD_INFO_TRANSLATIONS } from "./modInfo.ts";
import { MOD_OPTIONS_TRANSLATIONS } from "./modOptions.ts";
import type { sandboxOptions } from "../sandboxOptions.ts";

export const createModTranslations = (async (
  context: FullModContext,
): Promise<ModTranslations<keyof typeof sandboxOptions>> => {
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
    addOr(PzCategory.Household, PzCategory.Literature, language);
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

    addOr("WeaponPart", "WeaponSmallBlade", language);
    addOr("WeaponPart", "WeaponLongBlade", language);

    addOr("ElectronicsAlarmClock", "AccessoryArms", language);

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
      if (key.startsWith("CAEC_") || !value) return;
      context.logger.debug(`[${lang}] Adding extra translation key: ${key}`);
      save(lang as Language, key, value, false);
    });
  });

  Object.entries(MOD_OPTIONS_TRANSLATIONS).forEach(([lang, translations]) => {
    Object.entries(translations).forEach(([key, value]) => {
      created[lang as Language][`IGUI_CAEC_Options_${key}`] = value;
    });
  });

  return {
    [Translations.MOD]: MOD_INFO_TRANSLATIONS,
    [Translations.IGUI]: created,
    [Translations.SANDBOX]: translateSandboxOptions<typeof sandboxOptions>({
      [Language.EN]: {
        MOD_NAME: "Extended Categories",
        LogVerbosity: "Logging verbosity",
        LogVerbosity_tooltip:
          "Controls how much information is logged to the console. Setting this to Debug is helpful if you want to report a bug or ask for compatibility with another mod.",
        LogVerbosity_option1: "Debug",
        LogVerbosity_option2: "Info",
        LogVerbosity_option3: "Warning",
        LogVerbosity_option4: "Error",
        ItemCategoryOverrides: "Item category overrides",
        ItemCategoryOverrides_tooltip:
          "Force specific items into a category. Separate entries with commas, using the full item name and the category ID, e.g. Base.Zipties=MaterialMaintenance, Base.Notebook=Literature__Junk",

        // DistinctAmmoTypes: "Categorize ammo by caliber [WIP]",
        //     DistinctAmmoTypes_tooltip:
        //       'If enabled, ammo will be categorized by caliber rather than just as \"Ammo\". This is disabled by default and intended for use with mods that add new guns or ammo types.',
        //     BottomHelpText: "The game must be reloaded for these settings to be applied.",
        //     BottomHelpText_tooltip: "This does nothing!",
      },
    }),
  };
}) satisfies ModDefinition["translations"];
