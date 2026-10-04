import type { ExternalTranslations } from "../types";

/**
 * Catalan
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
export const CA: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessori"
   */
  CAEC_Fallback_Accessory: "Accessori",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munició"
   */
  CAEC_Fallback_Ammo: "Munició",
  /** animals */
  CAEC_Fallback_Animal: "Animal",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Part d'animal",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Aspecte"
   */
  CAEC_Fallback_Appearance: "Aspecte",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Acampada"
   */
  CAEC_Fallback_Camping: "Acampada",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartografia"
   */
  CAEC_Fallback_Cartography: "Cartografia",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Roba"
   */
  CAEC_Fallback_Clothing: "Roba",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Comunicacions"
   */
  CAEC_Fallback_Communications: "Comunicacions",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Contenidor"
   *   ContextMenu_Container = "Contenidors"
   */
  CAEC_Fallback_Container: "Contenidor",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cuina"
   */
  CAEC_Fallback_Cooking: "Cuina",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Electrònica"
   */
  CAEC_Fallback_Electronics: "Electrònica",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Entreteniment"
   */
  CAEC_Fallback_Entertainment: "Entreteniment",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Font de foc",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Primers auxilis"
   */
  CAEC_Fallback_FirstAid: "Primers auxilis",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pesca"
   *   ContextMenu_Fishing = "Pesca"
   *   IGUI_CraftCategory_Fishing = "Pesca"
   */
  CAEC_Fallback_Fishing: "Pesca",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Menjar"
   */
  CAEC_Fallback_Food: "Menjar",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Moble"
   */
  CAEC_Fallback_Furniture: "Moble",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Jardineria"
   *   ContextMenu_Gardening = "Jardineria"
   */
  CAEC_Fallback_Gardening: "Jardineria",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Domèstic"
   */
  CAEC_Fallback_Household: "Domèstic",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrument"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Runa"
   */
  CAEC_Fallback_Junk: "Runa",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Font de llum"
   */
  CAEC_Fallback_LightSource: "Font de llum",
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
   *   IGUI_ItemCat_Material = "Material"
   */
  CAEC_Fallback_Material: "Material",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Record",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Pintura"
   */
  CAEC_Fallback_Paint: "Pintura",
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Equipament de protecció",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Llibre d'habilitats"
   */
  CAEC_Fallback_SkillBook: "Llibre d'habilitats",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Esport"
   */
  CAEC_Fallback_Sports: "Esport",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Ferramenta"
   */
  CAEC_Fallback_Tool: "Ferramenta",
  /** trapping skill and items */
  CAEC_Fallback_Trapping: "Trampes",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Manteniment del vehicle"
   */
  CAEC_Fallback_VehicleMaintenance: "Manteniment del vehicle",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Fallback_Weapon: "Arma",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Destral",
  /** blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Ferreria",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Contundent llarg",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Carnisseria",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Fusteria"
   */
  CAEC_Fallback_Carpentry: "Fusteria",
  /** carving skill */
  CAEC_Fallback_Carving: "Talla",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Electricitat"
   */
  CAEC_Fallback_Electrical: "Electricitat",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agricultura"
   */
  CAEC_Fallback_Farming: "Agricultura",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Talla de pedra",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Recol·lecció",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Vidrieria",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Fulla llarga",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Manteniment",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Paleta",
  /** mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mecànica",
  /** metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metal·lúrgia",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Terrisseria",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Fulla curta",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Contundent curt",
  /** spear weapon skill */
  CAEC_Override_Spear: "Llança",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Costura",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Rastreig",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Metal·listeria"
   */
  CAEC_Fallback_Welding: "Metal·listeria",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Braços",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Part inferior",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Cara",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calçat",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Cos sencer",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Mans",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Cap"
   */
  CAEC_Fallback_Head: "Cap",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Joieria",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Cames",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Coll"
   */
  CAEC_Fallback_Neck: "Coll",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Roba d'abric",
  /** hosiery and socks */
  CAEC_Override_Socks: "Mitjons",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Part superior",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Roba interior",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Rebosteria",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pa"
   */
  CAEC_Fallback_Bread: "Pa",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Llepolia"
   */
  CAEC_Fallback_Candy: "Llepolia",
  /** canned food items */
  CAEC_Override_Canned: "En llauna",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Lactis",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Plat",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Herba"
   */
  CAEC_Fallback_Herb: "Herba",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carn"
   */
  CAEC_Fallback_Meat: "Carn",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Perible",
  /** food for pets */
  CAEC_Fallback_PetFood: "Mascotes",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porció",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "En conserva",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Fruita i verdura",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Marisc"
   */
  CAEC_Fallback_Seafood: "Marisc",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Llavor"
   */
  CAEC_Fallback_Seed: "Llavor",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Aperitiu",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Espècia",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Aliment bàsic",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adults",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Fullet",
  /** comic books */
  CAEC_Fallback_Comic: "Còmic",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumible",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Llibre de luxe",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Octaveta",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Tapa dura",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Revista",
  /** newspapers */
  CAEC_Override_Newspaper: "Periòdic",
  /** picture books */
  CAEC_Fallback_PictureBook: "Llibre il·lustrat",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recepta",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manual de rol",
  /** softcover books */
  CAEC_Fallback_Softcover: "Tapa tova",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Arc",
  /** firearm drums */
  CAEC_Fallback_Drum: "Tambor",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Arma de foc",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Carregador",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Rifle",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Escopeta",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcohol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Cervesa"
   */
  CAEC_Fallback_Beer: "Cervesa",
  /** top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Beguda",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Còctel",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Café"
   */
  CAEC_Override_Coffee: "Cafè",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Tint",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Beguda energètica",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Combustible",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Suc"
   */
  CAEC_Fallback_Juice: "Suc",
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Líquid",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Llet"
   *   ContextMenu_Milk = "Munyir"
   */
  CAEC_Fallback_Milk: "Llet",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Refresc"
   */
  CAEC_Fallback_SoftDrink: "Refresc",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Té"
   */
  CAEC_Override_Tea: "Te",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Aigua"
   */
  CAEC_Fallback_Water: "Aigua",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vi"
   */
  CAEC_Fallback_Wine: "Vi",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Capsa",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Lligat",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Cartró",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Despertador"
   */
  CAEC_Fallback_AlarmClock: "Despertador",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Comandament",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-talkie",
  /** bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Bicicleta",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artesanal",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Tassa",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Coberts",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Clauer",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Olla",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Zona"
   */
  CAEC_Fallback_Part: "Zona",
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluix",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Sobre de llavors",
  /** feed for farm animals, like cows, pigs, chickens, etc. */
  CAEC_Fallback_AnimalFeed: "Menjar d'animals",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumar",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Bibelot",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Estri de cuina",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Portable",
};
