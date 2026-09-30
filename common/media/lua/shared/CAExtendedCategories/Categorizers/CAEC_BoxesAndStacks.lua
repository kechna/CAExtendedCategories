local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Utils = require("CAExtendedCategories/CAEC_Utils")
local Debug = require("CAExtendedCategories/CAEC_Debug")

---@class CAEC_BoxesAndStacksCategorizer: CAEC_ItemCategorizer
local BoxesAndStacks = CAEC_ItemCategorizer:derive("BoxesAndStacks")

-- BoxesAndStacks.contents = {}
-- BoxesAndStacks.skipped = table.newarray()
--
-- function BoxesAndStacks.registerContents(box, contents)
--  BoxesAndStacks.contents[box] = contents
-- end

---@param item     Item
---@param instance InventoryItem
---@return string | nil, string | nil
local function byName(item, instance)
  local iconTexture = instance:getIcon()
  local icon = iconTexture and iconTexture:getName() or nil

  if icon and not icon:contains("Parcel") and not icon:contains("Carton") then
    return nil, nil
  end

  ---@type string | nil
  local suffix = nil
  local category = (icon and icon:contains("Food")) and "Food" or nil
  local name = item:getName():lower()

  if name:contains("box") then
    suffix = "Box"
  elseif name:contains("carton") then
    suffix = "Carton"
  end

  return suffix, category
end

---@param item Item
---@return string | nil
local function byRecipe(item)
  ---@type string | nil
  local recipe = item:getDoubleClickRecipe()

  if not recipe then
    return nil
  end

  recipe = recipe:lower()
  local suffix = nil

  if recipe == "unstack_items" then
    suffix = "Bundled"
  elseif recipe:contains("carton") and (Utils.startsWith("open", recipe) or Utils.startsWith("unpack", recipe)) then
    suffix = "Carton"
  elseif Utils.startsWith("takea", recipe)
    or (recipe:contains("box") and (Utils.startsWith("unpack", recipe) or Utils.startsWith("open", recipe))) then
    suffix = "Box"
  end

  return suffix
end

---@param existingCategory string | nil
---@param item             Item
---@param instance         InventoryItem
---@return string | nil
function BoxesAndStacks.addToCategory(existingCategory, item, instance)
  ---@type string | nil
  local category = nil
  local suffix = byRecipe(item)

  if not suffix then
    suffix, category = byName(item, instance)

    if suffix and not existingCategory and category then
      existingCategory = category
    end
  end

  if suffix and existingCategory and not Utils.endsWith(suffix, existingCategory) then
    category = existingCategory .. suffix
  end

  return category
end
function BoxesAndStacks:categorize(item, instance)
  local existingCategory = item:getDisplayCategory()

  -- todo
  --- --@type string | nil
  -- local containingItem = self.contents[item:getFullName()]
  --
  -- if containingItem then
  --  existingCategory = Core.ItemTweaks[containingItem]
  --
  --  if not existingCategory then
  --    table.insert(BoxesAndStacks.skipped, item)
  --    Debug.log("Skipping " .. item:getFullName()
  --        .. " because its contents " .. containingItem
  --        .. " is not categorized yet.", "BoxesAndStacks")
  --    return nil
  --  end
  -- end

  return self.addToCategory(existingCategory, item, instance)
end

return BoxesAndStacks
