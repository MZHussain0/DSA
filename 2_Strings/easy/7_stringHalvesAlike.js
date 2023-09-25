/**
 * You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
 */

const halvesAreAlike = (s) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
    if (vowels.includes(s[s.length - 1 - i])) {
      count--;
    }
    count;
  }
  return count === 0;
};

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("textbook"));
console.log(halvesAreAlike("MerryChristmas"));
console.log(halvesAreAlike("AbCdEfGh"));
console.log(halvesAreAlike("as"));
