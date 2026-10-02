import type { ExternalTranslations } from "../types";

/**
 * Indonesian
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
export const ID: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Aksesoris"
   */
  CAEC_Fallback_Accessory: "Aksesoris",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Amunisi"
   */
  CAEC_Fallback_Ammo: "Amunisi",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Hewan"
   */
  CAEC_Fallback_Animal: "Hewan",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Bagian Hewan"
   */
  CAEC_Fallback_AnimalPart: "Bagian Hewan",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Penampilan"
   */
  CAEC_Fallback_Appearance: "Penampilan",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Perkemahan"
   */
  CAEC_Fallback_Camping: "Perkemahan",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Pemetaan"
   */
  CAEC_Fallback_Cartography: "Pemetaan",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Pakaian"
   */
  CAEC_Fallback_Clothing: "Pakaian",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Komunikasi"
   */
  CAEC_Fallback_Communications: "Komunikasi",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Kontainer"
   *   ContextMenu_Container = "Kontainer"
   */
  CAEC_Fallback_Container: "Kontainer",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Memasak"
   */
  CAEC_Fallback_Cooking: "Memasak",
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
   *   IGUI_ItemCat_Entertainment = "Hiburan"
   */
  CAEC_Fallback_Entertainment: "Hiburan",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Sumber Api"
   */
  CAEC_Fallback_FireSource: "Sumber Api",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Peralatan Medis"
   */
  CAEC_Fallback_FirstAid: "Peralatan Medis",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Memancing"
   *   ContextMenu_Fishing = "Memancing"
   *   IGUI_CraftCategory_Fishing = "Memancing"
   */
  CAEC_Fallback_Fishing: "Memancing",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Makanan"
   */
  CAEC_Fallback_Food: "Makanan",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Furnitur"
   */
  CAEC_Fallback_Furniture: "Furnitur",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Berkebun"
   *   ContextMenu_Gardening = "Berkebun"
   */
  CAEC_Fallback_Gardening: "Berkebun",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Item Rumahan"
   */
  CAEC_Fallback_Household: "Item Rumahan",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumen"
   */
  CAEC_Fallback_Instrument: "Instrumen",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Sampah"
   */
  CAEC_Fallback_Junk: "Sampah",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Sumber Cahaya"
   */
  CAEC_Fallback_LightSource: "Sumber Cahaya",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatur"
   */
  CAEC_Fallback_Literature: "Literatur",
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
   *   IGUI_ItemCat_Memento = "Suvenir"
   */
  CAEC_Fallback_Memento: "Suvenir",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Cat"
   */
  CAEC_Fallback_Paint: "Cat",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Perlengkapan Pelindung"
   */
  CAEC_Fallback_ProtectiveGear: "Perlengkapan Pelindung",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Buku Skill"
   */
  CAEC_Fallback_SkillBook: "Buku Skill",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Olahraga"
   */
  CAEC_Fallback_Sports: "Olahraga",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Alat"
   */
  CAEC_Fallback_Tool: "Alat",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Jebakan"
   */
  CAEC_Fallback_Trapping: "Jebakan",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Perawatan Kendaraan"
   */
  CAEC_Fallback_VehicleMaintenance: "Perawatan Kendaraan",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Senjata"
   */
  CAEC_Fallback_Weapon: "Senjata",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Kapak",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Pandai Besi",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Tumpul Panjang",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Penjagalan",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Pertukangan"
   */
  CAEC_Fallback_Carpentry: "Pertukangan",
  /** carving skill */
  CAEC_Fallback_Carving: "Ukir",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Listrik"
   */
  CAEC_Fallback_Electrical: "Listrik",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agrikultur"
   */
  CAEC_Fallback_Farming: "Agrikultur",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Pemahatan Batu",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Mencari Bahan",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Pembuatan Kaca",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Bilah Panjang",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Perawatan",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Batu Bata",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mekanik",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Pengerjaan Logam",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Tembikar",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Bilah Pendek",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Tumpul Pendek",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Tombak",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Menjahit",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Pelacakan",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Pengelasan"
   */
  CAEC_Fallback_Welding: "Pengelasan",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Lengan",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Bawahan",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Wajah",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Alas Kaki",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Seluruh Badan",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Tangan",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Kepala"
   */
  CAEC_Fallback_Head: "Kepala",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Perhiasan",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Kaki",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Leher"
   */
  CAEC_Fallback_Neck: "Leher",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Pakaian Luar",
  /** hosiery and socks */
  CAEC_Override_Socks: "Kaus Kaki",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Atasan",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Pakaian Dalam",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Bahan Kue",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Roti"
   */
  CAEC_Fallback_Bread: "Roti",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Permen"
   */
  CAEC_Fallback_Candy: "Permen",
  /** canned food items */
  CAEC_Override_Canned: "Kalengan",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Keju"
   */
  CAEC_Fallback_Cheese: "Keju",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Hidangan",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Buah"
   */
  CAEC_Fallback_Fruits: "Buah",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Tumbuhan Rempah"
   */
  CAEC_Fallback_Herb: "Tumbuhan Rempah",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Cabai"
   */
  CAEC_Fallback_HotPepper: "Cabai",
  /**
   * edible insects
   *
   * found in-game:
   *   ContextMenu_FoodType_Insect = "Serangga"
   */
  CAEC_Fallback_Insect: "Serangga",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Ternak",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Daging"
   */
  CAEC_Fallback_Meat: "Daging",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Jamur"
   */
  CAEC_Fallback_Mushroom: "Jamur",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Kacang-kacangan"
   */
  CAEC_Fallback_Nut: "Kacang-kacangan",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Mudah Basi",
  /** food for pets */
  CAEC_Fallback_PetFood: "Hewan Peliharaan",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porsi",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Awetan",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Makanan Laut"
   */
  CAEC_Fallback_Seafood: "Makanan Laut",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Benih"
   */
  CAEC_Fallback_Seed: "Benih",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Camilan",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Bumbu",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Makanan Pokok",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Kaldu"
   */
  CAEC_Fallback_Stock: "Kaldu",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Gula"
   */
  CAEC_Fallback_Sugar: "Gula",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Sayuran"
   */
  CAEC_Fallback_Vegetables: "Sayuran",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Dewasa",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brosur",
  /** comic books */
  CAEC_Fallback_Comic: "Komik",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Habis Pakai",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Buku Mewah",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Selebaran",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Sampul Keras",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Majalah",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Koran",
  /** picture books */
  CAEC_Fallback_PictureBook: "Buku Bergambar",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Resep",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manual RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Sampul Lunak",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Busur",
  /** firearm drums */
  CAEC_Fallback_Drum: "Drum",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Senjata Api",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistol",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magasin",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Senapan",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Senapan Gentel",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bir"
   */
  CAEC_Fallback_Beer: "Bir",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Minuman",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Koktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kopi"
   */
  CAEC_Fallback_Coffee: "Kopi",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Pewarna",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Minuman Energi",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Bahan Bakar",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Jus"
   */
  CAEC_Fallback_Juice: "Jus",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Cairan",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Susu"
   *   ContextMenu_Milk = "Susu"
   */
  CAEC_Fallback_Milk: "Susu",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Minuman Bersoda"
   */
  CAEC_Fallback_SoftDrink: "Minuman Bersoda",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Teh"
   */
  CAEC_Fallback_Tea: "Teh",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Air"
   */
  CAEC_Fallback_Water: "Air",
  /** alcoholic wine beverages */
  CAEC_Override_Wine: "Anggur",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Kotak",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Ikatan",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Jam Alarm"
   */
  CAEC_Fallback_AlarmClock: "Jam Alarm",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Remot",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-talkie",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Sepeda",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompos",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Buatan Tangan",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Cangkir",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Alat Makan",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Gantungan Kunci",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Panci",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Bagian"
   */
  CAEC_Fallback_Part: "Bagian",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Boneka",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Paket Benih",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Rokok",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Pernak-pernik",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Peralatan Dapur",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Dapat Dipakai",
};
