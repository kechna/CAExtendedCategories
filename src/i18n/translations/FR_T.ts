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
   *   IGUI_ItemCat_Ammo = "Munitions"
   */
  CAEC_Fallback_Ammo: "Munitions",
  /** animals */
  CAEC_Fallback_Animal: "Animal",
  /** animal parts, bones, sinew, hides */
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
   *   IGUI_perks_Cooking = "Cuisine"
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
   *   IGUI_ItemCat_Entertainment = "Entraînement"
   */
  CAEC_Fallback_Entertainment: "Entraînement",
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Source de feu",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_perks_Doctor = "Premiers secours"
   *   IGUI_ItemCat_FirstAid = "Premiers soins"
   */
  CAEC_Fallback_FirstAid: "Premiers soins",
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
   *   IGUI_ItemCat_Instrument = "Instrument"
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
   *   IGUI_ItemCat_Literature = "Livre"
   */
  CAEC_Fallback_Literature: "Livre",
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Matériel"
   */
  CAEC_Fallback_Material: "Matériel",
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Souvenir",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Peinture"
   */
  CAEC_Fallback_Paint: "Peinture",
  /** protective equipment such as body armor, helmets, knee pads */
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
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Maintenance véhicule"
   */
  CAEC_Fallback_VehicleMaintenance: "Maintenance véhicule",
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arme"
   */
  CAEC_Fallback_Weapon: "Arme",
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Hache"
   */
  CAEC_Fallback_Axe: "Hache",
  /**
   * blacksmithing skill
   *
   * found in-game:
   *   IGUI_perks_Blacksmith = "Forge"
   */
  CAEC_Override_Blacksmith: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Armes contondantes longues"
   */
  CAEC_Fallback_Blunt: "Armes contondantes longues",
  /** butchering skill */
  CAEC_Fallback_Butchering: "Boucherie",
  /**
   * carpentry skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Carpentry = "Menuiserie"
   *   IGUI_perks_Carpentry = "Menuiserie"
   */
  CAEC_Override_Carpentry: undefined,
  /** carving skill */
  CAEC_Fallback_Carving: "Sculpture",
  /**
   * electrical skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Electrical = "Électricité"
   */
  CAEC_Override_Electrical: undefined,
  /**
   * farming/agriculture skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Farming = "Agriculture"
   *   IGUI_perks_Farming = "Agriculture"
   */
  CAEC_Override_Farming: undefined,
  /**
   * fishing skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pêche"
   *   IGUI_perks_Fishing = "Pêche"
   *   ContextMenu_Fishing = "Pêche"
   *   IGUI_CraftCategory_Fishing = "Pêche"
   */
  CAEC_Fallback_Fishing: "Pêche",
  /** knapping skill */
  CAEC_Fallback_FlintKnapping: "Taille de silex",
  /**
   * foraging skill
   *
   * found in-game:
   *   IGUI_perks_Foraging = "Recherche"
   */
  CAEC_Override_Foraging: undefined,
  /**
   * gardening skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Jardinage"
   */
  CAEC_Fallback_Gardening: "Jardinage",
  /** glassmaking skill */
  CAEC_Fallback_Glassmaking: "Verrerie",
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Armes tranchantes longues"
   */
  CAEC_Fallback_LongBlade: "Armes tranchantes longues",
  /**
   * maintenance skill for maintaining and repairing tools and weapons
   *
   * found in-game:
   *   IGUI_perks_Maintenance = "Entretien"
   */
  CAEC_Override_Maintenance: undefined,
  /** masonry skill */
  CAEC_Fallback_Masonry: "Maçonnerie",
  /**
   * mechanics skill, vehicle maintenance
   *
   * found in-game:
   *   IGUI_perks_Mechanics = "Mécanique"
   */
  CAEC_Override_Mechanics: undefined,
  /**
   * metalworking skill (for items that are relevant in both welding and blacksmithing
   *
   * found in-game:
   *   IGUI_perks_Metalworking = "Travail des métaux"
   */
  CAEC_Override_Metalworking: undefined,
  /** pottery skill */
  CAEC_Fallback_Pottery: "Poterie",
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Armes tranchantes courtes"
   */
  CAEC_Fallback_SmallBlade: "Armes tranchantes courtes",
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Armes contondantes courtes"
   */
  CAEC_Fallback_SmallBlunt: "Armes contondantes courtes",
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Lance"
   */
  CAEC_Fallback_Spear: "Lance",
  /**
   * tailoring skill
   *
   * found in-game:
   *   IGUI_perks_Tailoring = "Couture"
   */
  CAEC_Override_Tailoring: undefined,
  /** tracking skill */
  CAEC_Fallback_Tracking: "Pistage",
  /**
   * trapping skill and items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Piégeage"
   *   IGUI_perks_Trapping = "Piégeage"
   */
  CAEC_Fallback_Trapping: "Piégeage",
  /**
   * welding skill
   *
   * found in-game:
   *   IGUI_CraftCategory_Welding = "Travail des métaux"
   */
  CAEC_Override_Welding: undefined,
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
   *   ContextMenu_FoodType_Candy = "Sucrerie"
   */
  CAEC_Fallback_Candy: "Sucrerie",
  /** canned food items */
  CAEC_Override_Canned: "En conserve",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Fromage"
   */
  CAEC_Fallback_Cheese: "Fromage",
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Plat",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Fruit"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Herbe"
   */
  CAEC_Fallback_Herb: "Herbe",
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Piments"
   */
  CAEC_Fallback_HotPepper: "Piments",
  /** edible insects */
  CAEC_Fallback_Insect: "Insectes",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Bétail",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Viande"
   */
  CAEC_Fallback_Meat: "Viande",
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Champignons"
   */
  CAEC_Fallback_Mushroom: "Champignons",
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Noix"
   */
  CAEC_Override_Nut: undefined,
  /** food items that can spoil */
  CAEC_Override_Perishable: "Périssable",
  /** food for pets */
  CAEC_Fallback_PetFood: "Animaux de compagnie",
  /** single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservé",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Fruits de mer"
   */
  CAEC_Fallback_Seafood: "Fruits de mer",
  /**
   * loose plantable seeds for gardening/farming
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Graine"
   */
  CAEC_Fallback_Seed: "Graine",
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "En-cas",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Épices",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Aliment de base",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Bouillon"
   */
  CAEC_Fallback_Stock: "Bouillon",
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Sucre"
   */
  CAEC_Fallback_Sugar: "Sucre",
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Légume"
   */
  CAEC_Override_Vegetables: "Légumes",
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulte",
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
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Arme à feu",
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
  CAEC_Override_Beer: "dans un verre",
  /** top-level category for drinkable liquids */
  CAEC_Fallback_Beverage: "Boisson",
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Café"
   */
  CAEC_Override_Coffee: undefined,
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
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Liquide",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Lait"
   */
  CAEC_Fallback_Milk: "Lait",
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Boisson sans alcool"
   */
  CAEC_Override_SoftDrink: "Soda",
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Thé"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Arroser"
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
  /** compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
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
  /** photos */
  CAEC_Fallback_Photo: "Photo",
  /** for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Peluche",
  /** packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Sachet de graines",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumer",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Ustensile",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Portable",
};
