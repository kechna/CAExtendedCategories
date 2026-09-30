local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_MementoCategorizer: CAEC_ItemCategorizer
---@field MementoCategories table<string, boolean>      A table of valid memento categories
---@field registerCategory  fun(category: string): void Registers a new memento category
local Memento = CAEC_ItemCategorizer:derive("Memento")

function Memento:validate(item, _instance)
  return item:getLootType() == "Memento" or item:hasTag(ItemTag.IS_MEMENTO)
end

Memento.MementoCategories = {
  ["Badger"] = true,
  ["Bear"] = true,
  ["Beaver"] = true,
  ["Bug"] = true,
  ["Bunny"] = true,
  ["Dog"] = true,
  ["Duck"] = true,
  ["Eye"] = true,
  ["Fox"] = true,
  ["Frog"] = true,
  ["Goblin"] = true,
  ["Hedgehog"] = true,
  ["Mole"] = true,
  ["Raccoon"] = true,
  ["Spider"] = true,
  ["Squirrel"] = true,
  ["Teddy Bear"] = true
}

Memento.RubberCategories = { ["Duck"] = true, ["Spider"] = true }

function Memento.registerCategory(category)
  Memento.MementoCategories[category] = true
end

function Memento:categorize(item, _instance)
  if item:isItemType(ItemType.CONTAINER) then
    return "Memento__Container"
  end

  ---@type string | nil
  local category = "Memento"

  ---@type string | nil
  local existingCategory = item:getDisplayCategory()

  if existingCategory and Memento.MementoCategories[existingCategory] then
    if item:hasTag(ItemTag.IS_FIRE_TINDER) then
      category = category .. "Plushie"
    elseif Memento.RubberCategories[existingCategory] then
      category = category .. "Toy"
    end
  elseif item:hasTag(ItemTag.PICTURE) then
    category = category .. "Picture"
  elseif item:hasTag(ItemTag.FITS_WALLET) then
    category = category .. "Trinket"
  end

  return category
end

return Memento
