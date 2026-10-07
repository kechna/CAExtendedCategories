local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@class CAEC_MaterialCategorizer: CAEC_ItemCategorizer
local Material = CAEC_ItemCategorizer:derive("Material")

-- local ItemTag = ItemTag --  todo test performance impact

---@enum CAEC_MaterialCategorizer.MaterialType
local Type = {
	Generic = "",

	Tool = "Tool",
	Weapon = "Weapon",

	Blacksmith = "Blacksmith",
	Butchering = "Butchering",
	Carpentry = "Carpentry",
	Electrical = "Electrical",
	Farming = "Farming",
	FlintKnapping = "FlintKnapping",
	Glassmaking = "Glassmaking",
	Husbandry = "Husbandry",
	Maintenance = "Maintenance",
	Metalworking = "Metalworking",
	Pottery = "Pottery",
	Tailoring = "Tailoring",

	Wood = "Wood",
	Stone = "Stone",
	Metal = "Metal",

	Construction = "Construction",
	FireSource = "FireSource",
	--Raw = "Raw",
	Other = "Other",
}

Material.MaterialType = Type

---@type table<string, string>
Material.ItemsMap = {
	["Base.Hinge"] = Type.Construction,
	["Base.Doorknob"] = Type.Construction,
	["Base.PlasterPowder"] = Type.Construction,
	["Base.ConcretePowder"] = Type.Construction,

	["Base.Buckle"] = Type.Tailoring,
	["Base.PackFrame"] = Type.Tailoring,
	["Base.PackFrameLarge"] = Type.Tailoring,

	["Base.Drawer"] = Type.Carpentry,

	["Base.BarbedWire"] = Type.Weapon,
}

---@type table<CAEC_MaterialCategorizer.MaterialType, ItemTag[]>
Material.TagsMap = {
	[Type.Generic] = table.newarray(ItemTag.ROPE),
	[Type.Tool] = table.newarray(ItemTag.TOOL_HEAD, ItemTag.WOOD_HANDLE, ItemTag.SPEAR_HEAD),
	[Type.Husbandry] = table.newarray(
		ItemTag.ANIMAL_SKULL,
		ItemTag.ANIMAL_BONE,
		ItemTag.SMALL_ANIMAL_BONE,
		ItemTag.LARGE_ANIMAL_BONE
	),
	[Type.Construction] = table.newarray(ItemTag.CONCRETE),
	[Type.Weapon] = table.newarray(ItemTag.SHOW_CONDITION, ItemTag.SPEAR_HEAD, ItemTag.SHARPENABLE),
	[Type.FireSource] = table.newarray(ItemTag.CHARCOAL, ItemTag.IS_FIRE_TINDER),

	--[Type.Raw] = table.newarray(ItemTag.COPPER_ORE, ItemTag.IRON_ORE, ItemTag.HEAVY_ITEM),
	[Type.Stone] = table.newarray(ItemTag.STONE, ItemTag.LIMESTONE),

	[Type.Blacksmith] = table.newarray(ItemTag.INGOT, ItemTag.PIERCED_INGOT, ItemTag.COPPER_ORE, ItemTag.IRON_ORE),
	[Type.Metalworking] = table.newarray(
		ItemTag.IRON_MATERIAL,
		ItemTag.METAL_PIECE,
		ItemTag.SMELTABLE_IRON_LARGE,
		ItemTag.SMELTABLE_IRON_MEDIUM,
		ItemTag.SMELTABLE_IRON_MEDIUM_PLUS,
		ItemTag.SMELTABLE_IRON_SMALL,
		ItemTag.SMELTABLE_STEEL_LARGE,
		ItemTag.SMELTABLE_STEEL_MEDIUM,
		ItemTag.SMELTABLE_STEEL_MEDIUM_PLUS,
		ItemTag.SMELTABLE_STEEL_SMALL,
		ItemTag.STEEL_MATERIAL,
		ItemTag.SCRAP_ALUMINUM,
		ItemTag.SCRAP_ALUMINUM_LARGE
	),
	[Type.Butchering] = table.newarray(
		ItemTag.BRAIN_TAN,
		ItemTag.ANIMAL_BRAIN,
		ItemTag.LEATHER_CRUDE_LARGE,
		ItemTag.LEATHER_CRUDE_MEDIUM,
		ItemTag.LEATHER_CRUDE_SMALL,
		ItemTag.LEATHER_CRUDE_TANNED_LARGE,
		ItemTag.LEATHER_CRUDE_TANNED_MEDIUM,
		ItemTag.LEATHER_CRUDE_TANNED_SMALL,
		ItemTag.LEATHER_CRUDE_WET_LARGE,
		ItemTag.LEATHER_CRUDE_WET_MEDIUM,
		ItemTag.LEATHER_CRUDE_WET_SMALL,
		ItemTag.LEATHER_FULL_LARGE,
		ItemTag.LEATHER_FULL_MEDIUM,
		ItemTag.LEATHER_FULL_SMALL,
		ItemTag.LEATHER_FUR_LARGE,
		ItemTag.LEATHER_FUR_MEDIUM,
		ItemTag.LEATHER_FUR_SMALL,
		ItemTag.LEATHER_FUR_TANNED_LARGE,
		ItemTag.LEATHER_FUR_TANNED_MEDIUM,
		ItemTag.LEATHER_FUR_TANNED_SMALL,
		ItemTag.LEATHER_FUR_WET_LARGE,
		ItemTag.LEATHER_FUR_WET_MEDIUM,
		ItemTag.LEATHER_FUR_WET_SMALL
	),

	[Type.Carpentry] = table.newarray(
		ItemTag.CARPENTRY_CHISEL,
		ItemTag.CRUDE_SAW,
		ItemTag.DRILL_WOOD,
		ItemTag.DRILL_WOOD_POOR,
		ItemTag.SAW
	),
	[Type.Tailoring] = table.newarray(ItemTag.BUCKLE, ItemTag.BUTTON, ItemTag.THREAD, ItemTag.HEAVY_THREAD),
	[Type.Electrical] = table.newarray(ItemTag.WIRE, ItemTag.USES_BATTERY, ItemTag.ALUMINUM),
	[Type.Maintenance] = table.newarray(
		ItemTag.BINDING,
		ItemTag.EPOXY,
		ItemTag.FIBERGLASS_TAPE,
		ItemTag.GLUE,
		ItemTag.INFERIOR_BINDING,
		ItemTag.SIMPLE_WEAPON_BINDING,
		ItemTag.TAPE
	),
}

