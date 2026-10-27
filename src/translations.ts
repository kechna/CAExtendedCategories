import { PzCategory, type USED_CATEGORIES } from "./zomboid/categories.ts";

const A = "override";
const Z = "fallback";

const APPAREL = "apparel";
const CATEGORIES = "vanilla categories";
const COMBINED = "combined";
const ELECTRONICS = "Electronics";
const ENTERTAINMENT = "entertainment";
const FIREARMS = "firearms";
const FOOD = "food";
const LIQUIDS = "liquids";
const LITERATURE = "literature";
const MATERIALS = "materials";
const MISC = "misc";
const SKILLS = "skills";

export enum Skill {
  Butchering = "Butchering",
  Carpentry = "Carpentry",
  Carving = "Carving",
  Electrical = "Electrical",
  Farming = "Farming",
  Husbandry = "Husbandry",
  Fishing = "Fishing",
  FlintKnapping = "FlintKnapping",
  Foraging = "Foraging",
  Gardening = "Gardening",
  Glassmaking = "Glassmaking",
  Maintenance = "Maintenance",
  Masonry = "Masonry",
  Mechanics = "Mechanics",
  Pottery = "Pottery",
  Tailoring = "Tailoring",
  Tracking = "Tracking",
  Trapping = "Trapping",
  Blacksmith = "Blacksmith",
  Welding = "Welding",
  Metalworking = "Metalworking",
}

export enum MeleeSkill {
  Axe = "Axe",
  Blunt = "Blunt",
  LongBlade = "LongBlade",
  SmallBlade = "SmallBlade",
  SmallBlunt = "SmallBlunt",
  Spear = "Spear",
}

const BASE_CATEGORIES: Record<(typeof USED_CATEGORIES)[number], string> = {
  [PzCategory.Accessory]: "accessories such as watches, necklaces, belts, gloves",
  [PzCategory.Ammo]: "firearm ammunition",
  [PzCategory.AnimalPart]: "animal parts, bones, sinew, hides",
  [PzCategory.Animal]: "animals",
  [PzCategory.Appearance]: "character appearance items such as makeup",
  [PzCategory.Camping]: "camping supplies",
  [PzCategory.Cartography]: "maps of locations",
  [PzCategory.Clothing]: "clothing such as shirts, pants, dresses",
  [PzCategory.Communications]: "communication devices such as walkie talkies, radios",
  [PzCategory.Container]: "items that can hold other items, such as boxes, bags, and crates",
  [PzCategory.Cooking]: "cooking items such as pots, pans, utensils",
  [PzCategory.Electronics]: "electronic items",
  [PzCategory.Entertainment]: "entertainment items",
  [PzCategory.FireSource]: "sources of fire such as matches and lighters",
  [PzCategory.FirstAid]: "first aid and medical supplies, bandages, painkillers, antiseptics",
  [PzCategory.Fishing]: "fishing items, rods, reels, lures, bait",
  [PzCategory.Food]: "food items",
  [PzCategory.Furniture]: "furniture items",
  [PzCategory.Gardening]: "gardening items, seeds, tools, fertilizers",
  [PzCategory.Household]: "household items",
  [PzCategory.Instrument]: "instruments",
  [PzCategory.Junk]: "miscellaneous junk items, worthless items",
  [PzCategory.LightSource]: "items that provide light such as flashlights, lanterns",
  [PzCategory.Literature]: "books and printed reading material",
  [PzCategory.Material]: "crafting materials and building supplies",
  [PzCategory.Memento]: "keepsakes and souvenirs",
  [PzCategory.Paint]: "paint items",
  [PzCategory.ProtectiveGear]: "protective equipment such as body armor, helmets, knee pads",
  [PzCategory.SkillBook]: "skill books",
  [PzCategory.Sports]: "sports items",
  [PzCategory.Tool]: "tools, such as hammers, wrenches, screwdrivers",
  [PzCategory.Trapping]: "trapping items, traps, bait, snares",
  [PzCategory.VehicleMaintenance]: "vehicle maintenance items",
  [PzCategory.Weapon]: "weapons in general",
};

