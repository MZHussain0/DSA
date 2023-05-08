/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 */

const intersectionOfArrays = (nums1, nums2) => {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1.includes(nums2[i])) {
      if (!result.includes(nums2[i])) {
        result.push(nums2[i]);
      }
    }
  }
  return result;
};

console.log(intersectionOfArrays([1, 2, 2, 1], [2, 2]));
