/**
 * Given an array of integers arr, the task is to find the minimum  element of that array using recursion.
 */

const findElements = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.min(arr[0], findElements(arr.slice(1)));
};

console.log(findElements([1, 4, 3, -5, -4, 8, 6]));
