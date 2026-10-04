import type { ExternalTranslations } from "../types";

/**
 * Polish
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
export const PL: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Akcesoria"
   */
  CAEC_Fallback_Accessory: "Dodatek",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Amunicja"
   */
  CAEC_Fallback_Ammo: "Amunicja",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Zwierzę"
   */
  CAEC_Fallback_Animal: "Zwierzę",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Część zwierzęcia"
   */
  CAEC_Fallback_AnimalPart: "Część zwierzęca",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Wygląd"
   */
  CAEC_Fallback_Appearance: "Wygląd",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Kemping"
   */
  CAEC_Fallback_Camping: "Obozowanie",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartografia"
   */
  CAEC_Fallback_Cartography: "Kartografia",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Ubrania"
   */
  CAEC_Override_Clothing: "Odzież",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Komunikacja"
   */
  CAEC_Fallback_Communications: "Komunikacja",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Pojemniki"
   *   ContextMenu_Container = "Pojemniki"
   */
  CAEC_Fallback_Container: "Pojemnik",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Gotowanie"
   */
  CAEC_Fallback_Cooking: "Gotowanie",
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
   *   IGUI_ItemCat_Entertainment = "Rozrywka"
   */
  CAEC_Fallback_Entertainment: "Rozrywka",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Źródło ognia"
   */
  CAEC_Fallback_FireSource: "Ogień",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Pierwsza pomoc"
   */
  CAEC_Fallback_FirstAid: "Pierwsza pomoc",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Wędkarstwo"
   *   ContextMenu_Fishing = "Łów ryby"
   *   IGUI_CraftCategory_Fishing = "Wędkarstwo"
   */
  CAEC_Fallback_Fishing: "Wędkarstwo",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Żywność"
   */
  CAEC_Override_Food: "Jedzenie",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Meble"
   */
  CAEC_Fallback_Furniture: "Meble",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Ogrodnictwo"
   *   ContextMenu_Gardening = "Ogrodnictwo"
   */
  CAEC_Fallback_Gardening: "Ogrodnictwo",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Domowe"
   */
  CAEC_Fallback_Household: "Domowe",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumenty muzyczne"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Rupiecie"
   */
  CAEC_Override_Junk: "Śmieci",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Źródło światła"
   */
  CAEC_Fallback_LightSource: "Źródło światła",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatura"
   */
  CAEC_Fallback_Literature: "Książka",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiały"
   */
  CAEC_Override_Material: "Materiał",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Pamiątka"
   */
  CAEC_Fallback_Memento: "Pamiątka",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Farba"
   */
  CAEC_Fallback_Paint: "Farba",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Sprzęt ochronny"
   */
  CAEC_Fallback_ProtectiveGear: "Ochrona",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Podręczniki"
   */
  CAEC_Override_SkillBook: "Poradnik",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sportowe"
   */
  CAEC_Fallback_Sports: "Sport",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Narzędzia"
   */
  CAEC_Override_Tool: "Narzędzie",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Pułapki"
   */
  CAEC_Fallback_Trapping: "Pułapki",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Naprawa pojazdów"
   */
  CAEC_Override_VehicleMaintenance: "Obsługa pojazdów",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Broń"
   */
  CAEC_Fallback_Weapon: "Broń",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Siekiera",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Kowalstwo",
  /** long blunt weapon skill */
  CAEC_Override_Blunt: "Długie obuchy",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Oprawianie",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Stolarstwo"
   */
  CAEC_Fallback_Carpentry: "Stolarstwo",
  /** carving skill */
  CAEC_Fallback_Carving: "Rzeźbiarstwo",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektryka"
   */
  CAEC_Fallback_Electrical: "Elektryka",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Uprawa roślin"
   */
  CAEC_Fallback_Farming: "Uprawa roślin",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Łupanie",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Zbieractwo",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Szkło",
  /** long blade weapon skill */
  CAEC_Override_LongBlade: "Długie ostrze",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Konserwacja",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Murarka",
  /** mechanics skill, vehicle maintenance */
  CAEC_Override_Mechanics: "Naprawa pojazdów",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metalurgia",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Garncarstwo",
  /** short blade weapon skill */
  CAEC_Override_SmallBlade: "Krótkie ostrze",
  /** short blunt weapon skill */
  CAEC_Override_SmallBlunt: "Krótkie obuchy",
  /** spear weapon skill */
  CAEC_Override_Spear: "Włócznia",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Krawiectwo",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Tropienie",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Spawanie"
   */
  CAEC_Fallback_Welding: "Spawanie",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Ręce",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Dół",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Twarz",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Buty",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Całe ciało",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Rękawiczki",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Głowa"
   */
  CAEC_Fallback_Head: "Głowa",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Biżuteria",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Nogi",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Szyja"
   */
  CAEC_Fallback_Neck: "Szyja",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Wierzchnie",
  /** hosiery and socks */
  CAEC_Override_Socks: "Skarpety",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Góra",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Bielizna",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Pieczenie",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Chleb"
   */
  CAEC_Fallback_Bread: "Chleb",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Cukierek"
   */
  CAEC_Override_Candy: "Słodycze",
  /** canned food items */
  CAEC_Override_Canned: "Konserwa",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Nabiał",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Danie",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Zioła"
   */
  CAEC_Fallback_Herb: "Zioła",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "z mięsem"
   */
  CAEC_Override_Meat: "Mięso",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Psujące się",
  /** food for pets */
  CAEC_Fallback_PetFood: "Karma",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porcja",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Zakonserwowane",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Owoce i warzywa",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Owoce morza"
   */
  CAEC_Fallback_Seafood: "Owoce morza",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Ziarno"
   */
  CAEC_Override_Seed: "Nasiona",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Przekąska",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Przyprawa",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Podstawa",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Dla dorosłych",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Broszura",
  /** comic books */
  CAEC_Fallback_Comic: "Komiks",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Rozrywkowy",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Książka",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Ulotka",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Twarda okładka",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Czasopismo",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Gazeta",
  /** picture books */
  CAEC_Fallback_PictureBook: "Książka z obrazkami",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Przepis",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Podręcznik RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Miękka okładka",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Łuk",
  /** firearm drums */
  CAEC_Fallback_Drum: "Magazynek bębnowy",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Broń palna",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistolet",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magazynek",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Karabin",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Strzelba",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Piwo"
   */
  CAEC_Fallback_Beer: "Piwo",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Napój",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Koktajl",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kawa"
   */
  CAEC_Fallback_Coffee: "Kawa",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Barwnik",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energetyk",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Paliwo",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Sok"
   */
  CAEC_Fallback_Juice: "Sok",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Ciecz",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Mleko"
   *   ContextMenu_Milk = "Doj"
   */
  CAEC_Fallback_Milk: "Mleko",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Napój gazowany"
   */
  CAEC_Fallback_SoftDrink: "Napój gazowany",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Herbata"
   */
  CAEC_Fallback_Tea: "Herbata",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Podlej"
   */
  CAEC_Override_Water: "Woda",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Wino"
   */
  CAEC_Fallback_Wine: "Wino",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Pudełko",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Związane",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Budzik"
   */
  CAEC_Fallback_AlarmClock: "Budzik",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Pilot",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Krótkofalówka",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Rower",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompostowalne",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Wytworzone",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Naczynie",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Sztućce",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Kółko z kluczami",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Naczynie kuchenne",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Część ciała"
   */
  CAEC_Fallback_Part: "Część ciała",
  /** photos */
  CAEC_Fallback_Photo: "Zdjęcie",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Pluszak",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Opakowanie nasion",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Pasza dla zwierząt",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Palenie",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Bibelot",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Przyrząd kuchenny",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Plecak",
};
