import type { ExternalTranslations } from "../types";

/**
 * Polish
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
export const PL: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Akcesoria"
   */
  CAEC_Fallback_Accessory: "Akcesorium",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Amunicja"
   */
  CAEC_Fallback_Ammo: "Amunicja",
  /** animals */
  CAEC_Fallback_Animal: "Zwierzę",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Część zwierzęcia",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "WyglÂąd"
   */
  CAEC_Fallback_Appearance: "Wygląd",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Kemping"
   */
  CAEC_Fallback_Camping: "Kemping",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartografia"
   */
  CAEC_Fallback_Cartography: "Kartografia",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "OdzieÂż"
   */
  CAEC_Fallback_Clothing: "Odzież",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Komunikacja"
   */
  CAEC_Fallback_Communications: "Komunikacja",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Pojemniki"
   *   ContextMenu_Container = "Pojemniki"
   */
  CAEC_Fallback_Container: "Pojemnik",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Gotowanie"
   *   IGUI_perks_Cooking = "Gotowanie"
   */
  CAEC_Fallback_Cooking: "Gotowanie",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektronika"
   */
  CAEC_Fallback_Electronics: "Elektronika",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Rozrywka"
   */
  CAEC_Fallback_Entertainment: "Rozrywka",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Źródło ognia",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Pierwsza pomoc"
   *   IGUI_perks_Doctor = "Pierwsza pomoc"
   */
  CAEC_Fallback_FirstAid: "Pierwsza pomoc",
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "WĂŞdkarstwo"
   *   IGUI_perks_Fishing = "WĂŞdkarstwo"
   *   ContextMenu_Fishing = "Łów ryby"
   */
  CAEC_Fallback_Fishing: "Wędkarstwo",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "ÂŻywnoĹ“Ă¦"
   */
  CAEC_Fallback_Food: "Żywność",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Meble"
   */
  CAEC_Fallback_Furniture: "Meble",
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Ogrodnictwo"
   */
  CAEC_Fallback_Gardening: "Ogrodnictwo",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Domowe"
   */
  CAEC_Fallback_Household: "Gospodarstwo domowe",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrumenty"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Rupiecie"
   */
  CAEC_Fallback_Junk: "Śmieci",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "?rĂłdÂło Ĺ“wiatÂła"
   */
  CAEC_Fallback_LightSource: "Źródło światła",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Literatura"
   */
  CAEC_Fallback_Literature: "Literatura",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "MateriaÂły"
   */
  CAEC_Fallback_Material: "Materiały",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Pamiątka",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Farba"
   */
  CAEC_Fallback_Paint: "Farba",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Sprzęt ochronny",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "PodrĂŞczniki"
   */
  CAEC_Fallback_SkillBook: "Książka umiejętności",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sportowe"
   */
  CAEC_Fallback_Sports: "Sport",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "NarzĂŞdzia"
   */
  CAEC_Fallback_Tool: "Narzędzie",
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "PuÂłapki"
   *   IGUI_perks_Trapping = "Stawianie puÂłapek"
   */
  CAEC_Fallback_Trapping: "Pułapki",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "ObsÂługa pojazdĂłw"
   */
  CAEC_Fallback_VehicleMaintenance: "Konserwacja pojazdu",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "BroĂ±"
   */
  CAEC_Fallback_Weapon: "Broń",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Siekiery"
   */
  CAEC_Fallback_Axe: "Topór",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "DÂługie obuchy"
   */
  CAEC_Fallback_Blunt: "Tępa",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "DÂługie ostrza"
   */
  CAEC_Fallback_LongBlade: "Długie ostrze",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "KrĂłtkie ostrza"
   */
  CAEC_Override_SmallBlade: "Krótkie ostrze",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "KrĂłtkie obuchy"
   */
  CAEC_Fallback_SmallBlunt: "Krótka tępa",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "WÂłĂłcznie"
   */
  CAEC_Fallback_Spear: "Włócznia",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Ramiona",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Dół",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Twarz",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Obuwie",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Całe ciało",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Dłonie",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "GÂłowa"
   */
  CAEC_Override_Head: "Głowa",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Biżuteria",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Nogi",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Szyja"
   */
  CAEC_Override_Neck: "Szyja",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Odzież wierzchnia",
  /** hosiery and socks */
  CAEC_Override_Socks: "Skarpety",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Góra",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Bielizna",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Pieczenie",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Chleb"
   *   ItemName_Base.Bread = "Chleb"
   */
  CAEC_Fallback_Bread: "Pieczywo",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Cukierek"
   */
  CAEC_Override_Candy: "Słodycze",
  /** canned food items */
  CAEC_Override_Canned: "Konserwowy",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Ser"
   *   ItemName_Base.Cheese = "Ser"
   */
  CAEC_Fallback_Cheese: "Ser",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Gotowe danie",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "z owocami"
   */
  CAEC_Fallback_Fruits: "Owoce",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Zioła"
   */
  CAEC_Fallback_Herb: "Zioła",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Ostre papryczki"
   */
  CAEC_Fallback_HotPepper: "Ostre papryczki",
  /** edible insects */
  CAEC_Fallback_Insect: "Owady",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Bydło",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "z mięsem"
   */
  CAEC_Fallback_Meat: "Mięso",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Grzyb"
   */
  CAEC_Fallback_Mushroom: "Grzyby",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Orzech"
   */
  CAEC_Fallback_Nut: "Orzechy",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Łatwo psujące się",
  /** food for pets */
  CAEC_Fallback_PetFood: "Zwierzęta domowe",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porcja",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Konserwowany",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Owoce morza"
   */
  CAEC_Fallback_Seafood: "Owoce morza",
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Ziarno"
   */
  CAEC_Fallback_Seed: "Nasiona",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Przekąska",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Przyprawy",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Podstawowe produkty",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Bulion"
   */
  CAEC_Fallback_Stock: "Bulion",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Cukier"
   *   ItemName_Base.Sugar = "Cukier"
   */
  CAEC_Fallback_Sugar: "Cukier",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "z warzywami"
   */
  CAEC_Override_Vegetables: "Warzywa",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Dorosły",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Broszura",
  /** comic books */
  CAEC_Fallback_Comic: "Komiks",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Przedmiot zużywalny",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Książka luksusowa",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Ulotka",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Twarda oprawa",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Czasopismo"
   */
  CAEC_Fallback_Magazine: "Czasopismo",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Gazeta"
   */
  CAEC_Fallback_Newspaper: "Gazeta",
  /** picture books */
  CAEC_Fallback_PictureBook: "Książka obrazkowa",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Przepis",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Podręcznik RPG",
  /** softcover books */
  CAEC_Fallback_Softcover: "Miękka oprawa",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Broń palna",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistolet",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Magazynek",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Karabin",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Strzelba",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Piwo"
   *   ItemName_Base.Beer = "Nalane do szklanki"
   *   ItemName_Base.Beer2 = "Nalane do kubka"
   */
  CAEC_Fallback_Beer: "Piwo",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "Napój"
   *   ItemName_Base.Beverage2 = "Napój"
   */
  CAEC_Override_Beverage: "Napoje",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Koktajl",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kawa"
   *   ItemName_Base.Coffee = "Kawa"
   *   ItemName_Base.Coffee2 = "Kawa"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: undefined,
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Napój energetyczny",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: undefined,
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Sok"
   */
  CAEC_Fallback_Juice: "Sok",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Płyn",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Mleko"
   *   ItemName_Base.Milk = "Mleko"
   */
  CAEC_Fallback_Milk: "Mleko",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Napój gazowany"
   */
  CAEC_Override_SoftDrink: "Napój gazowany",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Herbata"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Podlej"
   */
  CAEC_Fallback_Water: "Woda",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Wino"
   *   ItemName_Base.Wine = "Białe wino"
   *   ItemName_Base.Wine2 = "Czerwone wino"
   */
  CAEC_Override_Wine: "Wino",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Pudełko",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Związany",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Karton",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Ręcznie robiony",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: undefined,
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: undefined,
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Kółko z kluczami"
   */
  CAEC_Override_KeyRing: "Pęk kluczy",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: undefined,
  /** photos */
  CAEC_Fallback_Photo: "Zdjęcie",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Palenie",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: undefined,
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Do noszenia",
};
