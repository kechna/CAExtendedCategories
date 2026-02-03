import type { ExternalTranslations } from "../types";

/**
 * Spanish
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
export const ES: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Complemento"
   */
  CAEC_Fallback_Accessory: "Complemento",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munición"
   */
  CAEC_Fallback_Ammo: "Munición",
  /** animals */
  CAEC_Fallback_Animal: "Animal",
  /** animal parts, bones, sinew, hides */
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
   *   IGUI_perks_Cooking = "Cocina"
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
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Fuente de fuego",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Primeros auxilios"
   *   IGUI_perks_Doctor = "Primeros auxilios"
   */
  CAEC_Fallback_FirstAid: "Primeros auxilios",
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pesca"
   *   IGUI_perks_Fishing = "Pesca"
   *   ContextMenu_Fishing = "Pescar"
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
   *   IGUI_ItemCat_Furniture = "Mobiliario"
   */
  CAEC_Fallback_Furniture: "Mobiliario",
  /**
   * gardening items
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
   *   IGUI_ItemCat_Instrument = "Instrumento"
   */
  CAEC_Fallback_Instrument: "Instrumento",
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
   *   IGUI_ItemCat_Literature = "Lectura"
   */
  CAEC_Fallback_Literature: "Lectura",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Material"
   */
  CAEC_Fallback_Material: "Material",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Recuerdo",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Pintura"
   */
  CAEC_Fallback_Paint: "Pintura",
  /** protective equipment such as body armor, helmets, knee pads */
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
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trampas"
   *   IGUI_perks_Trapping = "Trampas"
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
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Hacha"
   */
  CAEC_Fallback_Axe: "Hacha",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Arma larga contundente"
   */
  CAEC_Fallback_Blunt: "Arma larga contundente",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Arma de hoja larga"
   */
  CAEC_Fallback_LongBlade: "Arma de hoja larga",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Arma de hoja corta"
   */
  CAEC_Fallback_SmallBlade: "Arma de hoja corta",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Arma corta contundente"
   */
  CAEC_Fallback_SmallBlunt: "Arma corta contundente",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Lanza"
   */
  CAEC_Fallback_Spear: "Lanza",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Brazos",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Parte inferior",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Cara",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calzado",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Cuerpo entero",
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
  CAEC_Override_Outerwear: "Ropa de abrigo",
  /** hosiery and socks */
  CAEC_Override_Socks: "Calcetines",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Parte superior",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Ropa interior",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Horneado",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pan"
   *   ItemName_Base.Bread = "Pan"
   */
  CAEC_Fallback_Bread: "Pan",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Caramelos"
   */
  CAEC_Fallback_Candy: "Caramelos",
  /** canned food items */
  CAEC_Override_Canned: "Enlatado",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Queso"
   *   ItemName_Base.Cheese = "Queso"
   */
  CAEC_Fallback_Cheese: "Queso",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Plato",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Frutas"
   */
  CAEC_Fallback_Fruits: "Frutas",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Hierbas"
   */
  CAEC_Fallback_Herb: "Hierbas",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Pimientos picantes"
   */
  CAEC_Fallback_HotPepper: "Pimientos picantes",
  /** edible insects */
  CAEC_Fallback_Insect: "Insectos",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Ganado",
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
   *   ContextMenu_FoodType_Mushroom = "Champiñones"
   */
  CAEC_Fallback_Mushroom: "Champiñones",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Frutos secos"
   */
  CAEC_Fallback_Nut: "Frutos secos",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perecedero",
  /** food for pets */
  CAEC_Fallback_PetFood: "Mascotas",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porción",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservado",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Marisco"
   */
  CAEC_Fallback_Seafood: "Marisco",
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Semilla"
   */
  CAEC_Fallback_Seed: "Semilla",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Aperitivo",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Especias",
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
   *   ContextMenu_FoodType_Sugar = "Azúcar"
   *   ItemName_Base.Sugar = "Azúcar"
   */
  CAEC_Fallback_Sugar: "Azúcar",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Verduras"
   */
  CAEC_Fallback_Vegetables: "Verduras",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulto",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Folleto",
  /** comic books */
  CAEC_Fallback_Comic: "Cómic",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumible",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Libro de lujo",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Volante",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Tapa dura",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Revista"
   */
  CAEC_Fallback_Magazine: "Revista",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Periódico"
   */
  CAEC_Fallback_Newspaper: "Periódico",
  /** picture books */
  CAEC_Fallback_PictureBook: "Libro ilustrado",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Receta",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manual de rol",
  /** softcover books */
  CAEC_Fallback_Softcover: "Tapa blanda",
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
   *   ItemName_Base.Beer = "Servido en un vaso"
   *   ItemName_Base.Beer2 = "Servido en un vaso de plástico"
   */
  CAEC_Override_Beer: "Servido en un vaso",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "Bebida"
   *   ItemName_Base.Beverage2 = "Bebida"
   */
  CAEC_Fallback_Beverage: "Bebida",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cóctel",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Café"
   *   ItemName_Base.Coffee = "Café"
   *   ItemName_Base.Coffee2 = "Café"
   */
  CAEC_Override_Coffee: undefined,
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energético",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Zumo"
   */
  CAEC_Fallback_Juice: "Zumo",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Líquido",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Leche"
   *   ItemName_Base.Milk = "Leche"
   */
  CAEC_Fallback_Milk: "Leche",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Refresco"
   */
  CAEC_Fallback_SoftDrink: "Refresco",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Té"
   */
  CAEC_Override_Tea: undefined,
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
   *   ItemName_Base.Wine = "Vino blanco"
   *   ItemName_Base.Wine2 = "Vino tinto"
   */
  CAEC_Fallback_Wine: "Vino",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Caja",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Enlazado",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Cartón",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Elaborado",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Llavero"
   */
  CAEC_Fallback_KeyRing: "Llavero",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumar",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Portátil",
};
