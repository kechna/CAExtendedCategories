import type { ExternalTranslations } from "../types";

/**
 * German
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
export const DE: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessoire"
   */
  CAEC_Fallback_Accessory: "Accessoire",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munition"
   */
  CAEC_Fallback_Ammo: "Munition",
  /** animals */
  CAEC_Fallback_Animal: "Tier",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Tierteil",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Kleidung"
   */
  CAEC_Fallback_Appearance: "Kleidung",
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
   *   IGUI_ItemCat_Cartography = "Kartographie"
   */
  CAEC_Fallback_Cartography: "Kartographie",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Kleidung"
   */
  CAEC_Fallback_Clothing: "Kleidung",
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
   *   IGUI_ItemCat_Container = "Behälter"
   *   ContextMenu_Container = "Behälter"
   */
  CAEC_Fallback_Container: "Behälter",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Kochen"
   *   IGUI_perks_Cooking = "Kochen"
   */
  CAEC_Fallback_Cooking: "Kochen",
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
   *   IGUI_ItemCat_Entertainment = "Unterhaltung"
   */
  CAEC_Fallback_Entertainment: "Unterhaltung",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Feuerquelle",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "Humanmedizin"
   *   IGUI_ItemCat_FirstAid = "Erste Hilfe"
   */
  CAEC_Fallback_FirstAid: "Erste Hilfe",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Nahrungsmittel"
   */
  CAEC_Fallback_Food: "Nahrungsmittel",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Möbel"
   */
  CAEC_Fallback_Furniture: "Möbel",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Haushalt"
   */
  CAEC_Fallback_Household: "Haushalt",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrument"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Schrott"
   */
  CAEC_Fallback_Junk: "Schrott",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Lichtquelle"
   */
  CAEC_Fallback_LightSource: "Lichtquelle",
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
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Andenken",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Farbe"
   */
  CAEC_Fallback_Paint: "Farbe",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Schutzausrüstung",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Lehrbuch"
   */
  CAEC_Fallback_SkillBook: "Lehrbuch",
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
   *   IGUI_ItemCat_Tool = "Werkzeug"
   */
  CAEC_Fallback_Tool: "Werkzeug",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Fahrzeugwartung"
   */
  CAEC_Fallback_VehicleMaintenance: "Fahrzeugwartung",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Waffen"
   */
  CAEC_Fallback_Weapon: "Waffen",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Axt"
   */
  CAEC_Fallback_Axe: "Axt",
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Schmieden"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Stumpfwaffe"
   */
  CAEC_Fallback_Blunt: "Stumpfwaffe",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Schlachten",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Tischlerei"
   *   IGUI_perks_Carpentry = "Tischlerei"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: "Schnitzen",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektrotechnik"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Landwirtschaft"
   *   IGUI_perks_Farming = "Landwirtschaft"
   */
  CAEC_Override_Farming: undefined,
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Fischen"
   *   IGUI_perks_Fishing = "Fischen"
   *   ContextMenu_Fishing = "Angeln"
   *   IGUI_CraftCategory_Fishing = "Fischen"
   */
  CAEC_Fallback_Fishing: "Fischen",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Feuersteinbearbeitung",
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Nahrungssuche"
   */
  CAEC_Override_Foraging: undefined,
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Gartenbau"
   */
  CAEC_Fallback_Gardening: "Gartenbau",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Glasherstellung",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Lange Klingenwaffe"
   */
  CAEC_Fallback_LongBlade: "Lange Klingenwaffe",
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Instandhaltung"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: "Maurerhandwerk",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Kfz-Mechanik"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Metallbearbeitung"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: "Töpferei",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Kurze Klingenwaffe"
   */
  CAEC_Fallback_SmallBlade: "Kurze Klingenwaffe",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Kurze Stumpfwaffe"
   */
  CAEC_Fallback_SmallBlunt: "Kurze Stumpfwaffe",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Speer"
   */
  CAEC_Fallback_Spear: "Speer",
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Schneiderei"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: "Spurensuche",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Fallenstellen"
   *   IGUI_perks_Trapping = "Fallenstellen"
   */
  CAEC_Fallback_Trapping: "Fallenstellen",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metallbearbeitung"
   */
  CAEC_Override_Welding: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Arme",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Unterteil",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Gesicht",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Schuhwerk",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Ganzkörper",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Hände",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Kopf"
   */
  CAEC_Fallback_Head: "Kopf",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Schmuck",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Beine",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Hals"
   */
  CAEC_Fallback_Neck: "Hals",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Oberbekleidung",
  /** hosiery and socks */
  CAEC_Override_Socks: "Socken",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Oberkörper",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Unterwäsche",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Backen",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Brot"
   */
  CAEC_Fallback_Bread: "Brot",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Süßigkeiten"
   */
  CAEC_Fallback_Candy: "Süßigkeiten",
  /** canned food items */
  CAEC_Override_Canned: "In Dosen",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Käse"
   */
  CAEC_Fallback_Cheese: "Käse",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Gericht",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Obst"
   */
  CAEC_Fallback_Fruits: "Obst",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Kräuter"
   */
  CAEC_Fallback_Herb: "Kräuter",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Scharfe Pepperoni"
   */
  CAEC_Fallback_HotPepper: "Scharfe Pepperoni",
  /** edible insects */
  CAEC_Fallback_Insect: "Insekten",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Vieh",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Fleisch"
   */
  CAEC_Fallback_Meat: "Fleisch",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Pilz"
   */
  CAEC_Fallback_Mushroom: "Pilz",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Nuss"
   */
  CAEC_Override_Nut: "Nüsse",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Verderblich",
  /** food for pets */
  CAEC_Fallback_PetFood: "Haustiere",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Konserviert",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Meeresfrüchte"
   */
  CAEC_Fallback_Seafood: "Meeresfrüchte",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Samen"
   */
  CAEC_Fallback_Seed: "Samen",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Gewürze",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Grundnahrungsmittel",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Vorrat"
   */
  CAEC_Fallback_Stock: "Vorrat",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Zucker"
   */
  CAEC_Fallback_Sugar: "Zucker",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Gemüse"
   */
  CAEC_Fallback_Vegetables: "Gemüse",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Erwachsenen",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Broschüre",
  /** comic books */
  CAEC_Fallback_Comic: "Comic",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Verbrauchsartikel",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Prachtbuch",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Flugblatt",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Gebundene Ausgabe",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Zeitschrift",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Zeitung",
  /** picture books */
  CAEC_Fallback_PictureBook: "Bilderbuch",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Rezept",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Rollenspiel-Handbuch",
  /** softcover books */
  CAEC_Fallback_Softcover: "Taschenbuch",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Schusswaffe",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistole",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magazin",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Gewehr",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Schrotflinte",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bier"
   */
  CAEC_Override_Beer: "In ein Glas gegossen",
  /** top-level category for drinkable liquids */
  CAEC_Fallback_Beverage: "Getränk",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kaffee"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Färben",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energy-Drink",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Kraftstoff",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Saft"
   */
  CAEC_Fallback_Juice: "Saft",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Flüssigkeit",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Milch"
   */
  CAEC_Fallback_Milk: "Milch",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Softdrink"
   */
  CAEC_Override_SoftDrink: "Limonade",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tee"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Wasser"
   */
  CAEC_Fallback_Water: "Wasser",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Wein"
   */
  CAEC_Fallback_Wine: "Wein",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Kiste",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Gebündelt",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompostierbar",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Gewerkelt",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Becher",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Besteck",
  /** ring or bundle of keys */
  CAEC_Fallback_KeyRing: "Schlüsselbund",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pfanne",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Kuscheltier",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Samentütchen",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Rauchen",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Küchenutensil",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Tragbar",
};
