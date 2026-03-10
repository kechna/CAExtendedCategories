import type { ExternalTranslations } from "../types";

/**
 * Portuguese (Brazil)
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
export const PTBR: ExternalTranslations = {
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
  /** animals */
  CAEC_Fallback_Animal: "Animal",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Parte de Animal",
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
   *   IGUI_ItemCat_Camping = "Acampamento"
   */
  CAEC_Fallback_Camping: "Acampamento",
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
   *   IGUI_ItemCat_Clothing = "Vestuário"
   */
  CAEC_Fallback_Clothing: "Vestuário",
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
   *   IGUI_ItemCat_Container = "Container"
   *   ContextMenu_Container = "Recipiente"
   */
  CAEC_Fallback_Container: "Container",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Culinária"
   *   IGUI_perks_Cooking = "Culinária"
   */
  CAEC_Fallback_Cooking: "Culinária",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Eletrônicos"
   */
  CAEC_Fallback_Electronics: "Eletrônicos",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Entretenimento"
   */
  CAEC_Fallback_Entertainment: "Entretenimento",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Fonte de Fogo",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "Primeiros Socorros"
   *   IGUI_ItemCat_FirstAid = "Primeiros Socorros"
   */
  CAEC_Fallback_FirstAid: "Primeiros Socorros",
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
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Objeto Doméstico"
   */
  CAEC_Fallback_Household: "Objeto Doméstico",
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
   *   IGUI_ItemCat_Junk = "Miscelânea"
   */
  CAEC_Fallback_Junk: "Miscelânea",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Iluminação"
   */
  CAEC_Fallback_LightSource: "Iluminação",
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
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Lembrança",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Pintura"
   */
  CAEC_Fallback_Paint: "Pintura",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Equipamento de Proteção",
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
   *   IGUI_ItemCat_Sports = "Esporte"
   */
  CAEC_Fallback_Sports: "Esporte",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Ferramenta"
   */
  CAEC_Fallback_Tool: "Ferramenta",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Mecânica"
   */
  CAEC_Fallback_VehicleMaintenance: "Mecânica",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Fallback_Weapon: "Arma",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Machados"
   */
  CAEC_Fallback_Axe: "Machados",
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Forja"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Contundentes Longos"
   */
  CAEC_Fallback_Blunt: "Contundentes Longos",
  /** butchering skill */
  CAEC_Fallback_Butchering: undefined,
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Carpintaria"
   *   IGUI_perks_Carpentry = "Carpintaria"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: undefined,
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elétrica"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agricultura"
   *   IGUI_perks_Farming = "Agricultura"
   */
  CAEC_Override_Farming: undefined,
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pescaria"
   *   IGUI_perks_Fishing = "Pescaria"
   *   ContextMenu_Fishing = "Pescar"
   *   IGUI_CraftCategory_Fishing = "Pescaria"
   */
  CAEC_Fallback_Fishing: "Pescaria",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: undefined,
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Coleta"
   */
  CAEC_Override_Foraging: undefined,
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Agricultura"
   */
  CAEC_Fallback_Gardening: "Agricultura",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Lâminas Longas"
   */
  CAEC_Fallback_LongBlade: "Lâminas Longas",
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Manutenção"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: undefined,
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Mecânica"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Metalurgia"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Lâminas Curtas"
   */
  CAEC_Fallback_SmallBlade: "Lâminas Curtas",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Contundentes Curtos"
   */
  CAEC_Fallback_SmallBlunt: "Contundentes Curtos",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Lanças"
   */
  CAEC_Fallback_Spear: "Lanças",
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Costura"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: undefined,
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Caça"
   *   IGUI_perks_Trapping = "Caça"
   */
  CAEC_Fallback_Trapping: "Caça",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metalurgia"
   */
  CAEC_Override_Welding: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Braços",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Parte de Baixo",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Rosto",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calçados",
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
  CAEC_Override_Jewelry: "Joias",
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
  CAEC_Override_Top: "Tronco",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Roupa Íntima",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Assar",
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
   *   ContextMenu_FoodType_Candy = "Doce"
   */
  CAEC_Fallback_Candy: "Doce",
  /** canned food items */
  CAEC_Override_Canned: "Enlatados",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Queijo"
   */
  CAEC_Fallback_Cheese: "Queijo",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Prato",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Frutas"
   */
  CAEC_Override_Fruits: "Fruta",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Erva"
   */
  CAEC_Fallback_Herb: "Erva",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Pimenta"
   */
  CAEC_Fallback_HotPepper: "Pimenta",
  /** edible insects */
  CAEC_Fallback_Insect: "Insetos",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Gado",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Fallback_Meat: "Carne",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Cogumelo"
   */
  CAEC_Fallback_Mushroom: "Cogumelo",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Noz"
   */
  CAEC_Override_Nut: "Castanhas",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perecível",
  /** food for pets */
  CAEC_Fallback_PetFood: "Pets",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porção",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservado",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Frutos do Mar"
   */
  CAEC_Fallback_Seafood: "Frutos do Mar",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Semente"
   */
  CAEC_Fallback_Seed: "Semente",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Lanche",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Especiarias",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alimento básico",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Caldo"
   */
  CAEC_Fallback_Stock: "Caldo",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Açúcar"
   */
  CAEC_Fallback_Sugar: "Açúcar",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Legumes"
   */
  CAEC_Override_Vegetables: "Vegetais",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulto",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Folheto",
  /** comic books */
  CAEC_Fallback_Comic: "Quadrinhos",
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
  CAEC_Fallback_Softcover: "Brochura",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Arma de fogo",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Carregador",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Rifle",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Escopeta",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Álcool",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Cerveja"
   */
  CAEC_Override_Beer: "Copo de Vidro com Cerveja",
  /** top-level category for drinkable liquids */
  CAEC_Fallback_Beverage: "Bebida",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Coquetel",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Café"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Corante",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Refrigerante Energético",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Combustível",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Suco"
   */
  CAEC_Fallback_Juice: "Suco",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Líquido",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Leite"
   */
  CAEC_Fallback_Milk: "Leite",
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
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Regar"
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
  CAEC_Override_Bundled: "Em Feixe",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Cartucho",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: undefined,
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Caseira",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: undefined,
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Talheres",
  /** ring or bundle of keys */
  CAEC_Fallback_KeyRing: "Chaveiro",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: undefined,
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: undefined,
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: undefined,
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumar",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensílio",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Usável",
};
