import { Language } from "@pz/console";
import { AR } from "./AR.ts";
import { CA } from "./CA.ts";
import { CH } from "./CH.ts";
import { CN } from "./CN.ts";
import { CS } from "./CS.ts";
import { DA } from "./DA.ts";
import { DE } from "./DE.ts";
import { EN } from "./EN.ts";
import { ES } from "./ES.ts";
import { FI } from "./FI.ts";
import { FR } from "./FR.ts";
import { HU } from "./HU.ts";
import { ID } from "./ID.ts";
import { IT } from "./IT.ts";
import { JP } from "./JP.ts";
import { KO } from "./KO.ts";
import { NL } from "./NL.ts";
import { NO } from "./NO.ts";
import { PH } from "./PH.ts";
import { PL } from "./PL.ts";
import { PT } from "./PT.ts";
import { PTBR } from "./PTBR.ts";
import { RO } from "./RO.ts";
import { RU } from "./RU.ts";
import { TH } from "./TH.ts";
import { TR } from "./TR.ts";
import { UA } from "./UA.ts";
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
  [Language.PL]: PL,
  /** Incomplete */
  [Language.PT]: PT,
  /** Incomplete */
  [Language.TH]: TH,
  /** Incomplete */
  [Language.TR]: TR,
  /** Incomplete */
  [Language.UA]: UA,
} as const;
