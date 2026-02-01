export enum ToyCategory {
  Badger = "Badger",
  Bear = "Bear",
  Beaver = "Beaver",
  Bug = "Bug",
  Bunny = "Bunny",
  Dog = "Dog",
  Duck = "Duck",
  Eye = "Eye",
  Fox = "Fox",
  Frog = "Frog",
  Goblin = "Goblin",
  Hedgehog = "Hedgehog",
  Mole = "Mole",
  Raccoon = "Raccoon",
  Spider = "Spider",
  Squirrel = "Squirrel",
  Teddy = "Teddy",
}

export enum OtherCategory {
  Corpse = "Corpse",
  // clothing item
  Ears = "Ears",
  // butt clothing item
  Tail = "Tail",
  MaleBody = "MaleBody",
  Wound = "Wound",
  ZedDmg = "ZedDmg",

  Generic = "Generic",
  Hidden = "Hidden",
  Bandage = "Bandage",

  // keys, renamed to KeyRing
  Security = "Security",

  // handled by liquids
  Water = "Water",
  WaterContainer = "WaterContainer",
}

export enum WeaponCategory {
  AnimalPartWeapon = "AnimalPartWeapon",
  CookingWeapon = "CookingWeapon",
  FirstAidWeapon = "FirstAidWeapon",
  FishingWeapon = "FishingWeapon",
  GardeningWeapon = "GardeningWeapon",
  HouseholdWeapon = "HouseholdWeapon",
  InstrumentWeapon = "InstrumentWeapon",
  JunkWeapon = "JunkWeapon",
  MaterialWeapon = "MaterialWeapon",
  SportsWeapon = "SportsWeapon",
  ToolWeapon = "ToolWeapon",
  VehicleMaintenanceWeapon = "VehicleMaintenanceWeapon",

  Weapon = "Weapon",
}

export enum WeaponAdjacentCategory {
  BrokenWeapon = "BrokenWeapon",
  Explosives = "Explosives",
  WeaponCrafted = "WeaponCrafted",
  WeaponImprovised = "WeaponImprovised",
  WeaponPart = "WeaponPart",
}

export enum BaseGameCategory {
  Accessory = "Accessory",
  Ammo = "Ammo",
  Animal = "Animal",
  AnimalPart = "AnimalPart",
  Appearance = "Appearance",
  Bag = "Bag",

  Camping = "Camping",
  Cartography = "Cartography",
  Clothing = "Clothing",
  Communications = "Communications",
  Container = "Container",
  Cooking = "Cooking",
  Electronics = "Electronics",
  Entertainment = "Entertainment",
  FireSource = "FireSource",
  FirstAid = "FirstAid",
  Fishing = "Fishing",
  Food = "Food",
  Furniture = "Furniture",
  Gardening = "Gardening",
  Household = "Household",
  Instrument = "Instrument",
  Junk = "Junk",
  LightSource = "LightSource",
  Literature = "Literature",
  Material = "Material",
  Memento = "Memento",
  Paint = "Paint",
  ProtectiveGear = "ProtectiveGear",
  SkillBook = "SkillBook",
  Sports = "Sports",

  Tool = "Tool",
  Trapping = "Trapping",
  VehicleMaintenance = "VehicleMaintenance",
}

export const BOXABLE_CATEGORIES = [
  BaseGameCategory.Ammo,
  BaseGameCategory.AnimalPart,
  BaseGameCategory.Cooking,
  BaseGameCategory.Electronics,
  BaseGameCategory.FirstAid,
  BaseGameCategory.Fishing,
  BaseGameCategory.Food,
  BaseGameCategory.Junk,
  BaseGameCategory.LightSource,
  BaseGameCategory.Literature,
  BaseGameCategory.Material,
  BaseGameCategory.Memento,
  BaseGameCategory.SkillBook,
];

export type AnyCategory = BaseGameCategory | WeaponCategory | ToyCategory | OtherCategory;
