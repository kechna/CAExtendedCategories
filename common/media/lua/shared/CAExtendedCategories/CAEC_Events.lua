local CAEC = require("CAExtendedCategories/CAEC")

Events.OnInitWorld.Add(function ()
  CAEC.initialize("shared:OnInitWorld")
end)

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

  if container then
    CAEC.categorizeItemContainer(container, "onContainerUpdate")
    CAEC.updateEnd()
  end
end)
