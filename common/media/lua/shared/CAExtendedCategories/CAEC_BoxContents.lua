local Debug = require("CAExtendedCategories/CAEC_Debug")
local Processors = require("CAExtendedCategories/CAEC_Processors")

--- Maps boxes, cartons, packs and bundles to the item they contain, based on the game's unpack recipes.
---@class CAEC_BoxContents
local BoxContents = {}

--- box full name => contents full name
---@type table<string, string>
BoxContents.Map = {}

--- box full name => true when registered manually, these win over recipe derived mappings
---@type table<string, boolean>
local manual = {}

local built = false

--- timed actions of recipes that open bags and packages rather than boxes, or tear items up (sheets, pillows)
---@type table<string, boolean>
local IGNORED_ACTIONS = {
  RipClothing = true,
  UnPackSmallBag = true,
}

---@param box      string
---@param contents string
function BoxContents.register(box, contents)
  BoxContents.Map[box] = contents
  manual[box] = true
end

---@param box string
---@return string | nil
function BoxContents.get(box)
  return BoxContents.Map[box]
end

---@param item string
---@return boolean
function BoxContents.isBox(item)
  return BoxContents.Map[item] ~= nil
end

--- Only regular items count as boxes, food only when it is called a box or carton (e.g. EggCarton). This keeps out
--- cakes, frozen food bags, cigarette packs, clay sacks and seed packets.
---@param item Item
---@return boolean
local function isContainerItem(item)
  if item:isItemType(ItemType.NORMAL) then
    return true
  end

  if item:isItemType(ItemType.FOOD) then
    local name = item:getName():lower()

    return name:contains("box") or name:contains("carton")
  end

  return false
end

---@param item     Item
---@param contents string
---@param recipe   CraftRecipe
---@return boolean added
local function add(item, contents, recipe)
  local box = item:getFullName()

  if box == contents or manual[box] or not isContainerItem(item) then
    return false
  end

  local existing = BoxContents.Map[box]

  if existing then
    if existing ~= contents and Debug.isLevel(Debug.Level.Debug) then
      Debug.log(
        string.format("%s already contains %s, ignoring %s from %s", box, existing, contents, recipe:getName()),
        "BoxContents"
      )
    end

    return false
  end

  BoxContents.Map[box] = contents

  return true
end

--- The box must be the only item input, recipes with tools (knives, saws, hammers) split items instead of unpacking them.
--- @param recipe CraftRecipe
--- @return InputScript | nil
local function getContainerInput(recipe)
  local inputs = recipe:getInputs()
  ---@type InputScript | nil
  local found = nil

  for i = 0, inputs:size() - 1 do
    local input = inputs:get(i)

    if input:getResourceType() == ResourceType.Item then
      if found or input:isKeep() or input:isTool() or input:getIntAmount() ~= 1 then
        return nil
      end

      found = input
    end
  end

  return found
end

---@param recipe CraftRecipe
---@return OutputScript | nil
local function getContentsOutput(recipe)
  local outputs = recipe:getOutputs()
  ---@type OutputScript | nil
  local found = nil
  local amount = 1

  for i = 0, outputs:size() - 1 do
    local output = outputs:get(i)

    if output:getResourceType() == ResourceType.Item then
      local outputAmount = output:getIntAmount()

      if outputAmount > amount then
        found = output
        amount = outputAmount
      end
    end
  end

  return found
end

---@param recipe CraftRecipe
---@return number added
local function processRecipe(recipe)
  if not recipe:isInHandCraftCraft() then
    return 0
  end

  local action = recipe:getTimedActionScript()

  if action and IGNORED_ACTIONS[action:getName()] then
    return 0
  end

  local input = getContainerInput(recipe)

  if not input then
    return 0
  end

  local output = getContentsOutput(recipe)

  if not output then
    return 0
  end

  local added = 0
  local mapper = output:getOutputMapper()

  if mapper then
    local results = mapper:getResultItems()
    local patterns = 0

    for i = 0, results:size() - 1 do
      local result = results:get(i)
      local contents = result:getFullName()
      local boxes = mapper:getPatternForResult(result)

      patterns = patterns + boxes:size()

      for j = 0, boxes:size() - 1 do
        if add(boxes:get(j), contents, recipe) then
          added = added + 1
        end
      end
    end

    -- recipes with a single result get a mapper without patterns too, those are handled below
    if patterns > 0 then
      return added
    end
  end

  local results = output:getPossibleResultItems()

  if results:size() ~= 1 then
    return 0
  end

  local contents = results:get(0):getFullName()
  local boxes = input:getPossibleInputItems()

  for i = 0, boxes:size() - 1 do
    if add(boxes:get(i), contents, recipe) then
      added = added + 1
    end
  end

  return added
end

--- Output mappers are populated in ScriptManager.PostWorldDictionaryInit, which runs before OnLoadMapZones.
function BoxContents.build()
  if built then
    return
  end

  built = true

  local recipes = getScriptManager():getAllCraftRecipes()
  local total = 0

  for i = 0, recipes:size() - 1 do
    local recipe = recipes:get(i)
    local ok, result = pcall(processRecipe, recipe)

    if ok then
      total = total + result
    else
      Debug.log(
        string.format("Failed to read recipe %s: %s", tostring(recipe:getName()), tostring(result)), "BoxContents",
        Debug.Level.Warning
      )
    end
  end

  Debug.log(string.format("Found %d boxed items in %d recipes", total, recipes:size()), "BoxContents")
end

Processors.registerInitHook("BoxContents", BoxContents.build, 100)

return BoxContents
