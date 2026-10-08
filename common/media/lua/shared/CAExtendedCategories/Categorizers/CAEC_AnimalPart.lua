local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_AnimalPartCategorizer: CAEC_ItemCategorizer
---@field tags     ItemTag[]
---@field ItemsMap table<string, boolean>
local AnimalPart = CAEC_ItemCategorizer:derive("AnimalPart")

AnimalPart.tags = table.newarray(
  --
  ItemTag.ANIMAL_BONE,
  ItemTag.ANIMAL_BRAIN,
  ItemTag.ANIMAL_CORPSE,
  ItemTag.ANIMAL_HEAD,
  ItemTag.ANIMAL_SKULL,
  ItemTag.BONE,
  ItemTag.FEATHER,
  ItemTag.LARGE_ANIMAL_BONE,
  ItemTag.SMALL_ANIMAL_BONE
)

---@type table<string, boolean>
AnimalPart.ItemsMap = {
  --["Base.Frog"] = true,
}

function AnimalPart:categorize(item, instance)
  local category = nil

  if AnimalPart.ItemsMap[item:getFullName()] or Utils.hasAnyTag(item, AnimalPart.tags) then
    category = "AnimalPart"

    --- @cast instance Food
    if instanceof(instance, "Food") and instance:canAge() then
      category = category .. "Perishable"
    end
  end

  return category, false
end

return AnimalPart
