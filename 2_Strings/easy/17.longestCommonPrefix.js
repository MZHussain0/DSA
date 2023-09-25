/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = (strs) => {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1));
  let output = [];
  let firstWord = sorted[0];
  let lastWord = sorted[sorted.length - 1];

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === lastWord[i]) {
      output.push(firstWord[i]);
    } else {
      break;
    }
  }
  return output.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
