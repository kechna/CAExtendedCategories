import type { ExternalTranslations } from "../types";

/**
 * Dutch
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
export const NL: ExternalTranslations = {
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
   *   IGUI_ItemCat_Ammo = "Munitie"
   */
  CAEC_Fallback_Ammo: "Munitie",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Dier"
   */
  CAEC_Fallback_Animal: "Dier",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Deel van dier"
   */
  CAEC_Fallback_AnimalPart: "Dierlijk deel",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Verschijning"
   */
  CAEC_Fallback_Appearance: "Uiterlijk",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Kamperen"
   */
  CAEC_Fallback_Camping: "Camping",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartografie"
   */
  CAEC_Fallback_Cartography: "Cartografie",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Kleding"
   */
  CAEC_Fallback_Clothing: "Kleding",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Communicatie"
   */
  CAEC_Fallback_Communications: "Communicatie",
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
   *   IGUI_ItemCat_Cooking = "Koken"
   *   IGUI_perks_Cooking = "Koken"
   */
  CAEC_Fallback_Cooking: "Koken",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektronica"
   */
  CAEC_Fallback_Electronics: "Elektronica",
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
   *   IGUI_ItemCat_FireSource = "Vuurbron"
   */
  CAEC_Fallback_FireSource: "Vuurbron",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "Eerste hulp"
   *   IGUI_ItemCat_FirstAid = "EHBO"
   */
  CAEC_Fallback_FirstAid: "Eerste hulp",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Vissen"
   *   IGUI_perks_Fishing = "Vissen"
   *   ContextMenu_Fishing = "Vissen"
   *   IGUI_CraftCategory_Fishing = "Vissen"
   */
  CAEC_Fallback_Fishing: "Vissen",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Voedsel"
   */
  CAEC_Fallback_Food: "Voedsel",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Meubels"
   */
  CAEC_Fallback_Furniture: "Meubels",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Tuinieren"
   *   ContextMenu_Gardening = "Tuinieren"
   */
  CAEC_Fallback_Gardening: "Tuinieren",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Huishouden"
   */
  CAEC_Fallback_Household: "Huishouden",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Muziekinstrument"
   */
  CAEC_Fallback_Instrument: "Muziekinstrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Troep"
   */
  CAEC_Fallback_Junk: "Rommel",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Lichtbron"
   */
  CAEC_Fallback_LightSource: "Lichtbron",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatuur"
   */
  CAEC_Fallback_Literature: "Literatuur",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiaal"
   */
  CAEC_Fallback_Material: "Materiaal",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Memento"
   */
  CAEC_Fallback_Memento: "Aandenken",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Verf"
   */
  CAEC_Fallback_Paint: "Verf",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Beschermende uitrusting"
   */
  CAEC_Fallback_ProtectiveGear: "Bescherming",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Vaardigheidsboek"
   */
  CAEC_Fallback_SkillBook: "Vaardigheidsboek",
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
   *   IGUI_ItemCat_Tool = "Gereedschap"
   */
  CAEC_Fallback_Tool: "Gereedschap",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Vallen zetten"
   *   IGUI_perks_Trapping = "Vallen zetten"
   */
  CAEC_Fallback_Trapping: "Vallen zetten",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Voertuigonderhoud"
   */
  CAEC_Fallback_VehicleMaintenance: "Voertuigonderhoud",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Wapen"
   */
  CAEC_Fallback_Weapon: "Wapen",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Bijl"
   */
  CAEC_Fallback_Axe: "Bijl",
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Smeden"
   */
  CAEC_Fallback_Blacksmith: "Smeden",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Lang Bot"
   */
  CAEC_Fallback_Blunt: "Lang Bot",
  /**
   * butchering skill
   *
   * found in-game:
   *   IGUI_perks_Butchering = "Slachten"
   */
  CAEC_Fallback_Butchering: "Slachten",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Timmerwerk"
   *   IGUI_perks_Carpentry = "Timmerwerk"
   */
  CAEC_Fallback_Carpentry: "Timmerwerk",
  /**
   * carving skill
   *
   * found in-game:
   *   IGUI_perks_Carving = "Houtsnijden"
   */
  CAEC_Fallback_Carving: "Houtsnijden",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektrisch"
   */
  CAEC_Fallback_Electrical: "Elektrisch",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Landbouw"
   *   IGUI_perks_Farming = "Landbouw"
   */
  CAEC_Fallback_Farming: "Landbouw",
  /**
   * knapping skill
   *
   * found in-game:
   *   IGUI_perks_FlintKnapping = "Vuursteen bewerken"
   */
  CAEC_Fallback_FlintKnapping: "Vuursteen bewerken",
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "zoeken"
   */
  CAEC_Fallback_Foraging: "zoeken",
  /**
   * glassmaking skill
   *
   * found in-game:
   *   IGUI_perks_Glassmaking = "Glas maken"
   */
  CAEC_Fallback_Glassmaking: "Glas maken",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Lang Mes"
   */
  CAEC_Fallback_LongBlade: "Lang Mes",
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Onderhoud"
   */
  CAEC_Fallback_Maintenance: "Onderhoud",
  /**
   * masonry skill
   *
   * found in-game:
   *   IGUI_perks_Masonry = "Metselen"
   */
  CAEC_Fallback_Masonry: "Metselen",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Voertuigonderhoud"
   */
  CAEC_Fallback_Mechanics: "Voertuigonderhoud",
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Metaalbewerking"
   */
  CAEC_Fallback_Metalworking: "Metaalbewerking",
  /**
   * pottery skill
   *
   * found in-game:
   *   IGUI_perks_Pottery = "Keramiek"
   */
  CAEC_Fallback_Pottery: "Keramiek",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Kort Mes"
   */
  CAEC_Fallback_SmallBlade: "Kort Mes",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Kort Bot"
   */
  CAEC_Fallback_SmallBlunt: "Kort Bot",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Speren"
   */
  CAEC_Fallback_Spear: "Speren",
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Kleermakerswerk"
   */
  CAEC_Fallback_Tailoring: "Kleermakerswerk",
  /**
   * tracking skill
   *
   * found in-game:
   *   IGUI_perks_Tracking = "Volgen"
   */
  CAEC_Fallback_Tracking: "Volgen",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metaal bewerking"
   */
  CAEC_Override_Welding: "Lassen",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Armen",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Onderlichaam",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Gezicht",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Schoeisel",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Volledig lichaam",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Handen",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Hoofd"
   */
  CAEC_Fallback_Head: "Hoofd",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Sieraden",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Benen",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Nek"
   */
  CAEC_Fallback_Neck: "Nek",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Bovenkleding",
  /** hosiery and socks */
  CAEC_Override_Socks: "Sokken",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Bovenlichaam",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Ondergoed",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Bakken",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Brood"
   */
  CAEC_Fallback_Bread: "Brood",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Snoep"
   */
  CAEC_Fallback_Candy: "Snoep",
  /** canned food items */
  CAEC_Override_Canned: "Ingeblikt",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Kaas"
   */
  CAEC_Fallback_Cheese: "Kaas",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Maaltijd",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Fruit"
   */
  CAEC_Fallback_Fruits: "Fruit",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Kruiden"
   */
  CAEC_Fallback_Herb: "Kruiden",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Hete pepers"
   */
  CAEC_Fallback_HotPepper: "Pittige pepers",
  /**
   * edible insects
   *
   * found in-game:
   *   ContextMenu_FoodType_Insect = "Insect"
   */
  CAEC_Fallback_Insect: "Insecten",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Vee",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Vlees"
   */
  CAEC_Fallback_Meat: "Vlees",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Paddenstoel"
   */
  CAEC_Fallback_Mushroom: "Paddenstoelen",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Noot"
   */
  CAEC_Fallback_Nut: "Noten",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Bederfelijk",
  /** food for pets */
  CAEC_Fallback_PetFood: "Huisdieren",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portie",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Geconserveerd",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Zeevruchten"
   */
  CAEC_Fallback_Seafood: "Zeevruchten",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Zaad"
   */
  CAEC_Fallback_Seed: "Zaden",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Kruiden",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Basisvoeding",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Bouillon"
   */
  CAEC_Fallback_Stock: "Bouillon",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Suiker"
   */
  CAEC_Fallback_Sugar: "Suiker",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Groente"
   */
  CAEC_Override_Vegetables: "Groenten",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Volwassen",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brochure",
  /** comic books */
  CAEC_Fallback_Comic: "Stripboek",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Verbruiksartikel",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Luxe boek",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Flyer",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Hardcover",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Tijdschrift",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Krant",
  /** picture books */
  CAEC_Fallback_PictureBook: "Prentenboek",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recept",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG-handleiding",
  /** softcover books */
  CAEC_Fallback_Softcover: "Paperback",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Fallback_Bow: "Paperback",
  /** firearm drums */
  CAEC_Fallback_Drum: "undefined",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Vuurwapen",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistool",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magazijn",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Geweer",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Jachtgeweer",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bier"
   */
  CAEC_Fallback_Beer: "Bier",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Drinken",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kofie"
   */
  CAEC_Override_Coffee: "Koffie",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Verf",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energy Drink",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Brandstof",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Sap"
   */
  CAEC_Fallback_Juice: "Sap",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Vloeistof",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Melk"
   *   ContextMenu_Milk = "Melk"
   */
  CAEC_Fallback_Milk: "Melk",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Frisdrank"
   */
  CAEC_Fallback_SoftDrink: "Frisdrank",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Thee"
   */
  CAEC_Fallback_Tea: "Thee",
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
   *   ContextMenu_FoodType_Wine = "Wijn"
   */
  CAEC_Fallback_Wine: "Wijn",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Doos",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Gebundeld",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Kartonnen doos",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Wekker"
   */
  CAEC_Fallback_AlarmClock: "Wekker",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Afstandsbediening",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkietalkie",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Fiets",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Composteerbaar",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Handgemaakt",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Beker",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Bestek",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Sleutelbos",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pan",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Onderdeel"
   */
  CAEC_Fallback_Part: "Onderdeel",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Knuffel",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Zadenpakket",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Roken",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Snuisterij",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Keukengerei",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Draagbaar",
};
