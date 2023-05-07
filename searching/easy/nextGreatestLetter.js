/**
 * You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.


 */

function nextGreatestLetter(letters, target) {
  if (letters.length === 1) {
    return letters[0];
  }

  let left = 0;
  let right = letters.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left === letters.length) {
    return letters[0];
  } else {
    return letters[left];
  }
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
