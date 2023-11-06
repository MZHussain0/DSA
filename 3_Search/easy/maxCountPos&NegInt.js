// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

function maximumCount(nums) {
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive++;
    } else if (nums[i] < 0) {
      negative++;
    }
  }

  return Math.max(positive, negative);
}

console.log(maximumCount([-2, -3, 4, -1, -2, 1, 5, -3]));
