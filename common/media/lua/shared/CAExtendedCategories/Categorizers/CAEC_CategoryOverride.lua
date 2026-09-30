local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

---@class CAEC_CategoryOverrideCategorizer: CAEC_ItemCategorizer
---@field public CategoryMap table<string, string>
local CategoryOverride = CAEC_ItemCategorizer:derive("CategoryOverride")

CategoryOverride.CategoryMap = {
  Badger = "Animal",
  Bear = "Animal",
  Beaver = "Animal",
  Bug = "Animal",
  Bunny = "Animal",
  Dog = "Animal",
  Duck = "Animal",
  Ears = "Accessory",
  Fox = "Animal",
  Frog = "Animal",
  Hedgehog = "Animal",
  Mole = "Animal",
  Raccoon = "Animal",
  Spider = "Animal",
  Squirrel = "Animal",
  Tail = "Accessory",
  VehicleMaintenance = "Mechanics",
  Water = "BeverageWater",
  WaterContainer = "ContainerLiquid"
}

function CategoryOverride.registerCategory(category, overrideCategory)
  CategoryOverride.CategoryMap[category] = overrideCategory
end

function CategoryOverride:validate(_item, _instance)
  return true
end

function CategoryOverride:categorize(item, _instance)
  local category = item:getDisplayCategory()

  if not category then
    return nil
  end

  return CategoryOverride.CategoryMap[category] or nil
end

return CategoryOverride
