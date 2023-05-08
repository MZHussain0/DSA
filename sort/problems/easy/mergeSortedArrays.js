/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


 */

const mergeArrays = (arr1, arr2, m, n) => {
  for (let i = m, j = 0; j < n; i++, j++) {
    arr1[i] = arr2[j];
  }
  arr1.sort((a, b) => a - b);
  return arr1;
};

console.log(mergeArrays([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
