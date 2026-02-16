---@param categorizer string
---@return fun(item: Item, instance: InventoryItem|nil): string|nil
local function create(categorizer)
  ---@type CAEC_ItemCategorizer|nil
  local cls = nil

  return function(item, instance)
    if not cls then
      local module = require("CAExtendedCategories/Categorizers/CAEC_" .. categorizer)
      cls = module:new()

      cls:initialise()
    end

    return cls:execute(item, instance)
  end
end

local Categorizers = {
  Ammo = create("Ammo"),
  Apparel = create("Apparel"),
  BoxesAndStacks = create("BoxesAndStacks"),
  CategoryOverride = create("CategoryOverride"),
  Container = create("Container"),
  Cooking = create("Cooking"),
  FluidContainer = create("FluidContainer"),
  Food = create("Food"),
  Gardening = create("Gardening"),
  Literature = create("Literature"),
  Material = create("Material"),
  Memento = create("Memento"),
  Smoking = create("Smoking"),
  Tool = create("Tool"),
  Weapon = create("Weapon"),
}

return Categorizers
