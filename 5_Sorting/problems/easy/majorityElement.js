/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([1, 1, 2, 1, 3]));
