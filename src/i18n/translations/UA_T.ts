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
  CAEC_Override_Accessory: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Боєприпаси"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: "Тварини",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Частини тварин",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Зовнішність"
   */
  CAEC_Override_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Кемпінг"
   */
  CAEC_Override_Camping: undefined,
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Картографія"
   */
  CAEC_Override_Cartography: undefined,
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Одяг"
   */
  CAEC_Override_Clothing: undefined,
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Комунікація"
   */
  CAEC_Override_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Контейнер"
   *   ContextMenu_Container = "Контейнери"
   */
  CAEC_Override_Container: undefined,
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Кулінарія"
   *   IGUI_perks_Cooking = "Кулінарія"
   */
  CAEC_Override_Cooking: undefined,
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Електроніка"
   */
  CAEC_Override_Electronics: undefined,
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Розвага"
   */
  CAEC_Override_Entertainment: undefined,
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Джерело вогню",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "Перша допомога"
   *   IGUI_ItemCat_FirstAid = "Перша допомога"
   */
  CAEC_Override_FirstAid: undefined,
  /**
   * fishing skill
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Риболовля"
   *   IGUI_perks_Fishing = "Рибальство"
   *   ContextMenu_Fishing = "Рибальство"
   *   IGUI_CraftCategory_Fishing = "Рибальство"
   */
  CAEC_Override_Fishing: undefined,
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Їжа"
   */
  CAEC_Override_Food: undefined,
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Меблі"
   */
  CAEC_Override_Furniture: undefined,
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Садівництво"
   */
  CAEC_Override_Gardening: undefined,
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Господарство"
   */
  CAEC_Override_Household: undefined,
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Інструмент"
   */
  CAEC_Override_Instrument: undefined,
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Сміття"
   */
  CAEC_Override_Junk: undefined,
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Джерело світла"
   */
  CAEC_Override_LightSource: undefined,
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Література"
   */
  CAEC_Override_Literature: undefined,
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Матеріал"
   */
  CAEC_Override_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Сувенір",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Фарба"
   */
  CAEC_Override_Paint: undefined,
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Захисне спорядження",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Книга навичок"
   */
  CAEC_Override_SkillBook: undefined,
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Спорт"
   */
  CAEC_Override_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Інструмент"
   */
  CAEC_Override_Tool: undefined,
  /**
   * trapping skill
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Пастка"
   *   IGUI_perks_Trapping = "Звіроловство"
   */
  CAEC_Override_Trapping: undefined,
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Автосервіс"
   */
  CAEC_Override_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Зброя"
   */
  CAEC_Override_Weapon: undefined,
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Сокири"
   */
  CAEC_Override_Axe: undefined,
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Коваль"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Довг. дробяще"
   */
  CAEC_Override_Blunt: undefined,
  /** butchering skill */
  CAEC_Fallback_Butchering: "Забій",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Будівництво"
   *   IGUI_perks_Carpentry = "Будівництво"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: "Різьблення",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Електроніка"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Фермерство"
   *   IGUI_perks_Farming = "Фермерство"
   */
  CAEC_Override_Farming: undefined,
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Обробка кременю",
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Збиральництво"
   */
  CAEC_Override_Foraging: undefined,
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Скловаріння",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Довг. ріжуче"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Міцність"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: "Мурування",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Автомеханіка"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Газозварка"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: "Гончарство",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Коротк. ріжуче"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Коротк. дробяще"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Списи"
   */
  CAEC_Override_Spear: undefined,
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Шиття"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: "Вистежування",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Газозварка"
   */
  CAEC_Override_Welding: undefined,
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
  CAEC_Override_Head: undefined,
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
  CAEC_Override_Neck: undefined,
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
   *   ItemName_Base.Bread = "Хліб"
   */
  CAEC_Override_Bread: undefined,
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Цукерки"
   */
  CAEC_Override_Candy: undefined,
  /** canned food items */
  CAEC_Override_Canned: "Консерви",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Сир"
   *   ItemName_Base.Cheese = "Сир"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Готові страви",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Фрукти"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Трава"
   */
  CAEC_Override_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Гострий перець"
   */
  CAEC_Override_HotPepper: undefined,
  /** edible insects */
  CAEC_Fallback_Insect: "Комахи",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Корм для худоби",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "М'ясо"
   */
  CAEC_Override_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Гриби"
   */
  CAEC_Override_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Горіхи"
   */
  CAEC_Override_Nut: undefined,
  /** food items that can spoil */
  CAEC_Override_Perishable: "Швидкопсувне",
  /** food for pets */
  CAEC_Fallback_PetFood: "Улюбленці",
  /** single serving portion of food */
  CAEC_Override_Portion: "Порція",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Консервоване",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Морепродукти"
   */
  CAEC_Override_Seafood: undefined,
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Насіння"
   */
  CAEC_Override_Seed: undefined,
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Перекуси",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Спеції",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Базові продукти",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Магазинне"
   */
  CAEC_Override_Stock: "Бульйон",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Цукор"
   *   ItemName_Base.Sugar = "Цукор"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Овочі"
   */
  CAEC_Override_Vegetables: undefined,
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
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Журнал"
   */
  CAEC_Override_Magazine: undefined,
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Газета"
   */
  CAEC_Override_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: "Книжка з малюнками",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Рецепт",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Посібник RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "М’яка обкладинка",
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
  CAEC_Override_Beer: undefined,
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Напої",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Коктейль",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Кава"
   *   ItemName_Base.Coffee = "Кава"
   *   ItemName_Base.Coffee2 = "Кава"
   */
  CAEC_Override_Coffee: undefined,
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
  CAEC_Override_Juice: undefined,
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Рідина",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Молоко"
   *   ItemName_Base.Milk = "Молоко"
   */
  CAEC_Override_Milk: undefined,
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Напої"
   */
  CAEC_Override_SoftDrink: "Безалкогольні напої",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Чай"
   */
  CAEC_Override_Tea: undefined,
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
   *   ItemName_Base.Wine = "Пляшка білого вина"
   *   ItemName_Base.Wine2 = "Пляшка червоного вина"
   */
  CAEC_Override_Wine: undefined,
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Коробка",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Пучок",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Картон",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Компостоване",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Ручна робота",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Чашка",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Столові прибори",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Зв'язка ключів"
   */
  CAEC_Override_KeyRing: undefined,
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Сковорода",
  /** photos */
  CAEC_Fallback_Photo: "Фото",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Плюшева іграшка",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Пакет насіння",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Куріння",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Кухонне приладдя",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Носимий",
};
