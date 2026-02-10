local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

--- @class CAEC_CategoryOverrideCategorizer: CAEC_ItemCategorizer
--- @field public CategoryMap table<string, string>
local CategoryOverride = CAEC_ItemCategorizer:derive("CategoryOverride")

local defaultNew = CategoryOverride.new

function CategoryOverride:new()
  --- @type CAEC_CategoryOverrideCategorizer
  local o = defaultNew(self)

  o.CategoryMap = {
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
    WaterContainer = "ContainerLiquid",
  }

  return o
end

function CategoryOverride:validate(item, _instance)
  return true
end

function CategoryOverride:categorize(item, _instance)
  local category = item:getDisplayCategory()

  if not category then
    return nil
  end

  return self.CategoryMap[category] or nil
end

return CategoryOverride
