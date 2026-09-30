local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_ElectronicsCategorizer: CAEC_ItemCategorizer
local Electronics = CAEC_ItemCategorizer:derive("Electronics")

Electronics.tags = table.newarray(ItemTag.MISC_ELECTRONIC)

function Electronics:validate(item, _instance)
  return item:isItemType(ItemType.RADIO) or item:isItemType(ItemType.ALARM_CLOCK)
    or item:isItemType(ItemType.ALARM_CLOCK_CLOTHING) or Utils.hasAnyTag(item, Electronics.tags)
end

function Electronics:categorize(item, instance)
  ---@type string | nil
  local category = "Electronics"

  if item:isItemType(ItemType.RADIO)
    and instance and instance:getAttachmentType() == "Walkie" then
    category = category .. "Walkie"
  elseif instance:isRemoteController() then
    category = category .. "Remote"
  elseif item:isItemType(ItemType.ALARM_CLOCK) then
    category = category .. "AlarmClock"
  elseif item:isItemType(ItemType.ALARM_CLOCK_CLOTHING) then
    category = category .. "AlarmClock__AccessoryWrist"
    elseif item:getFullName():contains("Crafted") then
    category = category .. "__Material"
  end

  return category
end

return Electronics
