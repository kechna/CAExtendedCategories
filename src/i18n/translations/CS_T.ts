import type { ExternalTranslations } from "../types";

/**
 * Czech
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
export const CS: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Vzhled"
   */
  CAEC_Override_Accessory: "Doplňky",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munice"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: "Zvířata",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Zvířecí části",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Vzhled"
   */
  CAEC_Override_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Stanování"
   */
  CAEC_Override_Camping: "Stanování",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartografie"
   */
  CAEC_Override_Cartography: undefined,
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Oblečení"
   */
  CAEC_Override_Clothing: "Oblečení",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Komunikace"
   */
  CAEC_Override_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Úložiště"
   *   ContextMenu_Container = "Úložiště"
   */
  CAEC_Override_Container: "Úložiště",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Vaření"
   *   IGUI_perks_Cooking = "Vaření"
   */
  CAEC_Override_Cooking: "Vaření",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektronika"
   */
  CAEC_Override_Electronics: undefined,
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Zábava"
   */
  CAEC_Override_Entertainment: "Zábava",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Zdroj ohně",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "První pomoc"
   *   IGUI_ItemCat_FirstAid = "První pomoc"
   */
  CAEC_Override_FirstAid: "První pomoc",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Jídlo"
   */
  CAEC_Override_Food: "Jídlo",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Nábytek"
   */
  CAEC_Override_Furniture: "Nábytek",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Domácnost"
   */
  CAEC_Override_Household: "Domácnost",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Hudební nástroj"
   */
  CAEC_Override_Instrument: "Hudební nástroj",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Veteš"
   */
  CAEC_Override_Junk: "Veteš",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Zdroj světla"
   */
  CAEC_Override_LightSource: "Zdroj světla",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatura"
   */
  CAEC_Override_Literature: undefined,
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiál"
   */
  CAEC_Override_Material: "Materiál",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Památka",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Barva"
   */
  CAEC_Override_Paint: undefined,
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Ochranné vybavení",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Kniha dovedností"
   */
  CAEC_Override_SkillBook: "Kniha dovedností",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sport"
   */
  CAEC_Override_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Nástroj"
   */
  CAEC_Override_Tool: "Nástroj",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Údržba vozidel"
   */
  CAEC_Override_VehicleMaintenance: "Údržba vozidel",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Zbraň"
   */
  CAEC_Override_Weapon: "Zbraň",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Sekera"
   */
  CAEC_Override_Axe: undefined,
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Kovářství"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Dlouhá tupá zbr."
   */
  CAEC_Override_Blunt: "Tupá zbraň",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Řeznictví",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Tesařství"
   *   IGUI_perks_Carpentry = "Tesařství"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: "Vyřezávání",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektrikářství"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Farmaření"
   *   IGUI_perks_Farming = "Farmaření"
   */
  CAEC_Override_Farming: undefined,
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Rybaření"
   *   IGUI_perks_Fishing = "Rybaření"
   *   ContextMenu_Fishing = "Rybaření"
   *   IGUI_CraftCategory_Fishing = "Rybaření"
   */
  CAEC_Override_Fishing: "Rybaření",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Pazourkářství",
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Sběr zásob"
   */
  CAEC_Override_Foraging: undefined,
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Zahradničení"
   */
  CAEC_Override_Gardening: "Zahradničení",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Sklenářství",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Dlouhá čepel"
   */
  CAEC_Override_LongBlade: "Dlouhá čepel",
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Údržba"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: "Zednictví",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Mechanika"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Obrábění kovů"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: "Hrnčířství",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Krátká čepel"
   */
  CAEC_Override_SmallBlade: "Krátká čepel",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Krátká tupá zbr."
   */
  CAEC_Override_SmallBlunt: "Krátká tupá zbraň",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Oštěp"
   */
  CAEC_Override_Spear: "Oštěp",
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Krejčovství"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: "Stopování",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Pasti"
   *   IGUI_perks_Trapping = "Odchyt zvěře"
   */
  CAEC_Override_Trapping: "Pasti",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Obrábění kovů"
   */
  CAEC_Override_Welding: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Paže",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Spodní díl",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Obličej",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Obuv",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Celotělové",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Ruce",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Hlava"
   */
  CAEC_Override_Head: undefined,
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Šperky",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Nohy",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Krk"
   */
  CAEC_Override_Neck: undefined,
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Svrchní oblečení",
  /** hosiery and socks */
  CAEC_Override_Socks: "Ponožky",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Horní díl",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Spodní prádlo",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Pečení",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Chléb"
   */
  CAEC_Override_Bread: "Chléb",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Bonbón"
   */
  CAEC_Override_Candy: "Bonbón",
  /** canned food items */
  CAEC_Override_Canned: "Konzervy",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Sýr"
   */
  CAEC_Override_Cheese: "Sýr",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Hotová jídla",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Ovoce"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Bylina"
   */
  CAEC_Override_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Pálivé papriky"
   */
  CAEC_Override_HotPepper: "Pálivé papriky",
  /** edible insects */
  CAEC_Fallback_Insect: "Hmyz",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Hospodářská krmiva",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Maso"
   */
  CAEC_Override_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Houba"
   */
  CAEC_Override_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Nut"
   */
  CAEC_Override_Nut: "Ořechy",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Kazící se",
  /** food for pets */
  CAEC_Fallback_PetFood: "Mazlíčci",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porce",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Konzervované",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Plody moře"
   */
  CAEC_Override_Seafood: "Plody moře",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Semínko"
   */
  CAEC_Override_Seed: "Semínko",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Svačiny",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Koření",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Základní potraviny",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Stock"
   */
  CAEC_Override_Stock: "Vývar",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Cukr"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Zelenina"
   */
  CAEC_Override_Vegetables: undefined,
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Pro dospělé",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brožura",
  /** comic books */
  CAEC_Fallback_Comic: "Komiks",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Luštění",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Ozdobná kniha",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Leták",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Vázaná",
  /** literature magazines */
  CAEC_Override_Magazine: "Časopis",
  /** newspapers */
  CAEC_Fallback_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: "Obrázková kniha",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recept",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Příručka RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Brožovaná",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Střelné zbraně",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistole",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Zásobník",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Puška",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Brokovnice",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Pivo"
   */
  CAEC_Override_Beer: "Pivo",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Nápoj",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Koktejl",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Káva"
   */
  CAEC_Override_Coffee: "Káva",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Barvivo",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energetický nápoj",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Palivo",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Džus"
   */
  CAEC_Override_Juice: "Džus",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Tekutina",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Mléko"
   */
  CAEC_Override_Milk: "Mléko",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Jemný nápoj"
   */
  CAEC_Override_SoftDrink: "Limonáda",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Čaj"
   */
  CAEC_Override_Tea: "Čaj",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Voda"
   */
  CAEC_Override_Water: undefined,
  /** alcoholic wine beverages */
  CAEC_Override_Wine: "Víno",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Krabice",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Svazek",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompostovatelné",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Ručně vyrobené",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Hrnek",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Příbory",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Klíčenka",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pánev",
  /** photos */
  CAEC_Fallback_Photo: "Fotografie",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Plyšák",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Sáček se semeny",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Kouření",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Kuchyňské náčiní",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Nositelný",
};
