/**
 * Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
 */

const numOfStrings = (pattern, word) => {
  let count = 0;
  pattern.forEach((p) => {
    word.includes(p) ? count++ : null;
  });
  return count;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
