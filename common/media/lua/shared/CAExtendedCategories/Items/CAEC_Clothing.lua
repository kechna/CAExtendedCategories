local Debug = require("CAExtendedCategories/CAEC_Debug")

local Clothing = {
  Name = "Clothing",
}

Clothing.Map = {
  FullBody = {
    ItemBodyLocation.DRESS,
    ItemBodyLocation.LONG_DRESS,
    ItemBodyLocation.BODY_COSTUME,
    ItemBodyLocation.FULL_SUIT,
    ItemBodyLocation.FULL_ROBE,
    ItemBodyLocation.BATH_ROBE,
    ItemBodyLocation.BOILERSUIT,
  },
  Bottom = {
    ItemBodyLocation.LONG_SKIRT,
    ItemBodyLocation.PANTS,
    ItemBodyLocation.PANTS_SKINNY,
    ItemBodyLocation.SHORTS_SHORT,
    ItemBodyLocation.SHORT_PANTS,
    ItemBodyLocation.SKIRT,
  },
  Feet = {
    ItemBodyLocation.SHOES,
    ItemBodyLocation.SOCKS,
  },
  Hands = {
    ItemBodyLocation.HANDS,
    ItemBodyLocation.HANDS_LEFT,
    ItemBodyLocation.HANDS_RIGHT,
  },
  Head = {
    ItemBodyLocation.HAT,
    ItemBodyLocation.FULL_HAT,
    ItemBodyLocation.SCBA,
  },
  Top = {
    ItemBodyLocation.SHIRT,
    ItemBodyLocation.TSHIRT,
    ItemBodyLocation.TANK_TOP,
    ItemBodyLocation.JERSEY,
    ItemBodyLocation.SWEATER,
    ItemBodyLocation.JACKET,
    ItemBodyLocation.JACKET_BULKY,
    ItemBodyLocation.JACKET_DOWN,
    ItemBodyLocation.JACKET_SUIT,
  },
  Legs = {
    ItemBodyLocation.LEGS1,
    ItemBodyLocation.LEGS5,
    ItemBodyLocation.CALF_LEFT,
    ItemBodyLocation.CALF_RIGHT,
    ItemBodyLocation.THIGH_LEFT,
    ItemBodyLocation.THIGH_RIGHT,
    ItemBodyLocation.GAITER_LEFT,
    ItemBodyLocation.GAITER_RIGHT,
  },
  Arms = {
    ItemBodyLocation.FORE_ARM_LEFT,
    ItemBodyLocation.FORE_ARM_RIGHT,
    ItemBodyLocation.LEFT_ARM,
    ItemBodyLocation.RIGHT_ARM,
    ItemBodyLocation.SHOULDERPAD_LEFT,
    ItemBodyLocation.SHOULDERPAD_RIGHT,
    ItemBodyLocation.SPORT_SHOULDERPAD,
    ItemBodyLocation.SPORT_SHOULDERPAD_ON_TOP,
    ItemBodyLocation.ELBOW_LEFT,
    ItemBodyLocation.ELBOW_RIGHT,
  },
  Accessory = {
    ItemBodyLocation.NECK,
    ItemBodyLocation.EARS,
    ItemBodyLocation.TAIL,
    ItemBodyLocation.BACK,
    ItemBodyLocation.BELT,
    ItemBodyLocation.WRIST,
    ItemBodyLocation.SCARF,
    ItemBodyLocation.ANKLE_HOLSTER,
    ItemBodyLocation.SHOULDER_HOLSTER,

    ItemBodyLocation.MASK_EYES,
    ItemBodyLocation.MASK_EYES,
    ItemBodyLocation.MASK_EYES,
    ItemBodyLocation.MASK_FULL,
    ItemBodyLocation.MASK_FULL,
    ItemBodyLocation.MASK_FULL,
    ItemBodyLocation.EYES,
    ItemBodyLocation.MOUTH,
    ItemBodyLocation.LEFT_EYE,
    ItemBodyLocation.RIGHT_EYE,
  },
}

---@param item Item
function Clothing.Validate(item)
  return item:isItemType(ItemType.CLOTHING)
end

---@param item Item
---@return string|nil
function Clothing.Categorize(item)
  if not Clothing.Validate(item) then
    return nil
  end

  ---@type string|nil
  local category = nil

  for categoryName, bodyLocations in pairs(Clothing.Map) do
    for _, bodyLocation in ipairs(bodyLocations) do
      if item:isBodyLocation(bodyLocation) then
        category = "Clothing" .. categoryName
        break
      end
    end

    if category then
      break
    end
  end

  if not category then
    Debug.log("---> no clothing category for item: " .. item:getName(), "Clothing")
  end

  return category
end

local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")

local Categorizer = CAEC_ItemCategorizer:derive("Clothing")

function Categorizer:validate(item, _instance)
  return Clothing.Validate(item)
end

function Categorizer:categorize(item, _instance)
  return Clothing.Categorize(item)
end

return Categorizer
