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
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "เครื่องประดับ"
   */
  CAEC_Fallback_Accessory: "เครื่องประดับ",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "กระสุน"
   */
  CAEC_Fallback_Ammo: "กระสุน",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "สัตว์"
   */
  CAEC_Fallback_Animal: "สัตว์",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "ชิ้นส่วนสัตว์"
   */
  CAEC_Fallback_AnimalPart: "ชิ้นส่วนสัตว์",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "รูปลักษณ์"
   */
  CAEC_Fallback_Appearance: "รูปลักษณ์",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "การตั้งแคมป์"
   */
  CAEC_Fallback_Camping: "การตั้งแคมป์",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "แผนที่"
   */
  CAEC_Fallback_Cartography: "แผนที่",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "เสื้อผ้า"
   */
  CAEC_Fallback_Clothing: "เสื้อผ้า",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "การสื่อสาร"
   */
  CAEC_Fallback_Communications: "การสื่อสาร",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "บรรจุภัณฑ์"
   *   ContextMenu_Container = "ตู้/ชั้นวางของ"
   */
  CAEC_Fallback_Container: "บรรจุภัณฑ์",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "เครื่องครัว"
   */
  CAEC_Fallback_Cooking: "เครื่องครัว",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "อิเล็กทรอนิกส์"
   */
  CAEC_Fallback_Electronics: "อิเล็กทรอนิกส์",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "ความบันเทิง"
   */
  CAEC_Fallback_Entertainment: "ความบันเทิง",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "เชื้อเพลิง"
   */
  CAEC_Override_FireSource: "แหล่งไฟ",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "ปฐมพยาบาล"
   */
  CAEC_Fallback_FirstAid: "ปฐมพยาบาล",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "การจับปลา"
   *   ContextMenu_Fishing = "จับปลา"
   *   IGUI_CraftCategory_Fishing = "การจับปลา"
   */
  CAEC_Fallback_Fishing: "การจับปลา",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "อาหาร"
   */
  CAEC_Fallback_Food: "อาหาร",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "เฟอร์นิเจอร์"
   */
  CAEC_Fallback_Furniture: "เฟอร์นิเจอร์",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "การทำสวน"
   *   ContextMenu_Gardening = "การทำสวน"
   */
  CAEC_Fallback_Gardening: "การทำสวน",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "ของใช้ในบ้าน"
   */
  CAEC_Fallback_Household: "ของใช้ในบ้าน",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "เครื่องดนตรี"
   */
  CAEC_Fallback_Instrument: "เครื่องดนตรี",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "ของเหลือใช้"
   */
  CAEC_Fallback_Junk: "ของเหลือใช้",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "แหล่งกำเนิดแสง"
   */
  CAEC_Fallback_LightSource: "แหล่งกำเนิดแสง",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "สิ่งพิมพ์"
   */
  CAEC_Fallback_Literature: "สิ่งพิมพ์",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "วัสดุ"
   */
  CAEC_Fallback_Material: "วัสดุ",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "ของที่ระลึก"
   */
  CAEC_Fallback_Memento: "ของที่ระลึก",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "สี"
   */
  CAEC_Fallback_Paint: "สี",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "อุปกรณ์ป้องกัน"
   */
  CAEC_Fallback_ProtectiveGear: "อุปกรณ์ป้องกัน",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "หนังสือทักษะ"
   */
  CAEC_Fallback_SkillBook: "หนังสือทักษะ",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "กีฬา"
   */
  CAEC_Fallback_Sports: "กีฬา",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "เครื่องมือ"
   */
  CAEC_Fallback_Tool: "เครื่องมือ",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "การวางกับดัก"
   */
  CAEC_Fallback_Trapping: "การวางกับดัก",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "การบำรุงรักษายานพาหนะ"
   */
  CAEC_Fallback_VehicleMaintenance: "การบำรุงรักษายานพาหนะ",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "อาวุธ"
   */
  CAEC_Fallback_Weapon: "อาวุธ",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "ขวาน",
  /** blacksmith skill */
  CAEC_Fallback_Blacksmith: "งานตีเหล็ก",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "อาวุธทื่อยาว",
  /** butchering skill */
  CAEC_Fallback_Butchering: "การชำแหละ",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "งานไม้"
   */
  CAEC_Fallback_Carpentry: "งานไม้",
  /** carving skill */
  CAEC_Fallback_Carving: "การแกะสลัก",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "งานไฟฟ้า"
   */
  CAEC_Fallback_Electrical: "งานไฟฟ้า",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "การเพาะปลูก"
   */
  CAEC_Fallback_Farming: "การเพาะปลูก",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "การกะเทาะหิน",
  /** foraging skill */
  CAEC_Fallback_Foraging: "การหาของป่า",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "การทำแก้ว",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "ใบมีดยาว",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "การบำรุงรักษา",
  /** masonry skill */
  CAEC_Fallback_Masonry: "งานก่ออิฐ",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "ช่างยนต์",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "งานโลหะ",
  /** pottery skill */
  CAEC_Fallback_Pottery: "เครื่องปั้นดินเผา",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "ใบมีดสั้น",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "อาวุธทื่อสั้น",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "หอก",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "การตัดเย็บ",
  /** tracking skill */
  CAEC_Fallback_Tracking: "การแกะรอย",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "งานเชื่อม"
   */
  CAEC_Fallback_Welding: "งานเชื่อม",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "แขน",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "ท่อนล่าง",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "ใบหน้า",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "รองเท้า",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "ทั้งตัว",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "มือ",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "ศีรษะ"
   */
  CAEC_Fallback_Head: "ศีรษะ",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "เครื่องประดับอัญมณี",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "ขา",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "ลำคอ"
   */
  CAEC_Fallback_Neck: "ลำคอ",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "เสื้อคลุม",
  /** hosiery and socks */
  CAEC_Override_Socks: "ถุงเท้า",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "ท่อนบน",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "ชุดชั้นใน",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "การอบ",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "ขนมปัง"
   */
  CAEC_Fallback_Bread: "ขนมปัง",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "ลูกกวาด"
   */
  CAEC_Fallback_Candy: "ลูกกวาด",
  /** canned food items */
  CAEC_Override_Canned: "กระป๋อง",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "ผลิตภัณฑ์นม",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "อาหารจานหลัก",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "อาหารแช่แข็ง",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "สมุนไพร"
   */
  CAEC_Fallback_Herb: "สมุนไพร",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "เนื้อ"
   */
  CAEC_Fallback_Meat: "เนื้อ",
  /** food items that can spoil */
  CAEC_Override_Perishable: "เน่าเสียง่าย",
  /** food for pets */
  CAEC_Fallback_PetFood: "สัตว์เลี้ยง",
  /** single serving portion of food */
  CAEC_Override_Portion: "หนึ่งที่",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "ถนอมอาหาร",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "ผักและผลไม้",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "อาหารทะเล"
   */
  CAEC_Fallback_Seafood: "อาหารทะเล",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "ขนมขบเคี้ยว",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "เครื่องเทศ",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "อาหารหลัก",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "ผู้ใหญ่",
  /** informational brochures */
  CAEC_Fallback_Brochure: "โบรชัวร์",
  /** comic books */
  CAEC_Fallback_Comic: "การ์ตูน",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "ใช้แล้วหมดไป",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "หนังสือหรู",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "ใบปลิว",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "ปกแข็ง",
  /** literature magazines */
  CAEC_Fallback_Magazine: "นิตยสาร",
  /** newspapers */
  CAEC_Fallback_Newspaper: "หนังสือพิมพ์",
  /** picture books */
  CAEC_Fallback_PictureBook: "หนังสือภาพ",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "สูตร",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "คู่มือ RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "ปกอ่อน",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "การเขียน",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "ธนู",
  /** firearm drums */
  CAEC_Fallback_Drum: "แม็กกาซีนกลอง",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "วัตถุระเบิด",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "อาวุธปืน",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "ปืนพก",
  /** firearm magazines */
  CAEC_Fallback_Mag: "แม็กกาซีน",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "ปืนไรเฟิล",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "ปืนลูกซอง",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "แอลกอฮอล์",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "เบียร์"
   */
  CAEC_Fallback_Beer: "เบียร์",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "เครื่องดื่ม",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "ค็อกเทล",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "กาแฟ"
   */
  CAEC_Fallback_Coffee: "กาแฟ",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "สีย้อม",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "เครื่องดื่มชูกำลัง",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "เชื้อเพลิง",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "น้ำผลไม้"
   */
  CAEC_Fallback_Juice: "น้ำผลไม้",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "ของเหลว",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "นม"
   *   ContextMenu_Milk = "รีดนม"
   */
  CAEC_Fallback_Milk: "นม",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "ยาพิษ",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "น้ำอัดลม"
   */
  CAEC_Fallback_SoftDrink: "น้ำอัดลม",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "ชา"
   */
  CAEC_Fallback_Tea: "ชา",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "รดน้ำ"
   */
  CAEC_Override_Water: "น้ำ",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "ไวน์"
   */
  CAEC_Fallback_Wine: "ไวน์",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "กล่อง",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "มัดรวม",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "ลังกระดาษ",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "นาฬิกาปลุก"
   */
  CAEC_Fallback_AlarmClock: "นาฬิกาปลุก",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "วิทยุ",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "รีโมท",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "วิทยุสื่อสาร",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "เทปคาสเซ็ต",
  /** music CDs */
  CAEC_Override_CD: "ซีดี",
  /** VHS video tapes */
  CAEC_Override_VHS: "วีเอชเอส",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "อาหารสัตว์"
   */
  CAEC_Fallback_AnimalFeed: "อาหารสัตว์",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "จักรยาน",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "ทำความสะอาด",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "ทำปุ๋ยหมักได้",
  /** construction and renovation supplies such as paint, plaster and wallpaper */
  CAEC_Override_Construction: "ก่อสร้าง",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "ทำมือ",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "ถ้วย",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "ช้อนส้อม",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "พวงกุญแจ",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "กระทะ",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "อวัยวะ"
   */
  CAEC_Fallback_Part: "อวัยวะ",
  /** photos */
  CAEC_Fallback_Photo: "รูปถ่าย",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "รูปภาพ",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "ตุ๊กตาผ้า",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "เมล็ดพืช"
   */
  CAEC_Fallback_Seed: "เมล็ดพืช",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "ซองเมล็ดพันธุ์",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "การสูบบุหรี่",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "ของเล่น",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "ของกระจุกกระจิก",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "อุปกรณ์ครัว",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "สวมใส่ได้",
};
