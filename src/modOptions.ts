import { Language } from "@pz/console";

type ModOptionsKey =
  | "Title"
  | "categoryColors"
  | "categoryColors_tooltip"
  | "categoryColorsTintStrength"
  | "categoryColorsHueVariation"
  | "categoryColorsValueVariation"
  | "categoryColorsLevelFalloff";

type ModOptionsTranslations = Record<Language, Record<ModOptionsKey, string>>;

export const MOD_OPTIONS_TRANSLATIONS: ModOptionsTranslations = {
  [Language.AR]: {
    Title: "Categorías extendidas",
    categoryColors: "Colorear categorías en el inventario",
    categoryColors_tooltip:
      "Da a cada categoría su propio color sutil en la lista del inventario. Las subcategorías usan una variación del color de su categoría principal.",
    categoryColorsTintStrength: "Intensidad del color (%)",
    categoryColorsHueVariation: "Variación de tono de subcategorías (%)",
    categoryColorsValueVariation: "Variación de brillo de subcategorías (%)",
    categoryColorsLevelFalloff: "Variación por nivel más profundo (%)",
  },
  [Language.CA]: {
    Title: "Categories ampliades",
    categoryColors: "Acolorir les categories a l'inventari",
    categoryColors_tooltip:
      "Dona a cada categoria el seu propi color subtil a la llista de l'inventari. Les subcategories fan servir una variació del color de la seva categoria principal.",
    categoryColorsTintStrength: "Intensitat del color (%)",
    categoryColorsHueVariation: "Variació de to de les subcategories (%)",
    categoryColorsValueVariation: "Variació de brillantor de les subcategories (%)",
    categoryColorsLevelFalloff: "Variació per nivell més profund (%)",
  },
  [Language.CH]: {
    Title: "擴展分類",
    categoryColors: "在物品欄中為分類上色",
    categoryColors_tooltip: "為物品欄列表中的每個分類賦予其專屬的柔和顏色。子分類會使用其上層分類顏色的變化。",
    categoryColorsTintStrength: "顏色強度 (%)",
    categoryColorsHueVariation: "子分類色相變化 (%)",
    categoryColorsValueVariation: "子分類亮度變化 (%)",
    categoryColorsLevelFalloff: "每深一層的變化 (%)",
  },
  [Language.CN]: {
    Title: "扩展分类",
    categoryColors: "在物品栏中为分类上色",
    categoryColors_tooltip: "为物品栏列表中的每个分类赋予其专属的柔和颜色。子分类会使用其上级分类颜色的变化。",
    categoryColorsTintStrength: "颜色强度 (%)",
    categoryColorsHueVariation: "子分类色相变化 (%)",
    categoryColorsValueVariation: "子分类亮度变化 (%)",
    categoryColorsLevelFalloff: "每深一级的变化 (%)",
  },
  [Language.CS]: {
    Title: "Rozšířené kategorie",
    categoryColors: "Obarvit kategorie v inventáři",
    categoryColors_tooltip:
      "Každé kategorii v seznamu inventáře dá vlastní jemnou barvu. Podkategorie používají obměnu barvy své nadřazené kategorie.",
    categoryColorsTintStrength: "Síla barvy (%)",
    categoryColorsHueVariation: "Odchylka odstínu podkategorií (%)",
    categoryColorsValueVariation: "Odchylka jasu podkategorií (%)",
    categoryColorsLevelFalloff: "Odchylka na každou hlubší úroveň (%)",
  },
  [Language.DA]: {
    Title: "Udvidede kategorier",
    categoryColors: "Farvelæg kategorier i inventaret",
    categoryColors_tooltip:
      "Giver hver kategori sin egen diskrete farve i inventarlisten. Underkategorier bruger en variation af deres overkategoris farve.",
    categoryColorsTintStrength: "Farvestyrke (%)",
    categoryColorsHueVariation: "Farvetonevariation for underkategorier (%)",
    categoryColorsValueVariation: "Lysstyrkevariation for underkategorier (%)",
    categoryColorsLevelFalloff: "Variation per dybere niveau (%)",
  },
  [Language.DE]: {
    Title: "Erweiterte Kategorien",
    categoryColors: "Kategorien im Inventar einfärben",
    categoryColors_tooltip:
      "Gibt jeder Kategorie in der Inventarliste eine eigene dezente Farbe. Unterkategorien verwenden eine Abwandlung der Farbe ihrer Oberkategorie.",
    categoryColorsTintStrength: "Farbstärke (%)",
    categoryColorsHueVariation: "Farbtonabweichung der Unterkategorien (%)",
    categoryColorsValueVariation: "Helligkeitsabweichung der Unterkategorien (%)",
    categoryColorsLevelFalloff: "Abweichung pro tieferer Ebene (%)",
  },
  [Language.EN]: {
    Title: "Extended Categories",
    categoryColors: "Color categories in the inventory",
    categoryColors_tooltip:
      "Gives each category its own subtle color in the inventory list. Subcategories use a variation of their parent category's color.",
    categoryColorsTintStrength: "Color strength (%)",
    categoryColorsHueVariation: "Subcategory hue variation (%)",
    categoryColorsValueVariation: "Subcategory brightness variation (%)",
    categoryColorsLevelFalloff: "Variation per deeper level (%)",
  },
  [Language.ES]: {
    Title: "Categorías ampliadas",
    categoryColors: "Colorear categorías en el inventario",
    categoryColors_tooltip:
      "Da a cada categoría su propio color sutil en la lista del inventario. Las subcategorías usan una variación del color de su categoría principal.",
    categoryColorsTintStrength: "Intensidad del color (%)",
    categoryColorsHueVariation: "Variación de tono de subcategorías (%)",
    categoryColorsValueVariation: "Variación de brillo de subcategorías (%)",
    categoryColorsLevelFalloff: "Variación por nivel más profundo (%)",
  },
  [Language.FI]: {
    Title: "Laajennetut kategoriat",
    categoryColors: "Väritä kategoriat tavaraluettelossa",
    categoryColors_tooltip:
      "Antaa jokaiselle kategorialle oman hienovaraisen värin tavaraluettelossa. Alakategoriat käyttävät muunnelmaa yläkategoriansa väristä.",
    categoryColorsTintStrength: "Värin voimakkuus (%)",
    categoryColorsHueVariation: "Alakategorioiden sävyvaihtelu (%)",
    categoryColorsValueVariation: "Alakategorioiden kirkkausvaihtelu (%)",
    categoryColorsLevelFalloff: "Vaihtelu jokaisella syvemmällä tasolla (%)",
  },
  [Language.FR]: {
    Title: "Catégories étendues",
    categoryColors: "Colorer les catégories dans l'inventaire",
    categoryColors_tooltip:
      "Donne à chaque catégorie sa propre couleur subtile dans la liste de l'inventaire. Les sous-catégories utilisent une variante de la couleur de leur catégorie parente.",
    categoryColorsTintStrength: "Intensité de la couleur (%)",
    categoryColorsHueVariation: "Variation de teinte des sous-catégories (%)",
    categoryColorsValueVariation: "Variation de luminosité des sous-catégories (%)",
    categoryColorsLevelFalloff: "Variation par niveau plus profond (%)",
  },
  [Language.HU]: {
    Title: "Bővített kategóriák",
    categoryColors: "Kategóriák színezése a leltárban",
    categoryColors_tooltip:
      "Minden kategória saját, visszafogott színt kap a leltárlistában. Az alkategóriák a szülőkategóriájuk színének egy változatát használják.",
    categoryColorsTintStrength: "Színerősség (%)",
    categoryColorsHueVariation: "Alkategóriák árnyalateltérése (%)",
    categoryColorsValueVariation: "Alkategóriák fényerőeltérése (%)",
    categoryColorsLevelFalloff: "Eltérés mélyebb szintenként (%)",
  },
  [Language.ID]: {
    Title: "Kategori Tambahan",
    categoryColors: "Warnai kategori di inventaris",
    categoryColors_tooltip:
      "Memberi setiap kategori warna halusnya sendiri di daftar inventaris. Subkategori memakai variasi warna dari kategori induknya.",
    categoryColorsTintStrength: "Kekuatan warna (%)",
    categoryColorsHueVariation: "Variasi rona subkategori (%)",
    categoryColorsValueVariation: "Variasi kecerahan subkategori (%)",
    categoryColorsLevelFalloff: "Variasi per tingkat lebih dalam (%)",
  },
  [Language.IT]: {
    Title: "Categorie estese",
    categoryColors: "Colora le categorie nell'inventario",
    categoryColors_tooltip:
      "Assegna a ogni categoria un proprio colore discreto nell'elenco dell'inventario. Le sottocategorie usano una variante del colore della categoria principale.",
    categoryColorsTintStrength: "Intensità del colore (%)",
    categoryColorsHueVariation: "Variazione di tonalità delle sottocategorie (%)",
    categoryColorsValueVariation: "Variazione di luminosità delle sottocategorie (%)",
    categoryColorsLevelFalloff: "Variazione per livello più profondo (%)",
  },
  [Language.JP]: {
    Title: "拡張カテゴリー",
    categoryColors: "インベントリのカテゴリーに色を付ける",
    categoryColors_tooltip:
      "インベントリ一覧の各カテゴリーに控えめな専用の色を付けます。サブカテゴリーは親カテゴリーの色を少し変えた色になります。",
    categoryColorsTintStrength: "色の強さ (%)",
    categoryColorsHueVariation: "サブカテゴリーの色相の変化 (%)",
    categoryColorsValueVariation: "サブカテゴリーの明るさの変化 (%)",
    categoryColorsLevelFalloff: "階層が深くなるごとの変化 (%)",
  },
  [Language.KO]: {
    Title: "확장 카테고리",
    categoryColors: "인벤토리에서 카테고리 색상 표시",
    categoryColors_tooltip:
      "인벤토리 목록의 각 카테고리에 은은한 고유 색상을 부여합니다. 하위 카테고리는 상위 카테고리 색상을 변형한 색을 사용합니다.",
    categoryColorsTintStrength: "색상 강도 (%)",
    categoryColorsHueVariation: "하위 카테고리 색조 변화 (%)",
    categoryColorsValueVariation: "하위 카테고리 밝기 변화 (%)",
    categoryColorsLevelFalloff: "하위 단계별 변화 (%)",
  },
  [Language.NL]: {
    Title: "Uitgebreide categorieën",
    categoryColors: "Categorieën in de inventaris inkleuren",
    categoryColors_tooltip:
      "Geeft elke categorie een eigen subtiele kleur in de inventarislijst. Subcategorieën gebruiken een variatie op de kleur van hun hoofdcategorie.",
    categoryColorsTintStrength: "Kleursterkte (%)",
    categoryColorsHueVariation: "Tintvariatie van subcategorieën (%)",
    categoryColorsValueVariation: "Helderheidsvariatie van subcategorieën (%)",
    categoryColorsLevelFalloff: "Variatie per dieper niveau (%)",
  },
  [Language.NO]: {
    Title: "Utvidede kategorier",
    categoryColors: "Fargelegg kategorier i inventaret",
    categoryColors_tooltip:
      "Gir hver kategori sin egen diskré farge i inventarlisten. Underkategorier bruker en variant av fargen til overkategorien.",
    categoryColorsTintStrength: "Fargestyrke (%)",
    categoryColorsHueVariation: "Fargetonevariasjon for underkategorier (%)",
    categoryColorsValueVariation: "Lysstyrkevariasjon for underkategorier (%)",
    categoryColorsLevelFalloff: "Variasjon per dypere nivå (%)",
  },
  [Language.PH]: {
    Title: "Pinalawak na mga Kategorya",
    categoryColors: "Kulayan ang mga kategorya sa imbentaryo",
    categoryColors_tooltip:
      "Binibigyan ang bawat kategorya ng sarili nitong banayad na kulay sa listahan ng imbentaryo. Gumagamit ang mga subkategorya ng bersyon ng kulay ng kanilang pangunahing kategorya.",
    categoryColorsTintStrength: "Tindi ng kulay (%)",
    categoryColorsHueVariation: "Pagkakaiba ng hue ng subkategorya (%)",
    categoryColorsValueVariation: "Pagkakaiba ng liwanag ng subkategorya (%)",
    categoryColorsLevelFalloff: "Pagkakaiba bawat mas malalim na antas (%)",
  },
  [Language.PL]: {
    Title: "Rozszerzone kategorie",
    categoryColors: "Koloruj kategorie w ekwipunku",
    categoryColors_tooltip:
      "Nadaje każdej kategorii własny, subtelny kolor na liście ekwipunku. Podkategorie używają odmiany koloru swojej kategorii nadrzędnej.",
    categoryColorsTintStrength: "Intensywność koloru (%)",
    categoryColorsHueVariation: "Zmienność odcienia podkategorii (%)",
    categoryColorsValueVariation: "Zmienność jasności podkategorii (%)",
    categoryColorsLevelFalloff: "Zmienność na każdy głębszy poziom (%)",
  },
  [Language.PT]: {
    Title: "Categorias alargadas",
    categoryColors: "Colorir categorias no inventário",
    categoryColors_tooltip:
      "Dá a cada categoria a sua própria cor subtil na lista do inventário. As subcategorias usam uma variação da cor da sua categoria principal.",
    categoryColorsTintStrength: "Intensidade da cor (%)",
    categoryColorsHueVariation: "Variação de tom das subcategorias (%)",
    categoryColorsValueVariation: "Variação de brilho das subcategorias (%)",
    categoryColorsLevelFalloff: "Variação por nível mais profundo (%)",
  },
  [Language.PTBR]: {
    Title: "Categorias estendidas",
    categoryColors: "Colorir categorias no inventário",
    categoryColors_tooltip:
      "Dá a cada categoria sua própria cor sutil na lista do inventário. As subcategorias usam uma variação da cor da categoria principal.",
    categoryColorsTintStrength: "Intensidade da cor (%)",
    categoryColorsHueVariation: "Variação de tom das subcategorias (%)",
    categoryColorsValueVariation: "Variação de brilho das subcategorias (%)",
    categoryColorsLevelFalloff: "Variação por nível mais profundo (%)",
  },
  [Language.RO]: {
    Title: "Categorii extinse",
    categoryColors: "Colorează categoriile în inventar",
    categoryColors_tooltip:
      "Oferă fiecărei categorii propria culoare discretă în lista inventarului. Subcategoriile folosesc o variație a culorii categoriei părinte.",
    categoryColorsTintStrength: "Intensitatea culorii (%)",
    categoryColorsHueVariation: "Variația nuanței subcategoriilor (%)",
    categoryColorsValueVariation: "Variația luminozității subcategoriilor (%)",
    categoryColorsLevelFalloff: "Variație pe fiecare nivel mai adânc (%)",
  },
  [Language.RU]: {
    Title: "Расширенные категории",
    categoryColors: "Раскрашивать категории в инвентаре",
    categoryColors_tooltip:
      "Даёт каждой категории свой неброский цвет в списке инвентаря. Подкатегории используют вариацию цвета родительской категории.",
    categoryColorsTintStrength: "Насыщенность цвета (%)",
    categoryColorsHueVariation: "Разброс оттенка подкатегорий (%)",
    categoryColorsValueVariation: "Разброс яркости подкатегорий (%)",
    categoryColorsLevelFalloff: "Разброс на каждом следующем уровне (%)",
  },
  [Language.TH]: {
    Title: "หมวดหมู่ขยาย",
    categoryColors: "แสดงสีหมวดหมู่ในช่องเก็บของ",
    categoryColors_tooltip:
      "กำหนดสีอ่อน ๆ เฉพาะให้แต่ละหมวดหมู่ในรายการช่องเก็บของ หมวดหมู่ย่อยจะใช้สีที่แปรผันจากสีของหมวดหมู่หลัก",
    categoryColorsTintStrength: "ความเข้มของสี (%)",
    categoryColorsHueVariation: "ความต่างของเฉดสีหมวดหมู่ย่อย (%)",
    categoryColorsValueVariation: "ความต่างของความสว่างหมวดหมู่ย่อย (%)",
    categoryColorsLevelFalloff: "ความต่างต่อระดับที่ลึกขึ้น (%)",
  },
  [Language.TR]: {
    Title: "Genişletilmiş Kategoriler",
    categoryColors: "Envanterdeki kategorileri renklendir",
    categoryColors_tooltip:
      "Envanter listesindeki her kategoriye kendine ait hafif bir renk verir. Alt kategoriler, üst kategorilerinin renginin bir varyasyonunu kullanır.",
    categoryColorsTintStrength: "Renk yoğunluğu (%)",
    categoryColorsHueVariation: "Alt kategori ton farkı (%)",
    categoryColorsValueVariation: "Alt kategori parlaklık farkı (%)",
    categoryColorsLevelFalloff: "Her alt seviyedeki fark (%)",
  },
  [Language.UA]: {
    Title: "Розширені категорії",
    categoryColors: "Розфарбовувати категорії в інвентарі",
    categoryColors_tooltip:
      "Надає кожній категорії власний неяскравий колір у списку інвентарю. Підкатегорії використовують варіацію кольору батьківської категорії.",
    categoryColorsTintStrength: "Насиченість кольору (%)",
    categoryColorsHueVariation: "Розкид відтінку підкатегорій (%)",
    categoryColorsValueVariation: "Розкид яскравості підкатегорій (%)",
    categoryColorsLevelFalloff: "Розкид на кожному наступному рівні (%)",
  },
};
