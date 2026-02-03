import type { ExternalTranslations } from "../types";

/**
 * Tagalog
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
export const PH: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessory"
   */
  CAEC_Override_Accessory: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Bala"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: undefined,
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: undefined,
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Hitsura"
   */
  CAEC_Override_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Camping"
   */
  CAEC_Override_Camping: undefined,
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartography"
   */
  CAEC_Override_Cartography: undefined,
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Kasoutan"
   */
  CAEC_Override_Clothing: undefined,
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Komunikasyon"
   */
  CAEC_Override_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Container"
   *   ContextMenu_Container = "Lalagyan"
   */
  CAEC_Override_Container: undefined,
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Pagkusina"
   *   IGUI_perks_Cooking = "Cooking"
   */
  CAEC_Override_Cooking: undefined,
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Electronics"
   */
  CAEC_Override_Electronics: undefined,
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Entertainment"
   */
  CAEC_Override_Entertainment: undefined,
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: undefined,
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "FirstAid"
   *   IGUI_perks_Doctor = "First Aid"
   */
  CAEC_Override_FirstAid: undefined,
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Fishing"
   *   IGUI_perks_Fishing = "Fishing"
   *   ContextMenu_Fishing = "Pangingisda"
   */
  CAEC_Override_Fishing: undefined,
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Pagkain"
   */
  CAEC_Override_Food: undefined,
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Furniture"
   */
  CAEC_Override_Furniture: undefined,
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Gardening"
   */
  CAEC_Override_Gardening: undefined,
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Pang Bahay"
   */
  CAEC_Override_Household: undefined,
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumento"
   */
  CAEC_Override_Instrument: undefined,
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Basura"
   */
  CAEC_Override_Junk: undefined,
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Light Source"
   */
  CAEC_Override_LightSource: undefined,
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
   *   IGUI_ItemCat_Material = "Materiales"
   */
  CAEC_Override_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: undefined,
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Pintura"
   */
  CAEC_Override_Paint: undefined,
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: undefined,
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Skill Book"
   */
  CAEC_Override_SkillBook: undefined,
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sports"
   */
  CAEC_Override_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Tool"
   */
  CAEC_Override_Tool: undefined,
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trapping"
   *   IGUI_perks_Trapping = "Trapping"
   */
  CAEC_Override_Trapping: undefined,
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Vehicle Maintenance"
   */
  CAEC_Override_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Armas"
   */
  CAEC_Override_Weapon: undefined,
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Axe"
   */
  CAEC_Override_Axe: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Long Blunt"
   */
  CAEC_Override_Blunt: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Long Blade"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Short Blade"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Short Blunt"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Spear"
   */
  CAEC_Override_Spear: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: undefined,
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: undefined,
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
   *   IGUI_health_Head = "Ulo"
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
   *   IGUI_health_Neck = "Leeg"
   */
  CAEC_Override_Neck: undefined,
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: undefined,
  /** hosiery and socks */
  CAEC_Override_Socks: undefined,
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: undefined,
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: undefined,
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: undefined,
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Tinapay"
   */
  CAEC_Override_Bread: undefined,
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Candy"
   */
  CAEC_Override_Candy: undefined,
  /** canned food items */
  CAEC_Override_Canned: undefined,
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Keso"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: undefined,
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Prutas"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Herbs"
   */
  CAEC_Override_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Hot Peppers"
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
   *   ContextMenu_FoodType_Meat = "Karne"
   */
  CAEC_Override_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Kabute"
   */
  CAEC_Override_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Nut"
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
   *   ContextMenu_FoodType_Seafood = "Seafood"
   */
  CAEC_Override_Seafood: undefined,
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Binhi"
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
   *   ContextMenu_FoodType_Stock = "Stock"
   */
  CAEC_Override_Stock: undefined,
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Asukal"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Gulay"
   */
  CAEC_Override_Vegetables: undefined,
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
  /** literature magazines */
  CAEC_Fallback_Magazine: undefined,
  /** newspapers */
  CAEC_Fallback_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: undefined,
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: undefined,
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: undefined,
  /** softcover books */
  CAEC_Fallback_Softcover: undefined,
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
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: undefined,
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Serbesa"
   */
  CAEC_Override_Beer: undefined,
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: undefined,
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: undefined,
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kape"
   */
  CAEC_Override_Coffee: undefined,
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: undefined,
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Juice"
   */
  CAEC_Override_Juice: undefined,
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: undefined,
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Gatas"
   */
  CAEC_Override_Milk: undefined,
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Soft Drink"
   */
  CAEC_Override_SoftDrink: undefined,
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tsaa"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Tubig"
   */
  CAEC_Override_Water: undefined,
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Wine"
   */
  CAEC_Override_Wine: undefined,
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: undefined,
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: undefined,
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: undefined,
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: undefined,
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: undefined,
  /** photos */
  CAEC_Fallback_Photo: undefined,
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: undefined,
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: undefined,
};
