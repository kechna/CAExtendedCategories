import type { ExternalTranslations } from "../types";

/**
 * Turkish
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
export const TR: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Aksesuar"
   */
  CAEC_Fallback_Accessory: "Aksesuar",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Cephane"
   */
  CAEC_Fallback_Ammo: "Mühimmat",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Hayvan"
   */
  CAEC_Fallback_Animal: "Hayvan",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Hayvan Parçası"
   */
  CAEC_Fallback_AnimalPart: "Hayvan Parçası",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Kişisel Bakım"
   */
  CAEC_Fallback_Appearance: "Görünüş",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Kamp"
   */
  CAEC_Fallback_Camping: "Kamp",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartografya"
   */
  CAEC_Fallback_Cartography: "Haritacılık",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Giysi"
   */
  CAEC_Fallback_Clothing: "Giysi",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "İletişim"
   */
  CAEC_Fallback_Communications: "İletişim",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Depolama"
   *   ContextMenu_Container = "Depolama"
   */
  CAEC_Fallback_Container: "Konteyner",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Aşçılık"
   */
  CAEC_Fallback_Cooking: "Yemek Pişirme",
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
   *   IGUI_ItemCat_Entertainment = "Eğlence"
   */
  CAEC_Fallback_Entertainment: "Eğlence",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Ateş Kaynağı"
   */
  CAEC_Fallback_FireSource: "Ateş Kaynağı",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "İlk Yardım"
   */
  CAEC_Fallback_FirstAid: "Tıbbi Malzeme",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Balıkçılık"
   *   ContextMenu_Fishing = "Balık Tut"
   *   IGUI_CraftCategory_Fishing = "Balıkçılık"
   */
  CAEC_Fallback_Fishing: "Balıkçılık",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Yiyecek"
   */
  CAEC_Fallback_Food: "Yiyecek",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Mobilya"
   */
  CAEC_Fallback_Furniture: "Mobilya",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Çiftçilik"
   *   ContextMenu_Gardening = "Bahçecilik"
   */
  CAEC_Fallback_Gardening: "Bahçıvanlık",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Günlük Ev Eşyaları"
   */
  CAEC_Fallback_Household: "Ev Eşyası",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Enstrüman"
   */
  CAEC_Fallback_Instrument: "Müzik Aleti",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Hurda"
   */
  CAEC_Fallback_Junk: "Ivır Zıvır",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Işık Kaynağı"
   */
  CAEC_Fallback_LightSource: "Işık Kaynağı",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Okumalık"
   */
  CAEC_Fallback_Literature: "Literatür",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Malzeme"
   */
  CAEC_Fallback_Material: "Malzeme",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Hatıra"
   */
  CAEC_Fallback_Memento: "Hatıra",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Boya"
   */
  CAEC_Fallback_Paint: "Boya",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Koruyucu Ekipman"
   */
  CAEC_Fallback_ProtectiveGear: "Koruyucu Ekipman",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Yetenek Kitabı"
   */
  CAEC_Fallback_SkillBook: "Beceri Kitabı",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Spor"
   */
  CAEC_Fallback_Sports: "Spor",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Alet"
   */
  CAEC_Fallback_Tool: "Alet",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Avcılık"
   */
  CAEC_Fallback_Trapping: "Tuzakçılık",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Tamircilik"
   */
  CAEC_Fallback_VehicleMaintenance: "Araç Bakımı",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Silah"
   */
  CAEC_Fallback_Weapon: "Silah",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Balta",
  /** blacksmith skill */
  CAEC_Fallback_Blacksmith: "Demircilik",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Uzun Küt Silah",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Kasaplık",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Marangozluk"
   */
  CAEC_Fallback_Carpentry: "Marangozluk",
  /** carving skill */
  CAEC_Fallback_Carving: "Oymacılık",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektriksel"
   */
  CAEC_Fallback_Electrical: "Elektrik",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Çiftçilik"
   */
  CAEC_Fallback_Farming: "Tarım",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Yontma",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Toplayıcılık",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Camcılık",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Uzun Bıçaklı Silah",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Bakım",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Duvarcılık",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mekanik",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "Metal İşçiliği",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Çömlekçilik",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Kısa Bıçaklı Silah",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Kısa Küt Silah",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Mızrak",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Terzilik",
  /** tracking skill */
  CAEC_Fallback_Tracking: "İz Sürme",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metal İşleme"
   */
  CAEC_Fallback_Welding: "Kaynakçılık",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Kollar",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Alt Giyim",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Yüz",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Ayakkabı",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Tam Vücut",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Eller",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Kafa"
   */
  CAEC_Override_Head: "Baş",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Takı",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Bacaklar",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Boyun"
   */
  CAEC_Fallback_Neck: "Boyun",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Dış Giyim",
  /** hosiery and socks */
  CAEC_Override_Socks: "Çoraplar",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Üst Giyim",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "İç Giyim",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Hamur İşleri",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Ekmek"
   */
  CAEC_Fallback_Bread: "Ekmek",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Şeker"
   */
  CAEC_Override_Candy: "Şekerleme",
  /** canned food items */
  CAEC_Override_Canned: "Konserve",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Süt Ürünleri",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Yemek",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Dondurulmuş",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Ot"
   */
  CAEC_Fallback_Herb: "Bitkiler",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Et"
   */
  CAEC_Fallback_Meat: "Et",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Bozulabilir",
  /** food for pets */
  CAEC_Fallback_PetFood: "Evcil Hayvan Yemi",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porsiyon",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Kavanozlanmış",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Meyve ve Sebze",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Deniz Ürünü"
   */
  CAEC_Fallback_Seafood: "Deniz Ürünü",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "Atıştırmalık",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Baharat",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Kuru Gıda",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Yetişkin",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Broşür",
  /** comic books */
  CAEC_Fallback_Comic: "Çizgi Roman",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Etkinlik Dergisi",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Lüks Kitap",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "El İlanı",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Ciltli Kitap",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Dergi",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Gazete",
  /** picture books */
  CAEC_Fallback_PictureBook: "Resimli Kitap",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Tarif",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RYO Kılavuzu",
  /** softcover books */
  CAEC_Fallback_Softcover: "Karton Kapaklı Kitap",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: undefined,
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Yay",
  /** firearm drums */
  CAEC_Fallback_Drum: "Tambur Şarjör",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Patlayıcı",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Ateşli Silah",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Tabanca",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Şarjör",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Tüfek",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Pompalı Tüfek",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bira"
   */
  CAEC_Fallback_Beer: "Bira",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Meşrubat",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Kokteyl",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kahveli"
   */
  CAEC_Override_Coffee: "Kahve",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Renklendirici",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Enerji İçeceği",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Yakıt",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Meyve suyu"
   */
  CAEC_Fallback_Juice: "Meyve Suyu",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Sıvı",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Süt"
   *   ContextMenu_Milk = "Süt"
   */
  CAEC_Fallback_Milk: "Süt",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Zehir",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Meşrubat"
   */
  CAEC_Override_SoftDrink: "Gazlı İçecek",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Çaylı"
   */
  CAEC_Override_Tea: "Çay",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Su"
   */
  CAEC_Fallback_Water: "Su",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Şarap"
   */
  CAEC_Fallback_Wine: "Şarap",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Kutu",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Paketlenmiş",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Alarmlı Saat"
   */
  CAEC_Fallback_AlarmClock: "Alarmlı Saat",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Radyo",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Kumanda",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Telsiz",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Kaset",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "Hayvan Yemi"
   */
  CAEC_Fallback_AnimalFeed: "Hayvan Yemi",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Bisiklet",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: undefined,
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompostlanabilir",
  /** construction and renovation supplies such as paint, plaster and wallpaper */
  CAEC_Override_Construction: undefined,
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "El Yapımı",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Bardak",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Çatal-Bıçak Takımı",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Anahtarlık",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Tava",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Bölüm"
   */
  CAEC_Fallback_Part: "Bölüm",
  /** photos */
  CAEC_Fallback_Photo: "Fotoğraf",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Resim",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluş",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Tohum"
   */
  CAEC_Override_Seed: "Ekilebilir Tohum",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Tohum Paketi",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Tütün",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Oyuncak",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Süs Eşyası",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Mutfak Gereci",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Giyilebilir",
};
