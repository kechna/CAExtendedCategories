import type { ExternalTranslations } from "../types";

/**
 * Thai
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
export const TH: ExternalTranslations = {
  /**
   * top-level accessories category, such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "เครื่องประดับ"
   */
  CAEC_Fallback_Accessory: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: undefined,
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: undefined,
  /**
   * top-level clothing category, such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "เครื่องนุ่งห่ม"
   */
  CAEC_Fallback_Clothing: undefined,
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
   *   IGUI_health_Head = "ศีรษะ"
   */
  CAEC_Fallback_Head: undefined,
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: undefined,
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: undefined,
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "ลำคอ"
   */
  CAEC_Fallback_Neck: undefined,
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
   *   ContextMenu_FoodType_Bread = "ขนมปัง"
   */
  CAEC_Fallback_Bread: undefined,
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "ลูกกวาด"
   */
  CAEC_Fallback_Candy: undefined,
  /** canned food items */
  CAEC_Override_Canned: undefined,
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "ชีส"
   */
  CAEC_Fallback_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: undefined,
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "ผลไม้"
   */
  CAEC_Fallback_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "สมุนไพร"
   */
  CAEC_Fallback_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "พริก"
   */
  CAEC_Fallback_HotPepper: undefined,
  /** edible insects */
  CAEC_Fallback_Insect: undefined,
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: undefined,
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "เนื้อ"
   */
  CAEC_Fallback_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "เห็ด"
   */
  CAEC_Fallback_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "ถั่ว"
   */
  CAEC_Fallback_Nut: undefined,
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
   *   ContextMenu_FoodType_Seafood = "อาหารทะเล"
   */
  CAEC_Fallback_Seafood: undefined,
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "เมล็ดพืช"
   */
  CAEC_Fallback_Seed: undefined,
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
   *   ContextMenu_FoodType_Stock = "น้ำสต็อก"
   */
  CAEC_Fallback_Stock: undefined,
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "น้ำตาล"
   */
  CAEC_Fallback_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "ผัก"
   */
  CAEC_Fallback_Vegetables: undefined,
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: undefined,
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "เบียร์"
   *   ItemName_Base.Beer = "เบียร์ (ในแก้วทัมเบลอร์)"
   *   ItemName_Base.Beer2 = "เบียร์ (ในแก้วพลาสติก)"
   *   ContextMenu_EvolvedRecipe_Beer = "ในแก้วทัมเบลอร์"
   *   ContextMenu_EvolvedRecipe_Beer2 = "ในแก้ว"
   */
  CAEC_Fallback_Beer: undefined,
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "เครื่องดื่ม"
   *   ItemName_Base.Beverage2 = "เครื่องดื่ม"
   *   ContextMenu_EvolvedRecipe_Beverage = "เครื่องดื่ม"
   *   ContextMenu_EvolvedRecipe_Beverage2 = "เครื่องดื่ม"
   */
  CAEC_Fallback_Beverage: undefined,
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: undefined,
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "น้ำผลไม้"
   */
  CAEC_Fallback_Juice: undefined,
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: undefined,
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "นม"
   *   ItemName_Base.Milk = "นม"
   */
  CAEC_Fallback_Milk: undefined,
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "น้ำอัดลม"
   */
  CAEC_Fallback_SoftDrink: undefined,
  /** drinking water */
  CAEC_Fallback_Water: undefined,
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "ไวน์"
   *   ItemName_Base.Wine = "ไวน์ขาว"
   *   ItemName_Base.Wine2 = "ไวน์แดง"
   */
  CAEC_Fallback_Wine: undefined,
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
   *   IGUI_ItemCat_Literature = "สื่อสิ่งพิมพ์"
   */
  CAEC_Fallback_Literature: undefined,
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "นิตยสาร"
   */
  CAEC_Fallback_Magazine: undefined,
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "หนังสือพิมพ์"
   */
  CAEC_Fallback_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: undefined,
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: undefined,
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: undefined,
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "หนังสือทักษะ"
   */
  CAEC_Fallback_SkillBook: undefined,
  /** softcover books */
  CAEC_Fallback_Softcover: undefined,
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: undefined,
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "พวงกุญแจ"
   */
  CAEC_Fallback_KeyRing: undefined,
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
   *   IGUI_perks_Axe = "ขวาน"
   */
  CAEC_Fallback_Axe: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "อาวุธทื่อยาว"
   */
  CAEC_Fallback_Blunt: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "อาวุธมีคมยาว"
   */
  CAEC_Fallback_LongBlade: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "อาวุธมีคมสั้น"
   */
  CAEC_Fallback_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "อาวุธทื่อสั้น"
   */
  CAEC_Fallback_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "หอก"
   */
  CAEC_Fallback_Spear: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "กระสุน"
   */
  CAEC_Fallback_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: undefined,
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: undefined,
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "รูปร่างหน้าตา"
   */
  CAEC_Fallback_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "ที่พัก"
   */
  CAEC_Fallback_Camping: undefined,
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "แผนที่"
   */
  CAEC_Fallback_Cartography: undefined,
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "การสื่อสาร"
   */
  CAEC_Fallback_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "บรรจุภัณฑ์"
   *   ContextMenu_Container = "ตู้/ชั้นวางของ"
   */
  CAEC_Fallback_Container: undefined,
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "เครื่องครัว"
   */
  CAEC_Fallback_Cooking: undefined,
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "วงจรอิเล็กทรอนิกส์"
   */
  CAEC_Fallback_Electronics: undefined,
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "ความบันเทิง"
   */
  CAEC_Fallback_Entertainment: undefined,
  /** sources of fire */
  CAEC_Fallback_FireSource: undefined,
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "ปฐมพยาบาล"
   */
  CAEC_Fallback_FirstAid: undefined,
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "ตกปลา"
   *   ContextMenu_Fishing = "จับปลา"
   */
  CAEC_Fallback_Fishing: undefined,
  /**
   * any food item
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "อาหาร"
   */
  CAEC_Fallback_Food: undefined,
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "เฟอร์นิเจอร์"
   */
  CAEC_Fallback_Furniture: undefined,
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "การเพาะปลูก"
   */
  CAEC_Fallback_Gardening: undefined,
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "ครัวเรือน"
   */
  CAEC_Fallback_Household: undefined,
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "เครื่องดนตรี"
   */
  CAEC_Fallback_Instrument: undefined,
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "เบ็ดเตล็ด"
   */
  CAEC_Fallback_Junk: undefined,
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "แหล่งแสงสว่าง"
   */
  CAEC_Fallback_LightSource: undefined,
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "วัสดุ"
   */
  CAEC_Fallback_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: undefined,
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "สี"
   */
  CAEC_Fallback_Paint: undefined,
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "กีฬา"
   */
  CAEC_Fallback_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "เครื่องมือ"
   */
  CAEC_Fallback_Tool: undefined,
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "การทำกับดัก"
   */
  CAEC_Fallback_Trapping: undefined,
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "การบำรุงรักษายานพาหนะ"
   */
  CAEC_Fallback_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "อาวุธ"
   */
  CAEC_Fallback_Weapon: undefined,
};
