import type { ExternalTranslations } from "../types";

/**
 * Finnish
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
export const FI: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Lisävaruste"
   */
  CAEC_Fallback_Accessory: "Lisävaruste",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Ammus"
   */
  CAEC_Fallback_Ammo: "Ammus",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Eläin"
   */
  CAEC_Fallback_Animal: "Eläin",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Eläimen ruhonosa"
   */
  CAEC_Fallback_AnimalPart: "Eläimen osa",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Ulkonäkö"
   */
  CAEC_Fallback_Appearance: "Ulkonäkö",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Telttailu"
   */
  CAEC_Fallback_Camping: "Telttailu",
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
   *   IGUI_ItemCat_Clothing = "Vaatetus"
   */
  CAEC_Fallback_Clothing: "Vaatetus",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Viestintä"
   */
  CAEC_Fallback_Communications: "Viestintä",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Säiliö"
   *   ContextMenu_Container = "Säilöt"
   */
  CAEC_Fallback_Container: "Säiliö",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Ruoanlaitto"
   */
  CAEC_Fallback_Cooking: "Ruoanlaitto",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektroniikka"
   */
  CAEC_Fallback_Electronics: "Elektroniikka",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Viihde"
   */
  CAEC_Fallback_Entertainment: "Viihde",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Tulen lähde"
   */
  CAEC_Fallback_FireSource: "Tulilähde",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Ensiapu"
   */
  CAEC_Fallback_FirstAid: "Ensiapu",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Kalastus"
   *   ContextMenu_Fishing = "Kalastus"
   *   IGUI_CraftCategory_Fishing = "Kalastus"
   */
  CAEC_Fallback_Fishing: "Kalastus",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Ruoka"
   */
  CAEC_Fallback_Food: "Ruoka",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Huonekalut"
   */
  CAEC_Fallback_Furniture: "Huonekalut",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Puutarhanhoito"
   *   ContextMenu_Gardening = "Puutarhanhoito"
   */
  CAEC_Fallback_Gardening: "Puutarhanhoito",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Kotitalous"
   */
  CAEC_Fallback_Household: "Kotitalous",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumentti"
   */
  CAEC_Fallback_Instrument: "Instrumentti",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Roskaa"
   */
  CAEC_Fallback_Junk: "Roskaa",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Valonlähde"
   */
  CAEC_Fallback_LightSource: "Valonlähde",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Kirjallisuus"
   */
  CAEC_Fallback_Literature: "Kirjallisuus",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiaali"
   */
  CAEC_Fallback_Material: "Materiaali",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Muistoesine"
   */
  CAEC_Fallback_Memento: "Muisto",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Maali"
   */
  CAEC_Fallback_Paint: "Maali",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Suojavaruste"
   */
  CAEC_Fallback_ProtectiveGear: "Suojavarusteet",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Taitokirja"
   */
  CAEC_Fallback_SkillBook: "Taitokirja",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Urheilu"
   */
  CAEC_Fallback_Sports: "Urheilu",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Työkalu"
   */
  CAEC_Fallback_Tool: "Työkalu",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Ansoitus"
   */
  CAEC_Fallback_Trapping: "Ansoitus",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Ajoneuvon huolto"
   */
  CAEC_Fallback_VehicleMaintenance: "Ajoneuvon huolto",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Ase"
   */
  CAEC_Fallback_Weapon: "Ase",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Kirves",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Sepäntyöt",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Pitkä tylppä ase",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Teurastus",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Puusepäntyöt"
   */
  CAEC_Fallback_Carpentry: "Puusepäntyöt",
  /** carving skill */
  CAEC_Fallback_Carving: "Veistäminen",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Sähkötyöt"
   */
  CAEC_Fallback_Electrical: "Sähkötyöt",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Maanviljely"
   */
  CAEC_Fallback_Farming: "Maanviljely",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Piikiventyöstö",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Keräily",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Lasinvalmistus",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Pitkä terä",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Huolto",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Muuraus",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mekaniikka",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metallityöt",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Keramiikka",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Lyhyt terä",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Lyhyt tylppä ase",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Keihäs",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Ompelu",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Jäljitys",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Hitsaaminen"
   */
  CAEC_Fallback_Welding: "Hitsaaminen",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Käsivarret",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Alaosa",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Kasvot",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Jalkineet",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Kokovartalo",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Kädet",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Pää"
   */
  CAEC_Fallback_Head: "Pää",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Korut",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Jalat",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Kaula"
   */
  CAEC_Fallback_Neck: "Kaula",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Päällysvaatteet",
  /** hosiery and socks */
  CAEC_Override_Socks: "Sukat",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Yläosa",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Alusvaatteet",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Leivonta",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Leipä"
   */
  CAEC_Fallback_Bread: "Leipä",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Karkkia"
   */
  CAEC_Override_Candy: "Makeiset",
  /** canned food items */
  CAEC_Override_Canned: "Säilykkeet",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Juusto"
   */
  CAEC_Fallback_Cheese: "Juusto",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Valmisruoka",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Hedelmiä"
   */
  CAEC_Fallback_Fruits: "Hedelmiä",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Yrttejä"
   */
  CAEC_Fallback_Herb: "Yrtti",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Tulisia chilipaprikoita"
   */
  CAEC_Fallback_HotPepper: "Tulipaprika",
  /**
   * edible insects
   *
   * found in-game:
   *   ContextMenu_FoodType_Insect = "Hyönteinen"
   */
  CAEC_Fallback_Insect: "Hyönteinen",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Karjanrehu",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Lihaa"
   */
  CAEC_Fallback_Meat: "Lihaa",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Sieni"
   */
  CAEC_Fallback_Mushroom: "Sieni",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Pähkinä"
   */
  CAEC_Fallback_Nut: "Pähkinät",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Pilaantuva",
  /** food for pets */
  CAEC_Fallback_PetFood: "Lemmikit",
  /** single serving portion of food */
  CAEC_Override_Portion: "Annos",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Säilötty",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Merenelävät"
   */
  CAEC_Fallback_Seafood: "Merenelävät",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Siemeniä"
   */
  CAEC_Fallback_Seed: "Siemen",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Välipala",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Mauste",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Peruselintarvike",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Liemi"
   */
  CAEC_Fallback_Stock: "Liemi",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Sokeri"
   */
  CAEC_Fallback_Sugar: "Sokeri",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Vihanneksia"
   */
  CAEC_Fallback_Vegetables: "Vihanneksia",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Aikuinen",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Esite",
  /** comic books */
  CAEC_Fallback_Comic: "Sarjakuva",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Kulutettava",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Koristekirja",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Lentolehtinen",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Kovakantinen",
  /** literature magazines */
  CAEC_Override_Magazine: "Aikakauslehti",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Sanomalehti",
  /** picture books */
  CAEC_Fallback_PictureBook: "Kuvakirja",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Resepti",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Roolipelikäsikirja",
  /** softcover books */
  CAEC_Fallback_Softcover: "Pehmeäkantinen",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Jousi",
  /** firearm drums */
  CAEC_Fallback_Drum: "Rumpulipas",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Ampuma-ase",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistooli",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Lipas",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Kivääri",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Haulikko",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkoholi",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Olut"
   */
  CAEC_Fallback_Beer: "Olut",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Juoma",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kahvi"
   */
  CAEC_Fallback_Coffee: "Kahvi",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Väriaine",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energiajuoma",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Polttoaine",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Mehu"
   */
  CAEC_Fallback_Juice: "Mehu",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Neste",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Maito"
   *   ContextMenu_Milk = "Lypsä"
   */
  CAEC_Fallback_Milk: "Maito",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Virvoitusjuoma"
   */
  CAEC_Fallback_SoftDrink: "Virvoitusjuoma",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tee"
   */
  CAEC_Fallback_Tea: "Tee",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Kastele"
   */
  CAEC_Override_Water: "Vesi",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Viini"
   */
  CAEC_Fallback_Wine: "Viini",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Laatikko",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Nippu",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Kartonki",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Herätyskello"
   */
  CAEC_Fallback_AlarmClock: "Herätyskello",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Kaukosäädin",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Radiopuhelin",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Polkupyörä",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompostoitava",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Käsintehty",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Kuppi",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Aterimet",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Avainnippu",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pannu",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Osa"
   */
  CAEC_Fallback_Part: "Osa",
  /** photos */
  CAEC_Fallback_Photo: "Valokuva",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Pehmolelu",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Siemenpussi",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Tupakointi",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Pikkuesine",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Keittiöväline",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Puettava",
};
