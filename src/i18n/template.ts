/**
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
export const TRANSLATIONS = {

  /* ===== vanilla categories ===== */

  /* accessories such as watches, necklaces, belts, gloves */
  CAEC_Fallback_Accessory: "Accessory",
  /* firearm ammunition */
  CAEC_Fallback_Ammo: "Ammo",
  /* animals */
  CAEC_Fallback_Animal: "Animal",
  /* animal parts, bones, sinew, hides */
  CAEC_Fallback_AnimalPart: "Animal Part",
  /* character appearance items such as makeup */
  CAEC_Fallback_Appearance: "Appearance",
  /* camping supplies */
  CAEC_Fallback_Camping: "Camping",
  /* maps of locations */
  CAEC_Fallback_Cartography: "Cartography",
  /* clothing such as shirts, pants, dresses */
  CAEC_Fallback_Clothing: "Clothing",
  /* communication devices such as walkie talkies, radios */
  CAEC_Fallback_Communications: "Communications",
  /* items that can hold other items, such as boxes, bags, and crates */
  CAEC_Fallback_Container: "Container",
  /* cooking items such as pots, pans, utensils */
  CAEC_Fallback_Cooking: "Cooking",
  /* electronic items */
  CAEC_Fallback_Electronics: "Electronics",
  /* entertainment items */
  CAEC_Fallback_Entertainment: "Entertainment",
  /* sources of fire such as matches and lighters */
  CAEC_Fallback_FireSource: "Fire Source",
  /* first aid and medical supplies, bandages, painkillers, antiseptics */
  CAEC_Fallback_FirstAid: "First Aid",
  /* fishing items, rods, reels, lures, bait */
  CAEC_Fallback_Fishing: "Fishing",
  /* food items */
  CAEC_Fallback_Food: "Food",
  /* furniture items */
  CAEC_Fallback_Furniture: "Furniture",
  /* gardening items, seeds, tools, fertilizers */
  CAEC_Fallback_Gardening: "Gardening",
  /* household items */
  CAEC_Fallback_Household: "Household",
  /* instruments */
  CAEC_Fallback_Instrument: "Musical Instrument",
  /* miscellaneous junk items, worthless items */
  CAEC_Fallback_Junk: "Junk",
  /* items that provide light such as flashlights, lanterns */
  CAEC_Fallback_LightSource: "Light Source",
  /* books and printed reading material */
  CAEC_Fallback_Literature: "Literature",
  /* crafting materials and building supplies */
  CAEC_Fallback_Material: "Material",
  /* keepsakes and souvenirs */
  CAEC_Fallback_Memento: "Memento",
  /* paint items */
  CAEC_Fallback_Paint: "Paint",
  /* protective equipment such as body armor, helmets, knee pads */
  CAEC_Fallback_ProtectiveGear: "Protective Gear",
  /* skill books */
  CAEC_Fallback_SkillBook: "Skill Book",
  /* sports items */
  CAEC_Fallback_Sports: "Sports",
  /* tools, such as hammers, wrenches, screwdrivers */
  CAEC_Fallback_Tool: "Tool",
  /* trapping items, traps, bait, snares */
  CAEC_Fallback_Trapping: "Trapping",
  /* vehicle maintenance items */
  CAEC_Fallback_VehicleMaintenance: "Vehicle Maintenance",
  /* weapons in general */
  CAEC_Fallback_Weapon: "Weapon",

  /* ===== skills ===== */

  /* axe weapon skill */
  CAEC_Fallback_Axe: "Axe",
  /* blacksmithing skill */
  CAEC_Fallback_Blacksmith: "Blacksmithing",
  /* long blunt weapon skill */
  CAEC_Fallback_Blunt: "Long Blunt",
  /* butchering skill */
  CAEC_Fallback_Butchering: "Butchering",
  /* carpentry skill */
  CAEC_Fallback_Carpentry: "Carpentry",
  /* carving skill */
  CAEC_Fallback_Carving: "Carving",
  /* electrical skill */
  CAEC_Fallback_Electrical: "Electrical",
  /* farming/agriculture skill */
  CAEC_Fallback_Farming: "Agriculture",
  /* fishing skill and items */
  CAEC_Fallback_Fishing: "Fishing",
  /* knapping skill */
  CAEC_Fallback_FlintKnapping: "Knapping",
  /* foraging skill */
  CAEC_Fallback_Foraging: "Foraging",
  /* gardening skill and items */
  CAEC_Fallback_Gardening: "Gardening",
  /* glassmaking skill */
  CAEC_Fallback_Glassmaking: "Glassmaking",
  /* long blade weapon skill */
  CAEC_Fallback_LongBlade: "Long Blade",
  /* maintenance skill for maintaining and repairing tools and weapons */
  CAEC_Fallback_Maintenance: "Maintenance",
  /* masonry skill */
  CAEC_Fallback_Masonry: "Masonry",
  /* mechanics skill, vehicle maintenance */
  CAEC_Fallback_Mechanics: "Mechanics",
  /* metalworking skill (for items that are relevant in both welding and blacksmithing */
  CAEC_Fallback_Metalworking: "Metalworking",
  /* pottery skill */
  CAEC_Fallback_Pottery: "Pottery",
  /* short blade weapon skill */
  CAEC_Fallback_SmallBlade: "Short Blade",
  /* short blunt weapon skill */
  CAEC_Fallback_SmallBlunt: "Short Blunt",
  /* spear weapon skill */
  CAEC_Fallback_Spear: "Spear",
  /* tailoring skill */
  CAEC_Fallback_Tailoring: "Tailoring",
  /* tracking skill */
  CAEC_Fallback_Tracking: "Tracking",
  /* trapping skill and items */
  CAEC_Fallback_Trapping: "Trapping",
  /* welding skill */
  CAEC_Fallback_Welding: "Welding",

  /* ===== apparel ===== */

  /* items worn on the arms (but not hands), like watches, shoulder pads or arm guards */
  CAEC_Override_Arms: "Arms",
  /* lower body clothing, pants, shorts, skirts */
  CAEC_Override_Bottom: "Bottom",
  /* facewear such as masks, glasses, goggles */
  CAEC_Override_Face: "Face",
  /* shoes, boots, heels, etc. (but not socks) */
  CAEC_Override_Footwear: "Footwear",
  /* full-body items such as jumpsuits, dresses, overalls */
  CAEC_Override_FullBody: "Full Body",
  /* for gloves or other accessories worn on the hands */
  CAEC_Override_Hands: "Hands",
  /* for items worn on the head such as hats, helmets (but not masks) */
  CAEC_Override_Head: "Head",
  /* jewelry items that can be scrapped for metal, such as rings, necklaces, earrings */
  CAEC_Override_Jewelry: "Jewelry",
  /* for lower body accessories/protective gear, such as knee pads, leg guards */
  CAEC_Override_Legs: "Legs",
  /* neckwear such as scarves, necklaces */
  CAEC_Override_Neck: "Neck",
  /* upper body apparel that is worn on the outer layer, such as jackets, coats, ponchos */
  CAEC_Override_Outerwear: "Outerwear",
  /* hosiery and socks */
  CAEC_Override_Socks: "Socks",
  /* upper body apparel that is not outerwear, such as shirts, sweaters, tank tops */
  CAEC_Override_Top: "Top",
  /* undergarments such as underwear, bras, boxers */
  CAEC_Override_Underwear: "Underwear",

  /* ===== food ===== */

  /* items used in baking, e.g. lard, butter, oil, flour, yeast */
  CAEC_Override_Baking: "Baking",
  /* baked bread products */
  CAEC_Fallback_Bread: "Bread",
  /* sweets and candies */
  CAEC_Override_Candy: "Candy",
  /* canned food items */
  CAEC_Override_Canned: "Canned",
  /* dairy cheese products */
  CAEC_Fallback_Cheese: "Cheese",
  /* prepared dishes, ready-to-eat meals made from multiple ingredients */
  CAEC_Override_Dish: "Dish",
  /* fresh fruit, including berries and citrus */
  CAEC_Fallback_Fruits: "Fruits",
  /* culinary or medicinal plants/herbs */
  CAEC_Fallback_Herb: "Herbs",
  /* spicy hot peppers */
  CAEC_Fallback_HotPepper: "Hot Peppers",
  /* edible insects */
  CAEC_Fallback_Insect: "Insect",
  /* feed for farm animals or cattle, like cows, pigs, chickens, etc. */
  CAEC_Fallback_Livestock: "Livestock",
  /* any non-fish meat */
  CAEC_Fallback_Meat: "Meat",
  /* mushrooms/fungi */
  CAEC_Fallback_Mushroom: "Mushroom",
  /* nuts such as walnuts, almonds, peanuts */
  CAEC_Fallback_Nut: "Nuts",
  /* food items that can spoil */
  CAEC_Override_Perishable: "Perishable",
  /* food for pets */
  CAEC_Fallback_PetFood: "Pets",
  /* single serving portion of food */
  CAEC_Override_Portion: "Portion",
  /* preserved food, such as jarred food */
  CAEC_Override_Preserved: "Preserved",
  /* fish and other seafood */
  CAEC_Fallback_Seafood: "Seafood",
  /* seeds for consumption, e.g. sunflower seeds, pumpkin seeds */
  CAEC_Fallback_Seed: "Seed",
  /* snack foods (e.g. chips, cookies) */
  CAEC_Override_Snack: "Snack",
  /* spices and seasonings, salt, pepper, etc. */
  CAEC_Fallback_Spice: "Spice",
  /* basic staple foods such as pasta, rice, beans, often used as the base of meals */
  CAEC_Fallback_Staple: "Staple",
  /* items used to make cooking stock or broth, such as bouillon cubes */
  CAEC_Fallback_Stock: "Stock",
  /* sugar and sweeteners */
  CAEC_Fallback_Sugar: "Sugar",
  /* vegetables, including leafy greens */
  CAEC_Override_Vegetables: "Vegetables",

  /* ===== literature ===== */

  /* adult-oriented content (hottiez magazines) */
  CAEC_Override_Adult: "Adult",
  /* informational brochures */
  CAEC_Fallback_Brochure: "Brochure",
  /* comic books */
  CAEC_Fallback_Comic: "Comic",
  /* consumable reading materials such as crossword and wordsearch magazines */
  CAEC_Fallback_Consumable: "Consumable",
  /* decorative or luxury books */
  CAEC_Fallback_FancyBook: "Fancy Book",
  /* flyers and handouts */
  CAEC_Fallback_Flier: "Flier",
  /* hardcover books */
  CAEC_Fallback_Hardcover: "Hardcover",
  /* literature magazines */
  CAEC_Fallback_Magazine: "Magazine",
  /* newspapers */
  CAEC_Fallback_Newspaper: "Newspaper",
  /* picture books */
  CAEC_Fallback_PictureBook: "Picture Book",
  /* recipes, readable items that teach you something */
  CAEC_Fallback_Recipe: "Recipe",
  /* tabletop RPG manuals */
  CAEC_Fallback_RpgManual: "RPG Manual",
  /* softcover books */
  CAEC_Fallback_Softcover: "Softcover",

  /* ===== firearms ===== */

  /* bows and other ranged weapons that use string tension to launch projectiles */
  CAEC_Override_Bow: "Bow",
  /* firearm drums */
  CAEC_Fallback_Drum: "Drum",
  /* firearm category, pistols, rifles, shotguns, etc. */
  CAEC_Override_Firearm: "Firearm",
  /* pistols and handguns */
  CAEC_Fallback_Handgun: "Handgun",
  /* firearm magazines */
  CAEC_Fallback_Mag: "Magazine",
  /* rifles, big firearms */
  CAEC_Fallback_Rifle: "Rifle",
  /* shotguns, rifles that shoot shells */
  CAEC_Fallback_Shotgun: "Shotgun",

  /* ===== liquids ===== */

  /* general alcoholic beverages */
  CAEC_Fallback_Alcohol: "Alcohol",
  /* alcoholic beer beverages */
  CAEC_Fallback_Beer: "Beer",
  /* top-level category for drinkable liquids */
  CAEC_Override_Beverage: "Beverage",
  /* mixed alcoholic drinks */
  CAEC_Override_Cocktail: "Cocktail",
  /* coffee beverage */
  CAEC_Override_Coffee: "Coffee",
  /* liquids used for dyeing or coloring */
  CAEC_Override_Dye: "Dye",
  /* energy drinks or otherwise highly caffeinated soft drinks */
  CAEC_Override_EnergyDrink: "Energy Drink",
  /* liquid fuels such as gasoline, diesel, kerosene */
  CAEC_Override_Fuel: "Fuel",
  /* fruit juice */
  CAEC_Fallback_Juice: "Juice",
  /* top-level category for non-drinkable liquids, and used in 'Container - Liquid' */
  CAEC_Override_Liquid: "Liquid",
  /* dairy milk */
  CAEC_Fallback_Milk: "Milk",
  /* carbonated soft drinks */
  CAEC_Override_SoftDrink: "Soft Drink",
  /* tea beverage */
  CAEC_Override_Tea: "Tea",
  /* drinking water */
  CAEC_Fallback_Water: "Water",
  /* alcoholic wine beverages */
  CAEC_Override_Wine: "Wine",

  /* ===== combined ===== */

  /* things in a (small) box, such as boxes of ammo */
  CAEC_Override_Box: "Box",
  /* things bundled or stacked together, e.g. firewood bundle, bundle of rags, rope */
  CAEC_Override_Bundled: "Bundled",
  /* things in a bigger box, such as cartons of ammo (which contain boxes of ammo) */
  CAEC_Override_Carton: "Carton",

  /* ===== Electronics ===== */

  /* alarm clocks and similar devices */
  CAEC_Override_AlarmClock: "Alarm Clock",
  /* remote controls and similar devices */
  CAEC_Override_Remote: "Remote",
  /* walkie talkies and similar communication devices */
  CAEC_Override_Walkie: "Walkie-Talkie",

  /* ===== misc ===== */

  /* bicycles! for the fantastic bicycle mod */
  CAEC_Override_Bicycle: "Bicycle",
  /* compostable items such as animal dung, to be put in a composter */
  CAEC_Override_Compostable: "Compostable",
  /* handmade, artisan items. used for player-made weapons (not food) */
  CAEC_Override_Crafted: "Crafted",
  /* items such as cups, mugs, glasses */
  CAEC_Override_Cup: "Cup",
  /* cutlery such as knives, forks, spoons or chopsticks to eat a meal with */
  CAEC_Override_Cutlery: "Cutlery",
  /* ring or bundle of keys */
  CAEC_Override_KeyRing: "Key Ring",
  /* items such as pans/pots to cook in */
  CAEC_Override_Pan: "Pan",
  /* parts for crafting or repairing items, such as vehicle parts or weapon parts */
  CAEC_Fallback_Part: "Part",
  /* photos */
  CAEC_Fallback_Photo: "Photo",
  /* for plush toys such as spiffo, boris the badger and teddy bears */
  CAEC_Override_Plushie: "Plushie",
  /* loose plantable seeds for gardening/farming */
  CAEC_Override_Seed: "Seed",
  /* packet of plantable seeds for gardening/farming */
  CAEC_Override_SeedPacket: "Seed Packet",
  /* smoking items such as cigarettes, cigars, pipes */
  CAEC_Override_Smoking: "Smoking",
  /* small decorative items, usually mementos, such as figurines, keychains, charms */
  CAEC_Override_Trinket: "Trinket",
  /* kitchen utensils such as spatulas, ladles, tongs, whisks, etc. */
  CAEC_Override_Utensil: "Utensil",
  /* used for containers that can be worn on the body, such as backpacks and satchels */
  CAEC_Override_Wearable: "Wearable",
};
