local CAEC_ItemCategorizer = require("CAExtendedCategories/CAEC_ItemCategorizer")
local Debug = require("CAExtendedCategories/CAEC_Debug")
local Utils = require("CAExtendedCategories/CAEC_Utils")

---@type (ItemTag | string)[]
local JewelryTags = table.newarray(
  ItemTag.AMETHYST_JEWELLERY, ItemTag.DIAMOND_JEWELLERY, ItemTag.EMERALD_JEWELLERY, ItemTag.RUBY_JEWELLERY,
  ItemTag.SAPPHIRE_JEWELLERY, ItemTag.TWO_DIAMOND_JEWELLERY, ItemTag.TWO_EMERALD_JEWELLERY, ItemTag.TWO_RUBY_JEWELLERY,
  ItemTag.TWO_SAPPHIRE_JEWELLERY, ItemTag.TINY_GOLD_SCRAP, ItemTag.TINY_SILVER_SCRAP, ItemTag.SMALL_GOLD_SCRAP,
  ItemTag.SMALL_SILVER_SCRAP, ItemTag.SMALLER_GOLD_SCRAP, ItemTag.SMALLER_SILVER_SCRAP, ItemTag.SMALLEST_GOLD_SCRAP,
  ItemTag.SMALLEST_SILVER_SCRAP
)

---@enum CAEC_ApparelCategory
local ApparelCategory = {
  CLOTHING_FULL_BODY = "ClothingFullBody",
  CLOTHING_OUTERWEAR = "ClothingOuterwear",
  CLOTHING_VEST = "ClothingVest",
  CLOTHING_TOP = "ClothingTop",
  CLOTHING_BOTTOM = "ClothingBottom",
  CLOTHING_FOOTWEAR = "ClothingFootwear",
  CLOTHING_SOCKS = "ClothingSocks",
  CLOTHING_HEAD = "ClothingHead",
  CLOTHING_HANDS = "ClothingHands",
  CLOTHING_UNDERWEAR = "ClothingUnderwear",

  ACCESSORY = "Accessory",
  ACCESSORY_LEGS = "AccessoryLegs",
  ACCESSORY_TOP = "AccessoryTop",
  ACCESSORY_ARMS = "AccessoryArms",
  ACCESSORY_NECK = "AccessoryNeck",
  ACCESSORY_HANDS = "AccessoryHands",
  ACCESSORY_HEAD = "AccessoryHead",
  ACCESSORY_FACE = "AccessoryFace",
  ACCESSORY_JEWELRY = "AccessoryJewelry",

  PROTECTIVE_GEAR = "ProtectiveGear",
  PROTECTIVE_GEAR_LEGS = "ProtectiveGearLegs",
  PROTECTIVE_GEAR_TOP = "ProtectiveGearTop",
  PROTECTIVE_GEAR_ARMS = "ProtectiveGearArms",
  PROTECTIVE_GEAR_HANDS = "ProtectiveGearHands",
  PROTECTIVE_GEAR_HEAD = "ProtectiveGearHead",
  PROTECTIVE_GEAR_FACE = "ProtectiveGearFace",
  PROTECTIVE_GEAR_FOOTWEAR = "ProtectiveGearFootwear"
}

