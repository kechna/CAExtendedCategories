local CAEC = require("CAExtendedCategories/CAEC")

Events.OnLoadMapZones.Add(function ()
  CAEC.initialize("shared:OnLoadMapZones")
end)

-- OnContainerUpdate often fires several times in a row for the same container, so queue the containers and
-- categorize each of them once on the next tick.

---@type table<ItemContainer, boolean>
local pendingContainers = {}
local hasPending = false

local function processPendingContainers()
  Events.OnTick.Remove(processPendingContainers)

  local containers = pendingContainers
  pendingContainers = {}
  hasPending = false

  for container in pairs(containers) do
    CAEC.categorizeItemContainer(container, "onContainerUpdate")
  end

  CAEC.updateEnd()

  -- the inventory UI was already marked dirty by the event itself, make sure it redraws with the new categories
  if ISInventoryPage then
    ISInventoryPage.renderDirty = true
  end
end

Events.OnContainerUpdate.Add(function (containerItem)
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
end)

--ItemTweaker = ItemTweaker or {}

--Events.OnGameBoot.Add(function ()
--  local realGetDebug = getDebug
--  local realPrint = print
--
--  local stfu = function ()
--    getDebug = function () return false end
--    print = function () end
--  end
--
--  local unstfu = function ()
--    getDebug = realGetDebug
--    print = realPrint
--  end
--
--  if ItemTweaker.tweakItems then
--    local oldFn = ItemTweaker.tweakItems
--
--    ItemTweaker.tweakItems = function (...)
--      stfu()
--      oldFn(...)
--      unstfu()
--    end
--  end
--end)