type entry = [string, string, string, "override" | "fallback"];

export const TRANSLATIONS_ARR: readonly entry[] = [
  ...Object.entries(BASE_CATEGORIES).map(([key, description]) => {
    return [CATEGORIES, key, description, Z] as entry;
  }),

  [SKILLS, MeleeSkill.Axe, "axe weapon skill", Z],
  [SKILLS, MeleeSkill.Blunt, "long blunt weapon skill", Z],
  [SKILLS, MeleeSkill.LongBlade, "long blade weapon skill", Z],
  [SKILLS, MeleeSkill.SmallBlade, "short blade weapon skill", Z],
  [SKILLS, MeleeSkill.SmallBlunt, "short blunt weapon skill", Z],
  [SKILLS, MeleeSkill.Spear, "spear weapon skill", Z],

  [SKILLS, Skill.Butchering, "butchering skill", Z],
  [SKILLS, Skill.Carpentry, "carpentry skill", Z],
  [SKILLS, Skill.Carving, "carving skill", Z],
  [SKILLS, Skill.Electrical, "electrical skill", Z],
  [SKILLS, Skill.Farming, "farming/agriculture skill", Z],
  [SKILLS, Skill.Husbandry, "animal husbandry/care skill", Z],
  [SKILLS, Skill.Fishing, "fishing skill and items", Z],
  [SKILLS, Skill.FlintKnapping, "knapping skill", Z],
  [SKILLS, Skill.Foraging, "foraging skill", Z],
  [SKILLS, Skill.Gardening, "gardening skill and items", Z],
  [SKILLS, Skill.Glassmaking, "glassmaking skill", Z],
  [SKILLS, Skill.Maintenance, "maintenance skill for maintaining and repairing tools and weapons", Z],
  [SKILLS, Skill.Masonry, "masonry skill", Z],
  [SKILLS, Skill.Mechanics, "mechanics skill, vehicle maintenance", Z],
  [SKILLS, Skill.Pottery, "pottery skill", Z],
  [SKILLS, Skill.Tailoring, "tailoring skill", Z],
  [SKILLS, Skill.Tracking, "tracking skill", Z],
  [SKILLS, Skill.Trapping, "trapping skill and items", Z],
  [SKILLS, Skill.Blacksmith, "blacksmith skill", Z],
  [SKILLS, Skill.Welding, "welding skill", Z],
  [SKILLS, Skill.Metalworking, "metalworking skill (for items that are relevant in both welding and blacksmith", Z],

  [MATERIALS, "Metal", "raw metal materials such as sheet metal, scrap metal, pipes and wire", A],
  [MATERIALS, "Stone", "raw stone materials such as stones, rocks and limestone", A],
  [MATERIALS, "Wood", "raw wood materials such as planks, logs and branches", A],

  // [APPAREL, "Bag", "containers that can be on the body, such as backpacks and satchels", A],
  [APPAREL, "Arms", "items worn on the arms (but not hands), like watches, shoulder pads or arm guards", A],
  [APPAREL, "Bottom", "lower body clothing, pants, shorts, skirts", A],
  [APPAREL, "Face", "facewear such as masks, glasses, goggles", A],
  [APPAREL, "Footwear", "shoes, boots, heels, etc. (but not socks)", A],
  [APPAREL, "FullBody", "full-body items such as jumpsuits, dresses, overalls", A],
  [APPAREL, "Hands", "for gloves or other accessories worn on the hands", A],
  [APPAREL, "Head", "for items worn on the head such as hats, helmets (but not masks)", A],
  [APPAREL, "Jewelry", "jewelry items that can be scrapped for metal, such as rings, necklaces, earrings", A],
  [APPAREL, "Legs", "for lower body accessories/protective gear, such as knee pads, leg guards", A],
  [APPAREL, "Neck", "neckwear such as scarves, necklaces", A],
  [APPAREL, "Outerwear", "upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos", A],
  [APPAREL, "Socks", "hosiery and socks", A],
  [APPAREL, "Top", "upper body apparel that is not outerwear, such as shirts, sweaters, tank tops", A],
  [APPAREL, "Underwear", "undergarments such as underwear, bras, boxers", A],

  // [FOOD,  "Beans", "beans, lentils, legumes", Z,],
  // [FOOD,  "Dressing", "salad dressings and similar", Z,],
  // [FOOD,  "Rice", "rice", Z,],
  // [FOOD,  "Soup", "soups", Z,],
  [FOOD, "Baking", "items used in baking, e.g. lard, butter, oil, flour, yeast", A],
  [FOOD, "Bread", "baked bread products", Z],
  [FOOD, "Candy", "sweets and candies", A],
  [FOOD, "Canned", "canned food items", A],
  [FOOD, "Dairy", "dairy products such as cheese and eggs", Z],
  [FOOD, "Dish", "prepared dishes, ready-to-eat meals made from multiple ingredients", A],
  [FOOD, "Frozen", "frozen food, such as ice cream", A],
  [FOOD, "Herb", "culinary or medicinal plants/herbs", Z],
  [FOOD, "Meat", "any non-fish meat", Z],
  [FOOD, "Perishable", "food items that can spoil", A],
  [FOOD, "PetFood", "food for pets", Z],
  [FOOD, "Portion", "single serving portion of food", A],
  [FOOD, "Preserved", "preserved food, such as jarred food", A],
  [FOOD, "Produce", "fresh fruits, vegetables, mushrooms and hot peppers", Z],
  [FOOD, "Seafood", "fish and other seafood", Z],
  [FOOD, "Snack", "snack foods (e.g. chips, cookies, nuts, seeds)", A],
  [FOOD, "Spice", "spices and seasonings, salt, pepper, bouillon cubes, etc.", Z],
  [FOOD, "Staple", "basic staple foods such as pasta, rice, beans, often used as the base of meals", Z],
  // [FOOD,  "Thickener", "food thickening agents, e.g. cornstarch, flour", Z,],

  [LITERATURE, "Adult", "adult-oriented content (hottiez magazines)", A],
  [LITERATURE, "Book", "regular books", Z],
  [LITERATURE, "Brochure", "informational brochures", Z],
  [LITERATURE, "Comic", "comic books", Z],
  [LITERATURE, "Consumable", "consumable reading materials such as crossword and wordsearch magazines", Z],
  [LITERATURE, "FancyBook", "decorative or luxury books", Z],
  [LITERATURE, "Flier", "flyers and handouts", Z],
  [LITERATURE, "Hardcover", "hardcover books", Z],
  [LITERATURE, "Magazine", "literature magazines", Z],
  [LITERATURE, "Newspaper", "newspapers", Z],
  [LITERATURE, "PictureBook", "picture books", Z],
  [LITERATURE, "Recipe", "recipes, readable items that teach you something", Z],
  [LITERATURE, "RpgManual", "tabletop RPG manuals", Z],
  [LITERATURE, "Softcover", "softcover books", Z],
  [LITERATURE, "Writing", "notebooks, journals and other items you can write in", A],

  [FIREARMS, "Firearm", "firearm category, pistols, rifles, shotguns, etc.", A],
  [FIREARMS, "Handgun", "pistols and handguns", Z],
  [FIREARMS, "Rifle", "rifles, big firearms", Z],
  [FIREARMS, "Shotgun", "shotguns, rifles that shoot shells", Z],
  [FIREARMS, "Mag", "firearm magazines", Z],
  [FIREARMS, "Drum", "firearm drums", Z],
  [FIREARMS, "Bow", "bows and other ranged weapons that use string tension to launch projectiles", A],
  [FIREARMS, "Explosive", "explosives such as pipe bombs and molotovs, and the ammo for them", A],

  [LIQUIDS, "Beverage", "top-level category for drinkable liquids", A],
  [LIQUIDS, "Liquid", "top-level category for non-drinkable liquids, and used in 'Container - Liquid'", A],
  [LIQUIDS, "Alcohol", "general alcoholic beverages", Z],
  [LIQUIDS, "Beer", "alcoholic beer beverages", Z],
  [LIQUIDS, "Cocktail", "mixed alcoholic drinks", A],
  [LIQUIDS, "Coffee", "coffee beverage", A],
  [LIQUIDS, "Dye", "liquids used for dyeing or coloring", A],
  [LIQUIDS, "EnergyDrink", "energy drinks or otherwise highly caffeinated soft drinks", A],
  [LIQUIDS, "Fuel", "liquid fuels such as gasoline, diesel, kerosene", A],
  [LIQUIDS, "Juice", "fruit juice", Z],
  [LIQUIDS, "Poison", "poisonous liquids, such as bleach", A],
  [LIQUIDS, "Milk", "dairy milk", Z],
  [LIQUIDS, "SoftDrink", "carbonated soft drinks", A],
  [LIQUIDS, "Tea", "tea beverage", A],
  [LIQUIDS, "Water", "drinking water", Z],
  [LIQUIDS, "Wine", "alcoholic wine beverages", A],

  [COMBINED, "Box", "things in a (small) box, such as boxes of ammo", A],
  [COMBINED, "Bundled", "things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope", A],
  [COMBINED, "Carton", "things in a bigger box, such as cartons of ammo (which contain boxes of ammo)", A],

  [ELECTRONICS, "Walkie", "walkie talkies and similar communication devices", A],
  [ELECTRONICS, "AlarmClock", "alarm clocks and similar devices", A],
  [ELECTRONICS, "Remote", "remote controls and similar devices", A],
  [ELECTRONICS, "Radio", "radios and similar devices that receive broadcasts", A],

  [ENTERTAINMENT, "CD", "music CDs", A],
  [ENTERTAINMENT, "Cassette", "audio cassette tapes", A],
  [ENTERTAINMENT, "VHS", "VHS video tapes", A],

  [MISC, "Crafted", "handmade, artisan items. used for player-made weapons (not food)", A],
  [MISC, "Part", "parts for crafting or repairing items, such as vehicle parts or weapon parts", Z],
  [MISC, "KeyRing", "ring or bundle of keys", A],
  [MISC, "Photo", "photos", Z],
  [MISC, "Smoking", "smoking items such as cigarettes, cigars, pipes", A],
  [MISC, "Wearable", "used for containers that can be worn on the body, such as backpacks and satchels", A],
  [MISC, "Plushie", "for plush toys such as spiffo, boris the badger and teddy bears", A],
  [MISC, "Trinket", "small decorative items, usually mementos, such as figurines, keychains, charms", A],
  [MISC, "Toy", "toys, such as toy cars and action figures, and toy guns and their ammo", A],
  [MISC, "Picture", "pictures and framed photos kept as mementos", A],

  [MISC, "Seed", "loose plantable seeds for gardening/farming", A],
  [MISC, "SeedPacket", "packet of plantable seeds for gardening/farming", A],
  [MISC, "AnimalFeed", "feed for farm animals, like cows, pigs, chickens, etc.", Z],
  [MISC, "Compostable", "compostable items such as animal dung, to be put in a composter", A],

  [MISC, "Cup", "items such as cups, mugs, glasses", A],
  [MISC, "Pan", "items such as pans/pots to cook in", A],
  [MISC, "Cutlery", "cutlery such as knives, forks, spoons or chopsticks to eat a meal with", A],
  [MISC, "Utensil", "kitchen utensils such as spatulas, ladles, tongs, whisks, etc.", A],

  [MISC, "Cleaning", "for items to clean yourself or your base", A],
  [MISC, "Construction", "construction and renovation supplies such as paint, plaster and wallpaper", A],

  [MISC, "Bicycle", "bicycles! for the fantastic bicycle mod", A],
] as const;
