import type { ExternalTranslations } from "../types";

/**
 * Japanese
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
export const JP: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "アクセサリー"
   */
  CAEC_Fallback_Accessory: "アクセサリー",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "弾薬"
   */
  CAEC_Fallback_Ammo: "弾薬",
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
   *   IGUI_ItemCat_AnimalPart = "動物の部位"
   */
  CAEC_Fallback_AnimalPart: "動物の部位",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "化粧品"
   */
  CAEC_Fallback_Appearance: "化粧品",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "キャンプ"
   */
  CAEC_Fallback_Camping: "キャンプ",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "地図学"
   */
  CAEC_Fallback_Cartography: "地図学",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "被服"
   */
  CAEC_Fallback_Clothing: "被服",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "通信"
   */
  CAEC_Fallback_Communications: "通信",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "入れ物"
   *   ContextMenu_Container = "収納"
   */
  CAEC_Fallback_Container: "入れ物",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "調理"
   */
  CAEC_Fallback_Cooking: "調理",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "電気工学"
   */
  CAEC_Fallback_Electronics: "電気工学",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "エンターテインメント"
   */
  CAEC_Fallback_Entertainment: "エンターテインメント",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "火種"
   */
  CAEC_Fallback_FireSource: "火種",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "応急医療"
   */
  CAEC_Fallback_FirstAid: "応急医療",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "釣り"
   *   ContextMenu_Fishing = "釣りをする"
   *   IGUI_CraftCategory_Fishing = "釣り"
   */
  CAEC_Fallback_Fishing: "釣り",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "食料"
   */
  CAEC_Fallback_Food: "食料",
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
   *   IGUI_ItemCat_Gardening = "園芸"
   *   ContextMenu_Gardening = "園芸"
   */
  CAEC_Fallback_Gardening: "園芸",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "生活用品"
   */
  CAEC_Fallback_Household: "生活用品",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "楽器"
   */
  CAEC_Fallback_Instrument: "楽器",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "ジャンク"
   */
  CAEC_Fallback_Junk: "ジャンク",
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
   *   IGUI_ItemCat_Literature = "書籍"
   */
  CAEC_Fallback_Literature: "書籍",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "資材"
   */
  CAEC_Fallback_Material: "資材",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "記念品"
   */
  CAEC_Fallback_Memento: "記念品",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "塗料"
   */
  CAEC_Fallback_Paint: "塗料",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "アーマー"
   */
  CAEC_Fallback_ProtectiveGear: "アーマー",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "スキルブック"
   */
  CAEC_Fallback_SkillBook: "スキルブック",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "スポーツ"
   */
  CAEC_Fallback_Sports: "スポーツ",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "道具"
   */
  CAEC_Fallback_Tool: "道具",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "罠"
   */
  CAEC_Fallback_Trapping: "罠",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "車両整備"
   */
  CAEC_Fallback_VehicleMaintenance: "車両整備",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "武器"
   */
  CAEC_Fallback_Weapon: "武器",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "斧",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "鍛冶",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "長鈍器",
  /** butchering skill */
  CAEC_Fallback_Butchering: "解体",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "大工仕事"
   */
  CAEC_Fallback_Carpentry: "大工仕事",
  /** carving skill */
  CAEC_Fallback_Carving: "彫刻",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "電気工学"
   */
  CAEC_Fallback_Electrical: "電気工学",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "耕作"
   */
  CAEC_Fallback_Farming: "耕作",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "石器加工",
  /** foraging skill */
  CAEC_Fallback_Foraging: "採集",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "ガラス細工",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "長刃",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "整備",
  /** masonry skill */
  CAEC_Fallback_Masonry: "石工",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "機械工学",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "金属加工",
  /** pottery skill */
  CAEC_Fallback_Pottery: "陶芸",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "短刃",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "短鈍器",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "槍",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "裁縫",
  /** tracking skill */
  CAEC_Fallback_Tracking: "追跡",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "溶接加工"
   */
  CAEC_Fallback_Welding: "溶接加工",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "腕",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "ボトムス",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "顔",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "履物",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "全身",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "手",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "頭"
   */
  CAEC_Fallback_Head: "頭",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "装飾品",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "脚",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "首"
   */
  CAEC_Fallback_Neck: "首",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "アウター",
  /** hosiery and socks */
  CAEC_Override_Socks: "靴下",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "トップス",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "下着",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "製菓材料",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "パン"
   */
  CAEC_Fallback_Bread: "パン",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "キャンディー"
   */
  CAEC_Fallback_Candy: "キャンディー",
  /** canned food items */
  CAEC_Override_Canned: "缶詰",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "乳製品",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "料理",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "ハーブ"
   */
  CAEC_Fallback_Herb: "ハーブ",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "肉"
   */
  CAEC_Fallback_Meat: "肉",
  /** food items that can spoil */
  CAEC_Override_Perishable: "生鮮食品",
  /** food for pets */
  CAEC_Fallback_PetFood: "ペットフード",
  /** single serving portion of food */
  CAEC_Override_Portion: "一人前",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "保存食",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "青果",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "魚介類"
   */
  CAEC_Fallback_Seafood: "魚介類",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "種"
   */
  CAEC_Fallback_Seed: "種",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "スナック",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "調味料",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "主食",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "成人向け",
  /** informational brochures */
  CAEC_Fallback_Brochure: "パンフレット",
  /** comic books */
  CAEC_Fallback_Comic: "コミック",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "消耗品",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "豪華本",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "チラシ",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "ハードカバー",
  /** literature magazines */
  CAEC_Fallback_Magazine: "雑誌",
  /** newspapers */
  CAEC_Fallback_Newspaper: "新聞",
  /** picture books */
  CAEC_Fallback_PictureBook: "絵本",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "レシピ",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPGマニュアル",
  /** softcover books */
  CAEC_Fallback_Softcover: "ペーパーバック",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "弓",
  /** firearm drums */
  CAEC_Fallback_Drum: "ドラムマガジン",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "銃器",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "拳銃",
  /** firearm magazines */
  CAEC_Fallback_Mag: "弾倉",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "ライフル",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "ショットガン",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "酒類",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "ビール"
   */
  CAEC_Fallback_Beer: "ビール",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "飲料",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "カクテル",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "コーヒー"
   */
  CAEC_Fallback_Coffee: "コーヒー",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "染料",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "エナジードリンク",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "燃料",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "ジュース"
   */
  CAEC_Fallback_Juice: "ジュース",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "液体",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "牛乳"
   *   ContextMenu_Milk = "牛乳"
   */
  CAEC_Fallback_Milk: "牛乳",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "清涼飲料水"
   */
  CAEC_Fallback_SoftDrink: "清涼飲料水",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "お茶"
   */
  CAEC_Fallback_Tea: "お茶",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "水やり"
   */
  CAEC_Override_Water: "水",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "ワイン"
   */
  CAEC_Fallback_Wine: "ワイン",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "箱",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "束",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "カートン",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "目覚まし時計"
   */
  CAEC_Fallback_AlarmClock: "目覚まし時計",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "リモコン",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "トランシーバー",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "自転車",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "堆肥化可能",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "手作り",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "カップ",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "カトラリー",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "キーリング",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "鍋",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "部位"
   */
  CAEC_Fallback_Part: "部位",
  /** photos */
  CAEC_Fallback_Photo: "写真",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "ぬいぐるみ",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "種の袋",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "動物の飼料",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "喫煙具",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "小物",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "調理器具",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "着用可能",
};
