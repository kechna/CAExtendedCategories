import type { ExternalTranslations } from "../types";

/**
 * Chinese (Simplified)
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
export const CN: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "配饰"
   */
  CAEC_Override_Accessory: "配饰",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "弹药"
   */
  CAEC_Override_Ammo: "弹药",
  /** animals */
  CAEC_Override_Animal: "动物",
  /** animal parts, bones, sinew, hides */
  CAEC_Override_AnimalPart: "动物材料",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "外观"
   */
  CAEC_Override_Appearance: "外观",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "露营"
   */
  CAEC_Override_Camping: "露营",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "制图"
   */
  CAEC_Override_Cartography: "地图",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "衣服"
   */
  CAEC_Override_Clothing: "衣服",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "通讯"
   */
  CAEC_Override_Communications: "通讯",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "容器"
   *   ContextMenu_Container = "容器"
   */
  CAEC_Override_Container: "容器",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "烹饪"
   *   IGUI_perks_Cooking = "烹饪"
   */
  CAEC_Override_Cooking: "烹饪",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "电子器件"
   */
  CAEC_Override_Electronics: "电子器件",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "娱乐"
   */
  CAEC_Override_Entertainment: "娱乐",
  /** sources of fire such as matches and lighters */
  CAEC_Override_FireSource: "火种",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "急救"
   *   IGUI_perks_Doctor = "急救"
   */
  CAEC_Override_FirstAid: "急救",
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "钓鱼"
   *   IGUI_perks_Fishing = "钓鱼"
   *   ContextMenu_Fishing = "钓鱼"
   */
  CAEC_Override_Fishing: "钓鱼",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "食物"
   */
  CAEC_Override_Food: "食物",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "家具"
   */
  CAEC_Override_Furniture: "家具",
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "园艺"
   */
  CAEC_Override_Gardening: "园艺",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "家庭"
   */
  CAEC_Override_Household: "家用",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "仪器"
   */
  CAEC_Override_Instrument: "乐器",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "废旧物"
   */
  CAEC_Override_Junk: "废旧物",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "光源"
   */
  CAEC_Override_LightSource: "光源",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "文学"
   */
  CAEC_Override_Literature: "文学",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "材料"
   */
  CAEC_Override_Material: "材料",
  /** keepsakes and souvenirs */
  CAEC_Override_Memento: "纪念品",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "油漆"
   */
  CAEC_Override_Paint: "油漆",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Override_ProtectiveGear: "防护",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "技能书"
   */
  CAEC_Override_SkillBook: "技能书",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "运动"
   */
  CAEC_Override_Sports: "运动器械",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "工具"
   */
  CAEC_Override_Tool: "工具",
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "诱捕"
   *   IGUI_perks_Trapping = "诱捕"
   */
  CAEC_Override_Trapping: "诱捕",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "车辆维护"
   */
  CAEC_Override_VehicleMaintenance: "汽修",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "武器"
   */
  CAEC_Override_Weapon: "武器",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "斧头"
   */
  CAEC_Override_Axe: "斧头",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "长棍"
   */
  CAEC_Override_Blunt: "长棍",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "长刀"
   */
  CAEC_Override_LongBlade: "长刀",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "短刀"
   */
  CAEC_Override_SmallBlade: "短刀",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "短棍"
   */
  CAEC_Override_SmallBlunt: "短棍",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "长矛"
   */
  CAEC_Override_Spear: "长矛",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "手臂",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "下身",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "脸部",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "鞋类",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "全身",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "手部",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "头"
   */
  CAEC_Override_Head: "头部",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "首饰",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "腿部",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "颈"
   */
  CAEC_Override_Neck: "颈部",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "外衣",
  /** hosiery and socks */
  CAEC_Override_Socks: "袜子",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "上衣",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "内衣",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "烘焙",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "面包"
   *   ItemName_Base.Bread = "面包"
   */
  CAEC_Override_Bread: "面包",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "糖果"
   */
  CAEC_Override_Candy: "糖果",
  /** canned food items */
  CAEC_Override_Canned: "罐头",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "奶酪"
   *   ItemName_Base.Cheese = "奶酪"
   */
  CAEC_Override_Cheese: "奶酪",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "料理",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "水果"
   */
  CAEC_Override_Fruits: "水果",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "香草"
   */
  CAEC_Override_Herb: "草药",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "辣椒"
   */
  CAEC_Override_HotPepper: "辣椒",
  /** edible insects */
  CAEC_Override_Insect: "昆虫",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Override_Livestock: "饲料",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "肉"
   */
  CAEC_Override_Meat: "肉",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "蘑菇"
   */
  CAEC_Override_Mushroom: "蘑菇",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "坚果"
   */
  CAEC_Override_Nut: "坚果",
  /** food items that can spoil */
  CAEC_Override_Perishable: "易腐",
  /** food for pets */
  CAEC_Override_PetFood: "宠物粮",
  /** single serving portion of food */
  CAEC_Override_Portion: "分装",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "包装食品",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "海鲜"
   */
  CAEC_Override_Seafood: "海鲜",
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "种子"
   */
  CAEC_Override_Seed: "种子",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "零食",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Override_Spice: "调味品",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Override_Staple: "主食",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "高汤"
   */
  CAEC_Override_Stock: "高汤",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "糖"
   *   ItemName_Base.Sugar = "糖"
   */
  CAEC_Override_Sugar: "糖",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "蔬菜"
   */
  CAEC_Override_Vegetables: "蔬菜",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "成人",
  /** informational brochures */
  CAEC_Override_Brochure: "宣传册",
  /** comic books */
  CAEC_Override_Comic: "漫画书",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Override_Consumable: "消耗品",
  /** decorative or luxury books */
  CAEC_Override_FancyBook: "皮面精装书",
  /** flyers and handouts */
  CAEC_Override_Flier: "传单",
  /** hardcover books */
  CAEC_Override_Hardcover: "精装书",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "杂志"
   */
  CAEC_Override_Magazine: "杂志",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "报纸"
   */
  CAEC_Override_Newspaper: "报纸",
  /** picture books */
  CAEC_Override_PictureBook: "绘本",
  /** recipes, readable items that teach you something */
  CAEC_Override_Recipe: "配方",
  /** tabletop RPG manuals */
  CAEC_Override_RpgManual: "RPG手册",
  /** softcover books */
  CAEC_Override_Softcover: "平装书",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "枪械",
  /** pistols and handguns */
  CAEC_Override_Handgun: "手枪",
  /** firearm magazines */
  CAEC_Override_Mag: "弹匣",
  /** rifles, big firearms */
  CAEC_Override_Rifle: "步枪",
  /** shotguns, rifles that shoot shells */
  CAEC_Override_Shotgun: "霰弹",
  /** general alcoholic beverages */
  CAEC_Override_Alcohol: "酒类",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "啤酒"
   *   ItemName_Base.Beer = "玻璃杯(啤酒)"
   *   ItemName_Base.Beer2 = "塑料杯(啤酒)"
   */
  CAEC_Override_Beer: "啤酒",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "玻璃杯(饮料)"
   *   ItemName_Base.Beverage2 = "塑料杯(饮料)"
   */
  CAEC_Override_Beverage: "饮品",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "鸡尾酒",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "咖啡"
   *   ItemName_Base.Coffee = "咖啡"
   *   ItemName_Base.Coffee2 = "咖啡"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: undefined,
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: undefined,
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: undefined,
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "果汁"
   */
  CAEC_Override_Juice: "果汁",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "液体",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "牛奶"
   *   ItemName_Base.Milk = "牛奶"
   */
  CAEC_Override_Milk: "牛奶",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "软饮料"
   */
  CAEC_Override_SoftDrink: "汽水",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "茶"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "浇灌"
   */
  CAEC_Override_Water: "水",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "葡萄酒"
   *   ItemName_Base.Wine = "白葡萄酒"
   *   ItemName_Base.Wine2 = "红葡萄酒"
   */
  CAEC_Override_Wine: "葡萄酒",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "盒",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "捆",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "箱",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "自制",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: undefined,
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "钥匙圈"
   */
  CAEC_Override_KeyRing: "钥匙环",
  /** photos */
  CAEC_Override_Photo: "照片",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "吸烟",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: undefined,
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "可穿戴",
};
