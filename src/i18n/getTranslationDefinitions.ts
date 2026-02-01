import { TRANSLATIONS_ARR } from "../translations.ts";

export const getTranslationDefinitions = () => {
  return TRANSLATIONS_ARR.toSorted(([groupA, , keyA], [groupB, , keyB]) => {
    return groupA.localeCompare(groupB) || keyA.localeCompare(keyB);
  });
};
