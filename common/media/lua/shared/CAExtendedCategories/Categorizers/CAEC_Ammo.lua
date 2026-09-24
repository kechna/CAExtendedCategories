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
  ["308Bullets"] = Ammo.AmmoGroup.RIFLE,
  ["556Bullets"] = Ammo.AmmoGroup.RIFLE,
  ["3030Bullets"] = Ammo.AmmoGroup.RIFLE,
  ["Bullets357"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets38"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets44"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets45"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets9mm"] = Ammo.AmmoGroup.HANDGUN,
  ["ShotgunShells"] = Ammo.AmmoGroup.SHOTGUN,

  ["308Box"] = Ammo.AmmoGroup.RIFLE,
  ["308Carton"] = Ammo.AmmoGroup.RIFLE,
  ["556Box"] = Ammo.AmmoGroup.RIFLE,
  ["556Carton"] = Ammo.AmmoGroup.RIFLE,
  ["3030Box"] = Ammo.AmmoGroup.RIFLE,
  ["3030Carton"] = Ammo.AmmoGroup.RIFLE,

  ["Bullets357Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets357Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets38Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets38Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets44Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets44Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets45Box"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets45Carton"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets9mmBox"] = Ammo.AmmoGroup.HANDGUN,
  ["Bullets9mmCarton"] = Ammo.AmmoGroup.HANDGUN,

  ["ShotgunShellsBox"] = Ammo.AmmoGroup.SHOTGUN,
  ["ShotgunShellsCarton"] = Ammo.AmmoGroup.SHOTGUN,

  ["44Clip"] = Ammo.AmmoGroup.HANDGUN,
  ["45Clip"] = Ammo.AmmoGroup.HANDGUN,
  ["556Clip"] = Ammo.AmmoGroup.RIFLE,
  ["9mmClip"] = Ammo.AmmoGroup.HANDGUN,
  ["M14Clip"] = Ammo.AmmoGroup.RIFLE,
  ["JS14_Clip"] = Ammo.AmmoGroup.RIFLE
}

function Ammo.registerAmmoGroup(ammoType, group)
  local ammoTypeString = tostring(ammoType)

  Debug.log(string.format("  + AmmoType %-16s -> %s", ammoTypeString, group), "Ammo")

  local resolved = Utils.resolveAmmoType(ammoType)

  Ammo.AmmoGroupsMap[ammoTypeString] = group

  if resolved then
    Debug.log(string.format("    + Item %-16s -> %s", tostring(resolved:getItemKey()), group), "Ammo")
    Ammo.AmmoItemGroupsMap[resolved:getItemKey()] = group
  else
    Debug.log(string.format("    - AmmoType %s could not be resolved to an item", ammoTypeString), "Ammo")
  end
end

---@param ammoType string | AmmoType
---@return CAEC_AmmoGroup | nil
function Ammo.getAmmoGroup(ammoType)
  return Ammo.AmmoGroupsMap[tostring(ammoType)]
end

function Ammo.registerItemAmmoGroup(itemType, group)
  Debug.log(string.format("  + Item %-16s -> %s", tostring(itemType), group), "Ammo")
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
    self:log(string.format("Unknown ammo type: %s", tostring(ammoType)))
  end

  return group
end

function Ammo:categorize(item, _instance)
  ---@type string | nil
  local baseCategory = "Ammo"
  local category = nil
  local itemName = item:getFullName()
  local ammoGroup = self.getAmmoGroupForItem(itemName)
  local ammoType = ammoGroup and nil or item:getAmmoType()

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
      self:log(string.format("Unknown ammo type for item: %s, ammoType: %s", itemName, tostring(ammoType)))
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
