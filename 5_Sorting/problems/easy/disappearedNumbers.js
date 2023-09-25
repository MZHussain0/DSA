/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 */

function disappearedNumber(nums) {
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(disappearedNumber([4, 3, 2, 7, 8, 2, 3, 1]));
