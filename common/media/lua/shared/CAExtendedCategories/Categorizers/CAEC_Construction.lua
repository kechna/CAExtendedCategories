local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_ConstructionCategorizer: CAEC_ItemCategorizer
---@field constructionTags ItemTag[]
---@field ItemsMap         table<string, boolean>
local Construction = CAEC_ItemCategorizer:derive("Construction")

Construction.constructionTags = table.newarray(
  ItemTag.PAINT,
  ItemTag.PAINTBRUSH,
  ItemTag.PLASTER_TROWEL,
  ItemTag.WALLPAPER,
  ItemTag.WALLPAPER_PASTE
)

---@type table<string, boolean>
Construction.ItemsMap = {
  ["Base.PlasterPowder"] = true,
  ["Base.WallpaperPastePowder"] = true,
  ["Base.BucketPlasterFull"] = true,
  ["Base.BucketCarvedPlasterFull"] = true
}

function Construction:categorize(item, _instance)
  if Construction.ItemsMap[item:getFullName()] or Utils.hasAnyTag(item, Construction.constructionTags) then
    return "Construction", false
  end

  return nil, false
end

return Construction
