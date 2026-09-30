import type { ExternalTranslations } from "../types";

/**
 * Chinese (Traditional)
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
export const CH: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "配飾"
   */
  CAEC_Fallback_Accessory: "配飾",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "彈藥"
   */
  CAEC_Fallback_Ammo: "彈藥",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "動物"
   */
  CAEC_Fallback_Animal: "動物",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "動物部位"
   */
  CAEC_Fallback_AnimalPart: "動物部位",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "外觀"
   */
  CAEC_Fallback_Appearance: "外觀",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "露營"
   */
  CAEC_Fallback_Camping: "露營",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "製圖"
   */
  CAEC_Fallback_Cartography: "製圖",
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
   *   IGUI_ItemCat_Communications = "通訊"
   */
  CAEC_Fallback_Communications: "通訊",
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
   *   IGUI_ItemCat_Cooking = "烹飪"
   */
  CAEC_Fallback_Cooking: "烹飪",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "電子器件"
   */
  CAEC_Fallback_Electronics: "電子器件",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "娛樂"
   */
  CAEC_Fallback_Entertainment: "娛樂",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "火源"
   */
  CAEC_Fallback_FireSource: "火源",
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
   *   IGUI_ItemCat_Fishing = "釣魚"
   *   ContextMenu_Fishing = "釣魚"
   *   IGUI_CraftCategory_Fishing = "釣魚"
   */
  CAEC_Fallback_Fishing: "釣魚",
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
   *   IGUI_ItemCat_Furniture = "傢俱"
   */
  CAEC_Fallback_Furniture: "傢俱",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "園藝"
   *   ContextMenu_Gardening = "園藝"
   */
  CAEC_Fallback_Gardening: "園藝",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "家庭"
   */
  CAEC_Fallback_Household: "家庭",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "樂器"
   */
  CAEC_Fallback_Instrument: "樂器",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "廢舊物"
   */
  CAEC_Fallback_Junk: "廢舊物",
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
   *   IGUI_ItemCat_Literature = "文學"
   */
  CAEC_Fallback_Literature: "文學",
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
   *   IGUI_ItemCat_Memento = "紀念品"
   */
  CAEC_Fallback_Memento: "紀念品",
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
   *   IGUI_ItemCat_ProtectiveGear = "防護裝備"
   */
  CAEC_Fallback_ProtectiveGear: "防護裝備",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "技能書"
   */
  CAEC_Fallback_SkillBook: "技能書",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "運動"
   */
  CAEC_Fallback_Sports: "運動",
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
   *   IGUI_ItemCat_Trapping = "誘捕"
   */
  CAEC_Fallback_Trapping: "誘捕",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "車輛維護"
   */
  CAEC_Fallback_VehicleMaintenance: "車輛維護",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "武器"
   */
  CAEC_Fallback_Weapon: "武器",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "斧頭",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "鍛造",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "長鈍器",
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
   *   IGUI_CraftCategory_Electrical = "電工"
   */
  CAEC_Fallback_Electrical: "電工",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "農務"
   */
  CAEC_Fallback_Farming: "農務",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "打製石器",
  /** foraging skill */
  CAEC_Fallback_Foraging: "採集",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "玻璃製作",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "長刃",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "保養",
  /** masonry skill */
  CAEC_Fallback_Masonry: "石工",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "機械",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "金屬加工",
  /** pottery skill */
  CAEC_Fallback_Pottery: "陶藝",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "短刃",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "短鈍器",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "長矛",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "裁縫",
  /** tracking skill */
  CAEC_Fallback_Tracking: "追蹤",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "金工"
   */
  CAEC_Fallback_Welding: "金工",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "手臂",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "下身",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "臉部",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "鞋類",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "全身",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "手部",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "頭"
   */
  CAEC_Fallback_Head: "頭",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "首飾",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "腿部",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "頸"
   */
  CAEC_Fallback_Neck: "頸",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "外衣",
  /** hosiery and socks */
  CAEC_Override_Socks: "襪子",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "上衣",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "內衣",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "烘焙",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "麵包"
   */
  CAEC_Fallback_Bread: "麵包",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "糖果"
   */
  CAEC_Fallback_Candy: "糖果",
  /** canned food items */
  CAEC_Override_Canned: "罐頭",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "起司"
   */
  CAEC_Fallback_Cheese: "起司",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "料理",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "水果"
   */
  CAEC_Fallback_Fruits: "水果",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "香草"
   */
  CAEC_Fallback_Herb: "香草",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "辣椒"
   */
  CAEC_Fallback_HotPepper: "辣椒",
  /**
   * edible insects
   *
   * found in-game:
   *   ContextMenu_FoodType_Insect = "昆蟲"
   */
  CAEC_Fallback_Insect: "昆蟲",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "飼料",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "肉類"
   */
  CAEC_Fallback_Meat: "肉類",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "菇類"
   */
  CAEC_Fallback_Mushroom: "菇類",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "堅果"
   */
  CAEC_Fallback_Nut: "堅果",
  /** food items that can spoil */
  CAEC_Override_Perishable: "易腐",
  /** food for pets */
  CAEC_Fallback_PetFood: "寵物食品",
  /** single serving portion of food */
  CAEC_Override_Portion: "份裝",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "保存食品",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "海鮮"
   */
  CAEC_Fallback_Seafood: "海鮮",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "種子"
   */
  CAEC_Fallback_Seed: "種子",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "零食",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "調味料",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "主食",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "高湯"
   */
  CAEC_Fallback_Stock: "高湯",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "糖"
   */
  CAEC_Fallback_Sugar: "糖",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "蔬菜"
   */
  CAEC_Fallback_Vegetables: "蔬菜",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "成人",
  /** informational brochures */
  CAEC_Fallback_Brochure: "宣傳冊",
  /** comic books */
  CAEC_Fallback_Comic: "漫畫",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "消耗品",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "精裝典藏書",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "傳單",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "精裝書",
  /** literature magazines */
  CAEC_Fallback_Magazine: "雜誌",
  /** newspapers */
  CAEC_Fallback_Newspaper: "報紙",
  /** picture books */
  CAEC_Fallback_PictureBook: "繪本",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "配方",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG手冊",
  /** softcover books */
  CAEC_Fallback_Softcover: "平裝書",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "弓",
  /** firearm drums */
  CAEC_Fallback_Drum: "彈鼓",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "槍械",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "手槍",
  /** firearm magazines */
  CAEC_Fallback_Mag: "彈匣",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "步槍",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "霰彈槍",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "酒類",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "啤酒"
   */
  CAEC_Fallback_Beer: "啤酒",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "飲品",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "雞尾酒",
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
  CAEC_Override_EnergyDrink: "能量飲料",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "燃料",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "果汁"
   */
  CAEC_Fallback_Juice: "果汁",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "液體",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "奶類"
   *   ContextMenu_Milk = "擠奶"
   */
  CAEC_Fallback_Milk: "奶類",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "無酒精飲料"
   */
  CAEC_Fallback_SoftDrink: "無酒精飲料",
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
   *   ContextMenu_Water = "澆水"
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
   *   IGUI_ItemCat_AlarmClock = "鐘錶"
   */
  CAEC_Fallback_AlarmClock: "鐘錶",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "遙控器",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "對講機",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "可堆肥",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "自製",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "杯子",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "餐具",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "鑰匙圈",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "鍋具",
  /** photos */
  CAEC_Fallback_Photo: "照片",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "絨毛玩偶",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "種子包",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "菸品",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "小飾品",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "廚具",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "可穿戴",
};
