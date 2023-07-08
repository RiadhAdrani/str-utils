/**
 * Capitalize the first charater of the given string and return it as a new value.
 *
 * Does not override the given string
 * @param str source
 */
export const capitalize = (str: string): string => {
  return `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;
};

/**
 * Reduce and append ellipsis to the given string when its length exceeds `max`.
 * @param str source.
 * @param max the maximum length allowed before reducing.
 * @param ellipsis `optional` customize ellipsis.
 */
export const ellipsify = (str: string, max: number, ellipsis = '...'): string => {
  if (str.length <= max) return str;

  return str.substring(0, max) + ellipsis;
};

/**
 * Checks if the given string is blank, which is the one having no characters after being trimmed.
 * @param str source.
 */
export const isBlank = (str: string): boolean => {
  return str.trim() === '';
};

/**
 * Checks if the given string is not blank, which is the one having no characters after being trimmed.
 * @param str source.
 */
export const isNotBlank = (str: string): boolean => !isBlank(str);

/**
 * Checks if the given string is empty.
 * @param str source.
 */
export const isEmpty = (str: string): boolean => {
  return str.length === 0;
};
/**
 * Checks if the given string is not empty.
 * @param str source.
 */
export const isNotEmpty = (str: string): boolean => !isEmpty(str);

/**
 * Checks if the given object is a string.
 * @param obj object
 */
export const isString = (obj: unknown): boolean => {
  return typeof obj === 'string';
};
