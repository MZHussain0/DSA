/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

const validPalindrome = (s) => {
  let low = 0;
  let high = s.length - 1;

  while (low < high) {
    if (s[low] !== s[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
