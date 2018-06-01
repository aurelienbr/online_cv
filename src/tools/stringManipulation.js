// @flow
export const capitalizeFirstLetter = (word: string): string => {
  return word.replace(/\b\w/g, l => l.toUpperCase());
};
