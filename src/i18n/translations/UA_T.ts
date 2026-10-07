import type { ExternalTranslations } from "../types";

/**
 * Ukrainian
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
export const UA: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Аксесуар"
   */
  CAEC_Fallback_Accessory: "Аксесуар",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Боєприпаси"
   */
  CAEC_Fallback_Ammo: "Боєприпаси",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Тварина"
   */
  CAEC_Fallback_Animal: "Тварини",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Частина тварини"
   */
  CAEC_Fallback_AnimalPart: "Частини тварин",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Зовнішність"
   */
  CAEC_Fallback_Appearance: "Зовнішність",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Кемпінг"
   */
  CAEC_Fallback_Camping: "Кемпінг",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Картографія"
   */
  CAEC_Fallback_Cartography: "Картографія",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Одяг"
   */
  CAEC_Fallback_Clothing: "Одяг",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Комунікація"
   */
  CAEC_Fallback_Communications: "Комунікація",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Вмістилище"
   *   ContextMenu_Container = "Вмістилища"
   */
  CAEC_Fallback_Container: "Вмістилище",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Кулінарія"
   */
  CAEC_Fallback_Cooking: "Кулінарія",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Електроніка"
   */
  CAEC_Fallback_Electronics: "Електроніка",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Розваги"
   */
  CAEC_Fallback_Entertainment: "Розваги",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Джерело вогню"
   */
  CAEC_Fallback_FireSource: "Джерело вогню",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Перша допомога"
   */
  CAEC_Fallback_FirstAid: "Перша допомога",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Риболовля"
   *   ContextMenu_Fishing = "Риболовля"
   *   IGUI_CraftCategory_Fishing = "Риболовля"
   */
  CAEC_Fallback_Fishing: "Риболовля",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Їжа"
   */
  CAEC_Fallback_Food: "Їжа",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Меблі"
   */
  CAEC_Fallback_Furniture: "Меблі",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Садівництво"
   *   ContextMenu_Gardening = "Садівництво"
   */
  CAEC_Fallback_Gardening: "Садівництво",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Господарство"
   */
  CAEC_Fallback_Household: "Господарство",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Музичний інструмент"
   */
  CAEC_Fallback_Instrument: "Музичний інструмент",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Мотлох"
   */
  CAEC_Fallback_Junk: "Мотлох",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Джерело світла"
   */
  CAEC_Fallback_LightSource: "Джерело світла",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Література"
   */
  CAEC_Fallback_Literature: "Література",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Матеріал"
   */
  CAEC_Fallback_Material: "Матеріал",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Пам'ятка"
   */
  CAEC_Fallback_Memento: "Сувенір",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Фарба"
   */
  CAEC_Fallback_Paint: "Фарба",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Захисне спорядження"
   */
  CAEC_Fallback_ProtectiveGear: "Захисне спорядження",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Підручник"
   */
  CAEC_Fallback_SkillBook: "Підручник",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Спорт"
   */
  CAEC_Fallback_Sports: "Спорт",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Знаряддя"
   */
  CAEC_Fallback_Tool: "Знаряддя",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Пастки"
   */
  CAEC_Fallback_Trapping: "Пастки",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Автоприладдя"
   */
  CAEC_Fallback_VehicleMaintenance: "Автоприладдя",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Зброя"
   */
  CAEC_Fallback_Weapon: "Зброя",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Сокири",
  /** blacksmith skill */
  CAEC_Fallback_Blacksmith: "Ковальство",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Довге дробильне",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Забій",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Будівництво"
   */
  CAEC_Fallback_Carpentry: "Будівництво",
  /** carving skill */
  CAEC_Fallback_Carving: "Різьблення",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Електроніка"
   */
  CAEC_Fallback_Electrical: "Електроніка",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Фермерство"
   */
  CAEC_Fallback_Farming: "Фермерство",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Обробка кременю",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Збиральництво",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Скловаріння",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Довге клинкове",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Обслуговування",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Мурування",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Механіка",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "Металообробка",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Гончарство",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Коротке клинкове",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Коротке дробильне",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Списи",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Кравецтво",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Вистежування",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Зварювання"
   */
  CAEC_Fallback_Welding: "Зварювання",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Передпліччя",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Низ",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Обличчя",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Взуття",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Суцільний одяг",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Руки",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Голова"
   */
  CAEC_Fallback_Head: "Голова",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Прикраси",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Ноги",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Шия"
   */
  CAEC_Fallback_Neck: "Шия",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Верхній одяг",
  /** hosiery and socks */
  CAEC_Override_Socks: "Шкарпетки",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Верх",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Нижня білизна",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Для випічки",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Хліб"
   */
  CAEC_Fallback_Bread: "Хліб",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Цукерка"
   */
  CAEC_Fallback_Candy: "Цукерка",
  /** canned food items */
  CAEC_Override_Canned: "Консерви",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Молочні продукти",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Готові страви",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Заморожене",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Трави"
   */
  CAEC_Fallback_Herb: "Трави",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "М'ясо"
   */
  CAEC_Fallback_Meat: "М'ясо",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Швидкопсувне",
  /** food for pets */
  CAEC_Fallback_PetFood: "Домашні тварини",
  /** single serving portion of food */
  CAEC_Override_Portion: "Порція",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Консервоване",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Овочі та фрукти",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Морепродукти"
   */
  CAEC_Fallback_Seafood: "Морепродукти",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "Перекуси",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Спеції",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Базові продукти",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Для дорослих",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Брошура",
  /** comic books */
  CAEC_Fallback_Comic: "Комікс",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Головоломки",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Подарункова книга",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Листівка",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Тверда обкладинка",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Журнал",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Газета",
  /** picture books */
  CAEC_Fallback_PictureBook: "Книжка з малюнками",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Рецепт",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Посібник RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "М’яка обкладинка",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "Для записів",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Лук",
  /** firearm drums */
  CAEC_Fallback_Drum: "Барабанний магазин",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Вибухівка",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Вогнепальна зброя",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Пістолет",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Магазин",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Гвинтівка",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Дробовик",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Алкоголь",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Пиво"
   */
  CAEC_Fallback_Beer: "Пиво",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Напої",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Коктейль",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Кава"
   */
  CAEC_Fallback_Coffee: "Кава",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Барвник",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Енергетичний напій",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Паливо",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Сік"
   */
  CAEC_Fallback_Juice: "Сік",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Рідина",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Молоко"
   *   ContextMenu_Milk = "Доїти"
   */
  CAEC_Fallback_Milk: "Молоко",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Отрута",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Безалкогольний напій"
   */
  CAEC_Override_SoftDrink: "Безалкогольні напої",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Чай"
   */
  CAEC_Fallback_Tea: "Чай",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Полити"
   */
  CAEC_Override_Water: "Вода",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Вино"
   */
  CAEC_Fallback_Wine: "Вино",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Коробка",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Пучок",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Картонна коробка",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Будильник"
   */
  CAEC_Fallback_AlarmClock: "Будильник",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Радіо",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Пульт",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Рація",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Касета",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "Корм для тварин"
   */
  CAEC_Fallback_AnimalFeed: "Корм для тварин",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Велосипед",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "Прибирання",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Компостоване",
  /** construction and renovation supplies such as paint, plaster and wallpaper */
  CAEC_Override_Construction: "Будівництво",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Ручна робота",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Чашка",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Столові прибори",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Зв'язка ключів",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Сковорода",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Частина тіла / захист"
   */
  CAEC_Fallback_Part: "Частина тіла / захист",
  /** photos */
  CAEC_Fallback_Photo: "Фото",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Картина",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Плюшева іграшка",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Насіння"
   */
  CAEC_Fallback_Seed: "Насіння",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Пакет насіння",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Куріння",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Іграшка",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Дрібничка",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Кухонне приладдя",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Носимий",
};
