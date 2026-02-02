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
   * top-level accessories category, such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Аксессуар"
   */
  CAEC_Fallback_Accessory: "Аксессуар",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Руки",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Низ",
  /**
   * top-level clothing category, such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Одежда"
   */
  CAEC_Fallback_Clothing: "Одежда",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Лицо",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Обувь",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Полное тело",
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
  /** top-level protective equipment category, such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Защитное снаряжение",
  /** hosiery and socks */
  CAEC_Override_Socks: "Носки",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Верхняя часть тела",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Нижнее белье",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Коробка",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Связанный",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Картонная коробка",
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
  CAEC_Override_Canned: "Консервированный в банке",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Сыр"
   */
  CAEC_Fallback_Cheese: "Сыр",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Блюдо",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Фрукты"
   */
  CAEC_Fallback_Fruits: "Фрукты",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Трава"
   */
  CAEC_Fallback_Herb: "Трава",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Острый перец"
   */
  CAEC_Fallback_HotPepper: "Острый перец",
  /** edible insects */
  CAEC_Fallback_Insect: "Насекомые",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Скот",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Мясо"
   */
  CAEC_Fallback_Meat: "Мясо",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Грибы"
   */
  CAEC_Fallback_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Орехи"
   */
  CAEC_Fallback_Nut: undefined,
  /** food items that can spoil */
  CAEC_Override_Perishable: "Скоропортящийся",
  /** food for pets */
  CAEC_Fallback_PetFood: "Домашние животные",
  /** single serving portion of food */
  CAEC_Override_Portion: "Порция",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Консервированный",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Морепродукты"
   */
  CAEC_Fallback_Seafood: "Морепродукты",
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
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
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Магазинное"
   */
  CAEC_Fallback_Stock: "Магазинное",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Сахар"
   */
  CAEC_Fallback_Sugar: "Сахар",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Овощи"
   */
  CAEC_Fallback_Vegetables: "Овощи",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Алкоголь",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Пиво"
   *   ItemName_Base.Beer = "Пиво в стакане"
   *   ItemName_Base.Beer2 = "Пиво в стаканчике"
   *   ContextMenu_EvolvedRecipe_Beer = "в стакане"
   *   ContextMenu_EvolvedRecipe_Beer2 = "в стаканчике"
   */
  CAEC_Override_Beer: "Пиво в стакане",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "Напиток"
   *   ItemName_Base.Beverage2 = "Напиток"
   *   ContextMenu_EvolvedRecipe_Beverage = "Напиток"
   *   ContextMenu_EvolvedRecipe_Beverage2 = "Напиток"
   */
  CAEC_Fallback_Beverage: "Напиток",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Коктейль",
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
   *   ContextMenu_FoodType_Milk = "Молочный продукт"
   *   ItemName_Base.Milk = "Молоко"
   */
  CAEC_Override_Milk: "Молоко",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Напитки"
   */
  CAEC_Override_SoftDrink: "Газировка",
  /** drinking water */
  CAEC_Fallback_Water: "Вода",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Вино"
   *   ItemName_Base.Wine = "Белое вино"
   *   ItemName_Base.Wine2 = "Красное вино"
   */
  CAEC_Fallback_Wine: "Вино",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Взрослый",
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
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Литература"
   */
  CAEC_Fallback_Literature: "Литература",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Журнал"
   */
  CAEC_Fallback_Magazine: "Журнал",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Газета"
   */
  CAEC_Fallback_Newspaper: "Газета",
  /** picture books */
  CAEC_Fallback_PictureBook: "Книжка с картинками",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Рецепт",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Руководство по RPG",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Навыки"
   */
  CAEC_Fallback_SkillBook: "Навыки",
  /** softcover books */
  CAEC_Fallback_Softcover: "Мягкий переплёт",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Ручной работы",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Связка ключей"
   */
  CAEC_Fallback_KeyRing: "Связка ключей",
  /** photos */
  CAEC_Fallback_Photo: "Фото",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Курение",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Носимый",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Топоры"
   */
  CAEC_Fallback_Axe: "Топоры",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Длин. дробящее"
   */
  CAEC_Fallback_Blunt: "Длин. дробящее",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Длин. режущее"
   */
  CAEC_Fallback_LongBlade: "Длин. режущее",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Коротк. режущее"
   */
  CAEC_Fallback_SmallBlade: "Коротк. режущее",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Коротк. дробящее"
   */
  CAEC_Fallback_SmallBlunt: "Коротк. дробящее",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Копья"
   */
  CAEC_Fallback_Spear: "Копья",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Боеприпасы"
   */
  CAEC_Fallback_Ammo: "Боеприпасы",
  /** animals */
  CAEC_Fallback_Animal: "Животное",
  /** animal parts, bones, sinew, hides */
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
   *   IGUI_ItemCat_Cartography = "Картография"
   */
  CAEC_Fallback_Cartography: "Картография",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Коммуникация"
   */
  CAEC_Fallback_Communications: "Коммуникация",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Контейнер"
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
   *   IGUI_ItemCat_Entertainment = "Развлечение"
   */
  CAEC_Fallback_Entertainment: "Развлечение",
  /** sources of fire */
  CAEC_Fallback_FireSource: "Источник огня",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Первая помощь"
   */
  CAEC_Fallback_FirstAid: "Первая помощь",
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Рыболовство"
   *   ContextMenu_Fishing = "Рыбачить"
   */
  CAEC_Fallback_Fishing: "Рыболовство",
  /**
   * any food item
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
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Садоводство"
   */
  CAEC_Fallback_Gardening: "Садоводство",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Хозяйство"
   */
  CAEC_Fallback_Household: "Хозяйство",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Инструмент"
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
   *   IGUI_ItemCat_LightSource = "Освещение"
   */
  CAEC_Fallback_LightSource: "Освещение",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Материал"
   */
  CAEC_Fallback_Material: "Материал",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Сувенир",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Краска"
   */
  CAEC_Fallback_Paint: "Краска",
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
   *   IGUI_ItemCat_Tool = "Инструмент"
   */
  CAEC_Fallback_Tool: "Инструмент",
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Ловушка"
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
};
