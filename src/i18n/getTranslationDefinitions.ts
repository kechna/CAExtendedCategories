import { TRANSLATIONS_ARR } from "../translations.ts";

export const getTranslationDefinitions = () => {
  return TRANSLATIONS_ARR.toSorted(([groupA, keyA], [groupB, keyB]) => {
    // do not sort by group, only by key within group
    if (groupA === groupB) {
      return keyA.localeCompare(keyB);
    }

    return 0;
  });
};
