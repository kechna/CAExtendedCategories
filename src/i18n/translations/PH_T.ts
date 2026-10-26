import type { ExternalTranslations } from "../types";

/**
 * Tagalog
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
export const PH: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Aksesorya"
   */
  CAEC_Fallback_Accessory: "Aksesorya",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Bala"
   */
  CAEC_Fallback_Ammo: "Bala",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Hayop"
   */
  CAEC_Fallback_Animal: "Hayop",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Bahagi ng Hayop"
   */
  CAEC_Fallback_AnimalPart: "Bahagi ng Hayop",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Hitsura"
   */
  CAEC_Fallback_Appearance: "Hitsura",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Kamping"
   */
  CAEC_Fallback_Camping: "Kamping",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartograpiya"
   */
  CAEC_Fallback_Cartography: "Kartograpiya",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Damit"
   */
  CAEC_Fallback_Clothing: "Damit",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Komunikasyon"
   */
  CAEC_Fallback_Communications: "Komunikasyon",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Lalagyan"
   */
  CAEC_Fallback_Container: "Lalagyan",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Pagluluto"
   */
  CAEC_Fallback_Cooking: "Pagluluto",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektroniks"
   */
  CAEC_Fallback_Electronics: "Elektroniks",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Libangan"
   */
  CAEC_Fallback_Entertainment: "Libangan",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Pinagmumulan ng Apoy"
   */
  CAEC_Fallback_FireSource: "Pinagmumulan ng Apoy",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Pangunang Lunas"
   */
  CAEC_Fallback_FirstAid: "Pangunang Lunas",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pangingisda"
   *   IGUI_perks_Fishing = "Pangingisda"
   *   IGUI_CraftCategory_Fishing = "Pangingisda"
   */
  CAEC_Fallback_Fishing: "Pangingisda",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Pagkain"
   */
  CAEC_Fallback_Food: "Pagkain",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Muwebles"
   */
  CAEC_Fallback_Furniture: "Muwebles",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Paghahalaman"
   */
  CAEC_Fallback_Gardening: "Paghahalaman",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Pambahay"
   */
  CAEC_Fallback_Household: "Pambahay",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumentong Pangmusika"
   */
  CAEC_Fallback_Instrument: "Instrumentong Pangmusika",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Basura"
   */
  CAEC_Fallback_Junk: "Basura",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Pinagmumulan ng Liwanag"
   */
  CAEC_Fallback_LightSource: "Pinagmumulan ng Liwanag",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Babasahin"
   */
  CAEC_Fallback_Literature: "Babasahin",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materyales"
   */
  CAEC_Fallback_Material: "Materyales",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Alaala"
   */
  CAEC_Fallback_Memento: "Alaala",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Pintura"
   */
  CAEC_Fallback_Paint: "Pintura",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Pamprotektang Gamit"
   */
  CAEC_Fallback_ProtectiveGear: "Pamprotektang Gamit",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Aklat ng Kasanayan"
   */
  CAEC_Fallback_SkillBook: "Aklat ng Kasanayan",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Palakasan"
   */
  CAEC_Fallback_Sports: "Palakasan",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Kasangkapan"
   */
  CAEC_Fallback_Tool: "Kasangkapan",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Pag-bitag"
   */
  CAEC_Fallback_Trapping: "Pag-bitag",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Pagmementena ng Sasakyan"
   */
  CAEC_Fallback_VehicleMaintenance: "Pagmementena ng Sasakyan",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Armas"
   */
  CAEC_Fallback_Weapon: "Armas",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Palakol",
  /** blacksmith skill */
  CAEC_Fallback_Blacksmith: "Pagpapanday",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Mahabang Pamalo",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Pagkakatay",
  /** carpentry skill */
  CAEC_Fallback_Carpentry: "Karpinterya",
  /** carving skill */
  CAEC_Fallback_Carving: "Paglililok",
  /** electrical skill */
  CAEC_Fallback_Electrical: "Elektrikal",
  /** farming/agriculture skill */
  CAEC_Fallback_Farming: "Pagsasaka",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Pagtatapyas ng Bato",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Paghahanap sa Kalikasan",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Paggawa ng Salamin",
  /** animal husbandry/care skill */
  CAEC_Fallback_Husbandry: "Pag-aalaga ng Hayop",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Mahabang Talim",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Pagmementena",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Pagmamason",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Mekaniko"
   *   IGUI_ItemCat_Mechanics = "Mekaniko"
   */
  CAEC_Fallback_Mechanics: "Mekaniko",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "Paggawa ng Metal",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Paggawa ng Palayok",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Maikling Talim",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Maikling Pamalo",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Sibat",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Pananahi",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Pagsubaybay ng Bakas",
  /** welding skill */
  CAEC_Fallback_Welding: "Pagwewelding",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Braso",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Pang-ibaba",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Mukha",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Sapin sa Paa",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Buong Katawan",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Kamay",
  /** for items worn on the head such as hats, helmets (but not masks) */
  CAEC_Override_Head: "Ulo",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Alahas",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Binti",
  /** neckwear such as scarves, necklaces */
  CAEC_Override_Neck: "Leeg",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Panlabas na Damit",
  /** hosiery and socks */
  CAEC_Override_Socks: "Medyas",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Pang-itaas",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Damit-panloob",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Pagbe-bake",
  /** baked bread products */
  CAEC_Fallback_Bread: "Tinapay",
  /** sweets and candies */
  CAEC_Override_Candy: "Kendi",
  /** canned food items */
  CAEC_Override_Canned: "De-lata",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Produktong Gatas",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Ulam",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Nagyelo",
  /** culinary or medicinal plants/herbs */
  CAEC_Fallback_Herb: "Halamang-gamot",
  /** any non-fish meat */
  CAEC_Fallback_Meat: "Karne",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Madaling Masira",
  /** food for pets */
  CAEC_Fallback_PetFood: "Alagang Hayop",
  /** single serving portion of food */
  CAEC_Override_Portion: "Bahagi",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Preserba",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Prutas at Gulay",
  /** fish and other seafood */
  CAEC_Fallback_Seafood: "Pagkaing-dagat",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "Merienda",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Pampalasa",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Pangunahing Pagkain",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Pang-adulto",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Polyeto",
  /** comic books */
  CAEC_Fallback_Comic: "Komiks",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Nagagamit",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Magarbong Aklat",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Flyer",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Hardcover",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Magasin",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Pahayagan",
  /** picture books */
  CAEC_Fallback_PictureBook: "Aklat na May Larawan",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Resipe",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manwal ng RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Softcover",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "Pagsusulat",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Pana",
  /** firearm drums */
  CAEC_Fallback_Drum: "Drum",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Pampasabog",
  /**
   * firearm category, pistols, rifles, shotguns, etc.
   *
   * found in-game:
   *   IGUI_ItemCat_Firearm = "Baril"
   */
  CAEC_Fallback_Firearm: "Baril",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magasin ng Baril",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Riple",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Shotgun",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alak",
  /** alcoholic beer beverages */
  CAEC_Fallback_Beer: "Serbesa",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   IGUI_ItemCat_Beverage = "Inumin"
   */
  CAEC_Fallback_Beverage: "Inumin",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /** coffee beverage */
  CAEC_Override_Coffee: "Kape",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Pangkulay",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energy Drink",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Gasolina",
  /** fruit juice */
  CAEC_Fallback_Juice: "Juice",
  /**
   * top-level category for non-drinkable liquids, and used in 'Container - Liquid'
   *
   * found in-game:
   *   IGUI_ItemCat_Liquid = "Likido"
   */
  CAEC_Fallback_Liquid: "Likido",
  /** dairy milk */
  CAEC_Fallback_Milk: "Gatas",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Lason",
  /** carbonated soft drinks */
  CAEC_Override_SoftDrink: "Softdrinks",
  /** tea beverage */
  CAEC_Override_Tea: "Tsaa",
  /** drinking water */
  CAEC_Fallback_Water: "Tubig",
  /** alcoholic wine beverages */
  CAEC_Override_Wine: "Alak na Ubas",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Kahon",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Nakabigkis",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /** alarm clocks and similar devices */
  CAEC_Override_AlarmClock: "Alarm Clock",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Radyo",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Remote",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-Talkie",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Kaset",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Pagkain ng Hayop",
  /**
   * bicycles! for the fantastic bicycle mod
   *
   * found in-game:
   *   IGUI_ItemCat_Bicycle = "Bisikleta"
   */
  CAEC_Fallback_Bicycle: "Bisikleta",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "Paglilinis",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Pang-kompost",
  /**
   * construction and renovation supplies such as paint, plaster and wallpaper
   *
   * found in-game:
   *   IGUI_ItemCat_Construction = "Konstruksyon"
   */
  CAEC_Fallback_Construction: "Konstruksyon",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Gawang-kamay",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Tasa",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Kubyertos",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Susian",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Kawali",
  /** parts for crafting or repairing items, such as vehicle parts or weapon parts */
  CAEC_Fallback_Part: "Piyesa",
  /** photos */
  CAEC_Fallback_Photo: "Litrato",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Larawan",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Stuffed Toy",
  /** loose plantable seeds for gardening/farming */
  CAEC_Override_Seed: "Binhi",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Pakete ng Buto",
  /**
   * smoking items such as cigarettes, cigars, pipes
   *
   * found in-game:
   *   IGUI_ItemCat_Smoking = "Paninigarilyo"
   */
  CAEC_Fallback_Smoking: "Paninigarilyo",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Laruan",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Palamuti",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Kagamitan sa Kusina",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Naisusuot",
};
