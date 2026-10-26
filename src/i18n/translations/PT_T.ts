import type { ExternalTranslations } from "../types";

/**
 * Portuguese
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
export const PT: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Acessório"
   */
  CAEC_Fallback_Accessory: "Acessório",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munição"
   */
  CAEC_Fallback_Ammo: "Munição",
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
   *   IGUI_ItemCat_AnimalPart = "Parte de animal"
   */
  CAEC_Fallback_AnimalPart: "Parte de animal",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Aparência"
   */
  CAEC_Fallback_Appearance: "Aparência",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Acampar"
   */
  CAEC_Fallback_Camping: "Acampar",
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
   *   IGUI_ItemCat_Clothing = "Roupa"
   */
  CAEC_Fallback_Clothing: "Roupa",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Comunicação"
   */
  CAEC_Fallback_Communications: "Comunicação",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Contentor"
   *   ContextMenu_Container = "Recipientes"
   */
  CAEC_Fallback_Container: "Contentor",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cozinhar"
   */
  CAEC_Fallback_Cooking: "Cozinhar",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Eletrónica"
   */
  CAEC_Fallback_Electronics: "Eletrónica",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Entretenimento"
   */
  CAEC_Fallback_Entertainment: "Entretenimento",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Fonte de Fogo"
   */
  CAEC_Fallback_FireSource: "Fonte de Fogo",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Primeiros Socorros"
   */
  CAEC_Fallback_FirstAid: "Primeiros Socorros",
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
   *   IGUI_ItemCat_Food = "Comida"
   */
  CAEC_Fallback_Food: "Comida",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Mobília"
   */
  CAEC_Fallback_Furniture: "Mobília",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Jardinagem"
   *   ContextMenu_Gardening = "Jardinagem"
   */
  CAEC_Fallback_Gardening: "Jardinagem",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Doméstico"
   */
  CAEC_Fallback_Household: "Doméstico",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumento Musical"
   */
  CAEC_Fallback_Instrument: "Instrumento Musical",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Sucata"
   */
  CAEC_Fallback_Junk: "Sucata",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Fonte de Iluminação"
   */
  CAEC_Fallback_LightSource: "Fonte de Iluminação",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatura"
   */
  CAEC_Fallback_Literature: "Literatura",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Material"
   */
  CAEC_Fallback_Material: "Material",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Lembrança"
   */
  CAEC_Fallback_Memento: "Lembrança",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Tinta"
   */
  CAEC_Fallback_Paint: "Tinta",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Equipamento Protetor"
   */
  CAEC_Fallback_ProtectiveGear: "Equipamento Protetor",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Livro de Habilidades"
   */
  CAEC_Fallback_SkillBook: "Livro de Habilidades",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Desporto"
   */
  CAEC_Fallback_Sports: "Desporto",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Ferramenta"
   */
  CAEC_Fallback_Tool: "Ferramenta",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Armadilhagem"
   */
  CAEC_Fallback_Trapping: "Armadilhagem",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Manutenção de Veículo"
   */
  CAEC_Fallback_VehicleMaintenance: "Manutenção de Veículo",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Fallback_Weapon: "Arma",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Machado",
  /**
   * blacksmith skill
   *
   * found in-game:
   *   ContextMenu_Blacksmith = "Metalurgia"
   */
  CAEC_Fallback_Blacksmith: "Ferraria",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Contundente Longa",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Talho",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Carpintaria"
   */
  CAEC_Fallback_Carpentry: "Carpintaria",
  /** carving skill */
  CAEC_Fallback_Carving: "Talha",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Eletricidade"
   */
  CAEC_Fallback_Electrical: "Eletricidade",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agricultura"
   *   ContextMenu_Farming = "Agricultura"
   */
  CAEC_Fallback_Farming: "Agricultura",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Lascagem",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Recoleção",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Vidraria",
  /**
   * animal husbandry/care skill
   *
   * found in-game:
   *   IGUI_perks_Husbandry = "Criação de Animais"
   */
  CAEC_Fallback_Husbandry: "Criação de Animais",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Lâmina Longa",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Manutenção",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Alvenaria",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_ItemCat_Mechanics = "Mecânica"
   */
  CAEC_Fallback_Mechanics: "Mecânica",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "Metalurgia",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Olaria",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Lâmina Curta",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Contundente Curta",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Lança",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Costura",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Rastreio",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Soldadura"
   */
  CAEC_Fallback_Welding: "Soldadura",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Braços",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Parte de Baixo",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Rosto",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calçado",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Corpo Inteiro",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Mãos",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Cabeça"
   */
  CAEC_Fallback_Head: "Cabeça",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Joalharia",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Pernas",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Pescoço"
   */
  CAEC_Fallback_Neck: "Pescoço",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Agasalhos",
  /** hosiery and socks */
  CAEC_Override_Socks: "Meias",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Parte de Cima",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Roupa Interior",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Pastelaria",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pão"
   */
  CAEC_Fallback_Bread: "Pão",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Guloseimas"
   */
  CAEC_Fallback_Candy: "Guloseimas",
  /** canned food items */
  CAEC_Override_Canned: "Enlatados",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Laticínios",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Prato",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Congelados",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Ervas"
   */
  CAEC_Fallback_Herb: "Ervas",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Fallback_Meat: "Carne",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perecível",
  /** food for pets */
  CAEC_Fallback_PetFood: "Animais de Estimação",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porção",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservas",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Frutas e legumes",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Marisco"
   */
  CAEC_Fallback_Seafood: "Marisco",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "Petisco",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Especiarias",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alimento Básico",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulto",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brochura",
  /** comic books */
  CAEC_Fallback_Comic: "Banda Desenhada",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumível",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Livro de Luxo",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Panfleto",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Capa Dura",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Revista",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Jornal",
  /** picture books */
  CAEC_Fallback_PictureBook: "Livro Ilustrado",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Receita",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manual de RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Capa Mole",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "Escrita",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Arco",
  /** firearm drums */
  CAEC_Fallback_Drum: "Tambor",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Explosivo",
  /**
   * firearm category, pistols, rifles, shotguns, etc.
   *
   * found in-game:
   *   IGUI_perks_Firearm = "Arma de Fogo"
   *   IGUI_ItemCat_Firearm = "Arma de Fogo"
   */
  CAEC_Fallback_Firearm: "Arma de Fogo",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Carregador",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Espingarda",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Caçadeira",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Álcool",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Cerveja"
   */
  CAEC_Fallback_Beer: "Cerveja",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   IGUI_ItemCat_Beverage = "Bebida"
   */
  CAEC_Fallback_Beverage: "Bebida",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Café"
   */
  CAEC_Fallback_Coffee: "Café",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Corante",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Bebida Energética",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Combustível",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Sumo"
   */
  CAEC_Fallback_Juice: "Sumo",
  /**
   * top-level category for non-drinkable liquids, and used in 'Container - Liquid'
   *
   * found in-game:
   *   IGUI_ItemCat_Liquid = "Líquido"
   */
  CAEC_Fallback_Liquid: "Líquido",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Leite"
   *   ContextMenu_Milk = "Leite"
   */
  CAEC_Fallback_Milk: "Leite",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Veneno",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Refrigerante"
   */
  CAEC_Fallback_SoftDrink: "Refrigerante",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Chá"
   */
  CAEC_Fallback_Tea: "Chá",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Água"
   */
  CAEC_Fallback_Water: "Água",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vinho"
   */
  CAEC_Fallback_Wine: "Vinho",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Caixa",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Em Molho",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Embalagem",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Despertador"
   */
  CAEC_Fallback_AlarmClock: "Despertador",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Rádio",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Comando",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-talkie",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Cassete",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "Ração para Animais"
   */
  CAEC_Fallback_AnimalFeed: "Ração para Animais",
  /**
   * bicycles! for the fantastic bicycle mod
   *
   * found in-game:
   *   IGUI_ItemCat_Bicycle = "Bicicleta"
   */
  CAEC_Fallback_Bicycle: "Bicicleta",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "Limpeza",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostável",
  /**
   * construction and renovation supplies such as paint, plaster and wallpaper
   *
   * found in-game:
   *   IGUI_ItemCat_Construction = "Construção"
   */
  CAEC_Fallback_Construction: "Construção",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artesanal",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Copo",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Talheres",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Porta-chaves",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Panela",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Região"
   *   IGUI_ItemCat_Part = "Região"
   */
  CAEC_Fallback_Part: "Peça",
  /** photos */
  CAEC_Fallback_Photo: "Fotografia",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Quadro",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluche",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Sementes"
   */
  CAEC_Fallback_Seed: "Sementes",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Pacote de Sementes",
  /**
   * smoking items such as cigarettes, cigars, pipes
   *
   * found in-game:
   *   IGUI_ItemCat_Smoking = "Tabaco"
   */
  CAEC_Fallback_Smoking: "Tabaco",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Brinquedo",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Bugiganga",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensílio",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Vestível",
};
