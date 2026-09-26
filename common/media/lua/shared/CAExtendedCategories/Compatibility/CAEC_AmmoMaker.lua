-- compatibility with the Ammo Maker ammo types, works if any mod defines them

local CAEC = require("CAExtendedCategories/CAEC")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

ammoMakerAddAmmoTypesMap0 = ammoMakerAddAmmoTypesMap0 or nil
ammoMakerAddDropExtraItemsMap0 = ammoMakerAddDropExtraItemsMap0 or nil

local ammoTypesMap = ammoMakerAddAmmoTypesMap0
local dropExtraItemsMap = ammoMakerAddDropExtraItemsMap0

CAEC.registerInitHook("Compat:AmmoMaker", function ()
  ammoTypesMap = ammoMakerAddAmmoTypesMap0
  dropExtraItemsMap = ammoMakerAddDropExtraItemsMap0

  if not ammoTypesMap and not dropExtraItemsMap then return end

  local AmmoGroupMapping = {
    ["545x39"]      = Ammo.AmmoGroup.RIFLE,
    ["223Rem"]      = Ammo.AmmoGroup.RIFLE,
    ["57x28"]       = Ammo.AmmoGroup.HANDGUN,
    ["22LR"]        = Ammo.AmmoGroup.HANDGUN,
    ["58x42"]       = Ammo.AmmoGroup.RIFLE,
    ["25ACP"]       = Ammo.AmmoGroup.HANDGUN,
    ["65x50SRAris"] = Ammo.AmmoGroup.RIFLE,
    ["65x52Carc"]   = Ammo.AmmoGroup.RIFLE,
    ["30Carbine"]   = Ammo.AmmoGroup.RIFLE,
    ["762x38RNag"]  = Ammo.AmmoGroup.HANDGUN,
    ["762x51NATO"]  = Ammo.AmmoGroup.RIFLE,
    ["75x54"]       = Ammo.AmmoGroup.RIFLE,
    ["3006Spring"]  = Ammo.AmmoGroup.RIFLE,
    ["762x25Tok"]   = Ammo.AmmoGroup.HANDGUN,
    ["762x39"]      = Ammo.AmmoGroup.RIFLE,
    ["303British"]  = Ammo.AmmoGroup.RIFLE,
    ["762x54R"]     = Ammo.AmmoGroup.RIFLE,
    ["32ACP"]       = Ammo.AmmoGroup.HANDGUN,
    ["792x33Kurz"]  = Ammo.AmmoGroup.RIFLE,
    ["792x57Maus"]  = Ammo.AmmoGroup.RIFLE,
    ["8x50RLeb"]    = Ammo.AmmoGroup.RIFLE,
    ["8x27RLeb"]    = Ammo.AmmoGroup.HANDGUN,
    ["86x43BLK"]    = Ammo.AmmoGroup.RIFLE,
    ["338Lapua"]    = Ammo.AmmoGroup.RIFLE,
    ["380ACP"]      = Ammo.AmmoGroup.HANDGUN,
    ["9x25Maus"]    = Ammo.AmmoGroup.HANDGUN,
    ["9x39"]        = Ammo.AmmoGroup.RIFLE,
    ["9x18Mak"]     = Ammo.AmmoGroup.HANDGUN,
    ["410Buck00"]   = Ammo.AmmoGroup.SHOTGUN,
    ["10x25Auto"]   = Ammo.AmmoGroup.HANDGUN,
    ["40SW"]        = Ammo.AmmoGroup.HANDGUN,
    ["4440WCF"]     = Ammo.AmmoGroup.RIFLE,
    ["45LC"]        = Ammo.AmmoGroup.HANDGUN,
    ["4570Gov"]     = Ammo.AmmoGroup.RIFLE,
    ["50AE"]        = Ammo.AmmoGroup.HANDGUN,
    ["500SWMag"]    = Ammo.AmmoGroup.HANDGUN,
    ["50BMG"]       = Ammo.AmmoGroup.RIFLE,
    ["127x55"]      = Ammo.AmmoGroup.RIFLE,
    ["20Buck00"]    = Ammo.AmmoGroup.SHOTGUN,
    ["12Slug"]      = Ammo.AmmoGroup.SHOTGUN,
    ["10Buck00"]    = Ammo.AmmoGroup.SHOTGUN,
    ["4Buck00"]     = Ammo.AmmoGroup.SHOTGUN,
    ["40mmHE"]      = Ammo.AmmoGroup.EXPLOSIVE,
    ["40mmINC"]     = Ammo.AmmoGroup.EXPLOSIVE,

    -- Base game
    ["556x45NATO"] = Ammo.AmmoGroup.RIFLE,
    ["3030Win"]    = Ammo.AmmoGroup.RIFLE,
    ["308Win"]     = Ammo.AmmoGroup.RIFLE,
    ["9x19Para"]   = Ammo.AmmoGroup.HANDGUN,
    ["38SP"]       = Ammo.AmmoGroup.HANDGUN,
    ["357Mag"]     = Ammo.AmmoGroup.HANDGUN,
    ["44Mag"]      = Ammo.AmmoGroup.HANDGUN,
    ["45ACP"]      = Ammo.AmmoGroup.HANDGUN,
    ["12Buck00"]   = Ammo.AmmoGroup.SHOTGUN
  }

  ---@param map table | nil
  local function register(map)
    if not map then return end

    CAEC.debug("Mapping ammo maker types...")

    for _, entry in ipairs(map) do
      local itemType = entry.itemType
      local ammoType = entry.ammoType
      local group = AmmoGroupMapping[ammoType]

      if group then
        Ammo.registerItemAmmoGroup(itemType, group)
      else
        CAEC.debug(
          string.format(
            "Warning: No ammo group mapping found for ammoType=%s. Defaulting to Ammo.GetAmmoGroup.", ammoType
          )
        )
      end
    end
  end

  register(ammoTypesMap)
  register(dropExtraItemsMap)
end)
