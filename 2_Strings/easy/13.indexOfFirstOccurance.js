/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

const strStr = (haystack, needle) => {
  if (!needle) return 0;
  return haystack.indexOf(needle);
};
