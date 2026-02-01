import { Ts, Language, type FullModContext, type FileBuilderInterface, Text, isOfType, isString } from "@pz/console";
import { searchers } from "./searchers.ts";
import { useTranslations } from "./i18n/useTranslations.ts";
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_NAMES,
  HUMAN_LANGUAGE_COMMENTS,
  MACHINE_LANGUAGE_COMMENTS,
} from "./constants.ts";
import { getTranslationDefinitions } from "./i18n/getTranslationDefinitions.ts";

const resolveKeys = (key: string): string[] => {
  const filteredKeys = searchers
    .filter((k) => k.prefix === key || k.categories.map((c) => (typeof c === "string" ? c : c.replace)).includes(key))
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

export const createTranslationsTemplate = async (context: FullModContext): Promise<FileBuilderInterface[]> => {
  const { t } = await useTranslations(context, SUPPORTED_LANGUAGES);

  const template = new Ts.File("src/i18n/template").setBasePath(context.baseDir);
  const types = new Ts.File("src/i18n/types").setBasePath(context.baseDir);

  const files: FileBuilderInterface[] = [template, types];

  template.add("export const TRANSLATIONS = {");

  let prev: string | undefined = undefined;

  const definitions = getTranslationDefinitions();
  const keysType = new Ts.Type("TranslationKeys").export();

  SUPPORTED_LANGUAGES.forEach((language) => {
    const langFile = new Ts.File(`i18n/${language}`);

    langFile.add(new Ts.NamedImport("ExternalTranslations", "../types", true));
    const obj = new Ts.Object(language.toUpperCase()).export().withType("ExternalTranslations");

    definitions.forEach(([group, , key, description]) => {
      const translated = t(resolveKeys(key), key, language);

      obj.set(key, translated, description);

      if (language !== Language.EN) {
        return;
      }

      if (group !== prev) {
        template.add(` `);
      }

      template.add(`  /* ${description} */`);
      template.add(`  ${key}: ${translated ? `"${translated.replace(/"/g, '\\"')}"` : '""'},`);

      keysType.add(`"${key}"`);

      prev = group;
    });

    langFile.add(obj);
    files.push(langFile);
  });

  template.add("};");

  types.add(keysType);
  types.add(" ");
  types.add("export type ExternalTranslations = Record<TranslationKeys, string>;");

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
    const translatedCount = definitions.reduce((count, [, , key]) => {
      return t(resolveKeys(key), key, language) ? count + 1 : count;
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
