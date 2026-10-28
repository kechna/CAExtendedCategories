import type { ExternalTranslations } from "../types";

/**
 * Korean
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
export const KO: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "액세서리"
   */
  CAEC_Fallback_Accessory: "액세서리",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "무기 (탄약)"
   */
  CAEC_Fallback_Ammo: "무기 (탄약)",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "동물"
   */
  CAEC_Fallback_Animal: "동물",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "동물 재료"
   */
  CAEC_Fallback_AnimalPart: "동물 재료",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "외모 관련"
   */
  CAEC_Fallback_Appearance: "외모 관련",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "캠핑 관련"
   */
  CAEC_Fallback_Camping: "캠핑 관련",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "지도 관련"
   */
  CAEC_Fallback_Cartography: "지도 관련",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "의복"
   */
  CAEC_Fallback_Clothing: "의복",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "통신 관련"
   */
  CAEC_Fallback_Communications: "통신 관련",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "보관함"
   *   ContextMenu_Container = "보관함"
   */
  CAEC_Fallback_Container: "보관함",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "요리 관련"
   */
  CAEC_Fallback_Cooking: "요리 관련",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "전기 관련"
   */
  CAEC_Fallback_Electronics: "전기 관련",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "오락"
   */
  CAEC_Fallback_Entertainment: "오락",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "점화 도구"
   */
  CAEC_Fallback_FireSource: "점화 도구",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "응급처치 관련"
   */
  CAEC_Fallback_FirstAid: "응급처치 관련",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "낚시 관련"
   *   IGUI_perks_Fishing = "낚시 관련"
   *   IGUI_CraftCategory_Fishing = "낚시 관련"
   *   ContextMenu_Fishing = "낚시하기"
   */
  CAEC_Fallback_Fishing: "낚시 관련",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "음식"
   */
  CAEC_Fallback_Food: "음식",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "가구"
   */
  CAEC_Fallback_Furniture: "가구",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "원예 관련"
   *   ContextMenu_Gardening = "원예"
   */
  CAEC_Fallback_Gardening: "원예 관련",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "가정용품"
   */
  CAEC_Fallback_Household: "가정용품",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "연주 도구"
   */
  CAEC_Fallback_Instrument: "연주 도구",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "잡동사니"
   */
  CAEC_Fallback_Junk: "잡동사니",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "광원"
   */
  CAEC_Fallback_LightSource: "광원",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "도서, 잡지"
   */
  CAEC_Fallback_Literature: "도서, 잡지",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "재료"
   */
  CAEC_Fallback_Material: "재료",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "기념품"
   */
  CAEC_Fallback_Memento: "기념품",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "페인트"
   */
  CAEC_Fallback_Paint: "페인트",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "보호 장비"
   */
  CAEC_Fallback_ProtectiveGear: "보호 장비",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "능력 관련 도서"
   */
  CAEC_Fallback_SkillBook: "능력 관련 도서",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "스포츠 관련"
   */
  CAEC_Fallback_Sports: "스포츠 관련",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "도구"
   */
  CAEC_Fallback_Tool: "도구",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "함정 관련"
   */
  CAEC_Fallback_Trapping: "함정 관련",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "차량 정비"
   */
  CAEC_Fallback_VehicleMaintenance: "차량 정비",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "무기"
   */
  CAEC_Fallback_Weapon: "무기",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "도끼",
  /**
   * blacksmith skill
   *
   * found in-game:
   *   ContextMenu_Blacksmith = "제련"
   */
  CAEC_Fallback_Blacksmith: "대장일",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "긴 둔기",
  /** butchering skill */
  CAEC_Fallback_Butchering: "도축",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "목수"
   */
  CAEC_Fallback_Carpentry: "목수",
  /** carving skill */
  CAEC_Fallback_Carving: "조각",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "전기"
   */
  CAEC_Fallback_Electrical: "전기",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "농사"
   *   ContextMenu_Farming = "밭 관리"
   */
  CAEC_Fallback_Farming: "농사",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "타제석기",
  /** foraging skill */
  CAEC_Fallback_Foraging: "채집",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "유리 공예",
  /**
   * animal husbandry/care skill
   *
   * found in-game:
   *   IGUI_perks_Husbandry = "사육"
   */
  CAEC_Fallback_Husbandry: "사육",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "긴 칼날",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "정비",
  /** masonry skill */
  CAEC_Fallback_Masonry: "석공",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "기계공학"
   *   IGUI_ItemCat_Mechanics = "기계공학"
   */
  CAEC_Fallback_Mechanics: "기계공학",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "금속 가공",
  /** pottery skill */
  CAEC_Fallback_Pottery: "도예",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "짧은 칼날",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "짧은 둔기",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "창",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "재봉",
  /** tracking skill */
  CAEC_Fallback_Tracking: "추적",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "용접"
   */
  CAEC_Fallback_Welding: "용접",
  /** raw metal materials such as sheet metal, scrap metal, pipes and wire */
  CAEC_Override_Metal: "금속",
  /** raw stone materials such as stones, rocks and limestone */
  CAEC_Override_Stone: "석재",
  /** raw wood materials such as planks, logs and branches */
  CAEC_Override_Wood: "목재",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "팔",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "하의",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "얼굴",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "신발",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "전신",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "손",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "머리"
   */
  CAEC_Fallback_Head: "머리",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "장신구",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "다리",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "목"
   */
  CAEC_Fallback_Neck: "목",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "외투",
  /** hosiery and socks */
  CAEC_Override_Socks: "양말",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "상의",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "속옷",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "제빵",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "빵"
   */
  CAEC_Fallback_Bread: "빵",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "사탕"
   */
  CAEC_Fallback_Candy: "사탕",
  /** canned food items */
  CAEC_Override_Canned: "통조림",
  /**
   * condiments such as sauces, dressings, spreads and toppings
   *
   * found in-game:
   *   ContextMenu_FoodType_NoExplicit = "조미료"
   */
  CAEC_Fallback_Condiment: "조미료",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "유제품",
  /** prepared food in a pot, pan or tray, to be split into servings */
  CAEC_Override_Dish: "요리",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "냉동식품",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "약초"
   */
  CAEC_Fallback_Herb: "약초",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "고기"
   */
  CAEC_Fallback_Meat: "고기",
  /** food items that can spoil */
  CAEC_Override_Perishable: "부패성",
  /** food for pets */
  CAEC_Fallback_PetFood: "반려동물",
  /** one serving of prepared food, ready to eat */
  CAEC_Override_Meal: "식사",
  /** inedible food that still needs cooking, fermenting or finishing */
  CAEC_Override_Preparation: "준비 중",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "저장 식품",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "청과",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "해산물"
   */
  CAEC_Fallback_Seafood: "해산물",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "간식",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "향신료",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "주식",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "성인",
  /** regular books */
  CAEC_Fallback_Book: "책",
  /** informational brochures */
  CAEC_Fallback_Brochure: "안내 책자",
  /** comic books */
  CAEC_Fallback_Comic: "만화",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "소모품",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "고급 도서",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "전단지",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "양장본",
  /** literature magazines */
  CAEC_Fallback_Magazine: "잡지",
  /** newspapers */
  CAEC_Fallback_Newspaper: "신문",
  /** picture books */
  CAEC_Fallback_PictureBook: "그림책",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "레시피",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG 설명서",
  /** softcover books */
  CAEC_Fallback_Softcover: "문고본",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "필기",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "활",
  /** firearm drums */
  CAEC_Fallback_Drum: "드럼 탄창",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "폭발물",
  /**
   * firearm category, pistols, rifles, shotguns, etc.
   *
   * found in-game:
   *   IGUI_perks_Firearm = "총기"
   *   IGUI_ItemCat_Firearm = "총기"
   */
  CAEC_Fallback_Firearm: "총기",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "권총",
  /** firearm magazines */
  CAEC_Fallback_Mag: "탄창",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "소총",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "산탄총",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "술",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "맥주"
   */
  CAEC_Fallback_Beer: "맥주",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   IGUI_ItemCat_Beverage = "음료"
   */
  CAEC_Fallback_Beverage: "음료",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "칵테일",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "커피"
   */
  CAEC_Fallback_Coffee: "커피",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "염료",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "에너지 드링크",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "연료",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "주스"
   */
  CAEC_Fallback_Juice: "주스",
  /**
   * top-level category for non-drinkable liquids, and used in 'Container - Liquid'
   *
   * found in-game:
   *   IGUI_ItemCat_Liquid = "액체"
   */
  CAEC_Fallback_Liquid: "액체",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "우유"
   *   ContextMenu_Milk = "우유"
   */
  CAEC_Fallback_Milk: "우유",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "독극물",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "청량음료"
   */
  CAEC_Fallback_SoftDrink: "청량음료",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "차"
   */
  CAEC_Fallback_Tea: "차",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "물 주기"
   */
  CAEC_Override_Water: "물",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "포도주"
   */
  CAEC_Fallback_Wine: "포도주",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "상자",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "묶음",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "카톤",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "알람 시계"
   */
  CAEC_Fallback_AlarmClock: "알람 시계",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "라디오",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "리모컨",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "무전기",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "카세트",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "동물 사료"
   */
  CAEC_Fallback_AnimalFeed: "동물 사료",
  /**
   * bicycles! for the fantastic bicycle mod
   *
   * found in-game:
   *   IGUI_ItemCat_Bicycle = "자전거"
   */
  CAEC_Fallback_Bicycle: "자전거",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "청소",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "퇴비용",
  /**
   * construction and renovation supplies such as paint, plaster and wallpaper
   *
   * found in-game:
   *   IGUI_ItemCat_Construction = "건축"
   */
  CAEC_Fallback_Construction: "건축",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "수제",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "컵",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "식기",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "열쇠고리",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "냄비",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "부위"
   *   IGUI_ItemCat_Part = "부위"
   */
  CAEC_Fallback_Part: "부위",
  /** photos */
  CAEC_Fallback_Photo: "사진",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "그림",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "봉제 인형",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "씨앗"
   */
  CAEC_Fallback_Seed: "씨앗",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "씨앗 봉투",
  /**
   * smoking items such as cigarettes, cigars, pipes
   *
   * found in-game:
   *   IGUI_ItemCat_Smoking = "흡연"
   */
  CAEC_Fallback_Smoking: "흡연",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "장난감",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "장신구",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "주방 도구",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "착용형",
};
