import type { ExternalTranslations } from "../types";

/**
 * Turkish
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
export const TR: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Aksesuar"
   */
  CAEC_Override_Accessory: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Cephane"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: undefined,
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: undefined,
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Kişisel Bakım"
   */
  CAEC_Override_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Kamp"
   */
  CAEC_Override_Camping: undefined,
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Kartografya"
   */
  CAEC_Override_Cartography: undefined,
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Giysi"
   */
  CAEC_Override_Clothing: undefined,
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "İletişim"
   */
  CAEC_Override_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Depolama"
   *   ContextMenu_Container = "Depolama"
   */
  CAEC_Override_Container: undefined,
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Aşçılık"
   *   IGUI_perks_Cooking = "Aşçılık"
   */
  CAEC_Override_Cooking: undefined,
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elektronik"
   */
  CAEC_Override_Electronics: undefined,
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Eğlence"
   */
  CAEC_Override_Entertainment: undefined,
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: undefined,
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "İlk Yardım"
   *   IGUI_ItemCat_FirstAid = "İlk Yardım"
   */
  CAEC_Override_FirstAid: undefined,
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Yiyecek"
   */
  CAEC_Override_Food: undefined,
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Mobilya"
   */
  CAEC_Override_Furniture: undefined,
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Günlük Ev Eşyaları"
   */
  CAEC_Override_Household: undefined,
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Enstrüman"
   */
  CAEC_Override_Instrument: undefined,
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Hurda"
   */
  CAEC_Override_Junk: undefined,
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Işık Kaynağı"
   */
  CAEC_Override_LightSource: undefined,
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Okumalık"
   */
  CAEC_Override_Literature: undefined,
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Malzeme"
   */
  CAEC_Override_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: undefined,
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Boya"
   */
  CAEC_Override_Paint: undefined,
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: undefined,
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Yetenek Kitabı"
   */
  CAEC_Override_SkillBook: undefined,
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Spor"
   */
  CAEC_Override_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Alet"
   */
  CAEC_Override_Tool: undefined,
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Tamircilik"
   */
  CAEC_Override_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Silah"
   */
  CAEC_Override_Weapon: undefined,
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Balta"
   */
  CAEC_Override_Axe: undefined,
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Demircilik"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Yakın Dövüş Silahları"
   */
  CAEC_Override_Blunt: undefined,
  /** butchering skill */
  CAEC_Fallback_Butchering: undefined,
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Marangozluk"
   *   IGUI_perks_Carpentry = "Marangozluk"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: undefined,
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Elektriksel"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Çiftçilik"
   *   IGUI_perks_Farming = "Çiftçilik"
   */
  CAEC_Override_Farming: undefined,
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Balıkçılık"
   *   IGUI_perks_Fishing = "Balıkçılık"
   *   ContextMenu_Fishing = "Balık Tut"
   *   IGUI_CraftCategory_Fishing = "Balıkçılık"
   */
  CAEC_Override_Fishing: undefined,
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: undefined,
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Araştırma"
   */
  CAEC_Override_Foraging: undefined,
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Çiftçilik"
   */
  CAEC_Override_Gardening: undefined,
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Uzun Kesici"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Onarma"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: undefined,
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Tamircilik"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Metal İşleme"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Kısa Kesici"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Kısa Ezici"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Mızrak"
   */
  CAEC_Override_Spear: undefined,
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Terzilik"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: undefined,
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Avcılık"
   *   IGUI_perks_Trapping = "Avcılık"
   */
  CAEC_Override_Trapping: undefined,
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metal İşleme"
   */
  CAEC_Override_Welding: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: undefined,
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: undefined,
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: undefined,
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: undefined,
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: undefined,
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: undefined,
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Kafa"
   */
  CAEC_Override_Head: undefined,
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: undefined,
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: undefined,
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Boyun"
   */
  CAEC_Override_Neck: undefined,
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: undefined,
  /** hosiery and socks */
  CAEC_Override_Socks: undefined,
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: undefined,
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: undefined,
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: undefined,
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Ekmek"
   */
  CAEC_Override_Bread: undefined,
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Şeker"
   */
  CAEC_Override_Candy: undefined,
  /** canned food items */
  CAEC_Override_Canned: undefined,
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Peynir"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: undefined,
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Meyve"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Ot"
   */
  CAEC_Override_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Acı Biber"
   */
  CAEC_Override_HotPepper: undefined,
  /** edible insects */
  CAEC_Fallback_Insect: undefined,
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: undefined,
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Et"
   */
  CAEC_Override_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Mantar"
   */
  CAEC_Override_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Ceviz"
   */
  CAEC_Override_Nut: undefined,
  /** food items that can spoil */
  CAEC_Override_Perishable: undefined,
  /** food for pets */
  CAEC_Fallback_PetFood: undefined,
  /** single serving portion of food */
  CAEC_Override_Portion: undefined,
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: undefined,
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Deniz Ürünü"
   */
  CAEC_Override_Seafood: undefined,
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Tohum"
   */
  CAEC_Override_Seed: undefined,
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: undefined,
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: undefined,
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: undefined,
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Besi"
   */
  CAEC_Override_Stock: undefined,
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Şeker"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Sebze"
   */
  CAEC_Override_Vegetables: undefined,
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: undefined,
  /** informational brochures */
  CAEC_Fallback_Brochure: undefined,
  /** comic books */
  CAEC_Fallback_Comic: undefined,
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: undefined,
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: undefined,
  /** flyers and handouts */
  CAEC_Fallback_Flier: undefined,
  /** hardcover books */
  CAEC_Fallback_Hardcover: undefined,
  /** literature magazines */
  CAEC_Fallback_Magazine: undefined,
  /** newspapers */
  CAEC_Fallback_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: undefined,
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: undefined,
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: undefined,
  /** softcover books */
  CAEC_Fallback_Softcover: undefined,
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: undefined,
  /** pistols and handguns */
  CAEC_Fallback_Handgun: undefined,
  /** firearm magazines */
  CAEC_Fallback_Mag: undefined,
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: undefined,
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: undefined,
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: undefined,
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bira"
   */
  CAEC_Override_Beer: undefined,
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: undefined,
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: undefined,
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Kahveli"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: undefined,
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: undefined,
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: undefined,
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Meyve suyu"
   */
  CAEC_Override_Juice: undefined,
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: undefined,
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Süt"
   */
  CAEC_Override_Milk: undefined,
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Meşrubat"
   */
  CAEC_Override_SoftDrink: undefined,
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Çaylı"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Su"
   */
  CAEC_Override_Water: undefined,
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Şarap"
   */
  CAEC_Override_Wine: undefined,
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: undefined,
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: undefined,
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: undefined,
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: undefined,
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: undefined,
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: undefined,
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: undefined,
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: undefined,
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: undefined,
  /** photos */
  CAEC_Fallback_Photo: undefined,
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: undefined,
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: undefined,
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: undefined,
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: undefined,
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: undefined,
};
