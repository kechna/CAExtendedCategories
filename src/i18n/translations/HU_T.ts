import type { ExternalTranslations } from "../types";

/**
 * Hungarian
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
export const HU: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Tartozék"
   */
  CAEC_Fallback_Accessory: "Tartozék",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Lőszer"
   */
  CAEC_Fallback_Ammo: "Lőszer",
  /** animals */
  CAEC_Fallback_Animal: "Állat",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Állatrész",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Megjelenés"
   */
  CAEC_Fallback_Appearance: "Megjelenés",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Táborozás"
   */
  CAEC_Fallback_Camping: "Táborozás",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Térképészet"
   */
  CAEC_Fallback_Cartography: "Térképészet",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Ruha"
   */
  CAEC_Fallback_Clothing: "Ruha",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Kommunikáció"
   */
  CAEC_Fallback_Communications: "Kommunikáció",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Tároló"
   *   ContextMenu_Container = "Tároló"
   */
  CAEC_Fallback_Container: "Tároló",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Főzés"
   *   IGUI_perks_Cooking = "Főzés"
   */
  CAEC_Fallback_Cooking: "Főzés",
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
   *   IGUI_ItemCat_Entertainment = "Szórakoztatás"
   */
  CAEC_Fallback_Entertainment: "Szórakoztatás",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Tűzforrás",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Gyógyítás"
   *   IGUI_perks_Doctor = "Gyógyítás"
   */
  CAEC_Fallback_FirstAid: "Gyógyítás",
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Horgászás"
   *   IGUI_perks_Fishing = "Horgászás"
   *   ContextMenu_Fishing = "Horgászás"
   */
  CAEC_Fallback_Fishing: "Horgászás",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Étel"
   */
  CAEC_Fallback_Food: "Étel",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Bútor"
   */
  CAEC_Fallback_Furniture: "Bútor",
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Kertészkedés"
   */
  CAEC_Fallback_Gardening: "Kertészkedés",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Háztartás"
   */
  CAEC_Fallback_Household: "Háztartás",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Hangszer"
   */
  CAEC_Fallback_Instrument: "Hangszer",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Szemét"
   */
  CAEC_Fallback_Junk: "Szemét",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Fényforrás"
   */
  CAEC_Fallback_LightSource: "Fényforrás",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Olvasmány"
   */
  CAEC_Fallback_Literature: "Olvasmány",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Anyag"
   */
  CAEC_Fallback_Material: "Anyag",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Emlék",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Festék"
   */
  CAEC_Fallback_Paint: "Festék",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Védőfelszerelés",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Készség Könyv"
   */
  CAEC_Fallback_SkillBook: "Készség Könyv",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sportolás"
   */
  CAEC_Fallback_Sports: "Sportolás",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Eszköz"
   */
  CAEC_Fallback_Tool: "Eszköz",
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Prémvadászat"
   *   IGUI_perks_Trapping = "Vadászat"
   */
  CAEC_Fallback_Trapping: "Prémvadászat",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Jármű Kezelés"
   */
  CAEC_Fallback_VehicleMaintenance: "Jármű Kezelés",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Fegyver"
   */
  CAEC_Fallback_Weapon: "Fegyver",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Balta"
   */
  CAEC_Fallback_Axe: "Balta",
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Ütőfegyver"
   */
  CAEC_Fallback_Blunt: "Ütőfegyver",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Hosszú szúrófegyver"
   */
  CAEC_Fallback_LongBlade: "Hosszú szúrófegyver",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Rövid szúrófegyver"
   */
  CAEC_Fallback_SmallBlade: "Rövid szúrófegyver",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Rövid ütőfegyver"
   */
  CAEC_Fallback_SmallBlunt: "Rövid ütőfegyver",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Dárda"
   */
  CAEC_Fallback_Spear: "Dárda",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Karok",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Alsó",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Arc",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Lábbeli",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Teljes test",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Kezek",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Fej"
   */
  CAEC_Fallback_Head: "Fej",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Ékszerek",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Lábak",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Nyak"
   */
  CAEC_Fallback_Neck: "Nyak",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Felsőruházat",
  /** hosiery and socks */
  CAEC_Override_Socks: "Zokni",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Felsőtest",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Fehérnemű",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Sütés",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Kenyér"
   *   ItemName_Base.Bread = "Kenyér"
   */
  CAEC_Fallback_Bread: "Kenyér",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Cukorka"
   */
  CAEC_Fallback_Candy: "Cukorka",
  /** canned food items */
  CAEC_Override_Canned: "Konzervált",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Sajt"
   *   ItemName_Base.Cheese = "Sajt"
   */
  CAEC_Fallback_Cheese: "Sajt",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Étel",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Gyümölcs"
   */
  CAEC_Fallback_Fruits: "Gyümölcs",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Gyógynövények"
   */
  CAEC_Fallback_Herb: "Gyógynövények",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Csípős Paprika"
   */
  CAEC_Fallback_HotPepper: "Csípős Paprika",
  /** edible insects */
  CAEC_Fallback_Insect: "Rovarok",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Haszonállatok",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Hús"
   */
  CAEC_Fallback_Meat: "Hús",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Gomba"
   */
  CAEC_Fallback_Mushroom: "Gomba",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Dió"
   */
  CAEC_Fallback_Nut: "Diófélék",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Romlandó",
  /** food for pets */
  CAEC_Fallback_PetFood: "Háziállatok",
  /** single serving portion of food */
  CAEC_Override_Portion: "Adag",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Tartósított",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Tengeri Étel"
   */
  CAEC_Fallback_Seafood: "Tengeri Étel",
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Mag"
   */
  CAEC_Fallback_Seed: "Mag",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Nassolnivaló",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Fűszerek",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alapélelmiszer",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Alapanyag"
   */
  CAEC_Fallback_Stock: "Alapanyag",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Cukor"
   *   ItemName_Base.Sugar = "Cukor"
   */
  CAEC_Fallback_Sugar: "Cukor",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Zöldség"
   */
  CAEC_Override_Vegetables: "Zöldségek",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Felnőtt",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brosúra",
  /** comic books */
  CAEC_Fallback_Comic: "Képregény",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Fogyóeszköz",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Díszkönyv",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Szórólap",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Keménykötés",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Magazin"
   */
  CAEC_Fallback_Magazine: "Magazin",
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Újság"
   */
  CAEC_Fallback_Newspaper: "Újság",
  /** picture books */
  CAEC_Fallback_PictureBook: "Képeskönyv",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recept",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Szerepjáték-kézikönyv",
  /** softcover books */
  CAEC_Fallback_Softcover: "Puhakötés",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Lőfegyver",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pisztoly",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Tár",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Puska",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Sörétes puska",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alkohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Sör"
   *   ItemName_Base.Beer = "Üvegbe öntve"
   *   ItemName_Base.Beer2 = "Csészébe öntve"
   */
  CAEC_Override_Beer: "Üvegbe öntve",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "Ital"
   *   ItemName_Base.Beverage2 = "Ital"
   */
  CAEC_Fallback_Beverage: "Ital",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Koktél",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kávé"
   *   ItemName_Base.Coffee = "Kávé"
   *   ItemName_Base.Coffee2 = "Kávé"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Festék",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energiaital",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Üzemanyag",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Gyümölcslé"
   */
  CAEC_Fallback_Juice: "Gyümölcslé",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Folyadék",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Tej"
   *   ItemName_Base.Milk = "Tej"
   */
  CAEC_Fallback_Milk: "Tej",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Üdítőital"
   */
  CAEC_Fallback_SoftDrink: "Üdítőital",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tea"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Víz"
   */
  CAEC_Fallback_Water: "Víz",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Bor"
   *   ItemName_Base.Wine = "Fehérbor"
   *   ItemName_Base.Wine2 = "Vörösbor"
   */
  CAEC_Fallback_Wine: "Bor",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Doboz",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Kötegelt",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Kartondoboz",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Kézműves",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: undefined,
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Evőeszköz",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Kulcstartó"
   */
  CAEC_Override_KeyRing: "Kulcscsomó",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: undefined,
  /** photos */
  CAEC_Fallback_Photo: "Fénykép",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Dohányzás",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Eszköz",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Viselhető",
};
