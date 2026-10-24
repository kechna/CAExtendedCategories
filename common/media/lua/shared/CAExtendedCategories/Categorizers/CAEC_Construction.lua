local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_ConstructionCategorizer: CAEC_ItemCategorizer
---@field constructionTags ItemTag[]
---@field toolTags         ItemTag[]
---@field ItemsMap         table<string, boolean>
local Construction = CAEC_ItemCategorizer:derive("Construction")

Construction.constructionTags = table.newarray(
  ItemTag.PAINT,
  ItemTag.WALLPAPER,
  ItemTag.WALLPAPER_PASTE
)

Construction.toolTags = table.newarray(
  ItemTag.PAINTBRUSH,
  ItemTag.PLASTER_TROWEL
)

---@type table<string, boolean>
Construction.ItemsMap = {
  ["Base.PlasterPowder"] = true,
  ["Base.WallpaperPastePowder"] = true,
  ["Base.BucketPlasterFull"] = true,
  ["Base.BucketCarvedPlasterFull"] = true
}

function Construction:categorize(item, _instance)
  if Utils.hasAnyTag(item, Construction.toolTags) then
    return "ToolConstruction", false
  end

  if Construction.ItemsMap[item:getFullName()] or Utils.hasAnyTag(item, Construction.constructionTags) then
    return "Construction", false
  end

  return nil, false
end

return Construction
