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
  /** accessories such as watches, necklaces, belts, gloves */
  CAEC_Fallback_Accessory: "Accessoire",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munitie"
   */
  CAEC_Fallback_Ammo: "Munitie",
  /** animals */
  CAEC_Fallback_Animal: "Dier",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Dierlijk deel",
  /** character appearance items such as makeup */
  CAEC_Fallback_Appearance: "Uiterlijk",
  /** camping supplies */
  CAEC_Fallback_Camping: "Camping",
  /** maps of locations */
  CAEC_Fallback_Cartography: "Cartografie",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Kleding"
   */
  CAEC_Fallback_Clothing: "Kleding",
  /** communication devices such as walkie talkies, radios */
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
   *   IGUI_perks_Cooking = "Koken"
   */
  CAEC_Fallback_Cooking: "Koken",
  /** electronic items */
  CAEC_Fallback_Electronics: "Elektronica",
  /** entertainment items */
  CAEC_Fallback_Entertainment: "Vermaak",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Vuurbron",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "EHBO"
   */
  CAEC_Fallback_FirstAid: "Eerste hulp",
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_perks_Fishing = "Vissen"
   *   ContextMenu_Fishing = "Vissen"
   */
  CAEC_Fallback_Fishing: "Vissen",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Voedsel"
   */
  CAEC_Fallback_Food: "Voedsel",
  /** furniture items */
  CAEC_Fallback_Furniture: "Meubels",
  /** gardening items */
  CAEC_Fallback_Gardening: "Tuinieren",
  /** household items */
  CAEC_Fallback_Household: "Huishouden",
  /** instruments */
  CAEC_Fallback_Instrument: "Muziekinstrument",
  /** miscellaneous junk items, worthless items */
  CAEC_Fallback_Junk: "Rommel",
  /** items that provide light such as flashlights, lanterns */
  CAEC_Fallback_LightSource: "Lichtbron",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatuur"
   */
  CAEC_Fallback_Literature: "Literatuur",
  /** crafting materials and building supplies */
  CAEC_Fallback_Material: "Materiaal",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Aandenken",
  /** paint items */
  CAEC_Fallback_Paint: "Verf",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Bescherming",
  /** skill books */
  CAEC_Fallback_SkillBook: "Vaardigheidsboek",
  /** sports items */
  CAEC_Fallback_Sports: "Sport",
  /** tools, such as hammers, wrenches, screwdrivers */
  CAEC_Fallback_Tool: "Gereedschap",
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_perks_Trapping = "Vallen zetten"
   */
  CAEC_Fallback_Trapping: "Vallen zetten",
  /** vehicle maintenance items */
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
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Bot"
   */
  CAEC_Override_Blunt: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Lang Mes"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Kort Mes"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Kort Blunt"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Speer"
   */
  CAEC_Fallback_Spear: "Speer",
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
   *   ItemName_Base.Bread = "Brood"
   */
  CAEC_Fallback_Bread: "Brood",
  /** sweets and candies */
  CAEC_Override_Candy: "Snoep",
  /** canned food items */
  CAEC_Override_Canned: "Ingeblikt",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ItemName_Base.Cheese = "Kaas"
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
  CAEC_Override_Fruits: undefined,
  /** culinary or medicinal plants/herbs */
  CAEC_Fallback_Herb: "Kruiden",
  /** spicy hot peppers */
  CAEC_Fallback_HotPepper: "Pittige pepers",
  /** edible insects */
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
  /** mushrooms/fungi */
  CAEC_Fallback_Mushroom: "Paddenstoelen",
  /** nuts such as walnuts, almonds, peanuts */
  CAEC_Fallback_Nut: "Noten",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Bederfelijk",
  /** food for pets */
  CAEC_Fallback_PetFood: "Huisdieren",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portie",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Geconserveerd",
  /** fish and other seafood */
  CAEC_Fallback_Seafood: "Zeevruchten",
  /** seeds for consumption, e.g. sunflower seeds, pumpkin seeds */
  CAEC_Fallback_Seed: "Zaden",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Kruiden",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Basisvoeding",
  /** items used to make cooking stock or broth, such as bouillon cubes */
  CAEC_Fallback_Stock: "Bouillon",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ItemName_Base.Sugar = "Suiker"
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
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Tijdschrift"
   */
  CAEC_Fallback_Magazine: "Tijdschrift",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Krant"
   */
  CAEC_Fallback_Newspaper: "Krant",
  /** picture books */
  CAEC_Fallback_PictureBook: "Prentenboek",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recept",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG-handleiding",
  /** softcover books */
  CAEC_Fallback_Softcover: "Paperback",
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
  /** alcoholic beer beverages */
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
   *   ItemName_Base.Coffee = "Koffie"
   *   ItemName_Base.Coffee2 = "Koffie"
   */
  CAEC_Override_Coffee: "Koffie",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energy Drink",
  /** fruit juice */
  CAEC_Fallback_Juice: "Sap",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Vloeistof",
  /**
   * dairy milk
   *
   * found in-game:
   *   ItemName_Base.Milk = "Melk"
   */
  CAEC_Fallback_Milk: "Melk",
  /** carbonated soft drinks */
  CAEC_Override_SoftDrink: "Frisdrank",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Thee"
   */
  CAEC_Override_Tea: undefined,
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
   *   ItemName_Base.Wine = "Fles Chardonnay"
   *   ItemName_Base.Wine2 = "Fles rode wijn"
   */
  CAEC_Override_Wine: "Wijn",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Doos",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Gebundeld",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Kartonnen doos",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Gemaakt",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Sleutelhanger"
   */
  CAEC_Override_KeyRing: "Sleutelbos",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Roken",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Draagbaar",
};
