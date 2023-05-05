function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str;
}

console.log(isPalindrome("abba"));

function isPalindrome1(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome1("abba"));
