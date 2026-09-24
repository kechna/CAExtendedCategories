local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
---@class CAEC_Literature: CAEC_ItemCategorizer
local Literature = CAEC_ItemCategorizer:derive("Literature")

function Literature:validate(item, _instance)
  local displayCategory = item:getDisplayCategory()

  return -- exclude seed packets
      displayCategory ~= "Gardening"
      -- exclude mementos like photos, letters, etc.
      and displayCategory ~= "Memento"
      and (
        item:isItemType(ItemType.LITERATURE)
        -- include hollowed out books which are containers
        or item:hasTag(ItemTag.HOLLOW_BOOK)
      )
end

function Literature:categorize(item, instance)
  local category = nil

  if instanceof(instance, "Literature") then
    ---@cast instance Literature
    if instance:canBeWrite() then
      return "LiteratureOrJunk"
    elseif instance:getLearnedRecipes() ~= nil then
      return "LiteratureRecipe"
    end
  end

  if item:hasTag(ItemTag.UNINTERESTING) then
    category = "LiteratureOrJunk"
  elseif item:hasTag(ItemTag.CONSUME_ON_READ) then
    category = "LiteratureConsumable"
  elseif item:hasTag(ItemTag.NEWSPAPER) then
    category = "LiteratureNewspaper"
  elseif item:hasTag(ItemTag.PICTUREBOOK) then
    category = "LiteraturePictureBook"
  elseif item:hasTag(ItemTag.FANCY_BOOK) then
    category = "LiteratureFancyBook"
  elseif item:hasTag(ItemTag.SOFTCOVER) then
    category = "LiteratureSoftcover"
  elseif item:hasTag(ItemTag.HARDCOVER)
      -- not exposing hollow books separately, keeping them "hidden" with real books
      or item:hasTag(ItemTag.HOLLOW_BOOK)
  then
    category = "LiteratureHardcover"
  elseif item:getLearnedRecipes() ~= nil then
    category = "LiteratureRecipe"
  elseif item:hasTag(ItemTag.MAGAZINE) then
    category = "LiteratureMagazine"
  elseif item:getSkillTrained() ~= "" then
    category = "SkillBook"
  elseif item:getReadType() == "Photo" then
    category = "LiteraturePhoto"
  else
    category = "LiteratureOrJunk"
  end

  return category
end

return Literature
