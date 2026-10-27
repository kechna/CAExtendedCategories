import type { ExternalTranslations } from "../types";

/**
 * Italian
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
export const IT: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessorio"
   */
  CAEC_Fallback_Accessory: "Accessorio",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munizioni"
   */
  CAEC_Fallback_Ammo: "Munizioni",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Animale"
   */
  CAEC_Fallback_Animal: "Animale",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Parte di animale"
   */
  CAEC_Fallback_AnimalPart: "Parte di animale",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Aspetto"
   */
  CAEC_Fallback_Appearance: "Aspetto",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Campeggio"
   */
  CAEC_Fallback_Camping: "Campeggio",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartografia"
   */
  CAEC_Fallback_Cartography: "Cartografia",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Vestito"
   */
  CAEC_Fallback_Clothing: "Vestito",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Comunicazioni"
   */
  CAEC_Fallback_Communications: "Comunicazioni",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Contenitore"
   *   ContextMenu_Container = "Contenitori"
   */
  CAEC_Fallback_Container: "Contenitore",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cucina"
   */
  CAEC_Fallback_Cooking: "Cucina",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elettronica"
   */
  CAEC_Fallback_Electronics: "Elettronica",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Intrattenimento"
   */
  CAEC_Fallback_Entertainment: "Intrattenimento",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Fonte di fuoco"
   */
  CAEC_Fallback_FireSource: "Fonte di fuoco",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Pronto soccorso"
   */
  CAEC_Fallback_FirstAid: "Pronto soccorso",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pesca"
   *   IGUI_CraftCategory_Fishing = "Pesca"
   *   ContextMenu_Fishing = "Pesca"
   */
  CAEC_Fallback_Fishing: "Pesca",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Cibo"
   */
  CAEC_Fallback_Food: "Cibo",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Mobili"
   */
  CAEC_Fallback_Furniture: "Mobili",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Giardinaggio"
   *   ContextMenu_Gardening = "Giardinaggio"
   */
  CAEC_Fallback_Gardening: "Giardinaggio",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Domestico"
   */
  CAEC_Fallback_Household: "Domestico",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Strumento musicale"
   */
  CAEC_Fallback_Instrument: "Strumento musicale",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Robaccia"
   */
  CAEC_Fallback_Junk: "Robaccia",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Fonte di luce"
   */
  CAEC_Fallback_LightSource: "Fonte di luce",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Letteratura"
   */
  CAEC_Fallback_Literature: "Letteratura",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiale"
   */
  CAEC_Fallback_Material: "Materiale",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Ricordo"
   */
  CAEC_Fallback_Memento: "Ricordo",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Vernice"
   */
  CAEC_Fallback_Paint: "Vernice",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Equipaggiamento protettivo"
   */
  CAEC_Fallback_ProtectiveGear: "Protezioni",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Libro delle abilità"
   */
  CAEC_Fallback_SkillBook: "Libro delle abilità",
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
   *   IGUI_ItemCat_Tool = "Attrezzo"
   */
  CAEC_Fallback_Tool: "Attrezzo",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trappole"
   */
  CAEC_Fallback_Trapping: "Trappole",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Manutenzione del veicolo"
   */
  CAEC_Fallback_VehicleMaintenance: "Manutenzione del veicolo",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Fallback_Weapon: "Arma",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Ascia",
  /**
   * blacksmith skill
   *
   * found in-game:
   *   ContextMenu_Blacksmith = "Forgiatura"
   */
  CAEC_Fallback_Blacksmith: "Forgiatura",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Contundente lungo",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Macellazione",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Carpenteria"
   */
  CAEC_Fallback_Carpentry: "Carpenteria",
  /** carving skill */
  CAEC_Fallback_Carving: "Intaglio",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elettrico"
   */
  CAEC_Fallback_Electrical: "Elettrico",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agricoltura"
   *   ContextMenu_Farming = "Coltivazione"
   */
  CAEC_Fallback_Farming: "Agricoltura",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Scheggiatura della selce",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Raccolta",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Lavorazione del vetro",
  /**
   * animal husbandry/care skill
   *
   * found in-game:
   *   IGUI_perks_Husbandry = "Allevamento"
   */
  CAEC_Fallback_Husbandry: "Allevamento",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Lama lunga",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Manutenzione",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Muratura",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_ItemCat_Mechanics = "Meccanica"
   */
  CAEC_Fallback_Mechanics: "Meccanica",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "Lavorazione dei metalli",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Ceramica",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Lama corta",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Contundente corto",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Lancia",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Sartoria",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Tracciamento",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Saldatura"
   */
  CAEC_Fallback_Welding: "Saldatura",
  /** raw metal materials such as sheet metal, scrap metal, pipes and wire */
  CAEC_Override_Metal: "Metallo",
  /** raw stone materials such as stones, rocks and limestone */
  CAEC_Override_Stone: "Pietra",
  /** raw wood materials such as planks, logs and branches */
  CAEC_Override_Wood: "Legno",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Braccia",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Parte inferiore",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Viso",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calzature",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Corpo intero",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Mani",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Testa"
   */
  CAEC_Fallback_Head: "Testa",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Gioielli",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Gambe",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Collo"
   */
  CAEC_Fallback_Neck: "Collo",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Capispalla",
  /** hosiery and socks */
  CAEC_Override_Socks: "Calze",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Parte superiore",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Intimo",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Da forno",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pane"
   */
  CAEC_Fallback_Bread: "Pane",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Caramella"
   */
  CAEC_Fallback_Candy: "Caramella",
  /** canned food items */
  CAEC_Override_Canned: "In scatola",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Latticini",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Piatti pronti",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Surgelati",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Erbe"
   */
  CAEC_Fallback_Herb: "Erbe",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Fallback_Meat: "Carne",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Deperibile",
  /** food for pets */
  CAEC_Fallback_PetFood: "Animali domestici",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porzione",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservato",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Frutta e verdura",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Frutti di mare"
   */
  CAEC_Fallback_Seafood: "Frutti di mare",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Spezie",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alimenti di base",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulti",
  /** regular books */
  CAEC_Fallback_Book: "Libro",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Opuscolo",
  /** comic books */
  CAEC_Fallback_Comic: "Fumetto",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Enigmistica",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Libro di pregio",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Volantino",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Copertina rigida",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Rivista",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Giornale",
  /** picture books */
  CAEC_Fallback_PictureBook: "Libro illustrato",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Ricetta",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manuale GDR",
  /** softcover books */
  CAEC_Fallback_Softcover: "Copertina morbida",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "Scrittura",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Arco",
  /** firearm drums */
  CAEC_Fallback_Drum: "Caricatore a tamburo",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Esplosivo",
  /**
   * firearm category, pistols, rifles, shotguns, etc.
   *
   * found in-game:
   *   IGUI_perks_Firearm = "Armi da fuoco"
   *   IGUI_ItemCat_Firearm = "Arma da fuoco"
   */
  CAEC_Override_Firearm: "Arma da fuoco",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Caricatore",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Fucile",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Fucile a pompa",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Birra"
   */
  CAEC_Fallback_Beer: "Birra",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   IGUI_ItemCat_Beverage = "Bevanda"
   */
  CAEC_Fallback_Beverage: "Bevanda",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Caffè"
   */
  CAEC_Fallback_Coffee: "Caffè",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Colorante",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Bevanda energetica",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Carburante",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Succo"
   */
  CAEC_Fallback_Juice: "Succo",
  /**
   * top-level category for non-drinkable liquids, and used in 'Container - Liquid'
   *
   * found in-game:
   *   IGUI_ItemCat_Liquid = "Liquido"
   */
  CAEC_Fallback_Liquid: "Liquido",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Latte"
   *   ContextMenu_Milk = "Latte"
   */
  CAEC_Fallback_Milk: "Latte",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Veleno",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Bevanda analcolica"
   */
  CAEC_Fallback_SoftDrink: "Bevanda analcolica",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tè"
   */
  CAEC_Fallback_Tea: "Tè",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Innaffia"
   */
  CAEC_Override_Water: "Acqua",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vino"
   */
  CAEC_Fallback_Wine: "Vino",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Scatola",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Fascio",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Cartone",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Sveglia"
   */
  CAEC_Fallback_AlarmClock: "Sveglia",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Radio",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Telecomando",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-talkie",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Cassetta",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "Mangime"
   */
  CAEC_Fallback_AnimalFeed: "Mangime",
  /**
   * bicycles! for the fantastic bicycle mod
   *
   * found in-game:
   *   IGUI_ItemCat_Bicycle = "Bicicletta"
   */
  CAEC_Fallback_Bicycle: "Bicicletta",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "Pulizia",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostabile",
  /**
   * construction and renovation supplies such as paint, plaster and wallpaper
   *
   * found in-game:
   *   IGUI_ItemCat_Construction = "Costruzione"
   */
  CAEC_Fallback_Construction: "Costruzione",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artigianale",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Tazza",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Posate",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Portachiavi",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Padella",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Parte"
   *   IGUI_ItemCat_Part = "Parte"
   */
  CAEC_Fallback_Part: "Parte",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Quadro",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluche",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Seme"
   */
  CAEC_Fallback_Seed: "Seme",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Bustina di semi",
  /**
   * smoking items such as cigarettes, cigars, pipes
   *
   * found in-game:
   *   IGUI_ItemCat_Smoking = "Fumo"
   */
  CAEC_Fallback_Smoking: "Fumo",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Giocattolo",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Ninnolo",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensile",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Indossabile",
};
