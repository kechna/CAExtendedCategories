local CAEC = require("CAExtendedCategories/CAEC")

Events.OnInitWorld.Add(function()
  CAEC.Initialize("shared:OnInitWorld")
end)

Events.OnContainerUpdate.Add(CAEC.OnContainerUpdate)
