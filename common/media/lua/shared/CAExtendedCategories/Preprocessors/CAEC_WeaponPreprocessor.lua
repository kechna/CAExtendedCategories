local CAEC = require("CAExtendedCategories/CAEC")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

--- loop through all the weapons to find their respective ammo item and assign ammo groups to them
CAEC.registerPreprocessor("AmmoTypeFromWeapons", function (item)
  if not item:getItemType() == ItemType.WEAPON or not item:hasTag(ItemTag.FIREARM) then
    return false
  end

  local ammoType = item:getAmmoType()
  local group = Ammo.getAmmoGroup(ammoType)

  if group then
    local itemKey = ammoType:getItemKey()

    if nil == Ammo.AmmoItemGroupsMap[itemKey] then
      Ammo.registerItemAmmoGroup(itemKey, group)
    end

    return true
  end

  return false
end)
