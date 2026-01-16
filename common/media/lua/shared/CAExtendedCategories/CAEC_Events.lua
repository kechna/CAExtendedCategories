local CAEC = require("CAExtendedCategories/CAEC")

---@param _roomType string
---@param _containerType string
---@param container ItemContainer
function OnFillContainer(_roomType, _containerType, container)
  CAEC.CategorizeInventoryItems(container:getItems(), "shared:OnFillContainer")
end

Events.OnGameBoot.Add(function()
  CAEC.CategorizeAllItems("shared:OnGameBoot")
end)

--Events.OnResetLua.Add(CAEC.CategorizeAllItems)
Events.OnInitWorld.Add(function()
  CAEC.CategorizeAllItems("shared:OnInitWorld")
end)

Events.OnGameStart.Add(function()
  CAEC.CategorizeAllItems("shared:OnGameStart")

  Events.OnFillContainer.Add(OnFillContainer)
end)

print("CAExtendedCategories: shared events registered.")
