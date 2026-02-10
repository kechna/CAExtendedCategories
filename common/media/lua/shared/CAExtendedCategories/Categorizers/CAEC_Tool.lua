local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local CAEC_Categorizers = require("CAExtendedCategories/CAEC_Categorizers")

local CategoryOverrides = {
  ["Base.Calipers"] = "ToolBlacksmith",
  ["Base.RubberHose"] = "ToolMechanics",

  -- smeltable
  ["Base.LargeHook"] = "Material",

  -- currently(?) unused but categorized as tool
  ["Base.CrudeBenchVise"] = "ToolOrJunk",
  ["Base.CrudeBenchViseParts"] = "ToolOrJunk",
  ["Base.Funnel"] = "ToolOrJunk",
  ["Base.Loupe"] = "ToolOrJunk",
  ["Base.MeasuringTape"] = "ToolOrJunk",

  -- not even smeltable
  ["Base.HeavyChain"] = "MaterialOrJunk",
  ["Base.HeavyChain_Hook"] = "MaterialOrJunk",
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

  --{ category = "Blacksmith",    tag = ItemTag.BALL_PEEN_HAMMER },
  --{ category = "Carpentry",     tag = ItemTag.HAMMER },
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

  return category
      and (
        category:contains("Tool")
        or (
          category:contains("VehicleMaintenance")
          -- ignore car parts and other non-tool items
          and instance:getMechanicType() == 0
          and not Utils.HasAnyTag(item, MechanicsIgnoreTags)
        )
      )
end

function Tool:categorize(item, instance)
  --- @type string|nil
  local category = nil

  for i = 1, #TagsMap do
    local entry = TagsMap[i]

    if item:hasTag(entry.tag) then
      category = "Tool" .. entry.category
      break
    end
  end

  if not category then
    category = CategoryOverrides[item:getFullName()]
  end

  if category and not item:hasTag(ItemTag.NO_MAINTENANCE_XP) then
    item:DoParam("DisplayCategory", category)
    local withWeapon = CAEC_Categorizers.Weapon(item, instance)

    --self:log(item:getFullName() .. " categorized as " .. (withWeapon or category) .. (withWeapon and " with weapon tag" or ""))
    return withWeapon or category
  end

  local existing = item:getDisplayCategory()

  if not category and existing and existing:contains("VehicleMaintenance") then
    --Debug.report("mechanics item: " .. item:getFullName() .. " type: " .. tostring(instance:getMechanicType()), item,
    --  instance)
    category = "ToolMechanics"
  end

  --if category then
  --  self:log(item:getFullName() .. " categorized as " .. (category or "Tool") .. " (default)")
  --end

  return category
end

return Tool
