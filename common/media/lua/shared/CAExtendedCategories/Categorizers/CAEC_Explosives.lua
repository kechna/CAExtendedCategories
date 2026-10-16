local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

---@class CAEC_ExplosivesCategorizer: CAEC_ItemCategorizer
local Explosives = CAEC_ItemCategorizer:derive("Explosives")

function Explosives:validate(item, _instance)
  return item:isItemType(ItemType.WEAPON)
    and item:getSwingAnim() == "Throw"
    and item:getExplosionSound() ~= nil
end

function Explosives:categorize(_item, _instance)
  return "Explosives"
end

return Explosives