local TagPriorityOrder = table.newarray(
	Type.Generic,
	Type.Tool,
	Type.Husbandry,
	Type.Construction,
	Type.Weapon,
	Type.FireSource,
	--Type.Raw,
	Type.Stone,
	Type.Blacksmith,
	Type.Metalworking,
	Type.Butchering,
	Type.Carpentry,
	Type.Tailoring,
	Type.Electrical,
	Type.Maintenance
)

--- Sets the full category for an item type, e.g. `"MaterialMetalworking"` or `"Material__Junk"`.
---@param itemType     string full item type, e.g. "Base.LargeHook"
---@param materialType string
function Material.registerItem(itemType, materialType)
	Material.ItemsMap[itemType] = materialType
end

--- Registers a tag for a material type. Registered tags are checked before the built-in ones.
---@param tag      ItemTag | string
---@param category CAEC_MaterialCategorizer.MaterialType
function Material.registerTag(tag, category)
	if not tag or not Type[category] then
		Debug.log(
			string.format("Failed to register tag %s for material type %s", tostring(tag), tostring(category)),
			"Material",
			Debug.Level.Warning
		)
		return
	end

	table.insert(Material.TagsMap, 1, {
		category = category,
		tag = Utils.toTag(tag),
	})
end

function Material:validate(item, _instance)
	return item:getLootType() == "Material"
end

function Material:categorize(item, instance)
	---@type string | nil
	local static = self.ItemsMap[item:getFullName()]

	local baseCategory = "Material"
	local category = static and (baseCategory .. static) or nil

	if not category then
		for i = 1, #TagPriorityOrder do
			local tagCategory = TagPriorityOrder[i]
			local tags = self.TagsMap[tagCategory] or table.newarray()

			if Utils.hasAnyTag(item, tags) then
				category = baseCategory .. tagCategory
				break
			end
		end
	end

	if not category then
		local name = item:getName()
		---@type string | nil
		local sprite = item:getWorldObjectSprite()
		---@type string | nil
		local model = item:getWorldStaticModel()

		if
			name:contains("Ingot")
			or (sprite and sprite:contains("crafting_ore_"))
			or (model and model:contains("Crucible"))
		then
			category = baseCategory .. Type.Blacksmith
		elseif
			item:hasTag(ItemTag.HAS_METAL)
			and (name:contains("Bar") or name:contains("Sheet") or name:contains("Scrap") or name:contains("Fragment"))
		then
			category = baseCategory .. Type.Metalworking
		elseif item:hasTag(ItemTag.IS_FIRE_FUEL) then
			category = baseCategory .. Type.Wood
		elseif model then
			if model:contains("RolledHide") or model:contains("FabricRoll") then
				category = baseCategory .. Type.Tailoring
			elseif model:contains("Mold_") then
				category = baseCategory .. Type.Blacksmith
			elseif model:contains("Unfired") or model:contains("Clay") then
				category = baseCategory .. Type.Pottery
			elseif model:contains("LogsStack") or model:contains("Wood") then
				category = baseCategory .. Type.Wood
			elseif
				model:contains("Hemp")
				or model:contains("Hops")
				or model:contains("Rye")
				or model:contains("Barley")
			then
				category = baseCategory .. Type.Farming
			end
		end
	end

	return category
end

return Material
