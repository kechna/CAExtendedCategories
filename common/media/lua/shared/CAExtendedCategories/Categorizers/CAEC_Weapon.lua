local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_WeaponCategorizer: CAEC_ItemCategorizer
--- @field public asMeleeWeapon fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?): string|nil
--- @field public asFirearm fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?): string|nil

--- @type CAEC_WeaponCategorizer
local Weapon = CAEC_ItemCategorizer:derive("Weapon")

local WeaponComboCategories = {
  AnimalPart = true,
  Cooking = true,
  FirstAid = true,
  Fishing = true,
  Gardening = true,
  Household = true,
  Instrument = true,
  Junk = true,
  Material = true,
  Sports = true,
  Tool = true,
  VehicleMaintenance = true,
}

function Weapon:validate(item, _instance)
  return item:isItemType(ItemType.WEAPON)
end

--- @param item Item
--- @param _instance InventoryItem?
--- @return string|nil
function Weapon:asMeleeWeapon(item, _instance)
  ---@type Set<WeaponCategory>
  local categories = item:getWeaponCategories()

  if not categories then
    self:log("No weapon categories for " .. item:getName())
    return nil
  end

  --- @type string|nil
  local category = nil

  if categories:contains(WeaponCategory.AXE) then
    category = "WeaponAxe"
  elseif categories:contains(WeaponCategory.BLUNT) then
    category = "WeaponBlunt"
  elseif categories:contains(WeaponCategory.SMALL_BLUNT) then
    category = "WeaponSmallBlunt"
  elseif categories:contains(WeaponCategory.LONG_BLADE) then
    category = "WeaponLongBlade"
  elseif categories:contains(WeaponCategory.SMALL_BLADE) then
    category = "WeaponSmallBlade"
  elseif categories:contains(WeaponCategory.SPEAR) then
    category = "WeaponSpear"
  elseif categories:contains(WeaponCategory.IMPROVISED) then
    category = "WeaponCrafted"
  --else
  --  local it = categories:iterator()
  --  self:log("Unknown melee weapon category for " .. item:getName())
  --
  --  while it:hasNext() do
  --    local cat = it:next()
  --    self:log(" - " .. tostring(cat))
  --  end
  end

  if category then
    --- @type string|nil
    local original = item:getDisplayCategory()

    if original then
      local trimmed = original:gsub("Weapon", "")

      if trimmed ~= "" and WeaponComboCategories[trimmed] then
        category = trimmed .. "Or" .. category
      end
    end
  end

  return category
end

--- @param item Item
--- @param instance InventoryItem?
--- @return string|nil
function Weapon:asFirearm(item, instance)
  --- @type string|nil
  local category = nil

  local resolved = Utils.CreateInstanceIfNeeded(item, instance, self.Type)

  if resolved:isTwoHandWeapon() then
    if resolved:getAmmoType():toString() == AmmoType.SHOTGUN_SHELLS:toString() then
      category = "FirearmShotgun"
    else
      category = "FirearmRifle"
    end
  else
    category = "FirearmHandgun"
  end

  return category
end

function Weapon:categorize(item, instance)
  if item:hasTag(ItemTag.NO_MAINTENANCE_XP)
      or item:getDisplayCategory() == "BrokenWeapon" then
    return item:getDisplayCategory()
  end

  if item:hasTag(ItemTag.FIREARM) then
    return Weapon:asFirearm(item, instance)
  end

  return Weapon:asMeleeWeapon(item, instance)
end

return Weapon
