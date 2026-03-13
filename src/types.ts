import type { SUPPORTED_LANGUAGES } from "./constants.ts";
import type { Language, RequireOnly, MaybeReadonly } from "@pz/console";

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export type LanguageObj = {
  group: string;
  description: string;
} & RequireOnly<Record<Language, string>, SupportedLanguage>;

export type TranslationsDict = Record<`CAEC_Override_${string}` | `CAEC_Fallback_${string}`, LanguageObj>;

type SubCategorySearcher = {
  prefix?: string;
  categories: MaybeReadonly<string[]>;
  searchKeys?: string[];
  separator?: string;
};

export type Searcher = SubCategorySearcher;
