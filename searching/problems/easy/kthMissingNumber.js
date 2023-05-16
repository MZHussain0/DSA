/**
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

 */
function findKthMissing(arr, k) {
  let num = 1;
  let index = 0;
  while (k > 0) {
    arr[index] === num ? index++ : k--;
    num++;
  }
  return num - 1;
}
console.log(findKthMissing([1, 2, 3, 4], 5));
