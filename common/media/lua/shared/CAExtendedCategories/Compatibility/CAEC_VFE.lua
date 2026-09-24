local Utils = require("CAExtendedCategories/CAEC_Utils")
local Ammo = require("CAExtendedCategories/Categorizers/CAEC_Ammo")

if not Utils.modIsActive("VFExpansion1") then return end

Ammo.registerAmmoGroup("vfe:bullets_762", Ammo.AmmoGroup.RIFLE)
Ammo.registerAmmoGroup("vfe:bullets_22", Ammo.AmmoGroup.HANDGUN)
Ammo.registerAmmoGroup("vfe:bullets_223", Ammo.AmmoGroup.RIFLE)
Ammo.registerAmmoGroup("vfe:bullets_308_linked", Ammo.AmmoGroup.RIFLE)

Ammo.registerItemAmmoGroup("Base.223Carton", Ammo.AmmoGroup.RIFLE)
Ammo.registerItemAmmoGroup("Base.22Bullets", Ammo.AmmoGroup.HANDGUN)
Ammo.registerItemAmmoGroup("Base.762Bullets", Ammo.AmmoGroup.RIFLE)
Ammo.registerItemAmmoGroup("Base.M60_Links_Box", Ammo.AmmoGroup.RIFLE)
