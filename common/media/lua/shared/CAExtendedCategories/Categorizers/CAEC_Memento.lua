local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_MementoCategorizer: CAEC_ItemCategorizer
---@field MementoCategories table<string, boolean>      A table of valid memento categories
---@field registerCategory  fun(category: string): void Registers a new memento category
local Memento = CAEC_ItemCategorizer:derive("Memento")

function Memento:validate(item, _instance)
  return Utils.getOriginalLootType(item) == "Memento" or item:hasTag(ItemTag.IS_MEMENTO)
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

--- lowercase parts of an icon or world model name that mark a plushie, for items without a known display category
---@type string[]
Memento.PlushieModels = table.newarray("plush", "teddybear", "toybear")

function Memento.registerCategory(category)
  Memento.MementoCategories[category] = true
end

---@param item Item
---@return boolean
local function hasPlushieModel(item)
  local icon = item:getIcon()
  local model = item:getWorldStaticModel()
  local names = ((icon or "") .. " " .. (model or "")):lower()

  for i = 1, #Memento.PlushieModels do
    if names:contains(Memento.PlushieModels[i]) then
      return true
    end
  end

  return false
end

---@param item     Item
---@param category string | nil
---@return boolean
local function isPlushie(item, category)
  if not item:isItemType(ItemType.NORMAL) then
    return false
  end

  -- modded plushies such as from authentic z don't have the proper tags
  if hasPlushieModel(item) then
    return true
  end

  return item:hasTag(ItemTag.IS_FIRE_TINDER) and (category ~= nil and Memento.MementoCategories[category] == true)
end

---@param item     Item
---@param category string | nil
---@return boolean
local function isRubberToy(item, category)
  return (category ~= nil and Memento.RubberCategories[category] == true) or item:getName():contains("Rubber")
end

function Memento:categorize(item, _instance)
  if item:isItemType(ItemType.CONTAINER) then
    return "Memento__Container"
  end

  local category = Utils.getOriginalCategory(item)

  if isPlushie(item, category) then
    return "MementoPlushie"
  end

  if isRubberToy(item, category) then
    return "MementoToy"
  end

  if category and Memento.MementoCategories[category] then
    return "Memento"
  end

  if item:hasTag(ItemTag.PICTURE) then
    return "MementoPicture"
  end

  if item:hasTag(ItemTag.FITS_WALLET) then
    return "MementoTrinket"
  end

  return "Memento"
end

return Memento
