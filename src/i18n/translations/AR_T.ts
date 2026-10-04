import type { ExternalTranslations } from "../types";

/**
 * Spanish (Argentina)
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
export const AR: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accesorio"
   */
  CAEC_Fallback_Accessory: "Accesorio",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Municiï¿½n"
   */
  CAEC_Override_Ammo: "Munición",
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
   *   IGUI_ItemCat_Appearance = "Apariencia"
   */
  CAEC_Fallback_Appearance: "Apariencia",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Campamento"
   */
  CAEC_Fallback_Camping: "Campamento",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartografía"
   */
  CAEC_Fallback_Cartography: "Cartografía",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Ropa"
   */
  CAEC_Fallback_Clothing: "Ropa",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Comunicaciones"
   */
  CAEC_Fallback_Communications: "Comunicaciones",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Contenedor"
   *   ContextMenu_Container = "Contenedores"
   */
  CAEC_Fallback_Container: "Contenedor",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cocina"
   */
  CAEC_Fallback_Cooking: "Cocina",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Electrónica"
   */
  CAEC_Fallback_Electronics: "Electrónica",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Entretenimiento"
   */
  CAEC_Fallback_Entertainment: "Entretenimiento",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Fuente de fuego"
   */
  CAEC_Fallback_FireSource: "Fuente de fuego",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Primeros auxilios"
   */
  CAEC_Fallback_FirstAid: "Primeros auxilios",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pescar"
   *   ContextMenu_Fishing = "Pescar"
   *   IGUI_CraftCategory_Fishing = "Pesca"
   */
  CAEC_Fallback_Fishing: "Pescar",
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
   *   IGUI_ItemCat_Furniture = "Mobiliario"
   */
  CAEC_Fallback_Furniture: "Mobiliario",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Jardinería"
   */
  CAEC_Fallback_Gardening: "Jardinería",
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
   *   IGUI_ItemCat_Instrument = "Instrumento musical"
   */
  CAEC_Fallback_Instrument: "Instrumento musical",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Trasto"
   */
  CAEC_Fallback_Junk: "Trasto",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Fuente de luz"
   */
  CAEC_Fallback_LightSource: "Fuente de luz",
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
   *   IGUI_ItemCat_Memento = "Recuerdo"
   */
  CAEC_Fallback_Memento: "Recuerdo",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Pintar"
   */
  CAEC_Fallback_Paint: "Pintar",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Equipo de protección"
   */
  CAEC_Fallback_ProtectiveGear: "Equipo de protección",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Libro de habilidades"
   */
  CAEC_Fallback_SkillBook: "Libro de habilidades",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Deportes"
   */
  CAEC_Fallback_Sports: "Deportes",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Herramienta"
   */
  CAEC_Fallback_Tool: "Herramienta",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trampas"
   */
  CAEC_Fallback_Trapping: "Trampas",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Mantenimiento de vehículos"
   */
  CAEC_Fallback_VehicleMaintenance: "Mantenimiento de vehículos",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Fallback_Weapon: "Arma",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Hacha",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Herrería",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Contundente largo",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Carnicería",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Carpinterï¿½a"
   */
  CAEC_Override_Carpentry: "Carpintería",
  /** carving skill */
  CAEC_Fallback_Carving: "Tallado",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Electrï¿½nica"
   */
  CAEC_Override_Electrical: "Electricidad",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agricultura"
   */
  CAEC_Fallback_Farming: "Agricultura",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Talla de piedra",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Recolección",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Vidriería",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Hoja larga",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Mantenimiento",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Albañilería",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mecánica",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metalurgia",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Alfarería",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Hoja corta",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Contundente corto",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Lanza",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Sastrería",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Rastreo",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Trabajo en metales"
   */
  CAEC_Fallback_Welding: "Trabajo en metales",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Brazos",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Parte inferior",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Cara",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calzado",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Cuerpo completo",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Manos",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Cabeza"
   */
  CAEC_Fallback_Head: "Cabeza",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Joyería",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Piernas",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Cuello"
   */
  CAEC_Fallback_Neck: "Cuello",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Abrigo",
  /** hosiery and socks */
  CAEC_Override_Socks: "Medias",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Parte superior",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Ropa interior",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Repostería",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pan"
   */
  CAEC_Fallback_Bread: "Pan",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Caramelo"
   */
  CAEC_Fallback_Candy: "Caramelo",
  /** canned food items */
  CAEC_Override_Canned: "Enlatado",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Lácteos",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Plato",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Hierba"
   */
  CAEC_Fallback_Herb: "Hierba",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Fallback_Meat: "Carne",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perecedero",
  /** food for pets */
  CAEC_Fallback_PetFood: "Mascotas",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porción",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "En conserva",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Frutas y verduras",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Mariscos"
   */
  CAEC_Fallback_Seafood: "Mariscos",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Semilla"
   */
  CAEC_Fallback_Seed: "Semilla",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Condimento",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alimento básico",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adultos",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Folleto",
  /** comic books */
  CAEC_Fallback_Comic: "Historieta",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumible",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Libro de lujo",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Volante",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Tapa dura",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Revista",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Diario",
  /** picture books */
  CAEC_Fallback_PictureBook: "Libro ilustrado",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Receta",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manual de rol",
  /** softcover books */
  CAEC_Fallback_Softcover: "Tapa blanda",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Arco",
  /** firearm drums */
  CAEC_Fallback_Drum: "Tambor",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Arma de fuego",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Cargador",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Rifle",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Escopeta",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Cerveza"
   */
  CAEC_Fallback_Beer: "Cerveza",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Bebida",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cóctel",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Cafe"
   */
  CAEC_Override_Coffee: "Café",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Tinte",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Bebida energizante",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Combustible",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Jugo"
   */
  CAEC_Fallback_Juice: "Jugo",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Líquido",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Leche"
   *   ContextMenu_Milk = "Leche"
   */
  CAEC_Fallback_Milk: "Leche",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Gaseosa"
   */
  CAEC_Fallback_SoftDrink: "Gaseosa",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Té"
   */
  CAEC_Fallback_Tea: "Té",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Agua"
   */
  CAEC_Fallback_Water: "Agua",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vino"
   */
  CAEC_Fallback_Wine: "Vino",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Caja",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Atado",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Cartón",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Reloj despertador"
   */
  CAEC_Fallback_AlarmClock: "Reloj despertador",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Control remoto",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-talkie",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Bicicleta",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artesanal",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Taza",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Cubiertos",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Llavero",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Olla",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Parte"
   */
  CAEC_Fallback_Part: "Parte",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluche",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Sobre de semillas",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Alimento balanceado",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumar",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Chuchería",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensilio de cocina",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Portátil",
};
