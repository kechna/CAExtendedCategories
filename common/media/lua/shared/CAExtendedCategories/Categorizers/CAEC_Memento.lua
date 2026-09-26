local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

--- @class CAEC_MementoCategorizer: CAEC_ItemCategorizer
local Memento = CAEC_ItemCategorizer:derive("Memento")

function Memento:validate(item, _instance)
  return item:getLootType() == "Memento" or item:hasTag(ItemTag.IS_MEMENTO)
end

local MementoCategories = {
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
  ["Teddy Bear"] = true,
}

function Memento:categorize(item, instance)
  if item:isItemType(ItemType.CONTAINER) then
    return "MementoOrContainer"
  end

  ---@type string|nil
  local category = nil

  ---@type string|nil
  local existingCategory = item:getDisplayCategory()

  if existingCategory and MementoCategories[existingCategory] then
    if item:hasTag(ItemTag.IS_FIRE_TINDER) then
      category = "MementoPlushie"
    else
      category = "Memento"
    end
  end

  return category
end

return Memento
