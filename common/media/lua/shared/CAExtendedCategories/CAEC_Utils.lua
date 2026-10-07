local Debug = require("CAExtendedCategories/CAEC_Debug")

local Utils = {}

---@type table<string, InventoryItem>
local instanceCache = {}
local instanceCount = 0

local activatedMods = nil

---@param typeObj AmmoType | ItemType
---@param id      string
local function resolveType(typeObj, id)
	if not (id and typeObj and typeObj.get and ResourceLocation and ResourceLocation.of) then
		return nil
	end

	local ok, result = pcall(function()
		return typeObj.get(ResourceLocation.of(id))
	end)

	return ok and result or nil
end

---@param category string
---@return boolean
local function isKnownCategory(category)
	return getTextOrNull("IGUI_ItemCat_" .. category) ~= nil
end

--- Adds the suffix while keeping categories at most 3 segments long. Only categories of up to 3 segments are translated,
--- so when base .. suffix isn't one, segments are dropped from the end of the base until it is, e.g.
--- FoodPerishableCanned + Box -> FoodPerishableBox and MaterialAmmoRifle + Box -> MaterialAmmoBox.
---@param base   string
---@param suffix string
---@return string
function Utils.withSuffix(base, suffix)
	local full = base .. suffix

	if isKnownCategory(full) then
		return full
	end

	-- segments start with a capital letter, try cutting before each one, longest first
	for i = base:len(), 2, -1 do
		local char = base:sub(i, i)

		if char ~= char:lower() then
			local candidate = base:sub(1, i - 1) .. suffix

			if isKnownCategory(candidate) then
				return candidate
			end
		end
	end

	return full
end

---@param search  string
---@param subject string
---@return boolean
function Utils.startsWith(search, subject)
	return subject:sub(1, search:len()) == search
end

---@param search  string
---@param subject string
---@return boolean
function Utils.endsWith(search, subject)
	return subject:sub(-search:len()) == search
end

---@param item Item
---@param tags ItemTag[] | nil
---@return boolean
function Utils.hasAnyTag(item, tags)
	if not tags or item:getTags():size() == 0 then
		return false
	end

	for i = 1, #tags do
		local tag = tags[i]

		if tag and item:hasTag(Utils.toTag(tag)) then
			return true
		end
	end

	return false
end

---@overload fun(item: Item, inventoryItem?): nil, string
---@overload fun(item: Item, inventoryItem?): InventoryItem, nil
---@overload fun(item: Item, InventoryItem): InventoryItem, nil
---@param item Item
---@param instance InventoryItem?
---@return InventoryItem?, string?
function Utils.createInstanceIfNeeded(item, instance)
	if instance then
		return instance, nil
	end

	local fullName = item:getFullName()
	local temporaryInstance = instanceCache[fullName]

	if not temporaryInstance then
		local errorCount = getLuaDebuggerErrorCount()
		local ok, result = pcall(instanceItem, item)

		if ok and getLuaDebuggerErrorCount() > errorCount then
			if instanceof(result, "InventoryItem") then
				result:Remove()
			end

			ok = false
			result = string.format("OnCreate %s raised an error", tostring(item:getLuaCreate()))
		end

		if not ok then
			---@cast result string
			Debug.log(
				string.format("Failed to create instance for item: %s. Reason: %s", fullName, result),
				"Utils",
				Debug.Level.Error
			)
			return nil, result
		end

		---@cast result InventoryItem
		temporaryInstance = result
	end

	if not instanceCache[fullName] then
		instanceCache[fullName] = temporaryInstance
		instanceCount = instanceCount + 1
	end

	return temporaryInstance, nil
end

--- items on the floor have their FluidContainer component moved to the IsoWorldInventoryObject
---@param instance InventoryItem
---@return FluidContainer | nil
function Utils.getFluidContainer(instance)
	return instance:getFluidContainerFromSelfOrWorldItem()
end

function Utils.removeTemporaryInstances()
	if instanceCount == 0 then
		return
	end

	local n = 0
	for _, instance in pairs(instanceCache) do
		if instanceof(instance, "InventoryItem") then
			instance:Remove()
			n = n + 1
		end
	end

	Debug.log(string.format("Removed %d temporary instances", n), "Utils")
	instanceCache = {}
	instanceCount = 0
end

---@param modId string
---@return boolean
function Utils.modIsActive(modId)
	activatedMods = activatedMods or getActivatedMods()

	return activatedMods:contains(modId) or activatedMods:contains("\\" .. modId)
end

local tagCache = {}

---@param input string | ItemTag
---@return ItemTag
function Utils.toTag(input)
	if type(input) ~= "string" then
		---@cast input ItemTag
		return input
	end

	---@cast input string

	local tag = tagCache[input]

	if tag == nil then
		---@cast tag ItemTag | false
		tag = resolveType(ItemTag, input) or false
		tagCache[input] = tag
	end

	return tag
end

---@param id string|AmmoType
---@return AmmoType | nil
function Utils.resolveAmmoType(id)
	return resolveType(AmmoType, id)
end

local Hooks = {}

function Utils.safeRegisterHook(event, hook)
	if Hooks[event] then
		Events[event].Remove(Hooks[event])
	end

	Hooks[event] = hook
	Events[event].Add(Hooks[event])
end

return Utils
