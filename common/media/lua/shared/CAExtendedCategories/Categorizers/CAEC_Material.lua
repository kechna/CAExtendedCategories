local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

---@type { tag: ItemTag, category: string } []
local TagsMap = table.newarray({
  { category = "Tool", tag = ItemTag.TOOL_HEAD },
  { category = "Weapon", tag = ItemTag.SPEAR_HEAD },

  { category = "FireSource", tag = ItemTag.CHARCOAL },

  { category = "Metalworking", tag = ItemTag.INGOT },
  { category = "Metalworking", tag = ItemTag.IRON_MATERIAL },
  { category = "Metalworking", tag = ItemTag.METAL_PIECE },
  { category = "Metalworking", tag = ItemTag.PIERCED_INGOT },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_IRON_LARGE },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_IRON_MEDIUM },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_IRON_MEDIUM_PLUS },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_IRON_SMALL },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_STEEL_LARGE },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_STEEL_MEDIUM },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_STEEL_MEDIUM_PLUS },
  { category = "Metalworking", tag = ItemTag.SMELTABLE_STEEL_SMALL },
  { category = "Metalworking", tag = ItemTag.STEEL_MATERIAL },

  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_SMALL },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_TANNED_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_TANNED_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_TANNED_SMALL },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_WET_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_WET_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_CRUDE_WET_SMALL },
  { category = "Butchering", tag = ItemTag.LEATHER_FULL_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_FULL_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_FULL_SMALL },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_SMALL },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_TANNED_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_TANNED_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_TANNED_SMALL },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_WET_LARGE },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_WET_MEDIUM },
  { category = "Butchering", tag = ItemTag.LEATHER_FUR_WET_SMALL },

  { category = "Carpentry", tag = ItemTag.CARPENTRY_CHISEL },
  { category = "Carpentry", tag = ItemTag.CRUDE_SAW },
  { category = "Carpentry", tag = ItemTag.DRILL_WOOD },
  { category = "Carpentry", tag = ItemTag.DRILL_WOOD_POOR },
  { category = "Carpentry", tag = ItemTag.SAW },

  { category = "Maintenance", tag = ItemTag.BINDING },
  { category = "Maintenance", tag = ItemTag.EPOXY },
  { category = "Maintenance", tag = ItemTag.FIBERGLASS_TAPE },
  { category = "Maintenance", tag = ItemTag.GLUE },
  { category = "Maintenance", tag = ItemTag.INFERIOR_BINDING },
  { category = "Maintenance", tag = ItemTag.SIMPLE_WEAPON_BINDING },
  { category = "Maintenance", tag = ItemTag.TAPE },

  { category = "Tailoring", tag = ItemTag.THREAD },
  { category = "Tailoring", tag = ItemTag.HEAVY_THREAD }
})

---@class CAEC_MaterialCategorizer: CAEC_ItemCategorizer
local Material = CAEC_ItemCategorizer:derive("Material")

function Material:validate(item, _instance)
  return item:getLootType() == "Material"
end

function Material:categorize(item, instance)
  ---@type string | nil
  local category = nil

  for i = 1, #TagsMap do
    local entry = TagsMap[i]

    if item:hasTag(entry.tag) then
      category = "Material" .. entry.category
      break
    end
  end

  if not category then
    local name = item:getName()
    ---@type string | nil
    local sprite = item:getWorldObjectSprite()
    ---@type string | nil
    local model = item:getWorldStaticModel()

    if name:contains("Ingot") or (sprite and sprite:contains("crafting_ore_"))
      or (item:hasTag(ItemTag.HAS_METAL)
        and (name:contains("Bar") or name:contains("Sheet") or name:contains("Scrap") or name:contains("Fragment"))) then
      category = "MaterialMetalworking"
    elseif model then
      if model:contains("RolledHide") or model:contains("FabricRoll") then
        category = "MaterialTailoring"
      elseif model:contains("Unfired") or model:contains("Clay") then
        category = "MaterialPottery"
      end
    end
  end

  return category
end

return Material
