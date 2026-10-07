local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

--- @class CAEC_ToolCategorizer: CAEC_ItemCategorizer
local Tool = CAEC_ItemCategorizer:derive("Tool")

---@enum CAEC_ToolCategorizer.ToolType
local ToolType = {
	Generic = "",
	Blacksmith = "Blacksmith",
	Butchering = "Butchering",
	Carpentry = "Carpentry",
	Farming = "Farming",
	FlintKnapping = "FlintKnapping",
	Gardening = "Gardening",
	Maintenance = "Maintenance",
	Masonry = "Masonry",
	Mechanics = "Mechanics",
	Pottery = "Pottery",
	Tailoring = "Tailoring",
	Welding = "Welding",
}

Tool.ToolType = ToolType

-- full categories by item type, checked before the tags
---@type table<string, string>
Tool.ItemsMap = {
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

---@type table<CAEC_ToolCategorizer.ToolType, ItemTag[]>
Tool.TagsMap = {
	[ToolType.Generic] = table.newarray(
		ItemTag.BALL_PEEN_HAMMER,
		ItemTag.BOLT_CUTTERS,
		ItemTag.CLUB_HAMMER,
		ItemTag.HAMMER,
		ItemTag.PIPE_WRENCH,
		ItemTag.PLIERS,
		ItemTag.SCISSORS,
		ItemTag.SCREWDRIVER,
		ItemTag.SLEDGEHAMMER
	),
	[ToolType.Blacksmith] = table.newarray(
		ItemTag.CRUDE_TONGS,
		ItemTag.DRILL_METAL,
		ItemTag.FILE,
		ItemTag.HEADING_TOOL,
		ItemTag.LIGHT_METAL_SNIPS,
		ItemTag.METALWORKING_CHISEL,
		ItemTag.METALWORKING_PLIERS,
		ItemTag.METALWORKING_PUNCH,
		ItemTag.METAL_SAW,
		ItemTag.SHEET_METAL_SNIPS,
		ItemTag.SMALL_FILES,
		ItemTag.SMALL_PUNCH,
		ItemTag.SMALL_SAW,
		ItemTag.SMITHING_HAMMER,
		ItemTag.TONGS,
		ItemTag.VISE_GRIPS
	),
	[ToolType.Butchering] = table.newarray(ItemTag.FLESHING_TOOL),
	[ToolType.Carpentry] = table.newarray(
		ItemTag.CARPENTRY_CHISEL,
		ItemTag.CRUDE_SAW,
		ItemTag.DRILL_WOOD,
		ItemTag.DRILL_WOOD_POOR,
		ItemTag.SAW
	),
	[ToolType.FlintKnapping] = table.newarray(ItemTag.KNAPPING_TOOL),
	[ToolType.Gardening] = table.newarray(ItemTag.HAND_SCYTHE, ItemTag.SCYTHE),
	[ToolType.Maintenance] = table.newarray(ItemTag.WHETSTONE),
	[ToolType.Masonry] = table.newarray(ItemTag.MASONS_CHISEL, ItemTag.MASONS_TROWEL),
	[ToolType.Mechanics] = table.newarray(ItemTag.LUG_WRENCH, ItemTag.WRENCH),
	[ToolType.Pottery] = table.newarray(ItemTag.CLAY_TOOL),
	[ToolType.Tailoring] = table.newarray(
		ItemTag.AWL,
		ItemTag.KNITTING_NEEDLES,
		ItemTag.SEWING_NEEDLE,
		ItemTag.THIMBLE
	),
	[ToolType.Welding] = table.newarray(ItemTag.BLOW_TORCH),
	[ToolType.Farming] = table.newarray(ItemTag.SHEAR),
}

-- order the tag groups are checked in, the first matching type wins
---@type CAEC_ToolCategorizer.ToolType[]
Tool.TagsOrder = table.newarray(
	ToolType.Generic,
	ToolType.Blacksmith,
	ToolType.Butchering,
	ToolType.Carpentry,
	ToolType.FlintKnapping,
	ToolType.Gardening,
	ToolType.Maintenance,
	ToolType.Masonry,
	ToolType.Mechanics,
	ToolType.Pottery,
	ToolType.Tailoring,
	ToolType.Welding,
	ToolType.Farming
)

-- vehicle maintenance items with these tags are car parts or fuel, not tools
---@type ItemTag[]
Tool.MechanicsIgnoreTags = table.newarray({
	ItemTag.BRAKE,
	ItemTag.LIGHTBAR,
	ItemTag.WHOLE_TIRE,
	ItemTag.PETROL,
})

---@param toolType string
---@return boolean
local function isToolType(toolType)
	for _, value in pairs(ToolType) do
		if value == toolType then
			return true
		end
	end

	return false
end

--- Sets the full category for an item type, e.g. `"ToolBlacksmith"` or `"Material__Junk"`.
---@param itemType string full item type, e.g. "Base.Calipers"
---@param category string
function Tool.registerItem(itemType, category)
	Tool.ItemsMap[itemType] = category
end

--- Registers a tag for a tool type. Types without tags yet are checked after the existing ones.
---@param tag      ItemTag | string
---@param toolType CAEC_ToolCategorizer.ToolType
function Tool.registerTag(tag, toolType)
	if not tag or not isToolType(toolType) then
		Debug.log(
			string.format("Failed to register tag %s for tool type %s", tostring(tag), tostring(toolType)),
			"Tool",
			Debug.Level.Warning
		)
		return
	end

	if not Tool.TagsMap[toolType] then
		Tool.TagsMap[toolType] = table.newarray()
		table.insert(Tool.TagsOrder, toolType)
	end

	table.insert(Tool.TagsMap[toolType], Utils.toTag(tag))
end

--- Excludes vehicle maintenance items with this tag from the tool categories.
---@param tag ItemTag | string
function Tool.registerMechanicsIgnoreTag(tag)
	table.insert(Tool.MechanicsIgnoreTags, Utils.toTag(tag))
end

function Tool:validate(item, instance)
	local category = item:getDisplayCategory()

	return (
		category
		and (
			category:contains("Tool")
			or (
				category:contains("VehicleMaintenance")
				-- ignore car parts and other non-tool items
				and instance:getMechanicType() == 0
				and not Utils.hasAnyTag(item, self.MechanicsIgnoreTags)
			)
		)
	)
		or (item:isItemType(ItemType.WEAPON) and not item:hasTag(ItemTag.FIREARM))
		or item:hasTag(ItemTag.SHARPENABLE)
end

function Tool:categorize(item, instance)
	--- @type string|nil
	local category = self.ItemsMap[item:getFullName()]

	if not category then
		for i = 1, #self.TagsOrder do
			local toolType = self.TagsOrder[i]
			local tags = self.TagsMap[toolType]

			if tags and Utils.hasAnyTag(item, tags) then
				category = "Tool" .. toolType
				break
			end
		end
	end

	local existing = item:getDisplayCategory()

	if not category and existing and existing:contains("VehicleMaintenance") then
		category = "Tool" .. ToolType.Mechanics
	end

	return category
end

return Tool
