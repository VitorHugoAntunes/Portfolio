import { NestedTranslation } from "@/components/translation-provider";

export const getNestedTranslation = (
  translations: NestedTranslation,
  path: string,
  defaultValue: string
): string => {
  try {
    const value = path.split('.').reduce((obj, key) => {
      if (obj && typeof obj === 'object' && key in obj) {
        return obj[key];
      }
      throw new Error('Invalid path');
    }, translations as NestedTranslation | string);

    return typeof value === 'string' ? value : defaultValue;
  } catch {
    return defaultValue;
  }
};