---@type table<CAEC_ApparelCategory, ItemBodyLocation[]>
local ApparelCategories = {
  [ApparelCategory.CLOTHING_FULL_BODY] = {
    ItemBodyLocation.DRESS,
    ItemBodyLocation.LONG_DRESS,
    ItemBodyLocation.BODY_COSTUME,
    ItemBodyLocation.FULL_SUIT,
    ItemBodyLocation.FULL_ROBE,
    ItemBodyLocation.BATH_ROBE,
    -- coveralls
    ItemBodyLocation.BOILERSUIT,
    -- dungarees / overalls
    ItemBodyLocation.PANTS_EXTRA,
    -- hazmat suit
    ItemBodyLocation.FULL_SUIT_HEAD,
    ItemBodyLocation.FULL_SUIT_HEAD_SCBA
  },

  [ApparelCategory.CLOTHING_OUTERWEAR] = {
    ItemBodyLocation.JACKET,
    ItemBodyLocation.JACKET_BULKY,
    ItemBodyLocation.JACKET_DOWN,
    ItemBodyLocation.JACKET_SUIT,
    -- ghillie top
    ItemBodyLocation.FULL_TOP,
    -- poncho
    ItemBodyLocation.JACKET_HAT,
    ItemBodyLocation.JACKET_HAT_BULKY,
    ItemBodyLocation.TORSO_EXTRA_VEST,
    ItemBodyLocation.VEST_TEXTURE
  },

  [ApparelCategory.CLOTHING_TOP] = {
    ItemBodyLocation.SHIRT,
    ItemBodyLocation.TSHIRT,
    ItemBodyLocation.SHORT_SLEEVE_SHIRT,
    ItemBodyLocation.TANK_TOP,
    ItemBodyLocation.JERSEY,
    ItemBodyLocation.SWEATER,
    ItemBodyLocation.SWEATER_HAT,
    ItemBodyLocation.CUIRASS
  },

  [ApparelCategory.CLOTHING_BOTTOM] = {
    ItemBodyLocation.LONG_SKIRT,
    ItemBodyLocation.PANTS,
    ItemBodyLocation.PANTS_SKINNY,
    ItemBodyLocation.SHORTS_SHORT,
    ItemBodyLocation.SHORT_PANTS,
    ItemBodyLocation.SKIRT,
    ItemBodyLocation.LEGS1,
    ItemBodyLocation.LEGS5
  },

  [ApparelCategory.CLOTHING_FOOTWEAR] = {
    ItemBodyLocation.SHOES
  },

  [ApparelCategory.CLOTHING_SOCKS] = {
    ItemBodyLocation.SOCKS
  },

  [ApparelCategory.CLOTHING_HANDS] = {
    ItemBodyLocation.HANDS,
    ItemBodyLocation.HANDS_LEFT,
    ItemBodyLocation.HANDS_RIGHT
  },

  [ApparelCategory.CLOTHING_HEAD] = {
    ItemBodyLocation.HAT,
    ItemBodyLocation.FULL_HAT
  },

  [ApparelCategory.CLOTHING_UNDERWEAR] = {
    ItemBodyLocation.UNDERWEAR,
    ItemBodyLocation.UNDERWEAR_TOP,
    ItemBodyLocation.UNDERWEAR_BOTTOM,
    ItemBodyLocation.UNDERWEAR_EXTRA1,
    ItemBodyLocation.UNDERWEAR_EXTRA2,
    ItemBodyLocation.CODPIECE,
    -- long johns
    ItemBodyLocation.TORSO1LEGS1
  },

  [ApparelCategory.ACCESSORY] = {
    ItemBodyLocation.SATCHEL,
    ItemBodyLocation.SCBANOTANK,
    ItemBodyLocation.BELT,
    -- holster
    ItemBodyLocation.BELT_EXTRA
  },

  [ApparelCategory.ACCESSORY_NECK] = {
    ItemBodyLocation.NECK,
    ItemBodyLocation.NECKLACE,
    ItemBodyLocation.NECKLACE_LONG,
    ItemBodyLocation.SCARF,
    -- neck protector
    ItemBodyLocation.GORGET,
    -- tie
    ItemBodyLocation.NECK_TEXTURE
  },

  [ApparelCategory.ACCESSORY_ARMS] = {
    ItemBodyLocation.LEFT_WRIST,
    ItemBodyLocation.RIGHT_WRIST,
    ItemBodyLocation.FORE_ARM_LEFT,
    ItemBodyLocation.FORE_ARM_RIGHT,
    ItemBodyLocation.LEFT_ARM,
    ItemBodyLocation.RIGHT_ARM,
    ItemBodyLocation.ELBOW_LEFT,
    ItemBodyLocation.ELBOW_RIGHT,
    ItemBodyLocation.SHOULDERPAD_LEFT,
    ItemBodyLocation.SHOULDERPAD_RIGHT,
    ItemBodyLocation.SPORT_SHOULDERPAD,
    ItemBodyLocation.SPORT_SHOULDERPAD_ON_TOP
  },

  [ApparelCategory.ACCESSORY_HANDS] = {
    ItemBodyLocation.LEFT_RING_FINGER,
    ItemBodyLocation.LEFT_MIDDLE_FINGER,
    ItemBodyLocation.RIGHT_MIDDLE_FINGER,
    ItemBodyLocation.RIGHT_RING_FINGER
  },

  [ApparelCategory.ACCESSORY_LEGS] = {
    ItemBodyLocation.ANKLE_HOLSTER,
    ItemBodyLocation.CALF_LEFT,
    ItemBodyLocation.CALF_RIGHT,
    ItemBodyLocation.CALF_LEFT_TEXTURE,
    ItemBodyLocation.CALF_RIGHT_TEXTURE,
    ItemBodyLocation.THIGH_LEFT,
    ItemBodyLocation.THIGH_RIGHT,
    ItemBodyLocation.GAITER_LEFT,
    ItemBodyLocation.GAITER_RIGHT,
    ItemBodyLocation.KNEE_LEFT,
    ItemBodyLocation.KNEE_RIGHT
  },

  [ApparelCategory.ACCESSORY_TOP] = {
    ItemBodyLocation.SHOULDER_HOLSTER,
    ItemBodyLocation.WEBBING,
    ItemBodyLocation.BELLY_BUTTON,
    ItemBodyLocation.TAIL,
    ItemBodyLocation.BACK,
    ItemBodyLocation.AMMO_STRAP,
    ItemBodyLocation.TORSO_EXTRA,
    ItemBodyLocation.TORSO_EXTRA_VEST_BULLET,
    ItemBodyLocation.FANNY_PACK_BACK,
    ItemBodyLocation.FANNY_PACK_FRONT
  },

  [ApparelCategory.ACCESSORY_HEAD] = {
    ItemBodyLocation.EARS,
    ItemBodyLocation.EAR_TOP
  },

  [ApparelCategory.ACCESSORY_FACE] = {
    ItemBodyLocation.MASK,
    ItemBodyLocation.MASK_EYES,
    ItemBodyLocation.MASK_FULL,
    ItemBodyLocation.EYES,
    ItemBodyLocation.NOSE,
    ItemBodyLocation.LEFT_EYE,
    ItemBodyLocation.RIGHT_EYE,
    ItemBodyLocation.MAKE_UP_EYES,
    ItemBodyLocation.MAKE_UP_EYES_SHADOW,
    ItemBodyLocation.MAKE_UP_FULL_FACE,
    ItemBodyLocation.MAKE_UP_LIPS,
    ItemBodyLocation.SCBA
  },

  -- (usually) not done by body location, but by item tags
  [ApparelCategory.ACCESSORY_JEWELRY] = {},

  [ApparelCategory.PROTECTIVE_GEAR] = {},
  [ApparelCategory.PROTECTIVE_GEAR_HANDS] = {},
  [ApparelCategory.PROTECTIVE_GEAR_FOOTWEAR] = {},
  [ApparelCategory.PROTECTIVE_GEAR_ARMS] = {},
  [ApparelCategory.PROTECTIVE_GEAR_LEGS] = {},
  [ApparelCategory.PROTECTIVE_GEAR_TOP] = {},
  [ApparelCategory.PROTECTIVE_GEAR_HEAD] = {},
  [ApparelCategory.PROTECTIVE_GEAR_FACE] = {}
}

