/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

function groupAnagrams(strs) {
  const sortedStr = strs.map((str) => str.split("").sort().join(""));
  const hash = {};
  for (let i = 0; i < sortedStr.length; i++) {
    if (!hash[sortedStr[i]]) {
      hash[sortedStr[i]] = [strs[i]];
    } else {
      hash[sortedStr[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
