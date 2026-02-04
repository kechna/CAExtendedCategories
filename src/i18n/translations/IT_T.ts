import type { ExternalTranslations } from "../types";

/**
 * Italian
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
export const IT: ExternalTranslations = {
  /**
   * accessories such as watches, necklaces, belts, gloves
   *
   * found in-game:
   *   IGUI_ItemCat_Accessory = "Accessorio"
   */
  CAEC_Override_Accessory: undefined,
  /**
   * firearm ammunition
   *
   * found in-game:
   *   IGUI_ItemCat_Ammo = "Munizioni"
   */
  CAEC_Override_Ammo: undefined,
  /** animals */
  CAEC_Fallback_Animal: "Animale",
  /** animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Parte di animale",
  /**
   * character appearance items such as makeup
   *
   * found in-game:
   *   IGUI_ItemCat_Appearance = "Aspetto"
   */
  CAEC_Override_Appearance: undefined,
  /**
   * camping supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Camping = "Campeggio"
   */
  CAEC_Override_Camping: undefined,
  /**
   * maps of locations
   *
   * found in-game:
   *   IGUI_ItemCat_Cartography = "Cartografia"
   */
  CAEC_Override_Cartography: undefined,
  /**
   * clothing such as shirts, pants, dresses
   *
   * found in-game:
   *   IGUI_ItemCat_Clothing = "Vestito"
   */
  CAEC_Override_Clothing: undefined,
  /**
   * communication devices such as walkie talkies, radios
   *
   * found in-game:
   *   IGUI_ItemCat_Communications = "Comunicazioni"
   */
  CAEC_Override_Communications: undefined,
  /**
   * items that can hold other items, such as boxes, bags, and crates
   *
   * found in-game:
   *   IGUI_ItemCat_Container = "Contenitore"
   *   ContextMenu_Container = "Contenitori"
   */
  CAEC_Override_Container: undefined,
  /**
   * cooking items such as pots, pans, utensils
   *
   * found in-game:
   *   IGUI_ItemCat_Cooking = "Cucina"
   *   IGUI_perks_Cooking = "Cucinare"
   */
  CAEC_Override_Cooking: undefined,
  /**
   * electronic items
   *
   * found in-game:
   *   IGUI_ItemCat_Electronics = "Elettronica"
   */
  CAEC_Override_Electronics: undefined,
  /**
   * entertainment items
   *
   * found in-game:
   *   IGUI_ItemCat_Entertainment = "Intrattenimento"
   */
  CAEC_Override_Entertainment: undefined,
  /** sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Fonte di fuoco",
  /**
   * first aid and medical supplies, bandages, painkillers, antiseptics
   *
   * found in-game:
   *   IGUI_ItemCat_FirstAid = "Primo soccorso"
   *   IGUI_perks_Doctor = "Pronto Soccorso"
   */
  CAEC_Override_FirstAid: undefined,
  /**
   * fishing gear
   *
   * found in-game:
   *   IGUI_ItemCat_Fishing = "Pesca"
   *   IGUI_perks_Fishing = "Pesca"
   *   ContextMenu_Fishing = "Pesca"
   */
  CAEC_Override_Fishing: undefined,
  /**
   * food items
   *
   * found in-game:
   *   IGUI_ItemCat_Food = "Cibo"
   */
  CAEC_Override_Food: undefined,
  /**
   * furniture items
   *
   * found in-game:
   *   IGUI_ItemCat_Furniture = "Mobili"
   */
  CAEC_Override_Furniture: undefined,
  /**
   * gardening items
   *
   * found in-game:
   *   IGUI_ItemCat_Gardening = "Giardinaggio"
   */
  CAEC_Override_Gardening: undefined,
  /**
   * household items
   *
   * found in-game:
   *   IGUI_ItemCat_Household = "Domestico"
   */
  CAEC_Override_Household: undefined,
  /**
   * instruments
   *
   * found in-game:
   *   IGUI_ItemCat_Instrument = "Strumento"
   */
  CAEC_Override_Instrument: undefined,
  /**
   * miscellaneous junk items, worthless items
   *
   * found in-game:
   *   IGUI_ItemCat_Junk = "Robaccia"
   */
  CAEC_Override_Junk: undefined,
  /**
   * items that provide light such as flashlights, lanterns
   *
   * found in-game:
   *   IGUI_ItemCat_LightSource = "Fonte di luce"
   */
  CAEC_Override_LightSource: undefined,
  /**
   * books and printed reading material
   *
   * found in-game:
   *   IGUI_ItemCat_Literature = "Lettura"
   */
  CAEC_Override_Literature: undefined,
  /**
   * crafting materials and building supplies
   *
   * found in-game:
   *   IGUI_ItemCat_Material = "Materiale"
   */
  CAEC_Override_Material: undefined,
  /** keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Ricordo",
  /**
   * paint items
   *
   * found in-game:
   *   IGUI_ItemCat_Paint = "Vernice"
   */
  CAEC_Override_Paint: undefined,
  /** protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Protezioni",
  /**
   * skill books
   *
   * found in-game:
   *   IGUI_ItemCat_SkillBook = "Libro delle abilitÃ"
   */
  CAEC_Override_SkillBook: "Libro delle abilità",
  /**
   * sports items
   *
   * found in-game:
   *   IGUI_ItemCat_Sports = "Sport"
   */
  CAEC_Override_Sports: undefined,
  /**
   * tools, such as hammers, wrenches, screwdrivers
   *
   * found in-game:
   *   IGUI_ItemCat_Tool = "Attrezzo"
   */
  CAEC_Override_Tool: undefined,
  /**
   * trapping items
   *
   * found in-game:
   *   IGUI_ItemCat_Trapping = "Trappole"
   *   IGUI_perks_Trapping = "Costruire Trappole"
   */
  CAEC_Override_Trapping: undefined,
  /**
   * vehicle maintenance items
   *
   * found in-game:
   *   IGUI_ItemCat_VehicleMaintenance = "Manutenzione del veicolo"
   */
  CAEC_Override_VehicleMaintenance: undefined,
  /**
   * weapons in general
   *
   * found in-game:
   *   IGUI_ItemCat_Weapon = "Arma"
   */
  CAEC_Override_Weapon: undefined,
  /**
   * axe weapon skill
   *
   * found in-game:
   *   IGUI_perks_Axe = "Ascia"
   */
  CAEC_Override_Axe: undefined,
  /**
   * long blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_Blunt = "Contundente"
   */
  CAEC_Override_Blunt: undefined,
  /**
   * long blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_LongBlade = "Lama lunga"
   */
  CAEC_Override_LongBlade: undefined,
  /**
   * short blade weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlade = "Lama corta"
   */
  CAEC_Override_SmallBlade: undefined,
  /**
   * short blunt weapon skill
   *
   * found in-game:
   *   IGUI_perks_SmallBlunt = "Contundente corto"
   */
  CAEC_Override_SmallBlunt: undefined,
  /**
   * spear weapon skill
   *
   * found in-game:
   *   IGUI_perks_Spear = "Lancia"
   */
  CAEC_Override_Spear: undefined,
  /** items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Braccia",
  /** lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Parte inferiore",
  /** facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Viso",
  /** shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Calzature",
  /** full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Corpo intero",
  /** for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Mani",
  /**
   * for items worn on the head such as hats, helmets (but not masks)
   *
   * found in-game:
   *   IGUI_health_Head = "Testa"
   */
  CAEC_Override_Head: undefined,
  /** jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Gioielli",
  /** for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Gambe",
  /**
   * neckwear such as scarves, necklaces
   *
   * found in-game:
   *   IGUI_health_Neck = "Collo"
   */
  CAEC_Override_Neck: undefined,
  /** upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Capispalla",
  /** hosiery and socks */
  CAEC_Override_Socks: "Calze",
  /** upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Parte superiore",
  /** undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Intimo",
  /** items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Da forno",
  /**
   * baked bread products
   *
   * found in-game:
   *   ContextMenu_FoodType_Bread = "Pane"
   *   ItemName_Base.Bread = "Pane"
   */
  CAEC_Override_Bread: undefined,
  /**
   * sweets and candies
   *
   * found in-game:
   *   ContextMenu_FoodType_Candy = "Caramella"
   */
  CAEC_Override_Candy: undefined,
  /** canned food items */
  CAEC_Override_Canned: "In scatola",
  /**
   * dairy cheese products
   *
   * found in-game:
   *   ContextMenu_FoodType_Cheese = "Formaggio"
   *   ItemName_Base.Cheese = "Formaggio"
   */
  CAEC_Override_Cheese: undefined,
  /** prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Piatti pronti",
  /**
   * fresh fruit, including berries and citrus
   *
   * found in-game:
   *   ContextMenu_FoodType_Fruits = "Frutta"
   */
  CAEC_Override_Fruits: undefined,
  /**
   * culinary or medicinal plants/herbs
   *
   * found in-game:
   *   ContextMenu_FoodType_Herb = "Erba"
   */
  CAEC_Override_Herb: undefined,
  /**
   * spicy hot peppers
   *
   * found in-game:
   *   ContextMenu_FoodType_HotPepper = "Peperoncini piccanti"
   */
  CAEC_Override_HotPepper: undefined,
  /** edible insects */
  CAEC_Fallback_Insect: "Insetti",
  /** feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Mangime",
  /**
   * any non-fish meat
   *
   * found in-game:
   *   ContextMenu_FoodType_Meat = "Carne"
   */
  CAEC_Override_Meat: undefined,
  /**
   * mushrooms/fungi
   *
   * found in-game:
   *   ContextMenu_FoodType_Mushroom = "Funghi"
   */
  CAEC_Override_Mushroom: undefined,
  /**
   * nuts such as walnuts, almonds, peanuts
   *
   * found in-game:
   *   ContextMenu_FoodType_Nut = "Dado"
   */
  CAEC_Override_Nut: "Frutta secca",
  /** food items that can spoil */
  CAEC_Override_Perishable: "Deperibile",
  /** food for pets */
  CAEC_Fallback_PetFood: "Pet",
  /** single serving portion of food */
  CAEC_Override_Portion: "Porzione",
  /** preserved food, such as jarred food */
  CAEC_Override_Preserved: "Conservato",
  /**
   * fish and other seafood
   *
   * found in-game:
   *   ContextMenu_FoodType_Seafood = "Frutti di mare"
   */
  CAEC_Override_Seafood: undefined,
  /**
   * seeds for consumption, e.g. sunflower seeds, pumpkin seeds
   *
   * found in-game:
   *   ContextMenu_FoodType_Seed = "Seme"
   */
  CAEC_Override_Seed: undefined,
  /** snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /** spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Spezie",
  /** basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Alimenti di base",
  /**
   * items used to make cooking stock or broth, such as bouillon cubes
   *
   * found in-game:
   *   ContextMenu_FoodType_Stock = "Brodo"
   */
  CAEC_Override_Stock: undefined,
  /**
   * sugar and sweeteners
   *
   * found in-game:
   *   ContextMenu_FoodType_Sugar = "Zucchero"
   *   ItemName_Base.Sugar = "Zucchero"
   */
  CAEC_Override_Sugar: undefined,
  /**
   * vegetables, including leafy greens
   *
   * found in-game:
   *   ContextMenu_FoodType_Vegetables = "Verdure"
   */
  CAEC_Override_Vegetables: undefined,
  /** adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adulti",
  /** informational brochures */
  CAEC_Fallback_Brochure: "Opuscolo",
  /** comic books */
  CAEC_Fallback_Comic: "Fumetto",
  /** consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Enigmistica",
  /** decorative or luxury books */
  CAEC_Fallback_FancyBook: "Libro di pregio",
  /** flyers and handouts */
  CAEC_Fallback_Flier: "Volantino",
  /** hardcover books */
  CAEC_Fallback_Hardcover: "Copertina rigida",
  /**
   * literature magazines
   *
   * found in-game:
   *   ItemName_Base.Magazine = "Rivista"
   */
  CAEC_Override_Magazine: undefined,
  /**
   * newspapers
   *
   * found in-game:
   *   ItemName_Base.Newspaper = "Giornale"
   */
  CAEC_Override_Newspaper: undefined,
  /** picture books */
  CAEC_Fallback_PictureBook: "Libro illustrato",
  /** recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Ricetta",
  /** tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "Manuale GDR",
  /** softcover books */
  CAEC_Fallback_Softcover: "Copertina morbida",
  /** firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Arma da fuoco",
  /** pistols and handguns */
  CAEC_Fallback_Handgun: "Pistola",
  /** firearm magazines */
  CAEC_Fallback_Mag: "Caricatore",
  /** rifles, big firearms */
  CAEC_Fallback_Rifle: "Fucile",
  /** shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Fucile a pompa",
  /** general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcol",
  /**
   * alcoholic beer beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Beer = "Birra"
   *   ItemName_Base.Beer = "Birra in bicchiere"
   *   ItemName_Base.Beer2 = "Birra in tazza"
   */
  CAEC_Override_Beer: undefined,
  /**
   * top-level category for drinkable liquids
   *
   * found in-game:
   *   ItemName_Base.Beverage = "Bevande"
   *   ItemName_Base.Beverage2 = "Bevande"
   */
  CAEC_Override_Beverage: undefined,
  /** mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /**
   * coffee beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Coffee = "Caffè"
   *   ItemName_Base.Coffee = "Caffè"
   *   ItemName_Base.Coffee2 = "Caffè"
   */
  CAEC_Override_Coffee: undefined,
  /** liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Colorante",
  /** energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Bevanda energetica",
  /** liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Carburante",
  /**
   * fruit juice
   *
   * found in-game:
   *   ContextMenu_FoodType_Juice = "Succo"
   */
  CAEC_Override_Juice: undefined,
  /** top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Liquido",
  /**
   * dairy milk
   *
   * found in-game:
   *   ContextMenu_FoodType_Milk = "Latte"
   *   ItemName_Base.Milk = "Latte"
   */
  CAEC_Override_Milk: undefined,
  /**
   * carbonated soft drinks
   *
   * found in-game:
   *   ContextMenu_FoodType_SoftDrink = "Bevanda analcolica"
   */
  CAEC_Override_SoftDrink: undefined,
  /**
   * tea beverage
   *
   * found in-game:
   *   ContextMenu_FoodType_Tea = "Tè"
   */
  CAEC_Override_Tea: undefined,
  /**
   * drinking water
   *
   * found in-game:
   *   ContextMenu_Water = "Innaffia"
   */
  CAEC_Override_Water: "Acqua",
  /**
   * alcoholic wine beverages
   *
   * found in-game:
   *   ContextMenu_FoodType_Wine = "Vino"
   *   ItemName_Base.Wine = "Chardonnay"
   *   ItemName_Base.Wine2 = "Vino rosso"
   */
  CAEC_Override_Wine: undefined,
  /** things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Scatola",
  /** things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Fascio",
  /** things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Cartone",
  /** handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Artigianale",
  /** items such as cups, mugs, glasses */
  CAEC_Override_Cup: undefined,
  /** cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Posate",
  /**
   * ring or bundle of keys
   *
   * found in-game:
   *   ItemName_Base.KeyRing = "Portachiavi"
   */
  CAEC_Override_KeyRing: undefined,
  /** items such as pans/pots to cook in */
  CAEC_Override_Pan: undefined,
  /** photos */
  CAEC_Fallback_Photo: "Foto",
  /** smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Fumo",
  /** kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensile",
  /** used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Indossabile"
}
