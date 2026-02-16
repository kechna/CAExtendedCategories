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
  /** accessories such as watches, necklaces, belts, gloves */
  CAEC_Fallback_Accessory: "Accesoriu",
  /** firearm ammunition */
  CAEC_Fallback_Ammo: "Muniție",
  /** animals */
  CAEC_Fallback_Animal: "Animal",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Parte de animal",
  /** character appearance items such as makeup */
  CAEC_Fallback_Appearance: "Aspect",
  /** camping supplies */
  CAEC_Fallback_Camping: "Camping",
  /** maps of locations */
  CAEC_Fallback_Cartography: "Cartografie",
  /** clothing such as shirts, pants, dresses */
  CAEC_Fallback_Clothing: "Îmbrăcăminte",
  /** communication devices such as walkie talkies, radios */
  CAEC_Fallback_Communications: "Comunicații",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   ContextMenu_Container = "Containere"
   */
  CAEC_Fallback_Container: "Containere",
  /** cooking items such as pots, pans, utensils */
  CAEC_Fallback_Cooking: "Gătit",
  /** electronic items */
  CAEC_Fallback_Electronics: "Electronice",
  /** entertainment items */
  CAEC_Fallback_Entertainment: "Divertisment",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Sursă de foc",
  /** first aid and medical supplies, bandages, painkillers, antiseptics */
  CAEC_Fallback_FirstAid: "Primul ajutor",
  /**
   * fishing skill
   *
   * found in-game:
   *   ContextMenu_Fishing = "Pescuit"
   */
  CAEC_Fallback_Fishing: "Pescuit",
  /** food items */
  CAEC_Fallback_Food: "Mâncare",
  /** furniture items */
  CAEC_Fallback_Furniture: "Mobilier",
  /** gardening items */
  CAEC_Fallback_Gardening: "Grădinărit",
  /** household items */
  CAEC_Fallback_Household: "Gospodărie",
  /** instruments */
  CAEC_Fallback_Instrument: "Instrument",
  /** miscellaneous junk items, worthless items */
  CAEC_Fallback_Junk: "Deșeuri",
  /** items that provide light such as flashlights, lanterns */
  CAEC_Fallback_LightSource: "Sursă de lumină",
  /** books and printed reading material */
  CAEC_Fallback_Literature: "Literatură",
  /** crafting materials and building supplies */
  CAEC_Fallback_Material: "Materiale",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Suvenir",
  /** paint items */
  CAEC_Fallback_Paint: "Vopsea",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Echipament de protecție",
  /** skill books */
  CAEC_Fallback_SkillBook: "Carte de abilități",
  /** sports items */
  CAEC_Fallback_Sports: "Sport",
  /** tools, such as hammers, wrenches, screwdrivers */
  CAEC_Fallback_Tool: "Unealtă",
  /** trapping skill */
  CAEC_Fallback_Trapping: "Capcane",
  /** vehicle maintenance items */
  CAEC_Fallback_VehicleMaintenance: "Întreținere vehicule",
  /** weapons in general */
  CAEC_Fallback_Weapon: "Armă",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Topor",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Fierărie",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Contondent",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Măcelărie",
  /** carpentry skill */
  CAEC_Fallback_Carpentry: "Tâmplărie",
  /** carving skill */
  CAEC_Fallback_Carving: "Cioplire",
  /** electrical skill */
  CAEC_Fallback_Electrical: "Electricitate",
  /** farming/agriculture skill */
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
  /** welding skill */
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
  /** for items worn on the head such as hats, helmets (but not masks) */
  CAEC_Override_Head: "Cap",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Bijuterii",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Picioare",
  /** neckwear such as scarves, necklaces */
  CAEC_Override_Neck: "Gât",
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
  /** baked bread products */
  CAEC_Fallback_Bread: "Pâine",
  /** sweets and candies */
  CAEC_Override_Candy: "Dulciuri",
  /** canned food items */
  CAEC_Override_Canned: "Conservat la cutie",
  /** dairy cheese products */
  CAEC_Fallback_Cheese: "Brânză",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Fel",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Fructe"
   */
  CAEC_Fallback_Fruits: "Fructe",
  /** culinary or medicinal plants/herbs */
  CAEC_Fallback_Herb: "Ierburi",
  /** spicy hot peppers */
  CAEC_Fallback_HotPepper: "Ardei iute",
  /** edible insects */
  CAEC_Fallback_Insect: "Insecte",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Vite",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Fallback_Meat: "Carne",
  /** mushrooms/fungi */
  CAEC_Fallback_Mushroom: "Ciuperci",
  /** nuts such as walnuts, almonds, peanuts */
  CAEC_Fallback_Nut: "Nuci",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perisabil",
  /** food for pets */
  CAEC_Fallback_PetFood: "Animale de companie",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porție",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservat",
  /** fish and other seafood */
  CAEC_Fallback_Seafood: "Fructe de mare",
  /** loose plantable seeds for gardening/farming */
  CAEC_Fallback_Seed: "Semințe",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Gustare",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Condimente",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Aliment de bază",
  /** items used to make cooking stock or broth, such as bouillon cubes */
  CAEC_Fallback_Stock: "Stoc",
  /** sugar and sweeteners */
  CAEC_Fallback_Sugar: "Zahăr",
  /** vegetables, including leafy greens */
  CAEC_Override_Vegetables: "Legume",
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
  /** alcoholic beer beverages */
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
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Colorant",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energizant",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Combustibil",
  /** fruit juice */
  CAEC_Fallback_Juice: "Suc",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Lichid",
  /** dairy milk */
  CAEC_Fallback_Milk: "Lapte",
  /** carbonated soft drinks */
  CAEC_Override_SoftDrink: "Băutură carbogazoasă",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Ceai"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Apă"
   */
  CAEC_Fallback_Water: "Apă",
  /** alcoholic wine beverages */
  CAEC_Override_Wine: "Vin",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Cutie",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Legat",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Carton",
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
  /** photos */
  CAEC_Fallback_Photo: "Fotografie",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Jucărie de pluș",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Plic de semințe",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumat",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Ustensil",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Rucsacuri",
};
