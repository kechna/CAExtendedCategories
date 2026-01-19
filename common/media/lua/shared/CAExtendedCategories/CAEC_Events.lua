local Debug = require("CAExtendedCategories/CAEC_Debug")
local CAEC = require("CAExtendedCategories/CAEC")

---@param _roomType string
---@param _containerType string
---@param container ItemContainer
function OnFillContainer(_roomType, _containerType, container)
  CAEC.UpdateInstanceItems(container:getItems(), "shared:OnFillContainer")
end

--Events.OnGameBoot.Add(function()
--  CAEC.Initialize("shared:OnGameBoot")
--end)

Events.OnInitWorld.Add(function()
  CAEC.Initialize("shared:OnInitWorld")
end)

Events.OnGameStart.Add(function()
  Debug.log("shared:OnGameStart", "CAEC_Events")
  --CAEC.Initialize("shared:OnGameStart")

  Events.OnFillContainer.Add(OnFillContainer)
end)
