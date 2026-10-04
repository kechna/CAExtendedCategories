import type { ExternalTranslations } from "../types";

/**
 * English
 * Keys can be either CAEC_Override_X or CAEC_Fallback_X.
 *
 * "CAEC_Fallback_X" means it will prefer the game's translation.
 *
 * Keys will be translated in this order, for example: "Hands" (subcategory of Clothing):
 *   1. CAEC_Override_Hands
 *   2. UI_ClothingType_Hands
 *   3. IGUI_health_Hands
 *   4. CAEC_Fallback_Hands
 *
 * If CAEC_Override_Hands exists, it will always be used. If not, it will try to find key 2 and 3 in the game's translations.
 * If they don't exist either, it will use CAEC_Fallback_Hands.
 * Which translations from the game are searched for differs for each individual key.
 */
export const EN: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessory"
   */
  CAEC_Fallback_Accessory: "Accessory",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Ammo"
   */
  CAEC_Fallback_Ammo: "Ammo",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Animal"
   */
  CAEC_Fallback_Animal: "Animal",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Animal Part"
   */
  CAEC_Fallback_AnimalPart: "Animal Part",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Appearance"
   */
  CAEC_Fallback_Appearance: "Appearance",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Camping"
   */
  CAEC_Fallback_Camping: "Camping",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartography"
   */
  CAEC_Fallback_Cartography: "Cartography",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Clothing"
   */
  CAEC_Fallback_Clothing: "Clothing",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Communications"
   */
  CAEC_Fallback_Communications: "Communications",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Container"
   *   ContextMenu_Container = "Containers"
   */
  CAEC_Fallback_Container: "Container",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cooking"
   */
  CAEC_Fallback_Cooking: "Cooking",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Electronics"
   */
  CAEC_Fallback_Electronics: "Electronics",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Entertainment"
   */
  CAEC_Fallback_Entertainment: "Entertainment",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Fire Source"
   */
  CAEC_Fallback_FireSource: "Fire Source",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "First Aid"
   */
  CAEC_Fallback_FirstAid: "First Aid",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Fishing"
   *   ContextMenu_Fishing = "Fishing"
   *   IGUI_CraftCategory_Fishing = "Fishing"
   */
  CAEC_Fallback_Fishing: "Fishing",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Food"
   */
  CAEC_Fallback_Food: "Food",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Furniture"
   */
  CAEC_Fallback_Furniture: "Furniture",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Gardening"
   *   ContextMenu_Gardening = "Gardening"
   */
  CAEC_Fallback_Gardening: "Gardening",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Household"
   */
  CAEC_Fallback_Household: "Household",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Musical Instrument"
   */
  CAEC_Fallback_Instrument: "Musical Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Junk"
   */
  CAEC_Fallback_Junk: "Junk",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Light Source"
   */
  CAEC_Fallback_LightSource: "Light Source",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literature"
   */
  CAEC_Fallback_Literature: "Literature",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Material"
   */
  CAEC_Fallback_Material: "Material",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Memento"
   */
  CAEC_Fallback_Memento: "Memento",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Paint"
   */
  CAEC_Fallback_Paint: "Paint",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Protective Gear"
   */
  CAEC_Fallback_ProtectiveGear: "Protective Gear",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Skill Book"
   */
  CAEC_Fallback_SkillBook: "Skill Book",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sports"
   */
  CAEC_Fallback_Sports: "Sports",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Tool"
   */
  CAEC_Fallback_Tool: "Tool",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trapping"
   */
  CAEC_Fallback_Trapping: "Trapping",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Vehicle Maintenance"
   */
  CAEC_Fallback_VehicleMaintenance: "Vehicle Maintenance",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Weapon"
   */
  CAEC_Fallback_Weapon: "Weapon",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Axe",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Blacksmithing",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Long Blunt",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Butchering",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Carpentry"
   */
  CAEC_Fallback_Carpentry: "Carpentry",
  /** carving skill */
  CAEC_Fallback_Carving: "Carving",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Electrical"
   */
  CAEC_Fallback_Electrical: "Electrical",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agriculture"
   */
  CAEC_Fallback_Farming: "Agriculture",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Knapping",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Foraging",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Glassmaking",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Long Blade",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Maintenance",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Masonry",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mechanics",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metalworking",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Pottery",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Short Blade",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Short Blunt",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Spear",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Tailoring",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Tracking",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Welding"
   */
  CAEC_Fallback_Welding: "Welding",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Arms",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Bottom",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Face",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Footwear",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Full Body",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Hands",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Head"
   */
  CAEC_Fallback_Head: "Head",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Jewelry",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Legs",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Neck"
   */
  CAEC_Fallback_Neck: "Neck",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Outerwear",
  /** hosiery and socks */
  CAEC_Override_Socks: "Socks",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Top",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Underwear",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Baking",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Bread"
   */
  CAEC_Fallback_Bread: "Bread",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Candy"
   */
  CAEC_Fallback_Candy: "Candy",
  /** canned food items */
  CAEC_Override_Canned: "Canned",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Dairy",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Dish",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Frozen",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Herbs"
   */
  CAEC_Fallback_Herb: "Herbs",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Meat"
   */
  CAEC_Fallback_Meat: "Meat",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perishable",
  /** food for pets */
  CAEC_Fallback_PetFood: "Pets",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Preserved",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Produce",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Seafood"
   */
  CAEC_Fallback_Seafood: "Seafood",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Seed"
   */
  CAEC_Fallback_Seed: "Seed",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Spice",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Staple",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adult",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brochure",
  /** comic books */
  CAEC_Fallback_Comic: "Comic",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumable",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Fancy Book",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Flier",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Hardcover",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Magazine",
  /** newspapers */
  CAEC_Override_Newspaper: "Newspaper",
  /** picture books */
  CAEC_Fallback_PictureBook: "Picture Book",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recipe",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG Manual",
  /** softcover books */
  CAEC_Fallback_Softcover: "Softcover",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Bow",
  /** firearm drums */
  CAEC_Fallback_Drum: "Drum",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Explosive",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Firearm",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Handgun",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magazine",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Rifle",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Shotgun",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Beer"
   */
  CAEC_Fallback_Beer: "Beer",
  /** top-level category for drinkable liquids */
  CAEC_Fallback_Beverage: "Beverage",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Coffee"
   */
  CAEC_Fallback_Coffee: "Coffee",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Dye",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energy Drink",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Fuel",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Juice"
   */
  CAEC_Fallback_Juice: "Juice",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Liquid",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Milk"
   *   ContextMenu_Milk = "Milk"
   */
  CAEC_Fallback_Milk: "Milk",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Poison",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Soft Drink"
   */
  CAEC_Fallback_SoftDrink: "Soft Drink",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tea"
   */
  CAEC_Fallback_Tea: "Tea",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Water"
   */
  CAEC_Fallback_Water: "Water",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Wine"
   */
  CAEC_Fallback_Wine: "Wine",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Box",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Bundled",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Carton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Alarm Clock"
   */
  CAEC_Fallback_AlarmClock: "Alarm Clock",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Radio",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Remote",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-Talkie",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Cassette",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Bicycle",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Crafted",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Cup",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Cutlery",
  /** ring or bundle of keys */
  CAEC_Fallback_KeyRing: "Key Ring",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pan",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Part"
   */
  CAEC_Fallback_Part: "Part",
  /** photos */
  CAEC_Fallback_Photo: "Photo",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Picture",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Plushie",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Seed Packet",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Animal Feed",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Smoking",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Toy",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Trinket",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensil",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Wearable",
};
