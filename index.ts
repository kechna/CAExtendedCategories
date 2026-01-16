import { Mod, Translations } from "@pz/console";

export default new (class extends Mod {
  public override async compile(): Promise<void> {
    // const options = new SandboxOptions.File([
    //   new SandboxOptions.Option("VerboseLogging", {
    //     type: "boolean",
    //     default: false,
    //   }),
    // ]);
    //
    // this.addFile(options);

    const igui = new Translations.IGUI();

    const SOMETIMES_PERISHABLE = ["NoExplicit", "Spice"];

    const translations = {
      ClothingAccessory: "Clothing - Accessory",
      ClothingArmor: "Clothing - Armor",
      ClothingBackpack: "Clothing - Backpack",
      ClothingBody: "Clothing - Body",
      ClothingBottom: "Clothing - Bottom",
      ClothingFeet: "Clothing - Feet",
      ClothingHands: "Clothing - Hands",
      ClothingHead: "Clothing - Head",
      ClothingJewelry: "Clothing - Jewelry",
      ClothingLegs: "Clothing - Legs",
      ClothingMisc: "Clothing - Misc",
      ClothingTop: "Clothing - Top",
      ClothingUnderwear: "Clothing - Underwear",

      SkillMagazine: "Skill Magazine",

      LiteratureConsumable: "Literature - Consumable",
      LiteratureNewspaper: "Literature - Newspaper",
      LiteraturePictureBook: "Literature - Picture Book",
      LiteratureFancyBook: "Literature - Fancy Book",
      LiteratureSoftcover: "Literature - Softcover",
      LiteratureHardcover: "Literature - Hardcover",
      LiteratureMagazine: "Literature - Magazine",

      LiteratureBrochure: "Literature - Brochure",
      LiteratureFlier: "Literature - Flier",

      FoodCheese: "Food - Cheese",
      FoodEggs: "Food - Eggs",

      FoodBakingFat: "Food - Baking Fat",
      FoodChocolate: "Food - Chocolates",
      FoodCocoa: "Food - Cocoa",
      FoodCoffee: "Food - Coffee",
      FoodDried: "Food - Dried",
      FoodFlour: "Food - Flour",
      FoodNut: "Food - Nuts",
      FoodPackaged: "Food - Packaged",
      FoodPreserved: "Food - Preserved",
      FoodSeed: "Food - Seeds",
      FoodSpice: "Food - Spice",
      FoodSugar: "Food - Sugar",
      FoodTea: "Food - Tea",

      FoodWhole: "Food - Whole",
      FoodPerishable: "Food - Perishable",

      FoodJuice: "Food - Juice",

      FoodBean: "Food - Beans",
      FoodBerry: "Food - Berries",
      FoodBread: "Food - Bread",
      FoodRice: "Food - Rice",
      FoodPasta: "Food - Pasta",
      FoodCandy: "Food - Candy",

      FoodFruits: "Food - Fruits",
      FoodMushroom: "Food - Mushrooms",
      FoodGreens: "Food - Greens",
      FoodVegetables: "Food - Vegetables",
      FoodCitrus: "Food - Citrus",

      FoodInsect: "Food - Insects",

      FoodSeafood: "Food - Seafood",
      FoodFish: "Food - Fish",
      FoodRoe: "Food - Roe",
      FoodHotPepper: "Food - Hot Pepper",
      FoodDogFood: "Food - Dogs",
      FoodCatFood: "Food - Cats",

      FoodHerb: "Food - Herb",
      FoodThickener: "Food - Thickener",
      FoodStock: "Food - Stock",

      // meat
      FoodBacon: "Food - Bacon",
      FoodBeef: "Food - Beef",
      FoodGame: "Food - Game",
      FoodMeat: "Food - Meat",
      FoodPork: "Food - Pork",
      FoodPoultry: "Food - Poultry",
      FoodVenison: "Food - Venison",
      FoodSausage: "Food - Sausage",

      FoodNoExplicit: "Food - Condiment",

      FoodCanned: "Food - Canned",
      FoodCrafted: "Food - Crafted",
      FoodPortion: "Food - Portion",

      BeverageAlcohol: "Beverage - Alcohol",
      BeverageBeer: "Beverage - Beer",
      BeverageCoffee: "Beverage - Coffee",
      BeverageDrink: "Beverage - Drink",
      BeverageMilk: "Beverage - Milk",
      BeverageSoda: "Beverage - Soda",
      BeverageTea: "Beverage - Tea",
      BeverageWater: "Beverage - Water",
      BeverageWine: "Beverage - Wine",

      ContainerLiquid: "Container - Liquid",

      AmmoMagazine: "Ammo - Magazine",
      AmmoBox: "Ammo - Box",
      AmmoCarton: "Ammo - Carton",

      ElectronicsBox: "Electronics - Box",
      FirstAidBox: "First Aid - Box",
      FoodBox: "Food - Box",
      JunkBox: "Junk - Box",
      LightSourceBox: "Light Source - Box",
      MaterialBox: "Material - Box",
      MaterialBundled: "Material - Bundled",
      MaterialCarton: "Material - Carton",
      SkillBookBox: "Skill Book - Box",

      // slash categories
      LightSourceOrElectronics: "Light Source / Electronics",
    };

    Object.entries(translations).forEach(([key, value]) => {
      const [, type] = /^Food(\w+)$/.exec(key) ?? [];

      if (type && type !== "Perishable" && SOMETIMES_PERISHABLE.includes(type)) {
        // @ts-expect-error todo
        translations[`${key}Perishable`] = value + " / Perishable";
      }
    });

    igui.translate("EN", translations);

    this.addFiles(igui.getFiles());

    return super.compile();
  }
})([]);
