local Utils = require("CAExtendedCategories/CAEC_Utils")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

local MOD_ID = "GunsOfMarz"

if not Utils.modIsActive(MOD_ID) then return end

Ammo._originalValidate = Ammo._originalValidate or Ammo.validate
Ammo._originalCategorize = Ammo._originalCategorize or Ammo.categorize

-- the ammo types are registered in CAEC_SWMG.lua

---@type table<string, CAEC_AmmoGroup>
local CaliberGroups = {
  ["12Gauge"] = Ammo.AmmoGroup.SHOTGUN,
  ["22"] = Ammo.AmmoGroup.HANDGUN,
  ["223"] = Ammo.AmmoGroup.RIFLE,
  ["3006"] = Ammo.AmmoGroup.RIFLE,
  ["3030"] = Ammo.AmmoGroup.RIFLE,
  ["308"] = Ammo.AmmoGroup.RIFLE,
  ["357"] = Ammo.AmmoGroup.HANDGUN,
  ["38"] = Ammo.AmmoGroup.HANDGUN,
  ["40mm"] = Ammo.AmmoGroup.EXPLOSIVE,
  ["44"] = Ammo.AmmoGroup.HANDGUN,
  ["45"] = Ammo.AmmoGroup.HANDGUN,
  ["4570"] = Ammo.AmmoGroup.RIFLE,
  ["46x30"] = Ammo.AmmoGroup.HANDGUN,
  ["50"] = Ammo.AmmoGroup.HANDGUN,
  ["545x39"] = Ammo.AmmoGroup.RIFLE,
  ["556x45"] = Ammo.AmmoGroup.RIFLE,
  ["57x28"] = Ammo.AmmoGroup.HANDGUN,
  ["762x39"] = Ammo.AmmoGroup.RIFLE,
  ["762x51"] = Ammo.AmmoGroup.RIFLE,
  ["762x54"] = Ammo.AmmoGroup.RIFLE,
  ["792x57"] = Ammo.AmmoGroup.RIFLE,
  ["9x19"] = Ammo.AmmoGroup.HANDGUN,
  ["9x39"] = Ammo.AmmoGroup.RIFLE
}

---@type table<string, string>
local KindSuffixes = { Box = "Box", Carton = "Carton", Crate = "Carton" }

--- GoM magazines and casings don't have the Ammo loot type
function Ammo:validate(item, instance)
  if Ammo:_originalValidate(item, instance) then return true end

  if item:getModID() ~= MOD_ID then return false end

  local displayCategory = Utils.getOriginalCategory(item)

  return displayCategory == "WeaponMagazine" or displayCategory == "Casings"
end

function Ammo:categorize(item, instance)
  if item:getModID() ~= MOD_ID then
    return Ammo:_originalCategorize(item, instance)
  end

  local displayCategory = Utils.getOriginalCategory(item)
  local name = item:getName()

  -- magazines: use the caliber instead of the rifle/pistol magazine tags, so SMG and shotgun mags end up in the right group
  if displayCategory == "WeaponMagazine" then
    local group = Ammo.getAmmoGroup(item:getAmmoType())

    if not group then
      return Ammo:_originalCategorize(item, instance)
    end

    if name:lower():contains("drum") and group ~= Ammo.AmmoGroup.EXPLOSIVE then
      return "Ammo" .. group .. "Drum"
    end

    return "Ammo" .. group .. "Mag"
  end

  local caliber, kind = name:match("^([^_]+)_([^_]+)")
  local group = caliber and CaliberGroups[caliber]

  if not group then
    return Ammo:_originalCategorize(item, instance)
  end

  -- spent casings and shotgun hulls
  if displayCategory == "Casings" then
    return "MaterialAmmo" .. group
  end

  return "Ammo" .. group .. (KindSuffixes[kind] or "")
end
