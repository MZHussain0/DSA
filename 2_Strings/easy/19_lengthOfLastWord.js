/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 */

const lengthOfLastWord = (s) => {
  let lastWord = s.trim().split(" ").pop();
  return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
