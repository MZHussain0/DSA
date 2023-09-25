/**
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
 */

function findAllDuplicates(nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
