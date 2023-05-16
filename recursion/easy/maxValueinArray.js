/**
 * Given an array of integers arr, the task is to find the minimum and maximum element of that array using recursion.
 */
function findMinMax(arr, min, max) {
  if (arr.length === 0) {
    return [min, max];
  }
  if (arr[0] < min) {
    min = arr[0];
  }
  if (arr[0] > max) {
    max = arr[0];
  }
  return findMinMax(arr.slice(1), min, max);
}

console.log(
  findMinMax([1, 4, 45, 6, -50, 10, 2], Number.MAX_VALUE, Number.MIN_VALUE)
);
