import type { Searcher } from "./types.ts";
import { PzCategory, BOXABLE_CATEGORIES, USED_CATEGORIES } from "./zomboid/categories.ts";
import { getFoodTypes } from "./getFoodTypes.ts";
import { TOOL_ADDON } from "./categories.ts";
import { MeleeSkill, Skill } from "./translations.ts";

const foodTypes = getFoodTypes();

const MATERIAL_GROUPS = [
  Skill.Butchering,
  Skill.Carpentry,
  Skill.Electrical,
  Skill.Fishing,
  Skill.Husbandry,
  Skill.Maintenance,
  Skill.Metalworking,
  Skill.Blacksmith,
  Skill.Pottery,
  Skill.Tailoring,

  Skill.Farming,
  "Construction",
  // "Raw",
  "Wood",
  "Stone",
  "Metal",
];

/** container subtypes, keep in sync with `Container.ItemTypes` and `Container.TagTypes` in `CAEC_Container.lua` */
const CONTAINER_TYPES = [
  PzCategory.Ammo,
  PzCategory.Cooking,
  PzCategory.VehicleMaintenance,
  "Farming",
  PzCategory.Household,
];

const AMMO_TYPES = ["Rifle", "Handgun", "Shotgun", "Toy", "Bow", "Explosive"];
const AMMO_BOX_TYPES = ["Box", "Carton", "Mag"];

const WEAPON_CATEGORIES = [
  MeleeSkill.Axe,
  MeleeSkill.Blunt,
  MeleeSkill.SmallBlunt,
  MeleeSkill.LongBlade,
  MeleeSkill.SmallBlade,
  MeleeSkill.Spear,
  "Crafted",
  "Bow",
  "Explosive",
];

export const PROTECTIVE_GEAR_CATEGORIES = [
  "Accessory",
  "Arms",
  "Bottom",
  "Face",
  "Footwear",
  "FullBody",
  "Hands",
  "Head",
  "Legs",
  "Neck",
  "Outerwear",
  "Socks",
  "Top",
  "Underwear",
];

const FOOD_KEYS = ["ContextMenu_FoodType_%s", "IGUI_ItemCat_%s", "ItemName_Base.%s"];

/**
 * Each searcher produces `<prefix><category>` keys, translated as "<prefix label> - <category label>".
 *
 * Order matters: a compound prefix (e.g. "FoodPerishableCanned") is only translated if an earlier searcher already
 * produced it. Otherwise the raw prefix ends up in the label and a warning is logged.
 */
