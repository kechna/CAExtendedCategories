import { Language } from "@pz/console";

export enum CustomFoodType {
  Baking = "Baking",
  Candy = "Candy",
  Canned = "Canned",
  Dish = "Dish",
  Livestock = "Livestock",
  PetFood = "PetFood",
  Portion = "Portion",
  Preserved = "Preserved",
  Snack = "Snack",
  Spice = "Spice",
  Staple = "Staple",
}

export const MELEE_WEAPON_CATEGORIES = ["Axe", "Blunt", "LongBlade", "SmallBlunt", "Spear", "SmallBlade", "Crafted"];

export const SUPPORTED_LANGUAGES = Object.values(Language);

export const LANGUAGE_NAMES = {
  [Language.CA]: "Catalan",
  [Language.CN]: "Chinese (Simplified)",
  [Language.CH]: "Chinese (Traditional)",
  [Language.CS]: "Czech",
  [Language.DA]: "Danish",
  [Language.NL]: "Dutch",
  [Language.EN]: "English",
  [Language.FI]: "Finnish",
  [Language.FR]: "French",
  [Language.DE]: "German",
  [Language.HU]: "Hungarian",
  [Language.ID]: "Indonesian",
  [Language.IT]: "Italian",
  [Language.JP]: "Japanese",
  [Language.KO]: "Korean",
  [Language.NO]: "Norwegian",
  [Language.PL]: "Polish",
  [Language.PTBR]: "Portuguese (Brazil)",
  [Language.PT]: "Portuguese",
  [Language.RO]: "Romanian",
  [Language.RU]: "Russian",
  [Language.AR]: "Spanish (Argentina)",
  [Language.ES]: "Spanish",
  [Language.PH]: "Tagalog",
  [Language.TH]: "Thai",
  [Language.TR]: "Turkish",
  [Language.UA]: "Ukrainian",
};

const profileUrl = (name: string, id?: string) =>
  `[url=https://steamcommunity.com/profiles/${id ?? name}]${name}[/url]`;

export const HUMAN_LANGUAGE_COMMENTS = {
  [Language.EN]: "by me",
  [Language.NL]: "by me",

  [Language.PTBR]: `by ${profileUrl("SIMBAproduz")}`,
  [Language.CN]: `by ${profileUrl("莫名某某", "76561199030467276")}`,
  [Language.TR]: `by ${profileUrl("NalbarkarL", "76561198342269272")}`,
};

export const MACHINE_LANGUAGE_COMMENTS = {
  [Language.PL]: `machine translated by me and ${profileUrl("Piotrek0909", "76561198138484118")}`,
  [Language.CS]: "machine translated by me",
  [Language.DA]: "machine translated by me",
  [Language.DE]: "machine translated by me",
  [Language.ES]: "machine translated by me",
  [Language.FI]: "machine translated by me",
  [Language.FR]: "machine translated by me",
  [Language.HU]: "machine translated by me",
  [Language.IT]: "machine translated by me",
  [Language.NO]: "machine translated by me",
  [Language.RO]: "machine translated by me",
  [Language.RU]: "machine translated by me",
  [Language.UA]: "machine translated by me",
};
