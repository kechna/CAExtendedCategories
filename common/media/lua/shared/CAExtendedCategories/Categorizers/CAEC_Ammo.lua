local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")

--- @class CAEC_AmmoCategorizer: CAEC_ItemCategorizer

--- @type CAEC_AmmoCategorizer
local Ammo = CAEC_ItemCategorizer:derive("Ammo")

function Ammo:validate(item, _instance)
  return item:getLootType() == "Ammo"
end

function Ammo:categorize(item, _instance)
  ---@type string|nil
  local category = nil

  if item:hasTag(ItemTag.RIFLE_MAGAZINE)
      or item:hasTag(ItemTag.PISTOL_MAGAZINE) then
    category = "AmmoMag"
  end

  return category
end

return Ammo
