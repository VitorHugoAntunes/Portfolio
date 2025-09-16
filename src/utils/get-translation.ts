import { NestedTranslation } from "@/components/translation-provider";

export const getNestedTranslation = (
  translations: NestedTranslation,
  path: string,
  defaultValue: string
): string => {
  try {
    const keys = path.split('.');
    let current: string | string[] | NestedTranslation = translations;

    for (const key of keys) {
      if (current && typeof current === 'object' && !Array.isArray(current) && key in current) {
        current = current[key];
      } else {
        throw new Error('Invalid path');
      }
    }

    return typeof current === 'string' ? current : defaultValue;
  } catch {
    return defaultValue;
  }
};