/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 */

const validPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};
const isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abdggda"));
console.log(validPalindrome("abc"));
