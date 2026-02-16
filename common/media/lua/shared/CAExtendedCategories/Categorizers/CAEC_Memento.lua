local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

--- @class CAEC_MementoCategorizer: CAEC_ItemCategorizer
local Memento = CAEC_ItemCategorizer:derive("Memento")

function Memento:validate(item, _instance)
  return item:getLootType() == "Memento" or item:hasTag(ItemTag.IS_MEMENTO)
end

local MementoCategories = table.newarray({
  "Badger",
  "Bear",
  "Beaver",
  "Bug",
  "Bunny",
  "Dog",
  "Duck",
  "Eye",
  "Fox",
  "Frog",
  "Goblin",
  "Hedgehog",
  "Mole",
  "Raccoon",
  "Spider",
  "Squirrel",
  "Teddy Bear",
})

function Memento:categorize(item, instance)
  if item:isItemType(ItemType.CONTAINER) then
    return "MementoOrContainer"
  end

  ---@type string|nil
  local category = nil

  ---@type string|nil
  local existingCategory = item:getDisplayCategory()

  if existingCategory then
    for _, cat in ipairs(MementoCategories) do
      if existingCategory == cat then
        if item:hasTag(ItemTag.IS_FIRE_TINDER) then
          category = "MementoPlushie"
        else
          category = "Memento"
        end
      end
    end
  end

  return category
end

return Memento
