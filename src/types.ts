import type { SUPPORTED_LANGUAGES } from "./constants.ts";
import type { Language, RequireOnly } from "@pz/console";

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export type LanguageObj = {
  group: string;
  description: string;
} & RequireOnly<Record<Language, string>, SupportedLanguage>;

export type CAECTranslations = Record<string, string | undefined>;

export type TranslationsDict = Record<`CA_Override_${string}` | `CA_Fallback_${string}`, LanguageObj>;

type SubCategorySearcher = {
  prefix?: string;
  categories: string[];
  searchKeys?: string[];
  separator?: string;
};

export type Searcher = SubCategorySearcher;
