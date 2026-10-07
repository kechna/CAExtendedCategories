require("PZAPI/ModOptions")

local CategoryColors = require("CAExtendedCategories/CAEC_CategoryColors")
local Core = require("CAExtendedCategories/CAEC_Core")

local MOD_OPTIONS_ID = "CAExtendedCategories"

local CAEC_ClientOptions = {}

local Option = {
	CategoryColors = "categoryColors",
	TintStrength = "categoryColorsTintStrength",
	HueVariation = "categoryColorsHueVariation",
	ValueVariation = "categoryColorsValueVariation",
	LevelFalloff = "categoryColorsLevelFalloff",
	CategoryDetail = "categoryDetail",
}

---@param options table
---@param id      string
---@param default any
---@return any
local function getValue(options, id, default)
	local option = options:getOption(id)

	if not option then
		return default
	end

	local value = option:getValue()

	if value == nil then
		return default
	end

	return value
end

---@param options table
---@param id      string
---@param default number 0..1
---@return number
local function getPercentage(options, id, default)
	return (tonumber(getValue(options, id, default * 100)) or default * 100) / 100
end

---@param options table
local function applyOptions(options)
	local defaults = CategoryColors.DEFAULTS

	CategoryColors.configure({
		enabled = getValue(options, Option.CategoryColors, defaults.enabled) == true,
		tintStrength = getPercentage(options, Option.TintStrength, defaults.tintStrength),
		hueVariation = getPercentage(options, Option.HueVariation, defaults.hueVariation),
		valueVariation = getPercentage(options, Option.ValueVariation, defaults.valueVariation),
		levelFalloff = getPercentage(options, Option.LevelFalloff, defaults.levelFalloff),
	})

	Core.setCategoryDetail(tonumber(getValue(options, Option.CategoryDetail, 1)) or 1)
end

---@param options table
---@param id      string
---@param min     number 0..1
---@param max     number 0..1
---@param step    number 0..1
---@param default number 0..1
local function addPercentageSlider(options, id, min, max, step, default)
	-- sliders show their raw value, so store whole percentages rather than fractions
	options:addSlider(id, "IGUI_CAEC_Options_" .. id, min * 100, max * 100, step * 100, default * 100)
end

---@param options table
local function addCategoryDetail(options)
	local prefix = "IGUI_CAEC_Options_" .. Option.CategoryDetail

	options:addSeparator()
	options:addTitle(prefix .. "Title")
	options:addDescription(prefix .. "Wip")
	options:addDescription(prefix .. "Rejoin")


	local combo = options:addComboBox(Option.CategoryDetail, prefix)
	combo:addItem(prefix .. "Hoarder", true)
	combo:addItem(prefix .. "Balanced")
	combo:addItem(prefix .. "Lite")

	options:addDescription(prefix .. "Modes")
end

function CAEC_ClientOptions.initialize()
	if not (PZAPI and PZAPI.ModOptions) then
		return
	end

	local defaults = CategoryColors.DEFAULTS
	local options = PZAPI.ModOptions:create(MOD_OPTIONS_ID, "IGUI_CAEC_Options_Title")

	options:addTickBox(
		Option.CategoryColors,
		"IGUI_CAEC_Options_" .. Option.CategoryColors,
		defaults.enabled,
		"IGUI_CAEC_Options_" .. Option.CategoryColors .. "_tooltip"
	)

	addPercentageSlider(options, Option.TintStrength, 0, 1, 0.05, defaults.tintStrength)
	addPercentageSlider(options, Option.HueVariation, 0, 0.25, 0.01, defaults.hueVariation)
	addPercentageSlider(options, Option.ValueVariation, 0, 0.4, 0.02, defaults.valueVariation)
	addPercentageSlider(options, Option.LevelFalloff, 0.1, 1, 0.05, defaults.levelFalloff)

	addCategoryDetail(options)

	-- called by the options screen after the new values are stored
	options.apply = applyOptions

	-- vanilla only reads ModOptions.ini once the options screen is opened
	PZAPI.ModOptions:load()
	applyOptions(options)
end

Events.OnGameBoot.Add(CAEC_ClientOptions.initialize)

return CAEC_ClientOptions
