local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

--- @class CAEC_AmmoCategorizer: CAEC_ItemCategorizer
local Ammo = CAEC_ItemCategorizer:derive("Ammo")

function Ammo:validate(item, _instance)
  return item:getLootType() == "Ammo"
end

function Ammo:categorize(item, instance)
  ---@type string|nil
  local category = nil
  local name = item:getName():lower()

  if item:hasTag(ItemTag.AMMO) then
    category = "Ammo"
  elseif name:contains("box") then
    category = "AmmoBox"
  elseif name:contains("carton") then
    category = "AmmoCarton"
  elseif item:hasTag(ItemTag.RIFLE_MAGAZINE)
      or item:hasTag(ItemTag.PISTOL_MAGAZINE)
      or instance:getAmmoType() ~= nil
  then
    category = "AmmoMag"
  end

  return category
end

return Ammo
