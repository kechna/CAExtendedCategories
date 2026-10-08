local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

---@class CAEC_WeaponCategorizer: CAEC_ItemCategorizer
---@field public asMeleeWeapon  fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?): string | nil
---@field public asRangedWeapon fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?, group: CAEC_AmmoGroup?): string | nil
---@field public asFirearm      fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?, group: CAEC_AmmoGroup?): string | nil
local Weapon = CAEC_ItemCategorizer:derive("Weapon")

-- existing categories that get combined with the weapon category instead of being replaced
---@type table<string, boolean>
Weapon.ComboCategories = {
  AnimalPart = true,
  Cooking = true,
  CookingUtensil = true,
  FirstAid = true,
  Fishing = true,
  Gardening = true,
  Household = true,
  HouseholdCleaning = true,
  Instrument = true,
  Junk = true,
  Material = true,
  VehicleMaintenance = true,

  Tool = true,
  ToolBlacksmith = true,
  ToolButchering = true,
  ToolCarpentry = true,
  ToolFlintKnapping = true,
  ToolGardening = true,
  ToolMaintenance = true,
  ToolMasonry = true,
  ToolMechanics = true,
  ToolPottery = true,
  ToolTailoring = true,
  ToolWelding = true
}

---@param category string
function Weapon.registerComboCategory(category)
  Weapon.ComboCategories[category] = true
end

function Weapon:validate(item, _instance)
  return item:isItemType(ItemType.WEAPON) and not item:hasTag(ItemTag.NO_MAINTENANCE_XP)
end

---@param item     Item
---@param instance InventoryItem?
---@return string | nil
function Weapon:asMeleeWeapon(item, instance)
  ---@type Set<WeaponCategory>
  local categories = item:getWeaponCategories()

  if not categories then
    return nil
  end

  ---@type string | nil
  local category = nil
  local baseCategory = "Weapon"

  if categories:contains(WeaponCategory.AXE) then
    category = baseCategory .. "Axe"
  elseif categories:contains(WeaponCategory.BLUNT) then
    category = baseCategory .. "Blunt"
  elseif categories:contains(WeaponCategory.SMALL_BLUNT) then
    category = baseCategory .. "SmallBlunt"
  elseif categories:contains(WeaponCategory.LONG_BLADE) then
    category = baseCategory .. "LongBlade"
  elseif categories:contains(WeaponCategory.SMALL_BLADE) then
    category = baseCategory .. "SmallBlade"
  elseif categories:contains(WeaponCategory.SPEAR) then
    category = baseCategory .. "Spear"
  elseif categories:contains(WeaponCategory.IMPROVISED) then
    category = baseCategory .. "Crafted"
  end

  if not category then
    return nil
  end

  -- what the rest of the chain makes of this item (Weapon skips itself there), else the script's own category
  ---@type string | nil
  local resolved = self:resolveCategory(item, item, instance)
  local original = resolved or Utils.getOriginalCategory(item)

  if original then
    local trimmed = original:gsub(baseCategory, "")

    if trimmed ~= "" and self.ComboCategories[trimmed] then
      return trimmed .. "__" .. category
    end
  end

  -- not combinable, so a more specific category (e.g. CookingPan for frying pans) wins
  return resolved or category
end

function Weapon:getAmmoGroup(item, instance)
  local resolved = Utils.createInstanceIfNeeded(item, instance)

  ---@type AmmoType | nil
  local ammoType = resolved and resolved:getAmmoType()

  if ammoType then
    local group = Ammo.getAmmoGroup(ammoType)

    if group then
      return group
    else
      self:log("unknown ammo type: " .. tostring(ammoType))
    end
  end

  return nil
end

---@param item     Item
---@param instance InventoryItem?
---@param group    CAEC_AmmoGroup? pass it when already known, to avoid resolving it again
---@return string | nil
function Weapon:asFirearm(item, instance, group)
  ---@type string | nil
  local category = nil
  local baseCategory = "Firearm"

  group = group or self:getAmmoGroup(item, instance)

  if not group then
    self:log("unknown ammo group for " .. item:getFullName())
  elseif group == Ammo.AmmoGroup.BOW then
    category = self:asRangedWeapon(item, instance, group)
  else
    category = baseCategory .. group
  end

  return category
end

---@param item     Item
---@param instance InventoryItem?
---@param group    CAEC_AmmoGroup? pass it when already known, to avoid resolving it again
---@return string | nil
function Weapon:asRangedWeapon(item, instance, group)
  ---@type string | nil
  local category = nil
  local baseCategory = "Weapon"

  group = group or self:getAmmoGroup(item, instance)

  if not group then
    self:log("unknown ammo group for " .. item:getFullName())
  elseif group == Ammo.AmmoGroup.HANDGUN or group == Ammo.AmmoGroup.RIFLE or group == Ammo.AmmoGroup.SHOTGUN then
    return self:asFirearm(item, instance, group)
  else
    category = baseCategory .. group
  end

  return category
end

function Weapon:categorize(item, instance)
  local category = Utils.getOriginalCategory(item)

  if category == "BrokenWeapon" then
    return category
  end

  if item:hasTag(ItemTag.FIREARM) then
    return self:asFirearm(item, instance)
  elseif item:getLootType() == "RangedWeapon" then
    return self:asRangedWeapon(item, instance)
  end

  return self:asMeleeWeapon(item, instance)
end

return Weapon
