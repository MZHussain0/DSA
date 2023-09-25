/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
 */

function smallerNumbersThanCurrent(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(sortedNums.indexOf(nums[i]));
  }
  return result;
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
