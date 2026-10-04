import type { ExternalTranslations } from "../types";

/**
 * Hungarian
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
export const HU: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Tartozék"
   */
  CAEC_Fallback_Accessory: "Tartozék",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Lőszer"
   */
  CAEC_Fallback_Ammo: "Lőszer",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Állat"
   */
  CAEC_Fallback_Animal: "Állat",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Állati testrész"
   */
  CAEC_Fallback_AnimalPart: "Állatrész",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Megjelenés"
   */
  CAEC_Fallback_Appearance: "Megjelenés",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Táborozás"
   */
  CAEC_Fallback_Camping: "Táborozás",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Térképészet"
   */
  CAEC_Fallback_Cartography: "Térképészet",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Ruha"
   */
  CAEC_Fallback_Clothing: "Ruha",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Kommunikáció"
   */
  CAEC_Fallback_Communications: "Kommunikáció",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Tároló"
   *   ContextMenu_Container = "Tárolók"
   */
  CAEC_Fallback_Container: "Tároló",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Főzés"
   */
  CAEC_Fallback_Cooking: "Főzés",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektronika"
   */
  CAEC_Fallback_Electronics: "Elektronika",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Szórakoztatás"
   */
  CAEC_Fallback_Entertainment: "Szórakoztatás",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Tűzforrás"
   */
  CAEC_Fallback_FireSource: "Tűzforrás",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Gyógyítás"
   */
  CAEC_Fallback_FirstAid: "Gyógyítás",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Horgászás"
   *   ContextMenu_Fishing = "Horgászás"
   *   IGUI_CraftCategory_Fishing = "Horgászat"
   */
  CAEC_Fallback_Fishing: "Horgászás",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Étel"
   */
  CAEC_Fallback_Food: "Étel",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Bútor"
   */
  CAEC_Fallback_Furniture: "Bútor",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Kertészkedés"
   */
  CAEC_Fallback_Gardening: "Kertészkedés",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Háztartás"
   */
  CAEC_Fallback_Household: "Háztartás",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Hangszer"
   */
  CAEC_Fallback_Instrument: "Hangszer",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Szemét"
   */
  CAEC_Fallback_Junk: "Szemét",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Fényforrás"
   */
  CAEC_Fallback_LightSource: "Fényforrás",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Olvasmány"
   */
  CAEC_Fallback_Literature: "Olvasmány",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Anyag"
   */
  CAEC_Fallback_Material: "Anyag",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Emlék"
   */
  CAEC_Fallback_Memento: "Emlék",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Festék"
   */
  CAEC_Fallback_Paint: "Festék",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Védőfelszerelés"
   */
  CAEC_Fallback_ProtectiveGear: "Védőfelszerelés",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Készség Könyv"
   */
  CAEC_Fallback_SkillBook: "Készség Könyv",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sportolás"
   */
  CAEC_Fallback_Sports: "Sportolás",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Eszköz"
   */
  CAEC_Fallback_Tool: "Eszköz",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Prémvadászat"
   */
  CAEC_Fallback_Trapping: "Prémvadászat",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Jármű Kezelés"
   */
  CAEC_Fallback_VehicleMaintenance: "Jármű Kezelés",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Fegyver"
   */
  CAEC_Fallback_Weapon: "Fegyver",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Balta",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Kovácsolás",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Ütőfegyver",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Hentesmunka",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Ácsmesterség"
   */
  CAEC_Fallback_Carpentry: "Ácsmesterség",
  /** carving skill */
  CAEC_Fallback_Carving: "Faragás",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Villanyszerelés"
   */
  CAEC_Fallback_Electrical: "Villanyszerelés",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Gazdálkodás"
   */
  CAEC_Fallback_Farming: "Gazdálkodás",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Kovapattintás",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Gyűjtögetés",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Üvegkészítés",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Hosszú szúrófegyver",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Karbantartás",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Kőművesség",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Szerelés",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Fémmegmunkálás",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Fazekasság",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Rövid szúrófegyver",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Rövid ütőfegyver",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Dárda",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Szabás-varrás",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Nyomkövetés",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Hegesztés"
   */
  CAEC_Fallback_Welding: "Hegesztés",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Karok",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Alsó",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Arc",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Lábbeli",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Teljes test",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Kezek",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Fej"
   */
  CAEC_Fallback_Head: "Fej",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Ékszerek",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Lábak",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Nyak"
   */
  CAEC_Fallback_Neck: "Nyak",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Felsőruházat",
  /** hosiery and socks */
  CAEC_Override_Socks: "Zokni",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Felső",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Fehérnemű",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Sütés",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Kenyér"
   */
  CAEC_Fallback_Bread: "Kenyér",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Cukorka"
   */
  CAEC_Fallback_Candy: "Cukorka",
  /** canned food items */
  CAEC_Override_Canned: "Konzerv",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Tejtermékek",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Étel",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Fagyasztott",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Gyógynövények"
   */
  CAEC_Fallback_Herb: "Gyógynövények",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Hús"
   */
  CAEC_Fallback_Meat: "Hús",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Romlandó",
  /** food for pets */
  CAEC_Fallback_PetFood: "Háziállatok",
  /** single serving portion of food */
  CAEC_Override_Portion: "Adag",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Tartósított",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Zöldség-gyümölcs",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Tengeri Étel"
   */
  CAEC_Fallback_Seafood: "Tengeri Étel",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Mag"
   */
  CAEC_Fallback_Seed: "Mag",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Nassolnivaló",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Fűszerek",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alapélelmiszer",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Felnőtt",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brosúra",
  /** comic books */
  CAEC_Fallback_Comic: "Képregény",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Fogyóeszköz",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Díszkönyv",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Szórólap",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Keménykötés",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Magazin",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Újság",
  /** picture books */
  CAEC_Fallback_PictureBook: "Képeskönyv",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recept",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Szerepjáték-kézikönyv",
  /** softcover books */
  CAEC_Fallback_Softcover: "Puhakötés",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Íj",
  /** firearm drums */
  CAEC_Fallback_Drum: "Dobtár",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Robbanószer",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Lőfegyver",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pisztoly",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Tár",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Puska",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Sörétes puska",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Sör"
   */
  CAEC_Fallback_Beer: "Sör",
  /** top-level category for drinkable liquids */
  CAEC_Fallback_Beverage: "Ital",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Koktél",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kávé"
   */
  CAEC_Fallback_Coffee: "Kávé",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Festék",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energiaital",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Üzemanyag",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Gyümölcslé"
   */
  CAEC_Fallback_Juice: "Gyümölcslé",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Folyadék",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Tej"
   *   ContextMenu_Milk = "Tej"
   */
  CAEC_Fallback_Milk: "Tej",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Méreg",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Üdítőital"
   */
  CAEC_Fallback_SoftDrink: "Üdítőital",
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
   *   ContextMenu_Water = "Víz"
   */
  CAEC_Fallback_Water: "Víz",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Bor"
   */
  CAEC_Fallback_Wine: "Bor",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Doboz",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Kötegelt",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Kartondoboz",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Ébresztőóra"
   */
  CAEC_Fallback_AlarmClock: "Ébresztőóra",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Rádió",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Távirányító",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Adóvevő",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Kazetta",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Kerékpár",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Komposztálható",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Kézműves",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Csésze",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Evőeszköz",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Kulcscsomó",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Serpenyő",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Testrész"
   */
  CAEC_Fallback_Part: "Testrész",
  /** photos */
  CAEC_Fallback_Photo: "Fénykép",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Kép",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Plüss",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Magcsomag",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Állateledel",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Dohányzás",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Játék",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Csecsebecse",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Konyhai eszköz",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Viselhető",
};
