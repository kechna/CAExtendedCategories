import type { ExternalTranslations } from "../types";

/**
 * Danish
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
export const DA: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Tilbehør"
   */
  CAEC_Fallback_Accessory: "Tilbehør",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Ammunition"
   */
  CAEC_Fallback_Ammo: "Ammunition",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Dyr"
   */
  CAEC_Fallback_Animal: "Dyr",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Dyredel"
   */
  CAEC_Fallback_AnimalPart: "Dyredele",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Udseende"
   */
  CAEC_Fallback_Appearance: "Udseende",
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
   *   IGUI_ItemCat_Cartography = "Kartografi"
   */
  CAEC_Fallback_Cartography: "Kartografi",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Tøj"
   */
  CAEC_Fallback_Clothing: "Tøj",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Kommunikation"
   */
  CAEC_Fallback_Communications: "Kommunikation",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Beholder"
   *   ContextMenu_Container = "Beholdere"
   */
  CAEC_Fallback_Container: "Beholder",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Madlavning"
   */
  CAEC_Fallback_Cooking: "Madlavning",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektronik"
   */
  CAEC_Fallback_Electronics: "Elektronik",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Underholdning"
   */
  CAEC_Fallback_Entertainment: "Underholdning",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Ildkilde"
   */
  CAEC_Fallback_FireSource: "Ildkilde",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Førstehjælp"
   */
  CAEC_Fallback_FirstAid: "Førstehjælp",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Fiskeri"
   *   ContextMenu_Fishing = "Fiske"
   *   IGUI_CraftCategory_Fishing = "Fiskeri"
   */
  CAEC_Fallback_Fishing: "Fiskeri",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Mad"
   */
  CAEC_Fallback_Food: "Mad",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Møbler"
   */
  CAEC_Fallback_Furniture: "Møbler",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Havearbejde"
   *   ContextMenu_Gardening = "Havearbejde"
   */
  CAEC_Fallback_Gardening: "Havearbejde",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Husholdning"
   */
  CAEC_Fallback_Household: "Husholdning",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Musikinstrument"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Skrammel"
   */
  CAEC_Fallback_Junk: "Skrammel",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Lyskilde"
   */
  CAEC_Fallback_LightSource: "Lyskilde",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Litteratur"
   */
  CAEC_Fallback_Literature: "Litteratur",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiale"
   */
  CAEC_Fallback_Material: "Materiale",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Minde"
   */
  CAEC_Fallback_Memento: "Minde",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Mal"
   */
  CAEC_Fallback_Paint: "Maling",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Beskyttelsesudstyr"
   */
  CAEC_Fallback_ProtectiveGear: "Beskyttelsesudstyr",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Færdighedsbog"
   */
  CAEC_Fallback_SkillBook: "Færdighedsbog",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sport"
   */
  CAEC_Fallback_Sports: "Sport",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Værktøj"
   */
  CAEC_Fallback_Tool: "Værktøj",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Fælder"
   */
  CAEC_Fallback_Trapping: "Fælder",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Vedligeholdelse af køretøjer"
   */
  CAEC_Fallback_VehicleMaintenance: "Køretøjsvedligeholdelse",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Våben"
   */
  CAEC_Fallback_Weapon: "Våben",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Økse",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Smedning",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Langt stumpt våben",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Slagtning",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Tømrerarbejde"
   */
  CAEC_Fallback_Carpentry: "Tømrerarbejde",
  /** carving skill */
  CAEC_Fallback_Carving: "Udskæring",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektrisk"
   */
  CAEC_Fallback_Electrical: "Elektricitet",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Landbrug"
   */
  CAEC_Fallback_Farming: "Landbrug",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Flinthugning",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Sankning",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Glasfremstilling",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Lang klinge",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Vedligeholdelse",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Murerarbejde",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mekanik",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metalbearbejdning",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Keramik",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Kort klinge",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Kort stump",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Spyd",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Skrædderi",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Sporing",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Svejser"
   */
  CAEC_Fallback_Welding: "Svejsning",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Arme",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Underdel",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Ansigt",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Fodtøj",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Helkrop",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Hænder",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Hoved"
   */
  CAEC_Fallback_Head: "Hoved",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Smykker",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Ben",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Hals"
   */
  CAEC_Fallback_Neck: "Hals",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Overtøj",
  /** hosiery and socks */
  CAEC_Override_Socks: "Sokker",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Overdel",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Undertøj",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Bagning",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Brød"
   */
  CAEC_Fallback_Bread: "Brød",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Slik"
   */
  CAEC_Fallback_Candy: "Slik",
  /** canned food items */
  CAEC_Override_Canned: "Konserves",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Mejeriprodukter",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Færdigretter",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Frost",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Urter"
   */
  CAEC_Fallback_Herb: "Urter",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Kød"
   */
  CAEC_Fallback_Meat: "Kød",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Letfordærveligt",
  /** food for pets */
  CAEC_Fallback_PetFood: "Kæledyr",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Konserveret",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Frugt og grønt",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Fisk og Skaldyr"
   */
  CAEC_Fallback_Seafood: "Skaldyr",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Krydderier",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Basisvarer",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Voksen",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Pjece",
  /** comic books */
  CAEC_Fallback_Comic: "Tegneserie",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Krydsord",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Prydbog",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Løbeseddel",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Hardcover",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Magasin",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Avis",
  /** picture books */
  CAEC_Fallback_PictureBook: "Billedbog",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Opskrift",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG-manual",
  /** softcover books */
  CAEC_Fallback_Softcover: "Paperback",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "Skrivning",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Bue",
  /** firearm drums */
  CAEC_Fallback_Drum: "Tromlemagasin",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Sprængstof",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Skydevåben",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistol",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Lademagasin",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Riffel",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Haglgevær",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Øl"
   */
  CAEC_Fallback_Beer: "Øl",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Drikkevarer",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kaffe"
   */
  CAEC_Fallback_Coffee: "Kaffe",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Farvestof",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energidrik",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Brændstof",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Juice"
   */
  CAEC_Fallback_Juice: "Juice",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Væske",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Mælk"
   *   ContextMenu_Milk = "Malk"
   */
  CAEC_Fallback_Milk: "Mælk",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Gift",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Sodavand"
   */
  CAEC_Fallback_SoftDrink: "Sodavand",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "The"
   */
  CAEC_Override_Tea: "Te",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Vand"
   */
  CAEC_Fallback_Water: "Vand",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vin"
   */
  CAEC_Fallback_Wine: "Vin",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Æske",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Bundt",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Vækkeur"
   */
  CAEC_Fallback_AlarmClock: "Vækkeur",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Radio",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Fjernbetjening",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-talkie",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Kassette",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "Dyrefoder"
   */
  CAEC_Fallback_AnimalFeed: "Dyrefoder",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Cykel",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "Rengøring",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Komposterbart",
  /** construction and renovation supplies such as paint, plaster and wallpaper */
  CAEC_Override_Construction: "Byggeri",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Håndlavet",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Kop",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Bestik",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Nøglering",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pande",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Del"
   */
  CAEC_Fallback_Part: "Del",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Billede",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Bamse",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Kerne"
   */
  CAEC_Fallback_Seed: "Frø",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Frøpose",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Rygning",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Legetøj",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Nipsgenstand",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Køkkenredskab",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Bærbar",
};
