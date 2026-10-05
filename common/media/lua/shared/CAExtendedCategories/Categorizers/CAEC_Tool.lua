local Utils = require("CAExtendedCategories/CAEC_Utils")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local CategoryOverrides = {
  ["Base.Calipers"] = "ToolBlacksmith",
  ["Base.RubberHose"] = "ToolMechanics",

  -- smeltable
  ["Base.LargeHook"] = "Material",

  -- currently(?) unused but categorized as tool
  ["Base.CrudeBenchVise"] = "Tool__Junk",
  ["Base.CrudeBenchViseParts"] = "Tool__Junk",
  ["Base.Funnel"] = "Tool__Junk",
  ["Base.Loupe"] = "Tool__Junk",
  ["Base.MeasuringTape"] = "Tool__Junk",

  -- not even smeltable
  ["Base.HeavyChain"] = "Material__Junk",
  ["Base.HeavyChain_Hook"] = "Material__Junk",
}

--- @type {tag: ItemTag, category: string}[]
local TagsMap = table.newarray({
  { category = "",              tag = ItemTag.BALL_PEEN_HAMMER },
  { category = "",              tag = ItemTag.BOLT_CUTTERS },
  { category = "",              tag = ItemTag.CLUB_HAMMER },
  { category = "",              tag = ItemTag.HAMMER },
  { category = "",              tag = ItemTag.PIPE_WRENCH },
  { category = "",              tag = ItemTag.PLIERS },
  { category = "",              tag = ItemTag.SCISSORS },
  { category = "",              tag = ItemTag.SCREWDRIVER },
  { category = "",              tag = ItemTag.SLEDGEHAMMER },

  { category = "Blacksmith",    tag = ItemTag.CRUDE_TONGS },
  { category = "Blacksmith",    tag = ItemTag.DRILL_METAL },
  { category = "Blacksmith",    tag = ItemTag.FILE },
  { category = "Blacksmith",    tag = ItemTag.HEADING_TOOL },
  { category = "Blacksmith",    tag = ItemTag.LIGHT_METAL_SNIPS },
  { category = "Blacksmith",    tag = ItemTag.METALWORKING_CHISEL },
  { category = "Blacksmith",    tag = ItemTag.METALWORKING_PLIERS },
  { category = "Blacksmith",    tag = ItemTag.METALWORKING_PUNCH },
  { category = "Blacksmith",    tag = ItemTag.METAL_SAW },
  { category = "Blacksmith",    tag = ItemTag.SHEET_METAL_SNIPS },
  { category = "Blacksmith",    tag = ItemTag.SMALL_FILES },
  { category = "Blacksmith",    tag = ItemTag.SMALL_PUNCH },
  { category = "Blacksmith",    tag = ItemTag.SMALL_SAW },
  { category = "Blacksmith",    tag = ItemTag.SMITHING_HAMMER },
  { category = "Blacksmith",    tag = ItemTag.TONGS },
  { category = "Blacksmith",    tag = ItemTag.VISE_GRIPS },

  { category = "Butchering",    tag = ItemTag.FLESHING_TOOL },

  { category = "Carpentry",     tag = ItemTag.CARPENTRY_CHISEL },
  { category = "Carpentry",     tag = ItemTag.CRUDE_SAW },
  { category = "Carpentry",     tag = ItemTag.DRILL_WOOD },
  { category = "Carpentry",     tag = ItemTag.DRILL_WOOD_POOR },
  { category = "Carpentry",     tag = ItemTag.SAW },

  { category = "FlintKnapping", tag = ItemTag.KNAPPING_TOOL },

  { category = "Gardening",     tag = ItemTag.HAND_SCYTHE },
  { category = "Gardening",     tag = ItemTag.SCYTHE },

  { category = "Maintenance",   tag = ItemTag.WHETSTONE },

  { category = "Masonry",       tag = ItemTag.MASONS_CHISEL },
  { category = "Masonry",       tag = ItemTag.MASONS_TROWEL },

  { category = "Mechanics",     tag = ItemTag.LUG_WRENCH },
  { category = "Mechanics",     tag = ItemTag.WRENCH },

  { category = "Pottery",       tag = ItemTag.CLAY_TOOL },

  { category = "Tailoring",     tag = ItemTag.AWL },
  { category = "Tailoring",     tag = ItemTag.KNITTING_NEEDLES },
  { category = "Tailoring",     tag = ItemTag.SEWING_NEEDLE },
  { category = "Tailoring",     tag = ItemTag.THIMBLE },

  { category = "Welding",       tag = ItemTag.BLOW_TORCH },

  { category = "Farming",       tag = ItemTag.SHEAR },
})

local MechanicsIgnoreTags = table.newarray({
  ItemTag.BRAKE,
  ItemTag.LIGHTBAR,
  ItemTag.WHOLE_TIRE,
  ItemTag.PETROL,
})

--- @class CAEC_ToolCategorizer: CAEC_ItemCategorizer
local Tool = CAEC_ItemCategorizer:derive("Tool")

function Tool:validate(item, instance)
  local category = item:getDisplayCategory()

  return (
        category and (
          category:contains("Tool")
          or (
            category:contains("VehicleMaintenance")
            -- ignore car parts and other non-tool items
            and instance:getMechanicType() == 0
            and not Utils.hasAnyTag(item, MechanicsIgnoreTags)
          )
        )
      )
      or (item:isItemType(ItemType.WEAPON) and not item:hasTag(ItemTag.FIREARM))
      or item:hasTag(ItemTag.SHARPENABLE)
end

function Tool:categorize(item, instance)
  --- @type string|nil
  local category = CategoryOverrides[item:getFullName()]

  if not category then
    for i = 1, #TagsMap do
      local entry = TagsMap[i]

      if item:hasTag(entry.tag) then
        category = "Tool" .. entry.category
        break
      end
    end
  end

  local existing = item:getDisplayCategory()

  if not category and existing and existing:contains("VehicleMaintenance") then
    category = "ToolMechanics"
  end

  return category
end

return Tool
