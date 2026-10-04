local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_AmmoCategorizer: CAEC_ItemCategorizer
---@field AmmoGroup             CAEC_AmmoGroup
---@field AmmoGroupsMap         table<string | AmmoType, CAEC_AmmoGroup>
---@field registerAmmoGroup     fun(ammoType: string, group: CAEC_AmmoGroup)
---@field registerItemAmmoGroup fun(itemName: string, group: CAEC_AmmoGroup)
local Ammo = CAEC_ItemCategorizer:derive("Ammo")

---@enum CAEC_AmmoGroup
Ammo.AmmoGroup = {
  RIFLE = "Rifle",
  HANDGUN = "Handgun",
  SHOTGUN = "Shotgun",
  TOY = "Toy",
  BOW = "Bow",
  EXPLOSIVE = "Explosive"
}

---@type table<string | AmmoType, CAEC_AmmoGroup>
Ammo.AmmoGroupsMap = {
  ["base:bullets_22"] = Ammo.AmmoGroup.HANDGUN,
  ["base:bullets_223"] = Ammo.AmmoGroup.RIFLE,
  ["base:bullets_3030"] = Ammo.AmmoGroup.RIFLE,
  ["base:bullets_308"] = Ammo.AmmoGroup.RIFLE,
  ["base:bullets_357"] = Ammo.AmmoGroup.HANDGUN,
  ["base:bullets_38"] = Ammo.AmmoGroup.HANDGUN,
  ["base:bullets_44"] = Ammo.AmmoGroup.HANDGUN,
  ["base:bullets_45"] = Ammo.AmmoGroup.HANDGUN,
  ["base:bullets_556"] = Ammo.AmmoGroup.RIFLE,
  ["base:bullets_9mm"] = Ammo.AmmoGroup.HANDGUN,
  ["base:cap_gun_cap"] = Ammo.AmmoGroup.TOY,
  ["base:shotgun_shells"] = Ammo.AmmoGroup.SHOTGUN
}

---@type table<string, CAEC_AmmoGroup>
Ammo.AmmoItemGroupsMap = {
  ["Base.308Bullets"] = Ammo.AmmoGroup.RIFLE,
  ["Base.556Bullets"] = Ammo.AmmoGroup.RIFLE,
  ["Base.3030Bullets"] = Ammo.AmmoGroup.RIFLE,
  ["Base.Bullets357"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets38"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets44"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets45"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets9mm"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.ShotgunShells"] = Ammo.AmmoGroup.SHOTGUN,

  ["Base.308Box"] = Ammo.AmmoGroup.RIFLE,
  ["Base.308Carton"] = Ammo.AmmoGroup.RIFLE,
  ["Base.556Box"] = Ammo.AmmoGroup.RIFLE,
  ["Base.556Carton"] = Ammo.AmmoGroup.RIFLE,
  ["Base.3030Box"] = Ammo.AmmoGroup.RIFLE,
  ["Base.3030Carton"] = Ammo.AmmoGroup.RIFLE,

  ["Base.Bullets357Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets357Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets38Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets38Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets44Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets44Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets45Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets45Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets9mmBox"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.Bullets9mmCarton"] = Ammo.AmmoGroup.HANDGUN,

  ["Base.ShotgunShellsBox"] = Ammo.AmmoGroup.SHOTGUN,
  ["Base.ShotgunShellsCarton"] = Ammo.AmmoGroup.SHOTGUN,

  ["Base.44Clip"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.45Clip"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.556Clip"] = Ammo.AmmoGroup.RIFLE,
  ["Base.9mmClip"] = Ammo.AmmoGroup.HANDGUN,
  ["Base.M14Clip"] = Ammo.AmmoGroup.RIFLE,
  ["Base.JS14_Clip"] = Ammo.AmmoGroup.RIFLE
}

function Ammo.registerAmmoGroup(ammoType, group)
  local ammoTypeString = tostring(ammoType)
  local resolved = Utils.resolveAmmoType(ammoType)

  Ammo.AmmoGroupsMap[ammoTypeString] = group

  if resolved then
    Ammo.AmmoItemGroupsMap[resolved:getItemKey()] = group
  else
    Debug.log(
      string.format("    - AmmoType %s could not be resolved to an item", ammoTypeString), "Ammo", Debug.Level.Warning
    )
  end
end

---@param ammoType string | AmmoType
---@return CAEC_AmmoGroup | nil
function Ammo.getAmmoGroup(ammoType)
  return Ammo.AmmoGroupsMap[tostring(ammoType)]
end

function Ammo.registerItemAmmoGroup(itemType, group)
  Ammo.AmmoItemGroupsMap[itemType] = group
end

---@param itemName string
---@return CAEC_AmmoGroup | nil
function Ammo.getAmmoGroupForItem(itemName)
  return Ammo.AmmoItemGroupsMap[itemName]
end

function Ammo:validate(item, _instance)
  return item:getLootType() == "Ammo"
end

function Ammo:byAmmoType(ammoType)
  local group = Ammo.getAmmoGroup(ammoType)

  if not group then
    self:log(string.format("Unknown ammo type: %s", tostring(ammoType)), Debug.Level.Warning)
  end

  return group
end

function Ammo:categorize(item, _instance)
  ---@type string | nil
  local baseCategory = "Ammo"
  local category = nil
  local itemName = item:getFullName()
  local ammoGroup = self.getAmmoGroupForItem(itemName)
  -- always resolved, the "Mag" fallback below relies on it for magazines without magazine tags
  local ammoType = item:getAmmoType()

  local lowerName = itemName:lower()

  if item:hasTag(ItemTag.RIFLE_MAGAZINE) then
    baseCategory = baseCategory .. self.AmmoGroup.RIFLE
  elseif item:hasTag(ItemTag.PISTOL_MAGAZINE) then
    baseCategory = baseCategory .. self.AmmoGroup.HANDGUN
  elseif item:hasTag(ItemTag.SHOTGUN_SHELL) then
    baseCategory = baseCategory .. self.AmmoGroup.SHOTGUN
  elseif ammoType ~= nil or ammoGroup then
    local group = ammoGroup or self:byAmmoType(ammoType)

    if group then
      baseCategory = baseCategory .. group
    else
      self:log(
        string.format("Unknown ammo type for item: %s, ammoType: %s", itemName, tostring(ammoType)), Debug.Level.Warning
      )
    end
  elseif lowerName:contains("slug") then
    baseCategory = baseCategory .. self.AmmoGroup.SHOTGUN
  elseif lowerName:contains("arrow") or lowerName:contains("bolt") then
    baseCategory = baseCategory .. self.AmmoGroup.BOW
  end

  if item:hasTag(ItemTag.AMMO) then
    category = baseCategory
  elseif lowerName:contains("box") then
    category = baseCategory .. "Box"
  elseif lowerName:contains("carton") then
    category = baseCategory .. "Carton"
  elseif lowerName:contains("drum") then
    category = baseCategory .. "Drum"
  elseif item:hasTag(ItemTag.RIFLE_MAGAZINE) or item:hasTag(ItemTag.PISTOL_MAGAZINE) or ammoType ~= nil then
    category = baseCategory .. "Mag"
  end

  return category
end

return Ammo
