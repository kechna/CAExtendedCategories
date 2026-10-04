import type { ExternalTranslations } from "../types";

/**
 * Romanian
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
export const RO: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accesoriu"
   */
  CAEC_Fallback_Accessory: "Accesoriu",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Muniție"
   */
  CAEC_Fallback_Ammo: "Muniție",
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
   *   IGUI_ItemCat_AnimalPart = "Parte Animală"
   */
  CAEC_Fallback_AnimalPart: "Parte de animal",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Aspect"
   */
  CAEC_Fallback_Appearance: "Aspect",
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
   *   IGUI_ItemCat_Cartography = "Cartografie"
   */
  CAEC_Fallback_Cartography: "Cartografie",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Îmbrăcăminte"
   */
  CAEC_Fallback_Clothing: "Îmbrăcăminte",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Comunicații"
   */
  CAEC_Fallback_Communications: "Comunicații",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Container"
   *   ContextMenu_Container = "Containere"
   */
  CAEC_Fallback_Container: "Containere",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Gătit"
   */
  CAEC_Fallback_Cooking: "Gătit",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Electronice"
   */
  CAEC_Fallback_Electronics: "Electronice",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Divertisment"
   */
  CAEC_Fallback_Entertainment: "Divertisment",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Sursă de Foc"
   */
  CAEC_Fallback_FireSource: "Sursă de foc",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Primul Ajutor"
   */
  CAEC_Fallback_FirstAid: "Primul ajutor",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pescuit"
   *   ContextMenu_Fishing = "Pescuit"
   *   IGUI_CraftCategory_Fishing = "Pescuit"
   */
  CAEC_Fallback_Fishing: "Pescuit",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Mâncare"
   */
  CAEC_Fallback_Food: "Mâncare",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Mobilă"
   */
  CAEC_Fallback_Furniture: "Mobilier",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Grădinărit"
   *   ContextMenu_Gardening = "Grădinărit"
   */
  CAEC_Fallback_Gardening: "Grădinărit",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Gospodărie"
   */
  CAEC_Fallback_Household: "Gospodărie",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrument Muzical"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Gunoi"
   */
  CAEC_Fallback_Junk: "Deșeuri",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Sursă de Lumină"
   */
  CAEC_Fallback_LightSource: "Sursă de lumină",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatură"
   */
  CAEC_Fallback_Literature: "Literatură",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Material"
   */
  CAEC_Fallback_Material: "Materiale",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Memento"
   */
  CAEC_Fallback_Memento: "Suvenir",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Vopsea"
   */
  CAEC_Fallback_Paint: "Vopsea",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Echipament de Protecție"
   */
  CAEC_Fallback_ProtectiveGear: "Echipament de protecție",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Carte pentru Abilități"
   */
  CAEC_Fallback_SkillBook: "Carte de abilități",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sporturi"
   */
  CAEC_Fallback_Sports: "Sport",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Unealtă"
   */
  CAEC_Fallback_Tool: "Unealtă",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Capturare"
   */
  CAEC_Fallback_Trapping: "Capcane",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Mentenanța Vehiculului"
   */
  CAEC_Fallback_VehicleMaintenance: "Întreținere vehicule",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Armă"
   */
  CAEC_Fallback_Weapon: "Armă",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Topor",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Fierărie",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Contondent",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Măcelărie",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Tâmplărie"
   */
  CAEC_Fallback_Carpentry: "Tâmplărie",
  /** carving skill */
  CAEC_Fallback_Carving: "Cioplire",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Electrică"
   */
  CAEC_Fallback_Electrical: "Electricitate",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agricultură"
   */
  CAEC_Fallback_Farming: "Agricultură",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Cioplirea silexului",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Cules",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Sticlărie",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Lamă lungă",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Întreținere",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Zidărie",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mecanică",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Prelucrarea metalelor",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Olărit",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Lamă scurtă",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Contondent scurt",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Suliță",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Croitorie",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Urmărire",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Sudură"
   */
  CAEC_Fallback_Welding: "Sudură",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Brațe",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Partea de jos",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Față",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Încălțăminte",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Întregul corp",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Mâini",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Cap"
   */
  CAEC_Fallback_Head: "Cap",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Bijuterii",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Picioare",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Gât"
   */
  CAEC_Fallback_Neck: "Gât",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Îmbrăcăminte de exterior",
  /** hosiery and socks */
  CAEC_Override_Socks: "Șosete",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Partea superioară",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Lenjerie",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Coacere",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pâine"
   */
  CAEC_Fallback_Bread: "Pâine",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Bomboană"
   */
  CAEC_Override_Candy: "Dulciuri",
  /** canned food items */
  CAEC_Override_Canned: "La conservă",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Lactate",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Fel de mâncare",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Ierburi"
   */
  CAEC_Fallback_Herb: "Ierburi",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Fallback_Meat: "Carne",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perisabil",
  /** food for pets */
  CAEC_Fallback_PetFood: "Animale de companie",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porție",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservat",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Fructe și legume",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Fructe de Mare"
   */
  CAEC_Fallback_Seafood: "Fructe de mare",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Sămânță"
   */
  CAEC_Fallback_Seed: "Semințe",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Gustare",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Condimente",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Aliment de bază",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adult",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Broșură",
  /** comic books */
  CAEC_Fallback_Comic: "Bandă desenată",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumabil",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Carte de lux",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Fluturaș",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Copertă tare",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Revistă",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Ziar",
  /** picture books */
  CAEC_Fallback_PictureBook: "Carte ilustrată",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Rețetă",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manual de RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Copertă moale",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Arc",
  /** firearm drums */
  CAEC_Fallback_Drum: "Încărcător tambur",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Armă de foc",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistol",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Încărcător",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Pușcă",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Pușcă de vânătoare",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcool",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bere"
   */
  CAEC_Fallback_Beer: "Bere",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Băutură",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Cafea"
   */
  CAEC_Fallback_Coffee: "Cafea",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Colorant",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Băutură energizantă",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Combustibil",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Suc"
   */
  CAEC_Fallback_Juice: "Suc",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Lichid",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Lapte"
   *   ContextMenu_Milk = "Lapte"
   */
  CAEC_Fallback_Milk: "Lapte",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Băutură Răcoritoare"
   */
  CAEC_Override_SoftDrink: "Băutură carbogazoasă",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Ceai"
   */
  CAEC_Fallback_Tea: "Ceai",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Apă"
   */
  CAEC_Fallback_Water: "Apă",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vin"
   */
  CAEC_Fallback_Wine: "Vin",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Cutie",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Legat",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Carton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Ceas Deșteptător"
   */
  CAEC_Fallback_AlarmClock: "Ceas Deșteptător",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Telecomandă",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Stație radio",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Bicicletă",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostabil",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artizanal",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Ceașcă",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Tacâmuri",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Mănunchi de chei",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Tigaie",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Parte"
   */
  CAEC_Fallback_Part: "Parte",
  /** photos */
  CAEC_Fallback_Photo: "Fotografie",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Jucărie de pluș",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Plic de semințe",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Hrană pentru Animale",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumat",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Bibelou",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Ustensil",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Purtabil",
};
