import { Ts, Language, type FullModContext, type FileBuilderInterface, Text } from "@pz/console";
import { searchers } from "./searchers.ts";
import { useTranslations } from "./i18n/useTranslations.ts";
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_NAMES,
  HUMAN_LANGUAGE_COMMENTS,
  MACHINE_LANGUAGE_COMMENTS,
} from "./constants.ts";
import { getTranslationDefinitions } from "./i18n/getTranslationDefinitions.ts";
import { resolveKey } from "./i18n/resolveKey.ts";

const resolveSearchKeys = (key: string): string[] => {
  const filteredKeys = searchers
    .filter((k) => k.prefix === key || k.categories.includes(key))
    .flatMap((k) => k.searchKeys ?? []);

  return [...new Set(filteredKeys)];
};

const toRow = (columns: (string | number)[], headerIndices: number[] = []): string => {
  const cols = columns
    .map((col, index) => (headerIndices?.includes(index) ? `[th]${col}[/th]` : `[td]${col}[/td]`))
    .join("");

  return `[tr]${cols}[/tr]`;
};

const toHeader = (columns: (string | number)[]): string =>
  toRow(
    columns,
    columns.map((_, i) => i),
  );

const expl = [
  "Keys can be either CAEC_Override_X or CAEC_Fallback_X.",
  "",
  `"CAEC_Fallback_X" means it will prefer the game's translation.`,
  "",
  `Keys will be translated in this order, for example: "Hands" (subcategory of Clothing):`,
  `  1. CAEC_Override_Hands`,
  `  2. UI_ClothingType_Hands`,
  `  3. IGUI_health_Hands`,
  `  4. CAEC_Fallback_Hands`,
  "",
  `If CAEC_Override_Hands exists, it will always be used. If not, it will try to find key 2 and 3 in the game's translations.`,
  `If they don't exist either, it will use CAEC_Fallback_Hands.`,
  "Which translations from the game are searched for differs for each individual key.",
];

