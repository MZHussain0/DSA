/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.
 */

function kthLargestElement(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
}

console.log(kthLargestElement([3, 2, 1, 5, 6, 4], 2));
