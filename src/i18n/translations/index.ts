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

export const ALL_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  /** By me */
  [Language.EN]: EN,
  /** By me */
  [Language.NL]: NL,

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