---@class CAEC_ApparelCategorizer: CAEC_ItemCategorizer
---@field bodyLocationGroup          BodyLocationGroup
---@field Category                   CAEC_ApparelCategory
---@field apparelCategories          table<CAEC_ApparelCategory, ItemBodyLocation[]>
---@field categoryByBodyLocation     table<string, CAEC_ApparelCategory>
---@field BodyLocationsMap           table<string, CAEC_ApparelCategory>
---@field JewelryTags                (ItemTag | string)[]
---@field registerBodyLocation       fun(bodyLocation: string | ItemBodyLocation, category: CAEC_ApparelCategory)
---@field registerJewelryTag         fun(tag: ItemTag | string)
---@field public resolveBodyLocation fun(self: CAEC_ApparelCategorizer, bodyLocation: string | ItemBodyLocation): ItemBodyLocation?
local Apparel = CAEC_ItemCategorizer:derive("Apparel")

Apparel.Category = ApparelCategory

Apparel.JewelryTags = JewelryTags

-- if item did not already have ProtectiveGear category it must have at least one defense over this threshold to be categorized as ProtectiveGear
Apparel.protectiveGearDefenseCutoff = 50.0

-- body locations registered by compatibility modules, applied on top of the built-in categories in initialise
---@type table<string, CAEC_ApparelCategory>
Apparel.BodyLocationsMap = {}

