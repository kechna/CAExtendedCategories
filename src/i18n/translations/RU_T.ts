import type { ExternalTranslations } from "../types";

/**
 * Russian
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
export const RU: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Аксессуары"
   */
  CAEC_Fallback_Accessory: "Аксессуар",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Боеприпасы"
   */
  CAEC_Fallback_Ammo: "Боеприпасы",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Животные"
   */
  CAEC_Fallback_Animal: "Животное",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Части животных"
   */
  CAEC_Fallback_AnimalPart: "Часть животного",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Внешность"
   */
  CAEC_Fallback_Appearance: "Внешность",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Кемпинг"
   */
  CAEC_Fallback_Camping: "Кемпинг",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Карты"
   */
  CAEC_Fallback_Cartography: "Картография",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Одежда"
   */
  CAEC_Fallback_Clothing: "Одежда",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Средства связи"
   */
  CAEC_Fallback_Communications: "Коммуникация",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Контейнеры"
   *   ContextMenu_Container = "Контейнеры"
   */
  CAEC_Fallback_Container: "Контейнер",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Кулинария"
   */
  CAEC_Fallback_Cooking: "Кулинария",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Электроника"
   */
  CAEC_Fallback_Electronics: "Электроника",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Развлечения"
   */
  CAEC_Fallback_Entertainment: "Развлечение",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Источники огня"
   */
  CAEC_Fallback_FireSource: "Источник огня",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Медицина"
   */
  CAEC_Fallback_FirstAid: "Первая помощь",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Рыболовство"
   *   ContextMenu_Fishing = "Рыбалка"
   *   IGUI_CraftCategory_Fishing = "Рыболовство"
   */
  CAEC_Fallback_Fishing: "Рыболовство",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Еда"
   */
  CAEC_Fallback_Food: "Еда",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Мебель"
   */
  CAEC_Fallback_Furniture: "Мебель",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Садоводство"
   *   ContextMenu_Gardening = "Земледелие"
   */
  CAEC_Fallback_Gardening: "Садоводство",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Бытовые"
   */
  CAEC_Fallback_Household: "Хозяйство",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Музыкальные инструменты"
   */
  CAEC_Fallback_Instrument: "Инструмент",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Хлам"
   */
  CAEC_Fallback_Junk: "Хлам",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Источники света"
   */
  CAEC_Fallback_LightSource: "Освещение",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Литература"
   */
  CAEC_Fallback_Literature: "Литература",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Материалы"
   */
  CAEC_Fallback_Material: "Материал",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Сувениры"
   */
  CAEC_Fallback_Memento: "Сувенир",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Краска"
   */
  CAEC_Fallback_Paint: "Краска",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Защита"
   */
  CAEC_Fallback_ProtectiveGear: "Защитное снаряжение",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Обучающая литература"
   */
  CAEC_Fallback_SkillBook: "Навыки",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Спортивные товары"
   */
  CAEC_Fallback_Sports: "Спорт",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Инструменты"
   */
  CAEC_Fallback_Tool: "Инструмент",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Ловушки"
   */
  CAEC_Fallback_Trapping: "Ловушка",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Автосервис"
   */
  CAEC_Fallback_VehicleMaintenance: "Автосервис",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Оружие"
   */
  CAEC_Fallback_Weapon: "Оружие",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Топоры",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Кузнечное дело",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Длин. дробящее",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Разделка",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Плотничество"
   */
  CAEC_Fallback_Carpentry: "Плотничество",
  /** carving skill */
  CAEC_Fallback_Carving: "Резьба",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Электрика"
   */
  CAEC_Fallback_Electrical: "Электрика",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Фермерство"
   */
  CAEC_Fallback_Farming: "Фермерство",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Обработка кремня",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Собирательство",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Стеклоделие",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Длин. режущее",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Обслуживание",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Каменная кладка",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Механика",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Металлообработка",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Гончарное дело",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Коротк. режущее",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Коротк. дробящее",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Копья",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Портняжное дело",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Выслеживание",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Газосварка"
   */
  CAEC_Fallback_Welding: "Газосварка",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Предплечья",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Низ",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Лицо",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Обувь",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Всё тело",
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
  CAEC_Override_Jewelry: "Ювелирные изделия",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Ноги",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Шея"
   */
  CAEC_Fallback_Neck: "Шея",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Верхняя одежда",
  /** hosiery and socks */
  CAEC_Override_Socks: "Носки",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Верхняя часть тела",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Нижнее белье",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Выпечка",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Хлеб"
   */
  CAEC_Fallback_Bread: "Хлеб",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Конфеты"
   */
  CAEC_Fallback_Candy: "Конфеты",
  /** canned food items */
  CAEC_Override_Canned: "Консервы",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Молочные продукты",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Блюдо",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Замороженное",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Травы"
   */
  CAEC_Fallback_Herb: "Трава",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Мясо"
   */
  CAEC_Fallback_Meat: "Мясо",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Скоропортящийся",
  /** food for pets */
  CAEC_Fallback_PetFood: "Домашние животные",
  /** single serving portion of food */
  CAEC_Override_Portion: "Порция",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Консервированный",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Фрукты и овощи",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Морепродукты"
   */
  CAEC_Fallback_Seafood: "Морепродукты",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Семена"
   */
  CAEC_Fallback_Seed: "Семена",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Закуска",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Специи",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Основные продукты",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Для взрослых",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Брошюра",
  /** comic books */
  CAEC_Fallback_Comic: "Комикс",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Расходный материал",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Роскошная книга",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Листовка",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Твёрдый переплёт",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Журнал",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Газета",
  /** picture books */
  CAEC_Fallback_PictureBook: "Книжка с картинками",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Рецепт",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Руководство по RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Мягкий переплёт",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Лук",
  /** firearm drums */
  CAEC_Fallback_Drum: "Барабанный магазин",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Взрывчатка",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Огнестрельное оружие",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Пистолет",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Магазин",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Винтовка",
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
  CAEC_Fallback_Beverage: "Напиток",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Коктейль",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Кофе"
   */
  CAEC_Fallback_Coffee: "Кофе",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Краситель",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Энергетический напиток",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Топливо",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Сок"
   */
  CAEC_Fallback_Juice: "Сок",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Жидкость",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Молоко"
   *   ContextMenu_Milk = "Молоко"
   */
  CAEC_Fallback_Milk: "Молоко",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Яд",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Прохладительный напиток"
   */
  CAEC_Override_SoftDrink: "Газировка",
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
   *   ContextMenu_Water = "Полить"
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
  CAEC_Override_Bundled: "В связке",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Картонная коробка",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Будильник"
   */
  CAEC_Fallback_AlarmClock: "Будильник",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Радио",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Пульт",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Рация",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Кассета",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Велосипед",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Компостируемое",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Ручной работы",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Кружка",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Столовые приборы",
  /** ring or bundle of keys */
  CAEC_Fallback_KeyRing: "Связка ключей",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Сковорода",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Часть тела / защита"
   */
  CAEC_Fallback_Part: "Часть тела / защита",
  /** photos */
  CAEC_Fallback_Photo: "Фото",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Картина",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Плюшевая игрушка",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Пакетик семян",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Корм для животных",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Курение",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Игрушка",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Безделушка",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Кухонные принадлежности",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Носимый",
};
