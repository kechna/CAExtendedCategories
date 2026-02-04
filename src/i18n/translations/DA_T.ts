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
  /** accessories such as watches, necklaces, belts, gloves */
  CAEC_Fallback_Accessory: "Tilbehør",
  /** firearm ammunition */
  CAEC_Fallback_Ammo: "Ammunition",
  /** animals */
  CAEC_Fallback_Animal: "Dyr",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Dyredele",
  /** character appearance items such as makeup */
  CAEC_Fallback_Appearance: "Udseende",
  /** camping supplies */
  CAEC_Fallback_Camping: "Camping",
  /** maps of locations */
  CAEC_Fallback_Cartography: "Kartografi",
  /** clothing such as shirts, pants, dresses */
  CAEC_Fallback_Clothing: "Tøj",
  /** communication devices such as walkie talkies, radios */
  CAEC_Fallback_Communications: "Kommunikation",
  /** items that can hold other items, such as boxes, bags, and crates */
  CAEC_Fallback_Container: "Beholder",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_perks_Cooking = "Madlavning"
   */
  CAEC_Override_Cooking: undefined,
  /** electronic items */
  CAEC_Fallback_Electronics: "Elektronik",
  /** entertainment items */
  CAEC_Fallback_Entertainment: "Underholdning",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Ildkilde",
  /** first aid and medical supplies, bandages, painkillers, antiseptics */
  CAEC_Fallback_FirstAid: "Førstehjælp",
  /** fishing gear */
  CAEC_Fallback_Fishing: "Fiskeri",
  /** food items */
  CAEC_Fallback_Food: "Mad",
  /** furniture items */
  CAEC_Fallback_Furniture: "Møbler",
  /** gardening items */
  CAEC_Fallback_Gardening: "Havearbejde",
  /** household items */
  CAEC_Fallback_Household: "Husholdning",
  /** instruments */
  CAEC_Fallback_Instrument: "Instrument",
  /** miscellaneous junk items, worthless items */
  CAEC_Fallback_Junk: "Skrammel",
  /** items that provide light such as flashlights, lanterns */
  CAEC_Fallback_LightSource: "Lyskilde",
  /** books and printed reading material */
  CAEC_Fallback_Literature: "Litteratur",
  /** crafting materials and building supplies */
  CAEC_Fallback_Material: "Materiale",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Minde",
  /** paint items */
  CAEC_Fallback_Paint: "Maling",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Beskyttelsesudstyr",
  /** skill books */
  CAEC_Fallback_SkillBook: "Færdighedsbog",
  /** sports items */
  CAEC_Fallback_Sports: "Sport",
  /** tools, such as hammers, wrenches, screwdrivers */
  CAEC_Fallback_Tool: "Værktøj",
  /** trapping items */
  CAEC_Fallback_Trapping: "Fælder",
  /** vehicle maintenance items */
  CAEC_Fallback_VehicleMaintenance: "Køretøjsvedligeholdelse",
  /** weapons in general */
  CAEC_Fallback_Weapon: "Våben",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Økse",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Stump"
   */
  CAEC_Override_Blunt: undefined,
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Lang klinge",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Kort klinge",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Kort stump",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Spyd",
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
  /** for items worn on the head such as hats, helmets (but not masks) */
  CAEC_Override_Head: "Hoved",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Smykker",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Ben",
  /** neckwear such as scarves, necklaces */
  CAEC_Override_Neck: "Hals",
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
   *   ItemName_Base.Bread = "Brød"
   */
  CAEC_Override_Bread: undefined,
  /** sweets and candies */
  CAEC_Override_Candy: "Slik",
  /** canned food items */
  CAEC_Override_Canned: "Konserves",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ItemName_Base.Cheese = "Ost"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Færdigretter",
  /** fresh fruit, including berries and citrus */
  CAEC_Fallback_Fruits: "Frugt",
  /** culinary or medicinal plants/herbs */
  CAEC_Fallback_Herb: "Urter",
  /** spicy hot peppers */
  CAEC_Fallback_HotPepper: "Chili",
  /** edible insects */
  CAEC_Fallback_Insect: "Insekter",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Husdyrfoder",
  /** any non-fish meat */
  CAEC_Fallback_Meat: "Kød",
  /** mushrooms/fungi */
  CAEC_Fallback_Mushroom: "Svampe",
  /** nuts such as walnuts, almonds, peanuts */
  CAEC_Fallback_Nut: "Nødder",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Letfordærveligt",
  /** food for pets */
  CAEC_Fallback_PetFood: "Kæledyr",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Konserveret",
  /** fish and other seafood */
  CAEC_Fallback_Seafood: "Skaldyr",
  /** seeds for consumption, e.g. sunflower seeds, pumpkin seeds */
  CAEC_Fallback_Seed: "Frø",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Krydderier",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Basisvarer",
  /** items used to make cooking stock or broth, such as bouillon cubes */
  CAEC_Fallback_Stock: "Bouillon",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ItemName_Base.Sugar = "Sukker"
   */
  CAEC_Override_Sugar: undefined,
  /** vegetables, including leafy greens */
  CAEC_Override_Vegetables: "Grøntsager",
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
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Magasin"
   */
  CAEC_Override_Magazine: undefined,
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Avis"
   */
  CAEC_Override_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: "Billedbog",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Opskrift",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG-manual",
  /** softcover books */
  CAEC_Fallback_Softcover: "Paperback",
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
  /** alcoholic beer beverages */
  CAEC_Fallback_Beer: "Øl",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Drikkevarer",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ItemName_Base.Coffee = "Kaffe"
   *   ItemName_Base.Coffee2 = "Kaffe"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Farvestof",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energidrik",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Brændstof",
  /** fruit juice */
  CAEC_Fallback_Juice: "Juice",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Væske",
  /**
   * dairy milk
   *
   * found in-game:
   *   ItemName_Base.Milk = "Mælk"
   */
  CAEC_Override_Milk: undefined,
  /** carbonated soft drinks */
  CAEC_Override_SoftDrink: "Sodavand",
  /** tea beverage */
  CAEC_Override_Tea: "Te",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Vand"
   */
  CAEC_Override_Water: undefined,
  /** alcoholic wine beverages */
  CAEC_Override_Wine: "Vin",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Æske",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Bundt",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Håndlavet",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: undefined,
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Bestik",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Nøglering",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: undefined,
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Rygning",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Køkkenredskab",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Bærbar",
};
