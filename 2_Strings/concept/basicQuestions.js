// Truncate the text
function truncate(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncate("The quick brown fox jumped over the lazy dog", 14));

// --------------------------------------------------------------------------------------------
// Palindrome Number
const isPalindrome = (num) => {
  const reversed = String(num).split("").reverse().join("");
  return reversed === String(num);
};

console.log(isPalindrome(121));

// --------------------------------------------------------------------------------------------
// Hamming distance
// Given two string x and y, calculate the Hamming distance.

function hammingDistance(x, y) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      count++;
    }
  }
  return count;
}
console.log(hammingDistance("hello", "heloo"));

// ------------------------------------------------------------------------------------------------
// valid anagram
function anagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
console.log(anagram("anagram", "nagaram"));

function anagramObject(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] ? (obj1[s[i]] += 1) : (obj1[s[i]] = 1);
    obj2[t[i]] ? (obj2[t[i]] += 1) : (obj2[t[i]] = 1);
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagramObject("anagram", "nagaram"));
