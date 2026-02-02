export const resolveKey = (priority: "override" | "fallback", key: string): string => {
  if (key.startsWith("CAEC_Override_") || key.startsWith("CAEC_Fallback_")) {
    return key;
  }

  return priority === "override" ? `CAEC_Override_${key}` : `CAEC_Fallback_${key}`;
};