export const searchers: Searcher[] = [
  { categories: ["Beverage"], searchKeys: [] },
  { categories: ["FirstAid"], searchKeys: ["IGUI_perks_Doctor"] },
  { categories: ["KeyRing"], searchKeys: ["ItemName_Base.%s"] },
  { categories: ["Smoking"] },
  { categories: ["Construction"] },
  { categories: ["Mechanics"], searchKeys: ["IGUI_perks_%s"] },

  { categories: ["Part"], searchKeys: ["IGUI_health_%s"] },

  {
    categories: USED_CATEGORIES,
    searchKeys: ["IGUI_ItemCat_%s", "IGUI_perks_%s", "ItemName_Base.%s"],
  },

  {
    prefix: PzCategory.Material,
    categories: [
      "Bundled",
      PzCategory.FireSource,
      PzCategory.Tool,
      PzCategory.Weapon,
      PzCategory.Ammo,
      ...MATERIAL_GROUPS,
      "Construction",
    ],
    searchKeys: ["IGUI_CraftCategory_%s", "IGUI_perks_%s", "IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  {
    prefix: PzCategory.Clothing,
    categories: ["FullBody", "Top", "Bottom", "Footwear", "Socks", "Head", "Hands", "Underwear", "Outerwear"],
    searchKeys: [
      "UI_ClothingType_%s",
      "IGUI_health_%s",
      "IGUI_ItemCat_%s",
      "UI_ClothingType_%s1",
      "UI_ClothingType_%s2",
      "DisplayName_%s",
    ],
  },

  {
    prefix: "Accessory",
    categories: ["Legs", "Top", "Arms", "Hands", "Head", "Face", "Jewelry", "Neck"],
    searchKeys: [
      "UI_ClothingType_%s",
      "IGUI_health_%s",
      "IGUI_ItemCat_%s",
      "UI_ClothingType_%s1",
      "UI_ClothingType_%s2",
    ],
  },

  {
    prefix: "Husbandry",
    categories: ["Food"],
    searchKeys: ["IGUI_health_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: PzCategory.ProtectiveGear,
    categories: PROTECTIVE_GEAR_CATEGORIES,
    searchKeys: [
      "UI_ClothingType_%s",
      "IGUI_health_%s",
      "IGUI_ItemCat_%s",
      "UI_ClothingType_%s1",
      "UI_ClothingType_%s2",
    ],
  },

  {
    prefix: PzCategory.Food,
    categories: [...foodTypes, "Box", "Carton", "Perishable"],
    searchKeys: FOOD_KEYS,
  },

  {
    prefix: PzCategory.AnimalPart,
    categories: ["Perishable"],
    searchKeys: FOOD_KEYS,
  },

  {
    prefix: "FoodPerishable",
    categories: [...foodTypes, "Box", "Carton"],
    searchKeys: FOOD_KEYS,
  },

  ...foodTypes.map((foodType) => ({
    prefix: `Food${foodType}`,
    categories: ["Box", "Carton"],
    searchKeys: FOOD_KEYS,
  })),

  {
    prefix: "Beverage",
    categories: [
      "Alcohol",
      "Beer",
      "Cocktail",
      "Coffee",
      "EnergyDrink",
      "Juice",
      "Milk",
      "SoftDrink",
      "Tea",
      "Water",
      "Wine",
    ],
    searchKeys: [
      "Fluid_Name_%s",
      "Fluid_Category_%s",
      "ContextMenu_FoodType_%s",
      "ContextMenu_%s",
      "ItemName_Base.%s",
      "ItemName_Base.%s2",
    ],
  },

  {
    prefix: "Liquid",
    categories: ["Fuel", "Dye", "Poison" /* "Industrial" */],
    searchKeys: ["Fluid_Name_%s", "Fluid_Category_%s", "ContextMenu_%s", "ItemName_Base.%s", "ItemName_Base.%s2"],
  },

  {
    prefix: PzCategory.Ammo,
    categories: [...AMMO_BOX_TYPES, "Drum"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  {
    prefix: PzCategory.Ammo,
    categories: AMMO_TYPES,
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  ...AMMO_TYPES.map((ammoType) => ({
    prefix: PzCategory.Ammo + ammoType,
    categories: AMMO_BOX_TYPES,
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  })),

  ...["Rifle", "Shotgun", "Handgun"].map((ammoType) => ({
    prefix: PzCategory.Ammo + ammoType,
    categories: ["Drum"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  })),

  {
    prefix: "Material" + PzCategory.Ammo,
    categories: [...AMMO_TYPES, "Box", "Carton"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  ...BOXABLE_CATEGORIES.map((category) => ({
    prefix: category,
    categories: ["Box", "Carton"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  })),

  {
    prefix: PzCategory.Material,
    categories: MATERIAL_GROUPS,
    searchKeys: ["IGUI_CraftCategory_%s", "IGUI_perks_%s", "IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  ...MATERIAL_GROUPS.map((category) => ({
    prefix: PzCategory.Material + category,
    categories: ["Box", "Carton", "Bundled"],
    searchKeys: ["IGUI_ItemCat_%s"],
  })),

  {
    prefix: PzCategory.Camping,
    categories: ["Bundled"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  {
    prefix: PzCategory.Container,
    categories: ["Liquid", "Wearable", "Box", ...CONTAINER_TYPES],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  {
    prefix: PzCategory.Container + "Wearable",
    categories: CONTAINER_TYPES,
    searchKeys: ["IGUI_ItemCat_%s"],
  },

  {
    prefix: "Literature",
    categories: [
      "Adult",
      "Book",
      "Brochure",
      "Comic",
      "Consumable",
      "Entertainment",
      "FancyBook",
      "Flier",
      "Hardcover",
      "Magazine",
      "Newspaper",
      "Photo",
      "PictureBook",
      "Recipe",
      "RpgManual",
      "Softcover",
      "Writing",
      "SkillBook",
    ],
    searchKeys: ["IGUI_ItemCat_%s", "ItemName_Base.%s", "DisplayName%s"],
  },

  {
    prefix: "Weapon",
    categories: WEAPON_CATEGORIES,
    searchKeys: ["IGUI_perks_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: "Firearm",
    categories: ["Handgun", "Rifle", "Shotgun", "Toy"],
  },

  {
    prefix: PzCategory.Cooking,
    categories: ["Cutlery", "Utensil", "Cup", "Pan", "Bundled", "Container"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s", "ItemName_Base.%s"],
  },

  {
    prefix: PzCategory.Cooking + "Utensil",
    categories: ["Bundled", "Box"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s", "ItemName_Base.%s"],
  },

  {
    prefix: PzCategory.Memento,
    categories: ["Plushie", "Toy", "Picture", "Trinket"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s", "ItemName_Base.%s"],
  },

  {
    prefix: PzCategory.Entertainment,
    categories: ["CD", "VHS", "Cassette"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s", "ItemName_Base.%s"],
  },

  {
    prefix: PzCategory.Electronics,
    // todo change
    categories: ["Radio", "Walkie", "AlarmClock"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s", "ItemName_Base.%s"],
  },

  {
    prefix: PzCategory.Tool,
    categories: TOOL_ADDON,
    searchKeys: ["IGUI_CraftCategory_%s", "IGUI_perks_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: PzCategory.Household,
    categories: ["Cleaning"],
    searchKeys: ["IGUI_CraftCategory_%s", "IGUI_perks_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: PzCategory.Gardening,
    categories: ["Seed", "SeedPacket", "Compostable", "AnimalFeed"],
    searchKeys: ["Farming_%s", "ContextMenu_FoodType_%s"],
  },

  {
    prefix: "Bicycle",
    categories: ["Part"],
    searchKeys: ["IGUI_CraftCategory_%s", "IGUI_perks_%s", "IGUI_ItemCat_%s"],
  },
];