Apparel.compoundCategories = { --
  Tool = true,
  FirstAid = true,
  Memento = true
}

function Apparel:new()
  ---@type CAEC_ApparelCategorizer
  local o = CAEC_ItemCategorizer.new(self)

  o.bodyLocationGroup = BodyLocations.getGroup("Human")
  o.apparelCategories = ApparelCategories

  return o
end

function Apparel:initialise()
  local debug = self:isDebug()

  self.categoryByBodyLocation = {}

  for category, bodyLocations in pairs(self.apparelCategories) do
    if debug then
      self:log("  > Initialized apparel group: " .. tostring(category))
    end

    for i = 1, #bodyLocations do
      local key = tostring(bodyLocations[i])
      local existing = self.categoryByBodyLocation[key]

      if existing and existing ~= category then
        self:log(string.format("Body location %s is in both %s and %s", key, existing, category), Debug.Level.Warning)
      end

      self.categoryByBodyLocation[key] = category

      if debug then
        self:log("        - " .. key)
      end
    end
  end

  for bodyLocation, category in pairs(Apparel.BodyLocationsMap) do
    local resolved = self:resolveBodyLocation(bodyLocation)

    if resolved then
      self:log(string.format("  + BodyLocation %-24s -> %s", tostring(resolved), category))
      self.categoryByBodyLocation[tostring(resolved)] = category
    else
      self:log("Body location not found: " .. bodyLocation, Debug.Level.Warning)
    end
  end
end

function Apparel:validate(item, _instance)
  return not item:isItemType(ItemType.CONTAINER) and item:getBodyLocation() ~= nil
    and not item:isBodyLocation(ItemBodyLocation.WOUND) and not item:isBodyLocation(ItemBodyLocation.ZED_DMG)
    and not item:isBodyLocation(ItemBodyLocation.BANDAGE)
end

---@param bodyLocation string | ItemBodyLocation
---@param category     CAEC_ApparelCategory
function Apparel.registerBodyLocation(bodyLocation, category)
  Apparel.BodyLocationsMap[tostring(bodyLocation)] = category
end

---@param tag ItemTag | string
function Apparel.registerJewelryTag(tag)
  table.insert(Apparel.JewelryTags, tag)
end

---@param input ItemBodyLocation | string
---@return ItemBodyLocation?
function Apparel:resolveBodyLocation(input)
  if type(input) == "string" then
    local ibl = ItemBodyLocation.get(ResourceLocation.of(input))
    local bl = self.bodyLocationGroup:getLocation(ibl)

    if not bl then
      return nil
    end

    return bl:getId()
  elseif instanceof(input, "ItemBodyLocation") then
    ---@cast input ItemBodyLocation
    return input
  end

  error("Invalid input: " .. tostring(input), 2)
end

---@param item     Item
---@param instance InventoryItem
function Apparel:categorize(item, instance)
  ---@type string | nil
  local category = nil

  if Utils.hasAnyTag(item, self.JewelryTags) then
    category = self.Category.ACCESSORY_JEWELRY
  else
    ---@type string | nil
    category = self.categoryByBodyLocation[tostring(item:getBodyLocation())]
  end

  if category then
    -- local resolved = self:resolveCategory(item, item, instance)
    -- local initialCategory = resolved or item:getDisplayCategory()

    ---@type string | nil
    local initialCategory = Utils.getOriginalCategory(item)
    local highestDefense = 0.0

    if instanceof(instance, "Clothing") then
      ---@cast instance Clothing
      highestDefense = math.max(instance:getScratchDefense(), instance:getBulletDefense(), instance:getBiteDefense())
    end

    local prefix = Apparel.compoundCategories[initialCategory] and initialCategory .. "__" or ""

    if "ProtectiveGear" == initialCategory or highestDefense >= Apparel.protectiveGearDefenseCutoff then
      category = prefix
        .. category
          :gsub("Clothing", "ProtectiveGear")
          :gsub("Accessory", "ProtectiveGear")
    elseif item:hasTag(ItemTag.SPRAYER) then
      category = "Gardening__" .. category
    end
  end

  if not category and Debug.isLevel(Debug.Level.Warning) then
    self:log("Unregistered body location: " .. item:getBodyLocation():toString(), Debug.Level.Warning)
  end

  return category
end

return Apparel
