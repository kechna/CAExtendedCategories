---@type table<string, [string, string]>
local CategoryModes = {
  ["FoodPerishableSeafood"] = table.newarray( "FoodPerishableMeat", "FoodPerishableMeat"      ),
  ["FoodSeafood"]           = table.newarray( "FoodMeat"          , "FoodMeat"                ),
  ["LiteratureAdult"]       = table.newarray( "LiteratureMagazine", "LiteratureEntertainment" ),
  ["LiteratureComic"]       = table.newarray( "LiteratureMagazine", "LiteratureEntertainment" ),
  ["LiteratureFlier"]       = table.newarray( "LiteratureBrochure", "LiteratureBrochure"      ),
  ["LiteratureHardcover"]   = table.newarray( "LiteratureBook"    , "LiteratureEntertainment" ),
  ["LiteraturePictureBook"] = table.newarray( "LiteratureBook"    , "LiteratureEntertainment" ),
  ["LiteratureRpgManual"]   = table.newarray( "LiteratureBook"    , "LiteratureEntertainment" ),
  ["LiteratureSoftcover"]   = table.newarray( "LiteratureBook"    , "LiteratureEntertainment" )
}

return CategoryModes
