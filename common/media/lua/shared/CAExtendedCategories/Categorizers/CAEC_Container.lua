local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_ContainerCategorizer: CAEC_ItemCategorizer
local Container = CAEC_ItemCategorizer:derive("Container")

---@type table<string, string>
Container.ItemTypes = {
  -- cooking
  ["Base.Bag_FoodCanned"] = "Cooking",
  ["Base.Bag_FoodSnacks"] = "Cooking",
  ["Base.Bag_PicnicBasket"] = "Household",
  ["Base.CookieJar"] = "Cooking",
  ["Base.Cooler"] = "Cooking",
  ["Base.Cooler_Beer"] = "Cooking",
  ["Base.Cooler_Meat"] = "Cooking",
  ["Base.Cooler_Seafood"] = "Cooking",
  ["Base.Cooler_Soda"] = "Cooking",
  ["Base.Lunchbag"] = "Cooking",
  ["Base.Lunchbox"] = "Cooking",
  ["Base.TakeoutBox_Styrofoam"] = "Cooking",
  ["Base.TakeoutBox_Chinese"] = "Cooking",

  -- vehicle maintenance
  ["Base.Toolbox_Mechanic"] = "VehicleMaintenance",

  ["Base.PlasticBag"] = "Household"
}

---@type table<ItemTag | string, string>
Container.TagTypes = {
  [ItemTag.GARBAGE_BAG] = "Household",

  [ItemTag.AMMO_CASE] = "Ammo",
  [ItemTag.RELOAD_FAST_BULLETS] = "Ammo",
  [ItemTag.RELOAD_FAST_MAGAZINES] = "Ammo",
  [ItemTag.RELOAD_FAST_SHELLS] = "Ammo",

  [ItemTag.HOLD_DIRT] = "Farming",
  [ItemTag.HOLD_COMPOST] = "Farming"
}

---@param containerType string
---@param tag           ItemTag | string
function Container.registerTag(containerType, tag)
  Container.TagTypes[tag] = containerType
end

---@param containerType string
---@param fullName      string
function Container.registerItem(containerType, fullName)
  Container.ItemTypes[fullName] = containerType
end

---@deprecated Use `Container.registerTag("Ammo", tag)` instead.
---@param tag ItemTag | string
function Container.registerAmmoTag(tag)
  Container.registerTag("Ammo", tag)
end

---@param item Item
---@return string | nil
function Container.getType(item)
  local itemType = Container.ItemTypes[item:getFullName()]

  if itemType or item:getTags():size() == 0 then
    return itemType
  end

  for tag, tagType in pairs(Container.TagTypes) do
    if item:hasTag(Utils.toTag(tag)) then
      return tagType
    end
  end

  return nil
end

function Container:validate(item, _instance)
  return item:isItemType(ItemType.CONTAINER) and not item:hasTag(ItemTag.HOLLOW_BOOK)
end

function Container:categorize(item, _instance)
  if item:hasTag(ItemTag.KEY_RING) then
    return "KeyRing"
  end

  local bloodClothingType = item:getBloodClothingType()
  local typeName = Container.getType(item) or ""

  ---@diagnostic disable-next-line: unnecessary-if
  if item:getBodyLocation() ~= nil
    or item:hasTag(ItemTag.DUFFEL_BAG)
    or (bloodClothingType and bloodClothingType:contains(BloodClothingType.Bag))
    then
    return "ContainerWearable" .. typeName
  end

  if item:hasTag(ItemTag.IS_MEMENTO) then
    return "Memento__Container"
  end

  return "Container" .. typeName
end

return Container
