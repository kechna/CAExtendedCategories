import type { Language } from "@pz/console";

export type Translated<Categories extends string = string> = Partial<Record<Language, Record<Categories, string>>>;
