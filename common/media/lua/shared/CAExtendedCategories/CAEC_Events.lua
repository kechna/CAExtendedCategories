---@diagnostic disable: unnecessary-if, inject-field
local CAEC = require("CAExtendedCategories/CAEC")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@type table<ItemContainer, boolean>
local pendingContainers = {}
local hasPending = false

local function processPendingContainers()
  Events.OnTick.Remove(processPendingContainers)

  local containers = pendingContainers
  pendingContainers = {}
  hasPending = false

  for container in pairs(containers) do
    CAEC.categorizeItemContainer(container, "onContainerUpdate", true)
  end

  CAEC.updateEnd()

  if ISInventoryPage then
    ISInventoryPage.renderDirty = true
  end
end

---@param containerItem InventoryItem | ItemContainer
function onContainerUpdate(containerItem)
  if not containerItem then return end

  ---@type ItemContainer | nil
  local container = nil

  if instanceof(containerItem, "InventoryItem") then
    ---@cast containerItem InventoryItem
    container = containerItem:getContainer()
  elseif instanceof(containerItem, "ItemContainer") then
    ---@cast containerItem ItemContainer
    container = containerItem
  end

  if not container or pendingContainers[container] then return end

  pendingContainers[container] = true

  if not hasPending then
    hasPending = true
    Events.OnTick.Add(processPendingContainers)
  end
end

Utils.safeRegisterHook("OnContainerUpdate", onContainerUpdate)

local onLoadMapZones = function ()
  CAEC.initialize("shared:OnLoadMapZones")
end

Utils.safeRegisterHook("OnLoadMapZones", onLoadMapZones)
