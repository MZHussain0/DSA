/**
 * Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then, at each level number of elements is one less than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level.
 *
 * solve it recursively
 */

function printSumTriangle(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i] + arr[i + 1];
  }
  arr.length = arr.length - 1;
  return printSumTriangle(arr, arr.length - 1);
}

console.log(printSumTriangle([1, 2, 3, 4, 5]));
