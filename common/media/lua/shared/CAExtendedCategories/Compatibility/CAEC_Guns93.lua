local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Weapon = require("CAExtendedCategories/Categorizers/CAEC_Weapon")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

if not Utils.modIsActive("guns93") then return end

CAEC.registerInitHook("Mod:Guns93", function ()
  Ammo.registerAmmoGroup("guns93:belt_223", Ammo.AmmoGroup.RIFLE)
  Ammo.registerAmmoGroup("guns93:belt_308", Ammo.AmmoGroup.RIFLE)
  Ammo.registerAmmoGroup("guns93:bullets_10mm", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerAmmoGroup("guns93:bullets_22", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerAmmoGroup("guns93:bullets_25", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerAmmoGroup("guns93:bullets_3006", Ammo.AmmoGroup.RIFLE)
  Ammo.registerAmmoGroup("guns93:bullets_30car", Ammo.AmmoGroup.RIFLE)
  Ammo.registerAmmoGroup("guns93:bullets_380", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerAmmoGroup("guns93:bullets_40", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerAmmoGroup("guns93:bullets_45lc", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerAmmoGroup("guns93:bullets_76239", Ammo.AmmoGroup.RIFLE)
  Ammo.registerAmmoGroup("guns93:bullets_792", Ammo.AmmoGroup.RIFLE)
  Ammo.registerAmmoGroup("guns93:bullets_slug", Ammo.AmmoGroup.SHOTGUN)
  Ammo.registerAmmoGroup("guns93:junk_remove", Ammo.AmmoGroup.HANDGUN)

  Ammo.registerItemAmmoGroup("Base.10mmBox", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.10mmBullets", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.10mmCarton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.22Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.22Bullets", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.22Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.25Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.25Bullets", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.25Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.3006Box", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.3006Bullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.3006Carton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.3030Box", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.3030Bullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.3030Carton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.308Belt", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.308BeltLink", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.308Box", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.308Bullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.308Carton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.308LinkBox", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.30CarBox", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.30CarBullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.30CarCarton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.380Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.380Bullets", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.380Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.40Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.40Bullets", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.40Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.45LCBox", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.45LCBullets", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.45LCCarton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.556Belt", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.556BeltLink", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.556Box", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.556Bullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.556Carton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.556LinkBox", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.76239Box", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.76239Bullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.76239Carton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.792Box", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.792Bullets", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.792Carton", Ammo.AmmoGroup.RIFLE)
  Ammo.registerItemAmmoGroup("Base.Bullets357", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets357Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets357Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets38", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets38Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets38Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets44", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets44Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets44Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets45", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets45Box", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets45Carton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets9mm", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets9mmBox", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.Bullets9mmCarton", Ammo.AmmoGroup.HANDGUN)
  Ammo.registerItemAmmoGroup("Base.ShotgunShells", Ammo.AmmoGroup.SHOTGUN)
  Ammo.registerItemAmmoGroup("Base.ShotgunShellsBox", Ammo.AmmoGroup.SHOTGUN)
  Ammo.registerItemAmmoGroup("Base.ShotgunShellsCarton", Ammo.AmmoGroup.SHOTGUN)
  Ammo.registerItemAmmoGroup("Base.SlugBulletBox", Ammo.AmmoGroup.SHOTGUN)
  Ammo.registerItemAmmoGroup("Base.SlugBullets", Ammo.AmmoGroup.SHOTGUN)
  Ammo.registerItemAmmoGroup("Base.SlugCarton", Ammo.AmmoGroup.SHOTGUN)
end)

--
-- Weapons: mark the bayonets that can be used as weapon as weapon parts
--

local originalAsMeleeWeapon = Weapon.asMeleeWeapon

function Weapon:asMeleeWeapon(item, instance)
  local category = originalAsMeleeWeapon(self, item, instance)
  local modId = item:getModID()

  if modId ~= "guns93" then return category end

  local name = item:getName():lower()

  if name:contains("bayo") then
    category = "WeaponPartOr" .. category
  end

  return category
end

---
--- Ammo: spent brass
---

local originalAmmoCategorize = Ammo.categorize

Gun93Registries = Gun93Registries or {}
Gun93Registries.guns93 = Gun93Registries.guns93 or {}

function Ammo:categorize(item, instance)
  local category = originalAmmoCategorize(self, item, instance)
  local modId = item:getModID()

  if modId ~= "guns93" then return category end

  if item:hasTag(Gun93Registries.guns93.SpentBrass) or item:hasTag(Gun93Registries.guns93.SpentCase) then
    return "Material" .. (category or "Ammo")
  end

  return category
end
