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
  CAEC_Override_Accessory: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Ammus"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: "Eläin",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Eläimen osa",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Ulkomuoto"
   */
  CAEC_Override_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Telttailu"
   */
  CAEC_Override_Camping: undefined,
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartografia"
   */
  CAEC_Override_Cartography: undefined,
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Vaatetus"
   */
  CAEC_Override_Clothing: undefined,
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Viestintä"
   */
  CAEC_Override_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Säiliö"
   *   ContextMenu_Container = "Säiliöt"
   */
  CAEC_Override_Container: undefined,
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Ruoanlaitto"
   *   IGUI_perks_Cooking = "Ruoanlaitto"
   */
  CAEC_Override_Cooking: undefined,
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektroniikka"
   */
  CAEC_Override_Electronics: undefined,
  /** entertainment items */
  CAEC_Fallback_Entertainment: "Viihde",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Tulilähde",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "Ensiapu"
   *   IGUI_ItemCat_FirstAid = "Ensiapu"
   */
  CAEC_Override_FirstAid: undefined,
  /**
   * fishing skill
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Kalastus"
   *   IGUI_perks_Fishing = "Kalastus"
   *   ContextMenu_Fishing = "Kalastus"
   *   IGUI_CraftCategory_Fishing = "Kalastus"
   */
  CAEC_Override_Fishing: undefined,
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Ruokaa"
   */
  CAEC_Override_Food: undefined,
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Huonekalut"
   */
  CAEC_Override_Furniture: undefined,
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Puutarhanhoito"
   */
  CAEC_Override_Gardening: undefined,
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "talous"
   */
  CAEC_Override_Household: undefined,
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumentti"
   */
  CAEC_Override_Instrument: undefined,
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Roskaa"
   */
  CAEC_Override_Junk: undefined,
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Valonlähde"
   */
  CAEC_Override_LightSource: undefined,
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Kirjallisuus"
   */
  CAEC_Override_Literature: undefined,
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiaali"
   */
  CAEC_Override_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Muisto",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Maali"
   */
  CAEC_Override_Paint: undefined,
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Suojavarusteet",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Taitokirja"
   */
  CAEC_Override_SkillBook: undefined,
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Urheilu"
   */
  CAEC_Override_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Työkalu"
   */
  CAEC_Override_Tool: undefined,
  /**
   * trapping skill
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Ansaintin"
   *   IGUI_perks_Trapping = "Ansainti"
   */
  CAEC_Override_Trapping: undefined,
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Ajoneuvon huolto"
   */
  CAEC_Override_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Ase"
   */
  CAEC_Override_Weapon: undefined,
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Kirves"
   */
  CAEC_Override_Axe: undefined,
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "seppä"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Pitkä Tylppä"
   */
  CAEC_Override_Blunt: undefined,
  /** butchering skill */
  CAEC_Fallback_Butchering: "Teurastus",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Puusepäntyöt"
   *   IGUI_perks_Carpentry = "Puusepäntyöt"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: "Veistäminen",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Sähkö"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Maanviljely"
   *   IGUI_perks_Farming = "Maanviljely"
   */
  CAEC_Override_Farming: undefined,
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Piikiventyöstö",
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "rehustaa"
   */
  CAEC_Override_Foraging: undefined,
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Lasinvalmistus",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Pitkä Terä"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Huolto"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: "Muuraus",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Mekaniikka"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Metallintyöstö"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: "Keramiikka",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Lyhyt Terä"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Lyhyt Tylppä"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Keihäs"
   */
  CAEC_Override_Spear: undefined,
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Räätälöinti"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: "Jäljitys",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metallintyöstö"
   */
  CAEC_Override_Welding: undefined,
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
  CAEC_Override_Head: undefined,
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
  CAEC_Override_Neck: undefined,
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
   *   ItemName_Base.Bread = "Leipä"
   */
  CAEC_Override_Bread: undefined,
  /** sweets and candies */
  CAEC_Override_Candy: "Makeiset",
  /** canned food items */
  CAEC_Override_Canned: "Säilykkeet",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ItemName_Base.Cheese = "Juusto"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Valmisruoka",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Hedelmiä"
   */
  CAEC_Override_Fruits: undefined,
  /** culinary or medicinal plants/herbs */
  CAEC_Fallback_Herb: "Yrtti",
  /** spicy hot peppers */
  CAEC_Fallback_HotPepper: "Tulipaprika",
  /** edible insects */
  CAEC_Fallback_Insect: "Hyönteinen",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Karjanrehu",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Lihaa"
   */
  CAEC_Override_Meat: undefined,
  /** mushrooms/fungi */
  CAEC_Fallback_Mushroom: "Sieni",
  /** nuts such as walnuts, almonds, peanuts */
  CAEC_Fallback_Nut: "Pähkinät",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Pilaantuva",
  /** food for pets */
  CAEC_Fallback_PetFood: "Lemmikit",
  /** single serving portion of food */
  CAEC_Override_Portion: "Annos",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Säilötty",
  /** fish and other seafood */
  CAEC_Fallback_Seafood: "Merenelävät",
  /** loose plantable seeds for gardening/farming */
  CAEC_Fallback_Seed: "Siemen",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Välipala",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Mauste",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Peruselintarvike",
  /** items used to make cooking stock or broth, such as bouillon cubes */
  CAEC_Fallback_Stock: "Liemi",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ItemName_Base.Sugar = "Sokeri"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Vihanneksia"
   */
  CAEC_Override_Vegetables: undefined,
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
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Ajolehti"
   */
  CAEC_Override_Magazine: "Aikakauslehti",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Sanomalehti"
   */
  CAEC_Override_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: "Kuvakirja",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Resepti",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Roolipelikäsikirja",
  /** softcover books */
  CAEC_Fallback_Softcover: "Pehmeäkantinen",
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
  /** alcoholic beer beverages */
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
   *   ItemName_Base.Coffee = "Kahvi"
   *   ItemName_Base.Coffee2 = "Kahvi"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Väriaine",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energiajuoma",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Polttoaine",
  /** fruit juice */
  CAEC_Fallback_Juice: "Mehu",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Neste",
  /**
   * dairy milk
   *
   * found in-game:
   *   ItemName_Base.Milk = "Maito"
   */
  CAEC_Override_Milk: undefined,
  /** carbonated soft drinks */
  CAEC_Override_SoftDrink: "Virvoitusjuoma",
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
   *   ContextMenu_Water = "Kastele"
   */
  CAEC_Override_Water: "Vesi",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ItemName_Base.Wine = "Valkoviini"
   *   ItemName_Base.Wine2 = "Punaviini"
   */
  CAEC_Override_Wine: undefined,
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Laatikko",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Nippu",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Kartonki",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Kompostoitava",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Käsintehty",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Kuppi",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Aterimet",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Avainrengas"
   */
  CAEC_Override_KeyRing: undefined,
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pannu",
  /** photos */
  CAEC_Fallback_Photo: "Valokuva",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Pehmolelu",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Siemenpussi",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Tupakointi",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Keittiöväline",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Puettava",
};
