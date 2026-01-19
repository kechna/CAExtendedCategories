local Utils = require("CAExtendedCategories/CAEC_Utils")

local Clothing = require("CAExtendedCategories/Items/CAEC_Clothing")
local FluidContainer = require("CAExtendedCategories/Items/CAEC_FluidContainer")
local Food = require("CAExtendedCategories/Items/CAEC_Food")
local Literature = require("CAExtendedCategories/Items/CAEC_Literature")

local Categorizers = {}


---@param categorizer CAEC_ItemCategorizer
---@return fun(item: Item, instance: InventoryItem|nil): string|nil
local function createCategorizerCb(categorizer)
  return function(item, instance)
    return categorizer:execute(item, instance)
  end
end

Categorizers.AsClothing = createCategorizerCb(Clothing:new())
Categorizers.AsFluidContainer = createCategorizerCb(FluidContainer:new())
Categorizers.AsFood = createCategorizerCb(Food:new())
Categorizers.AsLiterature = createCategorizerCb(Literature:new())

---@param item Item
---@return string|nil
function Categorizers.AsMaterial(item)
  local category = Categorizers.ByRecipe(item)

  if category then
    print(item:getName() .. " recipe category: " .. tostring(category))
    return category
  end

  --print("> Material Item: ", item:getName())

  return category
end

---@param item Item
---@param _instance InventoryItem|nil
---@return string|nil, boolean
function Categorizers.AsWeapon(item, _instance)
  if not item:isItemType(ItemType.WEAPON) then
    return nil, false
  end

  -- TODO

  return nil, false
end

---@param item Item
---@return string|nil
function Categorizers.AsAmmo(item)
  if item:hasTag(ItemTag.RIFLE_MAGAZINE) or item:hasTag(ItemTag.PISTOL_MAGAZINE) then
    return "AmmoMagazine";
  end

  return nil
end

---@param item Item
---@param _instance InventoryItem|nil
---@return string|nil
function Categorizers.ByLootType(item, _instance)
  local lootType = item:getLootType()

  if lootType == "Material" then
    return Categorizers.AsMaterial(item)
  elseif lootType == "Ammo" then
    return Categorizers.AsAmmo(item)
  end
end

---@param item Item
---@return string|nil
function Categorizers.ByRecipe(item)
  ---@type string|nil
  local recipe = item:getDoubleClickRecipe()

  if not recipe then return nil end

  local category = nil
  local existingCategory = item:getDisplayCategory()
  local suffix = nil

  if recipe == "unstack_items" then
    suffix = "Bundled";
  elseif recipe:contains("Carton")
      and (Utils.StartsWith("Open", recipe)
        or Utils.StartsWith("Unpack", recipe)) then
    suffix = "Carton";
  elseif Utils.StartsWith("Unpack", recipe)
      or Utils.StartsWith("OpenBox", recipe)
      or Utils.StartsWith("TakeA", recipe) then
    suffix = "Box";
  end

  if suffix then
    category = Utils.EndsWith(suffix, existingCategory)
        and existingCategory
        or (existingCategory .. suffix)
  end

  return category
end

return Categorizers
