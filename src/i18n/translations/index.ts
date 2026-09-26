import { Language } from "@pz/console";
import { AR } from "./AR_T.ts";
import { CA } from "./CA_T.ts";
import { CH } from "./CH_T.ts";
import { CN } from "./CN_T.ts";
import { CS } from "./CS_T.ts";
import { DA } from "./DA_T.ts";
import { DE } from "./DE_T.ts";
import { EN } from "./EN_T.ts";
import { ES } from "./ES_T.ts";
import { FI } from "./FI_T.ts";
import { FR } from "./FR_T.ts";
import { HU } from "./HU_T.ts";
import { ID } from "./ID_T.ts";
import { IT } from "./IT_T.ts";
import { JP } from "./JP_T.ts";
import { KO } from "./KO_T.ts";
import { NL } from "./NL_T.ts";
import { NO } from "./NO_T.ts";
import { PH } from "./PH_T.ts";
import { PL } from "./PL_T.ts";
import { PT } from "./PT_T.ts";
import { PTBR } from "./PTBR_T.ts";
import { RO } from "./RO_T.ts";
import { RU } from "./RU_T.ts";
import { TH } from "./TH_T.ts";
import { TR } from "./TR_T.ts";
import { UA } from "./UA_T.ts";
import type { SupportedLanguage } from "../../types.ts";
import type { ExternalTranslations } from "../types.ts";

export const ALL_TRANSLATIONS: Record<
  SupportedLanguage,
  ExternalTranslations & Record<`IGUI_${string}`, string | undefined>
> = {
  /** By me */
  [Language.EN]: EN,
  /** By me */
  [Language.NL]: {
    ...NL,

    IGUI_perks_Cooking: NL.CAEC_Override_Cooking ?? NL.CAEC_Fallback_Cooking,
    IGUI_perks_Doctor: NL.CAEC_Override_FirstAid ?? NL.CAEC_Fallback_FirstAid,
    IGUI_perks_Fishing: NL.CAEC_Override_Fishing ?? NL.CAEC_Fallback_Fishing,
    IGUI_perks_Trapping: NL.CAEC_Override_Trapping ?? NL.CAEC_Fallback_Trapping,
    IGUI_perks_Axe: NL.CAEC_Override_Axe ?? NL.CAEC_Fallback_Axe,
    IGUI_perks_Blacksmith: NL.CAEC_Override_Blacksmith ?? NL.CAEC_Fallback_Blacksmith,
    IGUI_perks_Blunt: NL.CAEC_Override_Blunt ?? NL.CAEC_Fallback_Blunt,
    IGUI_perks_Butchering: NL.CAEC_Override_Butchering ?? NL.CAEC_Fallback_Butchering,
    IGUI_perks_Carpentry: NL.CAEC_Override_Carpentry ?? NL.CAEC_Fallback_Carpentry,
    IGUI_perks_Carving: NL.CAEC_Override_Carving ?? NL.CAEC_Fallback_Carving,
    IGUI_perks_Farming: NL.CAEC_Override_Farming ?? NL.CAEC_Fallback_Farming,
    IGUI_perks_FlintKnapping: NL.CAEC_Override_FlintKnapping ?? NL.CAEC_Fallback_FlintKnapping,
    IGUI_perks_Foraging: NL.CAEC_Override_Foraging ?? NL.CAEC_Fallback_Foraging,
    IGUI_perks_Glassmaking: NL.CAEC_Override_Glassmaking ?? NL.CAEC_Fallback_Glassmaking,
    IGUI_perks_LongBlade: NL.CAEC_Override_LongBlade ?? NL.CAEC_Fallback_LongBlade,
    IGUI_perks_Maintenance: NL.CAEC_Override_Maintenance ?? NL.CAEC_Fallback_Maintenance,
    IGUI_perks_Masonry: NL.CAEC_Override_Masonry ?? NL.CAEC_Fallback_Masonry,
    IGUI_perks_Mechanics: NL.CAEC_Override_Mechanics ?? NL.CAEC_Fallback_Mechanics,
    IGUI_perks_Metalworking: NL.CAEC_Override_Metalworking ?? NL.CAEC_Fallback_Metalworking,
    IGUI_perks_Pottery: NL.CAEC_Override_Pottery ?? NL.CAEC_Fallback_Pottery,
    IGUI_perks_SmallBlade: NL.CAEC_Override_SmallBlade ?? NL.CAEC_Fallback_SmallBlade,
    IGUI_perks_SmallBlunt: NL.CAEC_Override_SmallBlunt ?? NL.CAEC_Fallback_SmallBlunt,
    IGUI_perks_Spear: NL.CAEC_Override_Spear ?? NL.CAEC_Fallback_Spear,
    IGUI_perks_Tailoring: NL.CAEC_Override_Tailoring ?? NL.CAEC_Fallback_Tailoring,
    IGUI_perks_Tracking: NL.CAEC_Override_Tracking ?? NL.CAEC_Fallback_Tracking,

    IGUI_ContextMenu_FoodType_Coffee: NL.CAEC_Override_Coffee ?? NL.CAEC_Fallback_Coffee,
  },

  /** By SIMBAproduz */
  [Language.PTBR]: PTBR,
  /** By 莫名某某 */
  [Language.CN]: CN,

  /** By me - machine translated */
  [Language.DE]: DE,
  /** By me - machine translated */
  [Language.ES]: ES,
  /** By me - machine translated */
  [Language.FR]: FR,
  /** By me - machine translated */
  [Language.HU]: HU,
  /** By me - machine translated */
  [Language.PL]: PL,
  /** By me - machine translated */
  [Language.RO]: RO,
  /** By me - machine translated */
  [Language.RU]: RU,

  /** Incomplete */
  [Language.AR]: AR,
  /** Incomplete */
  [Language.CA]: CA,
  /** Incomplete */
  [Language.CH]: CH,
  /** Incomplete */
  [Language.CS]: CS,
  /** Incomplete */
  [Language.DA]: DA,
  /** Incomplete */
  [Language.FI]: FI,
  /** Incomplete */
  [Language.ID]: ID,
  /** Incomplete */
  [Language.IT]: IT,
  /** Incomplete */
  [Language.JP]: JP,
  /** Incomplete */
  [Language.KO]: KO,
  /** Incomplete */
  [Language.NO]: NO,
  /** Incomplete */
  [Language.PH]: PH,
  /** Incomplete */
  [Language.PT]: PT,
  /** Incomplete */
  [Language.TH]: TH,
  /** Incomplete */
  [Language.TR]: TR,
  /** Incomplete */
  [Language.UA]: UA,
} as const;
