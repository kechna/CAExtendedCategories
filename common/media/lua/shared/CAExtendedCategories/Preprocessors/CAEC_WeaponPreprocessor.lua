local CAEC = require("CAExtendedCategories/CAEC")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

--- loop through all the weapons to find their respective ammo item and assign ammo groups to them
CAEC.registerPreprocessor("AmmoTypeFromWeapons", function (item)
  if not item:isItemType(ItemType.WEAPON) or not item:hasTag(ItemTag.FIREARM) then
    return false
  end

  local ammoType = item:getAmmoType()

  if not ammoType then
    return false
  end

  local group = Ammo.getAmmoGroup(ammoType)

  if not group then
    return false
  end

  local itemKey = ammoType:getItemKey()

  if nil ~= Ammo.AmmoItemGroupsMap[itemKey] then
    return false
  end

  Ammo.registerItemAmmoGroup(itemKey, group)

  return true
end)
