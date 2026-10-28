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
  CAEC_Fallback_Accessory: "配饰",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "弹药"
   */
  CAEC_Fallback_Ammo: "弹药",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "动物"
   */
  CAEC_Fallback_Animal: "动物",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "动物材料"
   */
  CAEC_Fallback_AnimalPart: "动物材料",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "外观"
   */
  CAEC_Fallback_Appearance: "外观",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "露营"
   */
  CAEC_Fallback_Camping: "露营",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "地图"
   */
  CAEC_Fallback_Cartography: "地图",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "衣服"
   */
  CAEC_Fallback_Clothing: "衣服",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "通讯"
   */
  CAEC_Fallback_Communications: "通讯",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "容器"
   *   ContextMenu_Container = "容器"
   */
  CAEC_Fallback_Container: "容器",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "烹饪"
   */
  CAEC_Fallback_Cooking: "烹饪",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "电子器件"
   */
  CAEC_Fallback_Electronics: "电子器件",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "娱乐"
   */
  CAEC_Fallback_Entertainment: "娱乐",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "火种"
   */
  CAEC_Fallback_FireSource: "火种",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "急救"
   */
  CAEC_Fallback_FirstAid: "急救",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "钓鱼"
   *   IGUI_CraftCategory_Fishing = "钓鱼"
   *   ContextMenu_Fishing = "钓鱼"
   */
  CAEC_Fallback_Fishing: "钓鱼",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "食物"
   */
  CAEC_Fallback_Food: "食物",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "家具"
   */
  CAEC_Fallback_Furniture: "家具",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "园艺"
   *   ContextMenu_Gardening = "园艺"
   */
  CAEC_Fallback_Gardening: "园艺",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "家用"
   */
  CAEC_Fallback_Household: "家用",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "乐器"
   */
  CAEC_Fallback_Instrument: "乐器",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "废旧物"
   */
  CAEC_Fallback_Junk: "废旧物",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "光源"
   */
  CAEC_Fallback_LightSource: "光源",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "文学"
   */
  CAEC_Fallback_Literature: "文学",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "材料"
   */
  CAEC_Fallback_Material: "材料",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "纪念品"
   */
  CAEC_Fallback_Memento: "纪念品",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "油漆"
   */
  CAEC_Fallback_Paint: "油漆",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "防护"
   */
  CAEC_Fallback_ProtectiveGear: "防护",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "技能书"
   */
  CAEC_Fallback_SkillBook: "技能书",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "运动器械"
   */
  CAEC_Fallback_Sports: "运动器械",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "工具"
   */
  CAEC_Fallback_Tool: "工具",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "诱捕"
   */
  CAEC_Fallback_Trapping: "诱捕",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "汽修"
   */
  CAEC_Fallback_VehicleMaintenance: "汽修",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "武器"
   */
  CAEC_Fallback_Weapon: "武器",
  /** axe weapon skill */
  CAEC_Override_Axe: "斧头",
  /**
   * blacksmith skill
   *
   * found in-game:
   *   ContextMenu_Blacksmith = "锻造"
   */
  CAEC_Fallback_Blacksmith: "锻造",
  /** long blunt weapon skill */
  CAEC_Override_Blunt: "长棍",
  /** butchering skill */
  CAEC_Fallback_Butchering: "屠宰",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "木工"
   */
  CAEC_Fallback_Carpentry: "木工",
  /** carving skill */
  CAEC_Fallback_Carving: "雕刻",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "电工"
   */
  CAEC_Fallback_Electrical: "电工",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "农务"
   *   ContextMenu_Farming = "农业"
   */
  CAEC_Fallback_Farming: "农务",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "打制石器",
  /** foraging skill */
  CAEC_Fallback_Foraging: "采集",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "玻璃制作",
  /**
   * animal husbandry/care skill
   *
   * found in-game:
   *   IGUI_perks_Husbandry = "畜牧"
   */
  CAEC_Fallback_Husbandry: "畜牧",
  /** long blade weapon skill */
  CAEC_Override_LongBlade: "长刀",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "保养",
  /** masonry skill */
  CAEC_Fallback_Masonry: "砌石",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "机械"
   *   IGUI_ItemCat_Mechanics = "机械"
   */
  CAEC_Fallback_Mechanics: "机械",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "金属加工",
  /** pottery skill */
  CAEC_Fallback_Pottery: "制陶",
  /** short blade weapon skill */
  CAEC_Override_SmallBlade: "短刀",
  /** short blunt weapon skill */
  CAEC_Override_SmallBlunt: "短棍",
  /** spear weapon skill */
  CAEC_Override_Spear: "长矛",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "裁缝",
  /** tracking skill */
  CAEC_Fallback_Tracking: "追踪",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "金工"
   */
  CAEC_Fallback_Welding: "金工",
  /** raw metal materials such as sheet metal, scrap metal, pipes and wire */
  CAEC_Override_Metal: "金属",
  /** raw stone materials such as stones, rocks and limestone */
  CAEC_Override_Stone: "石材",
  /** raw wood materials such as planks, logs and branches */
  CAEC_Override_Wood: "木材",
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
   */
  CAEC_Fallback_Bread: "面包",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "糖果"
   */
  CAEC_Fallback_Candy: "糖果",
  /** canned food items */
  CAEC_Override_Canned: "罐头",
  /**
   * condiments such as sauces, dressings, spreads and toppings
   *
   * found in-game:
   *   ContextMenu_FoodType_NoExplicit = "调味品"
   */
  CAEC_Fallback_Condiment: "调味品",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "乳制品",
  /** prepared food in a pot, pan or tray, to be split into servings */
  CAEC_Override_Dish: "料理",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "冷冻",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "香草"
   */
  CAEC_Override_Herb: "草药",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "肉"
   */
  CAEC_Fallback_Meat: "肉",
  /** food items that can spoil */
  CAEC_Override_Perishable: "易腐",
  /** food for pets */
  CAEC_Override_PetFood: "宠物粮",
  /** one serving of prepared food, ready to eat */
  CAEC_Override_Meal: "餐点",
  /** inedible food that still needs cooking, fermenting or finishing */
  CAEC_Override_Preparation: "备料",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "包装食品",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "生鲜果蔬",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "海鲜"
   */
  CAEC_Fallback_Seafood: "海鲜",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "零食",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Override_Spice: "调味品",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Override_Staple: "主食",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "成人",
  /** regular books */
  CAEC_Fallback_Book: "书籍",
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
  /** literature magazines */
  CAEC_Override_Magazine: "杂志",
  /** newspapers */
  CAEC_Override_Newspaper: "报纸",
  /** picture books */
  CAEC_Override_PictureBook: "绘本",
  /** recipes, readable items that teach you something */
  CAEC_Override_Recipe: "配方",
  /** tabletop RPG manuals */
  CAEC_Override_RpgManual: "RPG手册",
  /** softcover books */
  CAEC_Override_Softcover: "平装书",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "书写",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "弓",
  /** firearm drums */
  CAEC_Fallback_Drum: "弹鼓",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "爆炸物",
  /**
   * firearm category, pistols, rifles, shotguns, etc.
   *
   * found in-game:
   *   IGUI_perks_Firearm = "枪械"
   *   IGUI_ItemCat_Firearm = "枪械"
   */
  CAEC_Fallback_Firearm: "枪械",
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
   */
  CAEC_Fallback_Beer: "啤酒",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   IGUI_ItemCat_Beverage = "饮品"
   */
  CAEC_Fallback_Beverage: "饮品",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "鸡尾酒",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "咖啡"
   */
  CAEC_Fallback_Coffee: "咖啡",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "染料",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "能量饮料",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "燃料",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "果汁"
   */
  CAEC_Fallback_Juice: "果汁",
  /**
   * top-level category for non-drinkable liquids, and used in 'Container - Liquid'
   *
   * found in-game:
   *   IGUI_ItemCat_Liquid = "液体"
   */
  CAEC_Fallback_Liquid: "液体",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "牛奶"
   *   ContextMenu_Milk = "牛奶"
   */
  CAEC_Fallback_Milk: "牛奶",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "毒物",
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
  CAEC_Fallback_Tea: "茶",
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
   */
  CAEC_Fallback_Wine: "葡萄酒",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "盒",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "捆",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "箱",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "钟表"
   */
  CAEC_Fallback_AlarmClock: "钟表",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "收音机",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "遥控器",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "对讲机",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "磁带",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "动物饲料"
   */
  CAEC_Fallback_AnimalFeed: "动物饲料",
  /**
   * bicycles! for the fantastic bicycle mod
   *
   * found in-game:
   *   IGUI_ItemCat_Bicycle = "自行车"
   */
  CAEC_Fallback_Bicycle: "自行车",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "清洁",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "可堆肥",
  /** construction and renovation supplies such as paint, plaster and wallpaper */
  CAEC_Override_Construction: "建筑",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "自制",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "杯子",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "餐具",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "钥匙环",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "锅具",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "部位"
   *   IGUI_ItemCat_Part = "部位"
   */
  CAEC_Fallback_Part: "部位",
  /** photos */
  CAEC_Override_Photo: "照片",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "图片",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "毛绒玩具",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "种子"
   */
  CAEC_Fallback_Seed: "种子",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "种子包",
  /**
   * smoking items such as cigarettes, cigars, pipes
   *
   * found in-game:
   *   IGUI_ItemCat_Smoking = "吸烟"
   */
  CAEC_Fallback_Smoking: "吸烟",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "玩具",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "小饰品",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "厨具",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "可穿戴",
};
