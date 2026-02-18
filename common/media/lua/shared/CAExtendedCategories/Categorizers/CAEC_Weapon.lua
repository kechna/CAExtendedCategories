local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

--- @class CAEC_WeaponCategorizer: CAEC_ItemCategorizer
--- @field public asMeleeWeapon fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?): string|nil
--- @field public asFirearm fun(self: CAEC_WeaponCategorizer, item: Item, instance: InventoryItem?): string|nil
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
  ToolWelding = true,
}
function Weapon:validate(item, _instance)
  return item:isItemType(ItemType.WEAPON)
      and not item:hasTag(ItemTag.NO_MAINTENANCE_XP)
end

--- @param item Item
--- @param _instance InventoryItem?
--- @return string|nil
function Weapon:asMeleeWeapon(item, _instance)
  ---@type Set<WeaponCategory>
  local categories = item:getWeaponCategories()

  if not categories then
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

  local resolved = Utils.CreateInstanceIfNeeded(item, instance)

  if resolved:isTwoHandWeapon() then
    local ammoType = tostring(resolved:getAmmoType())

    if ammoType:contains("shell") or ammoType:contains("slug") then
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
  local category = item:getDisplayCategory()

  if category == "BrokenWeapon" then
    return category
  end

  if item:hasTag(ItemTag.FIREARM) then
    return Weapon:asFirearm(item, instance)
  end

  return Weapon:asMeleeWeapon(item, instance)
end

return Weapon
