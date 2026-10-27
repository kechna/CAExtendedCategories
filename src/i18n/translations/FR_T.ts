import type { ExternalTranslations } from "../types";

/**
 * French
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
export const FR: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessoire"
   */
  CAEC_Fallback_Accessory: "Accessoire",
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munition"
   */
  CAEC_Fallback_Ammo: "Munitions",
  /**
   * animals
   *
   * found in-game:
   *   IGUI_ItemCat_Animal = "Animal"
   */
  CAEC_Fallback_Animal: "Animal",
  /**
   * animal parts, bones, sinew, hides
   *
   * found in-game:
   *   IGUI_ItemCat_AnimalPart = "Morceau d'animal"
   */
  CAEC_Fallback_AnimalPart: "Partie d'animal",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Apparence"
   */
  CAEC_Fallback_Appearance: "Apparence",
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Camping"
   */
  CAEC_Fallback_Camping: "Camping",
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartographie"
   */
  CAEC_Fallback_Cartography: "Cartographie",
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Vêtement"
   */
  CAEC_Fallback_Clothing: "Vêtement",
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Communications"
   */
  CAEC_Fallback_Communications: "Communications",
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Sac"
   *   ContextMenu_Container = "Conteneur"
   */
  CAEC_Fallback_Container: "Sac",
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cuisine"
   */
  CAEC_Fallback_Cooking: "Cuisine",
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Électronique"
   */
  CAEC_Fallback_Electronics: "Électronique",
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Divertissement"
   */
  CAEC_Fallback_Entertainment: "Divertissement",
  /**
   * sources of fire such as matches and lighters
   *
   * found in-game:
   *   IGUI_ItemCat_FireSource = "Source de feu"
   */
  CAEC_Fallback_FireSource: "Source de feu",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Premiers soins"
   */
  CAEC_Fallback_FirstAid: "Premiers soins",
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pêche"
   *   IGUI_CraftCategory_Fishing = "Pêche"
   *   ContextMenu_Fishing = "Pêche"
   */
  CAEC_Fallback_Fishing: "Pêche",
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Nourriture"
   */
  CAEC_Fallback_Food: "Nourriture",
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Meuble"
   */
  CAEC_Fallback_Furniture: "Meuble",
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Jardinage"
   *   ContextMenu_Gardening = "Jardinage"
   */
  CAEC_Fallback_Gardening: "Jardinage",
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Ménage"
   */
  CAEC_Fallback_Household: "Ménage",
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Instrument de musique"
   */
  CAEC_Fallback_Instrument: "Instrument",
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Déchet"
   */
  CAEC_Fallback_Junk: "Déchet",
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Source de lumière"
   */
  CAEC_Fallback_LightSource: "Source de lumière",
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Littérature"
   */
  CAEC_Fallback_Literature: "Livre",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Matériaux"
   */
  CAEC_Fallback_Material: "Matériel",
  /**
   * keepsakes and souvenirs
   *
   * found in-game:
   *   IGUI_ItemCat_Memento = "Mémento"
   */
  CAEC_Fallback_Memento: "Souvenir",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Peinture"
   */
  CAEC_Fallback_Paint: "Peinture",
  /**
   * protective equipment such as body armor, helmets, knee pads
   *
   * found in-game:
   *   IGUI_ItemCat_ProtectiveGear = "Équipement de protection"
   */
  CAEC_Fallback_ProtectiveGear: "Équipement de protection",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Livre d'apprentissage"
   */
  CAEC_Fallback_SkillBook: "Livre d'apprentissage",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sport"
   */
  CAEC_Fallback_Sports: "Sport",
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Outil"
   */
  CAEC_Fallback_Tool: "Outil",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Piégeage"
   */
  CAEC_Fallback_Trapping: "Piégeage",
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Entretien véhicule"
   */
  CAEC_Fallback_VehicleMaintenance: "Maintenance véhicule",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arme"
   */
  CAEC_Fallback_Weapon: "Arme",
  /** axe weapon skill */
  CAEC_Fallback_Axe: "Hache",
  /**
   * blacksmith skill
   *
   * found in-game:
   *   ContextMenu_Blacksmith = "Forge"
   */
  CAEC_Fallback_Blacksmith: "Forge",
  /** long blunt weapon skill */
  CAEC_Fallback_Blunt: "Armes contondantes longues",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Boucherie",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Menuiserie"
   */
  CAEC_Fallback_Carpentry: "Menuiserie",
  /** carving skill */
  CAEC_Fallback_Carving: "Sculpture",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Électrique"
   */
  CAEC_Fallback_Electrical: "Électrique",
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agriculture"
   *   ContextMenu_Farming = "Agriculture"
   */
  CAEC_Fallback_Farming: "Agriculture",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Taille de silex",
  /** foraging skill */
  CAEC_Fallback_Foraging: "Cueillette",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Verrerie",
  /**
   * animal husbandry/care skill
   *
   * found in-game:
   *   IGUI_perks_Husbandry = "Élevage"
   */
  CAEC_Fallback_Husbandry: "Élevage",
  /** long blade weapon skill */
  CAEC_Fallback_LongBlade: "Armes tranchantes longues",
  /** maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Entretien",
  /** masonry skill */
  CAEC_Fallback_Masonry: "Maçonnerie",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_ItemCat_Mechanics = "Mécanique"
   */
  CAEC_Fallback_Mechanics: "Mécanique",
  /** metalworking skill (for items that are relevant in both welding and blacksmith */
  CAEC_Fallback_Metalworking: "Métallurgie",
  /** pottery skill */
  CAEC_Fallback_Pottery: "Poterie",
  /** short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Armes tranchantes courtes",
  /** short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Armes contondantes courtes",
  /** spear weapon skill */
  CAEC_Fallback_Spear: "Lance",
  /** tailoring skill */
  CAEC_Fallback_Tailoring: "Couture",
  /** tracking skill */
  CAEC_Fallback_Tracking: "Pistage",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Travail des métaux"
   */
  CAEC_Fallback_Welding: "Travail des métaux",
  /** raw metal materials such as sheet metal, scrap metal, pipes and wire */
  CAEC_Override_Metal: "Métal",
  /** raw stone materials such as stones, rocks and limestone */
  CAEC_Override_Stone: "Pierre",
  /** raw wood materials such as planks, logs and branches */
  CAEC_Override_Wood: "Bois",
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Bras",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Bas",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Visage",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Chaussures",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Corps entier",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Mains",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Tête"
   */
  CAEC_Fallback_Head: "Tête",
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Bijoux",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Jambes",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Cou"
   */
  CAEC_Fallback_Neck: "Cou",
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Vêtements d'extérieur",
  /** hosiery and socks */
  CAEC_Override_Socks: "Chaussettes",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Haut du corps",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Sous-vêtements",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Cuisson au four",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pain"
   */
  CAEC_Fallback_Bread: "Pain",
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Bonbon"
   */
  CAEC_Fallback_Candy: "Sucrerie",
  /** canned food items */
  CAEC_Override_Canned: "En conserve",
  /** dairy products such as cheese and eggs */
  CAEC_Fallback_Dairy: "Produits laitiers",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Plat",
  /** frozen food, such as ice cream */
  CAEC_Override_Frozen: "Surgelé",
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Herbes"
   */
  CAEC_Fallback_Herb: "Herbe",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Viande"
   */
  CAEC_Fallback_Meat: "Viande",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Périssable",
  /** food for pets */
  CAEC_Fallback_PetFood: "Animaux de compagnie",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservé",
  /** fresh fruits, vegetables, mushrooms and hot peppers */
  CAEC_Fallback_Produce: "Fruits et légumes",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Fruits de mer"
   */
  CAEC_Fallback_Seafood: "Fruits de mer",
  /** snack foods (e.g. chips, cookies, nuts, seeds) */
  CAEC_Override_Snack: "En-cas",
  /** spices and seasonings, salt, pepper, bouillon cubes, etc. */
  CAEC_Fallback_Spice: "Épices",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Aliment de base",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulte",
  /** regular books */
  CAEC_Fallback_Book: "Livre",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Brochure",
  /** comic books */
  CAEC_Fallback_Comic: "Bande dessinée",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consommable",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Livre de luxe",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Tract",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Couverture rigide",
  /** literature magazines */
  CAEC_Fallback_Magazine: "Magazine",
  /** newspapers */
  CAEC_Fallback_Newspaper: "Journal",
  /** picture books */
  CAEC_Fallback_PictureBook: "Livre d'images",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recette",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manuel de JDR",
  /** softcover books */
  CAEC_Fallback_Softcover: "Couverture souple",
  /** notebooks, journals and other items you can write in */
  CAEC_Override_Writing: "Écriture",
  /** bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Arc",
  /** firearm drums */
  CAEC_Fallback_Drum: "Chargeur tambour",
  /** explosives such as pipe bombs and molotovs, and the ammo for them */
  CAEC_Override_Explosive: "Explosif",
  /**
   * firearm category, pistols, rifles, shotguns, etc.
   *
   * found in-game:
   *   IGUI_perks_Firearm = "Arme à feu"
   *   IGUI_ItemCat_Firearm = "Arme à feu"
   */
  CAEC_Fallback_Firearm: "Arme à feu",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistolet",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Chargeur",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Fusil",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Fusil à pompe",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcool",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Bière"
   */
  CAEC_Fallback_Beer: "Bière",
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   IGUI_ItemCat_Beverage = "Boisson"
   */
  CAEC_Fallback_Beverage: "Boisson",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Café"
   */
  CAEC_Fallback_Coffee: "Café",
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Teinture",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Boisson énergisante",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Carburant",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Jus"
   */
  CAEC_Fallback_Juice: "Jus",
  /**
   * top-level category for non-drinkable liquids, and used in 'Container - Liquid'
   *
   * found in-game:
   *   IGUI_ItemCat_Liquid = "Liquide"
   */
  CAEC_Fallback_Liquid: "Liquide",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Lait"
   *   ContextMenu_Milk = "Traire"
   */
  CAEC_Fallback_Milk: "Lait",
  /** poisonous liquids, such as bleach */
  CAEC_Override_Poison: "Poison",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Boisson sucrée"
   */
  CAEC_Override_SoftDrink: "Soda",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Thé"
   */
  CAEC_Fallback_Tea: "Thé",
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Eau"
   */
  CAEC_Fallback_Water: "Eau",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vin"
   */
  CAEC_Fallback_Wine: "Vin",
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Boîte",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Ensemble",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Carton",
  /**
   * alarm clocks and similar devices
   *
   * found in-game:
   *   IGUI_ItemCat_AlarmClock = "Réveil"
   */
  CAEC_Fallback_AlarmClock: "Réveil",
  /** radios and similar devices that receive broadcasts */
  CAEC_Override_Radio: "Radio",
  /** remote controls and similar devices */
  CAEC_Override_Remote: "Télécommande",
  /** walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Talkie-walkie",
  /** audio cassette tapes */
  CAEC_Override_Cassette: "Cassette",
  /** music CDs */
  CAEC_Override_CD: "CD",
  /** VHS video tapes */
  CAEC_Override_VHS: "VHS",
  /**
   * feed for farm animals, like cows, pigs, chickens, etc.
   *
   * found in-game:
   *   ContextMenu_FoodType_AnimalFeed = "Nourriture pour animaux"
   */
  CAEC_Fallback_AnimalFeed: "Nourriture pour animaux",
  /**
   * bicycles! for the fantastic bicycle mod
   *
   * found in-game:
   *   IGUI_ItemCat_Bicycle = "Vélo"
   */
  CAEC_Fallback_Bicycle: "Vélo",
  /** for items to clean yourself or your base */
  CAEC_Override_Cleaning: "Nettoyage",
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
  /**
   * construction and renovation supplies such as paint, plaster and wallpaper
   *
   * found in-game:
   *   IGUI_ItemCat_Construction = "Construction"
   */
  CAEC_Fallback_Construction: "Construction",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artisanal",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Tasse",
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Couvert",
  /** ring or bundle of keys */
  CAEC_Override_KeyRing: "Trousseau de clés",
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: "Poêle",
  /**
   * parts for crafting or repairing items, such as vehicle parts or weapon parts
   *
   * found in-game:
   *   IGUI_health_Part = "Zone"
   *   IGUI_ItemCat_Part = "Zone"
   */
  CAEC_Fallback_Part: "Zone",
  /** photos */
  CAEC_Fallback_Photo: "Photo",
  /** pictures and framed photos kept as mementos */
  CAEC_Override_Picture: "Image",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluche",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Graine"
   */
  CAEC_Fallback_Seed: "Graine",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Sachet de graines",
  /**
   * smoking items such as cigarettes, cigars, pipes
   *
   * found in-game:
   *   IGUI_ItemCat_Smoking = "Fumer"
   */
  CAEC_Fallback_Smoking: "Fumer",
  /** toys, such as toy cars and action figures, and toy guns and their ammo */
  CAEC_Override_Toy: "Jouet",
  /** small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Babiole",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Ustensile",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Portable",
};
