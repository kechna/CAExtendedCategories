import type { Searcher } from "./types.ts";
import { PzCategory, BOXABLE_CATEGORIES, USED_CATEGORIES } from "./zomboid/categories.ts";
import { getFoodTypes } from "./getFoodTypes.ts";

const foodTypes = getFoodTypes();

export const searchers: Searcher[] = [
  { categories: ["Smoking"] },

  {
    categories: USED_CATEGORIES,
    searchKeys: ["IGUI_ItemCat_%s", "IGUI_perks_%s", "ItemName_Base.%s"],
  },

  { categories: ["FirstAid"], searchKeys: ["IGUI_perks_Doctor"] },

  {
    categories: ["KeyRing"],
    searchKeys: ["ItemName_Base.%s"],
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
    prefix: PzCategory.ProtectiveGear,
    categories: [
      "FullBody",
      "Top",
      "Bottom",
      "Footwear",
      "Socks",
      "Head",
      "Hands",
      "Underwear",
      "Outerwear",
      "Legs",
      "Arms",
      "Face",
      "Neck",
    ],
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
    searchKeys: ["ContextMenu_FoodType_%s", "IGUI_ItemCat_%s", "ItemName_Base.%s"],
  },

  {
    prefix: "FoodPerishable",
    categories: [...foodTypes, "Box", "Carton"],
    searchKeys: ["ContextMenu_FoodType_%s", "IGUI_ItemCat_%s", "ItemName_Base.%s"],
  },

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
    categories: ["Beverage"],
    searchKeys: [],
  },

  {
    prefix: "Liquid",
    categories: ["Fuel", "Dye", "Industrial"],
    searchKeys: ["Fluid_Name_%s", "Fluid_Category_%s", "ContextMenu_%s", "ItemName_Base.%s", "ItemName_Base.%s2"],
  },

  {
    prefix: PzCategory.Ammo,
    categories: ["Box", "Carton", "Mag"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  ...BOXABLE_CATEGORIES.map((category) => {
    return {
      prefix: category,
      categories: ["Box", "Carton"],
      searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
    };
  }),

  {
    prefix: PzCategory.Material,
    categories: ["Bundled"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  {
    prefix: "Container",
    categories: ["Liquid", "Wearable"],
    searchKeys: ["IGUI_ItemCat_%s", "ContextMenu_%s"],
  },

  {
    prefix: "Literature",
    categories: [
      "Adult",
      "Brochure",
      "Comic",
      "Consumable",
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
    ],
    searchKeys: ["IGUI_ItemCat_%s", "ItemName_Base.%s", "DisplayName%s"],
  },

  {
    prefix: "Weapon",
    categories: ["Axe", "Blunt", "SmallBlunt", "LongBlade", "SmallBlade", "Spear", "Crafted"],
    searchKeys: ["IGUI_perks_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: "Firearm",
    categories: ["Handgun", "Rifle", "Shotgun"],
  },

  {
    prefix: PzCategory.Cooking,
    categories: ["Cutlery", "Utensil", "Cup", "Pan"],
  },
];
