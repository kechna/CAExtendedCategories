local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_Literature: CAEC_ItemCategorizer
local Literature = CAEC_ItemCategorizer:derive("Literature")

function Literature:validate(item, _instance)
  local displayCategory = item:getDisplayCategory()

  return displayCategory ~= "Gardening"
      -- exclude mementos like photos, letters, etc.
      and displayCategory ~= "Memento"
    and (item:isItemType(ItemType.LITERATURE)
        -- include hollowed out books which are containers
        or item:hasTag(ItemTag.HOLLOW_BOOK))
end

function Literature:categorize(item, instance)
  local category = nil
  local baseCategory = "Literature"

  if instanceof(instance, "Literature") then
    ---@cast instance Literature
    if instance:canBeWrite() or item:hasTag(ItemTag.ERASER) then
      if item:hasTag(ItemTag.UNINTERESTING) then
        category = baseCategory .. "__Junk"
      else
        category = baseCategory .. "Writing"
      end
    elseif instance:getLearnedRecipes() ~= nil then
      category = baseCategory .. "Recipe"
    end
  end

  if category then
    --Debug.log(
    --  string.format("%-20s instance: %s", item:getFullName(), category), self.Type,
    --  Debug.Level.Info
    --)
    return category
  end

  if item:hasTag(ItemTag.UNINTERESTING) then
    category = baseCategory .. "__Junk"
  elseif item:hasTag(ItemTag.CONSUME_ON_READ) then
    category = baseCategory .. "Consumable"
  elseif item:hasTag(ItemTag.APPLY_OWNER_NAME) then
    category = baseCategory .. "Writing"
  elseif item:hasTag(ItemTag.NEWSPAPER) then
    category = baseCategory .. "Newspaper"
  elseif item:hasTag(ItemTag.PICTUREBOOK) then
    category = baseCategory .. "PictureBook"
  elseif item:hasTag(ItemTag.FANCY_BOOK) then
    category = baseCategory .. "FancyBook"
  elseif item:hasTag(ItemTag.SOFTCOVER) then
    category = baseCategory .. "Softcover"
  elseif item:hasTag(ItemTag.HARDCOVER)
      -- not exposing hollow books separately, keeping them "hidden" with real books
      or item:hasTag(ItemTag.HOLLOW_BOOK) then
    category = baseCategory .. "Hardcover"
  elseif item:getLearnedRecipes() ~= nil then
    category = baseCategory .. "Recipe"
  elseif item:hasTag(ItemTag.MAGAZINE) then
    category = baseCategory .. "Magazine"
  elseif item:getSkillTrained() ~= "" then
    category = "SkillBook"
  elseif item:getReadType() == "Photo" then
    category = baseCategory .. "Photo"
  else
    category = baseCategory .. "__Junk"
  end

  --Debug.log(
  --  string.format("%-20s item: %s", item:getFullName(), category), self.Type, Debug.Level.Info
  --)

  return category
end

return Literature
