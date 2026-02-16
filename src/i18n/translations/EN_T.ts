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
   *   ItemName_Base.Animal = "Animal"
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
   *   IGUI_perks_Cooking = "Cooking"
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
   *   IGUI_perks_Doctor = "First Aid"
   *   IGUI_ItemCat_FirstAid = "First Aid"
   */
  CAEC_Fallback_FirstAid: "First Aid",
  /**
   * fishing skill
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Fishing"
   *   IGUI_perks_Fishing = "Fishing"
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
   * gardening items
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
   * trapping skill
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trapping"
   *   IGUI_perks_Trapping = "Trapping"
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
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Axe"
   */
  CAEC_Fallback_Axe: "Axe",
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Blacksmithing"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Long Blunt"
   */
  CAEC_Fallback_Blunt: "Long Blunt",
  /**
   * butchering skill
   *
   * found in-game:
   *   IGUI_perks_Butchering = "Butchering"
   */
  CAEC_Override_Butchering: undefined,
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Carpentry"
   *   IGUI_perks_Carpentry = "Carpentry"
   */
  CAEC_Override_Carpentry: undefined,
  /**
   * carving skill
   *
   * found in-game:
   *   IGUI_perks_Carving = "Carving"
   */
  CAEC_Override_Carving: undefined,
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Electrical"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agriculture"
   *   IGUI_perks_Farming = "Agriculture"
   */
  CAEC_Override_Farming: undefined,
  /**
   * knapping skill
   *
   * found in-game:
   *   IGUI_perks_FlintKnapping = "Knapping"
   */
  CAEC_Override_FlintKnapping: undefined,
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Foraging"
   */
  CAEC_Override_Foraging: undefined,
  /**
   * glassmaking skill
   *
   * found in-game:
   *   IGUI_perks_Glassmaking = "Glassmaking"
   */
  CAEC_Override_Glassmaking: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Long Blade"
   */
  CAEC_Fallback_LongBlade: "Long Blade",
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Maintenance"
   */
  CAEC_Override_Maintenance: undefined,
  /**
   * masonry skill
   *
   * found in-game:
   *   IGUI_perks_Masonry = "Masonry"
   */
  CAEC_Override_Masonry: undefined,
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Mechanics"
   */
  CAEC_Override_Mechanics: undefined,
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metalworking",
  /**
   * pottery skill
   *
   * found in-game:
   *   IGUI_perks_Pottery = "Pottery"
   */
  CAEC_Override_Pottery: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Short Blade"
   */
  CAEC_Fallback_SmallBlade: "Short Blade",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Short Blunt"
   */
  CAEC_Fallback_SmallBlunt: "Short Blunt",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Spear"
   */
  CAEC_Fallback_Spear: "Spear",
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Tailoring"
   */
  CAEC_Override_Tailoring: undefined,
  /**
   * tracking skill
   *
   * found in-game:
   *   IGUI_perks_Tracking = "Tracking"
   */
  CAEC_Override_Tracking: undefined,
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Welding"
   */
  CAEC_Override_Welding: undefined,
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
   *   ItemName_Base.Bread = "Bread"
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
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Cheese"
   *   ItemName_Base.Cheese = "Cheese"
   */
  CAEC_Fallback_Cheese: "Cheese",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Dish",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Fruit"
   */
  CAEC_Override_Fruits: "Fruits",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Herbs"
   */
  CAEC_Fallback_Herb: "Herbs",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Hot Peppers"
   */
  CAEC_Fallback_HotPepper: "Hot Peppers",
  /**
   * edible insects
   *
   * found in-game:
   *   ContextMenu_FoodType_Insect = "Insect"
   */
  CAEC_Fallback_Insect: "Insect",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Livestock",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Meat"
   */
  CAEC_Fallback_Meat: "Meat",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Mushroom"
   */
  CAEC_Fallback_Mushroom: "Mushroom",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Nut"
   */
  CAEC_Override_Nut: "Nuts",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perishable",
  /** food for pets */
  CAEC_Fallback_PetFood: "Pets",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Preserved",
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
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Stock"
   */
  CAEC_Fallback_Stock: "Stock",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Sugar"
   *   ItemName_Base.Sugar = "White Sugar"
   */
  CAEC_Fallback_Sugar: "Sugar",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Vegetable"
   */
  CAEC_Override_Vegetables: "Vegetables",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adult",
  /**
   * informational brochures
   *
   * found in-game:
   *   ItemName_Base.Brochure = "Brochure"
   */
  CAEC_Fallback_Brochure: "Brochure",
  /** comic books */
  CAEC_Fallback_Comic: "Comic",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumable",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Fancy Book",
  /**
   * flyers and handouts
   *
   * found in-game:
   *   ItemName_Base.Flier = "Flier"
   */
  CAEC_Fallback_Flier: "Flier",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Hardcover",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Magazine"
   */
  CAEC_Fallback_Magazine: "Magazine",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Old Newspaper"
   */
  CAEC_Override_Newspaper: "Newspaper",
  /** picture books */
  CAEC_Fallback_PictureBook: "Picture Book",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recipe",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG Manual",
  /** softcover books */
  CAEC_Fallback_Softcover: "Softcover",
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
   *   ItemName_Base.Coffee2 = "Coffee"
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
   *   ItemName_Base.Milk = "Milk Carton"
   */
  CAEC_Fallback_Milk: "Milk",
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
   *   ItemName_Base.Wine = "White Wine"
   *   ItemName_Base.Wine2 = "Red Wine"
   */
  CAEC_Fallback_Wine: "Wine",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Box",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Bundled",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Carton",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Crafted",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Cup",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Cutlery",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Key Ring"
   */
  CAEC_Fallback_KeyRing: "Key Ring",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pan",
  /**
   * photos
   *
   * found in-game:
   *   ItemName_Base.Photo = "Photograph"
   */
  CAEC_Fallback_Photo: "Photo",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Plushie",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Seed Packet",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Smoking",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensil",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Wearable",
};
