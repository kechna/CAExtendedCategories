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
  /** top-level accessories category, such as watches, necklaces, belts, gloves */
  CAEC_Fallback_Accessory: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: undefined,
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: undefined,
  /**
   * top-level clothing category, such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Ropa"
   */
  CAEC_Override_Clothing: undefined,
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: undefined,
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: undefined,
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: undefined,
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: undefined,
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Cabeza"
   */
  CAEC_Override_Head: undefined,
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: undefined,
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: undefined,
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Cuello"
   */
  CAEC_Override_Neck: undefined,
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: undefined,
  /** top-level protective equipment category, such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: undefined,
  /** hosiery and socks */
  CAEC_Override_Socks: undefined,
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: undefined,
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: undefined,
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: undefined,
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: undefined,
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: undefined,
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: undefined,
  /** pistols and handguns */
  CAEC_Fallback_Handgun: undefined,
  /** firearm magazines */
  CAEC_Fallback_Mag: undefined,
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: undefined,
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: undefined,
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: undefined,
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pan"
   */
  CAEC_Override_Bread: undefined,
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Caramelo"
   */
  CAEC_Override_Candy: undefined,
  /** canned food items */
  CAEC_Override_Canned: undefined,
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Queso"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: undefined,
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Frutas"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Hierba"
   */
  CAEC_Override_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Aj� picante"
   */
  CAEC_Override_HotPepper: undefined,
  /** edible insects */
  CAEC_Fallback_Insect: undefined,
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: undefined,
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Override_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Hongo"
   */
  CAEC_Override_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Nuez"
   */
  CAEC_Override_Nut: undefined,
  /** food items that can spoil */
  CAEC_Override_Perishable: undefined,
  /** food for pets */
  CAEC_Fallback_PetFood: undefined,
  /** single serving portion of food */
  CAEC_Override_Portion: undefined,
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: undefined,
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Mariscos"
   */
  CAEC_Override_Seafood: undefined,
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Semilla"
   */
  CAEC_Override_Seed: undefined,
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: undefined,
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: undefined,
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: undefined,
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Caldo"
   */
  CAEC_Override_Stock: undefined,
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Az�car"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Verduras"
   */
  CAEC_Override_Vegetables: undefined,
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: undefined,
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Cerveza"
   *   ItemName_Base.Beer = "Servida en un vaso"
   *   ItemName_Base.Beer2 = "Servida en un vaso"
   *   ContextMenu_EvolvedRecipe_Beer = "en vaso de Whisky"
   *   ContextMenu_EvolvedRecipe_Beer2 = "en un vaso"
   */
  CAEC_Override_Beer: undefined,
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "Bebida"
   *   ItemName_Base.Beverage2 = "Bebida"
   *   ContextMenu_EvolvedRecipe_Beverage = "Bebida"
   *   ContextMenu_EvolvedRecipe_Beverage2 = "Bebida"
   */
  CAEC_Override_Beverage: undefined,
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: undefined,
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Jugo"
   */
  CAEC_Override_Juice: undefined,
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: undefined,
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Leche"
   *   ItemName_Base.Milk = "Leche"
   */
  CAEC_Override_Milk: undefined,
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Gaseosa"
   */
  CAEC_Override_SoftDrink: undefined,
  /** drinking water */
  CAEC_Fallback_Water: undefined,
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vino"
   *   ItemName_Base.Wine = "Chardonnay"
   *   ItemName_Base.Wine2 = "Vino tinto"
   */
  CAEC_Override_Wine: undefined,
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: undefined,
  /** informational brochures */
  CAEC_Fallback_Brochure: undefined,
  /** comic books */
  CAEC_Fallback_Comic: undefined,
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: undefined,
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: undefined,
  /** flyers and handouts */
  CAEC_Fallback_Flier: undefined,
  /** hardcover books */
  CAEC_Fallback_Hardcover: undefined,
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatura"
   */
  CAEC_Override_Literature: undefined,
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Revista"
   */
  CAEC_Override_Magazine: undefined,
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Diario"
   */
  CAEC_Override_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: undefined,
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: undefined,
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: undefined,
  /** skill books */
  CAEC_Fallback_SkillBook: undefined,
  /** softcover books */
  CAEC_Fallback_Softcover: undefined,
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: undefined,
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Llavero"
   */
  CAEC_Override_KeyRing: undefined,
  /** photos */
  CAEC_Fallback_Photo: undefined,
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: undefined,
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: undefined,
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Hachas"
   */
  CAEC_Override_Axe: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Armas contundentes largas"
   */
  CAEC_Override_Blunt: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Armas de hoja larga"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Armas de hoja corta"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Armas contundentes cortas"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Lanzas"
   */
  CAEC_Override_Spear: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munici�n"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: undefined,
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: undefined,
  /** character appearance items such as makeup */
  CAEC_Fallback_Appearance: undefined,
  /** camping supplies */
  CAEC_Fallback_Camping: undefined,
  /** maps of locations */
  CAEC_Fallback_Cartography: undefined,
  /** communication devices such as walkie talkies, radios */
  CAEC_Fallback_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Contenedor"
   *   ContextMenu_Container = "Contenedores"
   */
  CAEC_Override_Container: undefined,
  /** cooking items such as pots, pans, utensils */
  CAEC_Fallback_Cooking: undefined,
  /** electronic items */
  CAEC_Fallback_Electronics: undefined,
  /** entertainment items */
  CAEC_Fallback_Entertainment: undefined,
  /** sources of fire */
  CAEC_Fallback_FireSource: undefined,
  /** first aid and medical supplies, bandages, painkillers, antiseptics */
  CAEC_Fallback_FirstAid: undefined,
  /**
   * fishing gear
   *
   * found in-game:
   *   ContextMenu_Fishing = "Pescar"
   */
  CAEC_Override_Fishing: undefined,
  /**
   * any food item
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Comida"
   */
  CAEC_Override_Food: undefined,
  /** furniture items */
  CAEC_Fallback_Furniture: undefined,
  /** gardening items */
  CAEC_Fallback_Gardening: undefined,
  /** household items */
  CAEC_Fallback_Household: undefined,
  /** instruments */
  CAEC_Fallback_Instrument: undefined,
  /** miscellaneous junk items, worthless items */
  CAEC_Fallback_Junk: undefined,
  /** items that provide light such as flashlights, lanterns */
  CAEC_Fallback_LightSource: undefined,
  /** crafting materials and building supplies */
  CAEC_Fallback_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: undefined,
  /** paint items */
  CAEC_Fallback_Paint: undefined,
  /** sports items */
  CAEC_Fallback_Sports: undefined,
  /** tools, such as hammers, wrenches, screwdrivers */
  CAEC_Fallback_Tool: undefined,
  /** trapping items */
  CAEC_Fallback_Trapping: undefined,
  /** vehicle maintenance items */
  CAEC_Fallback_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Override_Weapon: undefined,
};
