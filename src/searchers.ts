import type { Searcher } from "./types.ts";
import { BaseGameCategory, BOXABLE_CATEGORIES } from "./zomboid/categories.ts";
import { getFoodTypes } from "./getFoodTypes.ts";

const foodTypes = getFoodTypes();

export const searchers: Searcher[] = [
  { categories: ["Smoking"] },

  {
    categories: Object.values(BaseGameCategory),
    searchKeys: ["IGUI_ItemCat_%s"],
  },
  {
    categories: ["KeyRing"],
    searchKeys: ["ItemName_Base.%s"],
  },

  {
    prefix: BaseGameCategory.Clothing,
    categories: ["FullBody", "Top", "Bottom", "Footwear", "Socks", "Head", "Hands", "Underwear", "Outerwear"],
    searchKeys: [
      "UI_ClothingType_%s",
      "IGUI_health_%s",
      "IGUI_ItemCat_%s",
      "UI_ClothingType_%s1",
      "UI_ClothingType_%s2",
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
    prefix: BaseGameCategory.ProtectiveGear,
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
    prefix: BaseGameCategory.Food,
    categories: [...foodTypes, "Perishable"],
    searchKeys: ["ContextMenu_FoodType_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: "FoodPerishable",
    categories: foodTypes,
    searchKeys: ["ContextMenu_FoodType_%s", "IGUI_ItemCat_%s"],
  },

  {
    prefix: "Beverage",
    categories: ["Alcohol", "Beer", "Cocktail", "Coffee", "Juice", "Milk", "SoftDrink", "Tea", "Water", "Wine"],
    searchKeys: [
      "Fluid_Name_%s",
      "Fluid_Category_%s",
      "ContextMenu_FoodType_%s",
      "ItemName_Base.%s",
      "ItemName_Base.%s2",
      "ContextMenu_EvolvedRecipe_%s",
      "ContextMenu_EvolvedRecipe_%s2",
      "ContextMenu_EvolvedRecipe_%s3",
      "ContextMenu_EvolvedRecipe_%s4",
      "ContextMenu_%s4",
    ],
  },
  {
    categories: ["Beverage"],
    searchKeys: [],
  },

  {
    prefix: BaseGameCategory.Ammo,
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
    prefix: BaseGameCategory.Material,
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
];