export const createTranslationsTemplate = async (context: FullModContext): Promise<FileBuilderInterface[]> => {
  const { t } = await useTranslations(context, SUPPORTED_LANGUAGES);

  const template = new Ts.File("src/i18n/template").setBasePath(context.baseDir);
  const types = new Ts.File("src/i18n/types").setBasePath(context.baseDir);

  const files: FileBuilderInterface[] = [template, types];

  template.add(`/**\n * ${expl.join("\n * ")}\n */`);
  template.add("export const TRANSLATIONS = {");

  let prev: string | undefined = undefined;

  const definitions = getTranslationDefinitions();
  const namesType = new Ts.Type("TranslationNames").export();
  const keysType = new Ts.Type("TranslationKeys").export();

  SUPPORTED_LANGUAGES.forEach((language) => {
    const langFile = new Ts.File(`i18n/${language}_T`);

    langFile.add(new Ts.NamedImport("ExternalTranslations", "../types", true)).newline();

    langFile.add(`/**\n * ${LANGUAGE_NAMES[language] ?? language}\n  * ${expl.join("\n * ")}\n */`);

    const obj = new Ts.Object(language.toUpperCase()).export().withType("ExternalTranslations");

    definitions.forEach(([group, key, description, priority]) => {
      const searchKeys = resolveSearchKeys(key);
      const translated = t(searchKeys, key, language);

      let resolvedKey = resolveKey(priority, key);

      // if (language == Language.CN) {
      //   console.log("Debug CN", translated);
      // }

      if (translated.length) {
        const ca = translated.find(({ searchKey }) => searchKey.startsWith("CAEC_"));
        const other = translated.filter(({ searchKey }) => !searchKey.startsWith("CAEC_"));

        if (ca) {
          resolvedKey = ca.searchKey;
        } else if (other.length) {
          resolvedKey = resolveKey("override", key);
        }

        // if (language == Language.CN) {
        //   console.log(">", resolvedKey?.padEnd(40), ca?.searchKey);
        // }

        let desc = description;

        if (other.length) {
          const othersDesc = other
            .map((o) => `${o.searchKey.replace("%s", key)} = "${o.translation.replace(/"/g, '\\"')}"`)
            .join("\n   *   ");

          desc = `\n   * ${description}\n   *\n   * found in-game:\n   *   ${othersDesc}\n  `;
        }

        const isMatch = other[0]?.translation === ca?.translation;

        if (ca && !isMatch) {
          obj.set(resolvedKey, ca.translation, desc);
        } else {
          if (isMatch && !ca) {
            resolvedKey = resolveKey("fallback", key);
          }

          obj.set(resolvedKey, ca?.translation, desc);
        }
      } else {
        obj.set(resolvedKey, undefined, description);
      }

      if (Language.EN !== language) {
        return;
      }

      resolvedKey = resolveKey(priority, key);

      if (group !== prev) {
        template.add(` `);
        template.add(`  /* ===== ${group} ===== */`);
        template.add(` `);
      }

      // description += "\n   * search keys: " + searchKeys.slice(0, 3).join(", ");

      template.add(`  /* ${description} */`);
      template.add(
        `  ${resolvedKey}: ${translated[0] ? `"${translated[0].translation.replace(/"/g, '\\"')}"` : '""'},`,
      );

      namesType.add(`"${key}"`);

      prev = group;
    });

    langFile.add(obj);
    files.push(langFile);
  });

  template.add("};");

  keysType.add(`\`CAEC_Override_$\{${namesType.getName()}\}\` | \`CAEC_Fallback_$\{${namesType.getName()}\}\``);

  types.add(namesType);
  types.add(keysType);
  types.add(" ");
  types.add("export type ExternalTranslations = Record<TranslationKeys, string | undefined>;");

  const report = new Text.File("TRANSLATIONS_REPORT").setBasePath(context.baseDir);
  const languageOrder = Object.keys(HUMAN_LANGUAGE_COMMENTS);
  report.add(
    `If you want to help translate this mod, you can fill in this template: https://pastebin.com/pvRUAXpR, or contact me to get a half-translated version that already contains the existing translations from the game itself in the language you want.`,
  );
  report.newline();
  report.add(
    `Please don't translate the language files from my mod, I can't use that as-is. See the explanation at the bottom if you want to know why.`,
  );

  report.add(`[h2]Current translation status[/h2]`);
  report.add(`[h3]Manually translated languages[/h3]`);
  report.add("[table]");
  report.add(toHeader(["Code", "Language", "Completion", "Author"]));

  // ratings from bad - good with single emoji for each. can have any length
  const rating = ["❌", "🌧️", "⚠️", "✅", "🌟", "🏆"];

  let prevHuman = true;

  SUPPORTED_LANGUAGES.map((language) => {
    const translatedCount = definitions.reduce((count, [, key]) => {
      const res = t(resolveSearchKeys(key), key, language);

      return res.length ? count + 1 : count;
    }, 0);

    return { language, translatedCount };
  })
    .toSorted((a, b) => {
      const aIndex = languageOrder.indexOf(a.language);
      const bIndex = languageOrder.indexOf(b.language);

      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }

      if (aIndex !== -1) {
        return -1;
      }

      if (bIndex !== -1) {
        return 1;
      }

      return b.translatedCount - a.translatedCount;
    })
    .forEach(({ language, translatedCount }) => {
      const name = LANGUAGE_NAMES[language] ?? language;
      const humanComment = HUMAN_LANGUAGE_COMMENTS[language];
      const machineComment = MACHINE_LANGUAGE_COMMENTS[language];
      const isHuman = Boolean(humanComment);

      const percentage = Math.floor((translatedCount / definitions.length) * 100);
      // only 100% gets the max rating
      const ratingIndex = percentage === 100 ? rating.length - 1 : Math.floor((percentage / 100) * (rating.length - 1));

      const columns: string[] = [
        language,
        name,
        `${rating[ratingIndex]} ${percentage}% (${translatedCount} / ${definitions.length})`,
        humanComment ?? machineComment ?? "",
      ];

      if (prevHuman !== isHuman) {
        report.add(`[/table]`);
        report.add(`[h3]Other languages[/h3]`);
        report
          .add(
            `Machine translated languages may contain errors. The other languages only contain translations that are already present in the game itself, such as Korean. You'll see partial translations such as [i]"음식 - <Milk>"[/i] (Food - Milk) if the game doesn't have a translation for "Milk", but every language in the game probably has a translation for the base category "Food".`,
          )
          .newline();
        report.add(`[table]`);
        report.add(toHeader(["Code", "Language", "Completion", "Note"]));
      }

      report.add(toRow(columns, [0]));

      context.logger.info(
        `${name.padEnd(24)} | ${percentage.toString().padStart(3)}% translated (${translatedCount} / ${definitions.length})`,
      );

      prevHuman = isHuman;
    });

  report.add("[/table]").newline();
  report.add(`[hr][/hr]`);
  report.add(`I wrote a little program that pieces together all the possible combinations of categories from smaller parts. Most of these keys will be searched for in the game's actual translations first, such as all the base categories, e.g. "Food" -> IGUI_ItemCat_Food. Then it generates the actual translations file that's usable in the game.
      
This is the reason my Dutch translations contain the same mistakes as the game itself, such as "Koffie" (Coffee) being misspelled as "Kofie". I don't want to get into the rabbit hole of fixing the game's own translations, as I saw TIS hired translators. This also means when the game's actual translations are updated, all of my translations that come directly from the game will update with them.
`);
  files.push(report);

  return files;
};
