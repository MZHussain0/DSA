/**
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
 */

const thirdMax = (nums) => {
  let set = [...new Set(nums)];
  set.sort((a, b) => b - a);
  console.log(set);

  if (set.length < 3) {
    return set[set.length - 1];
  } else {
    return set[set.length - 3];
  }
};

console.log(thirdMax([3, 2, 2, 1, 4, 5, 6, 8, 6, 1]));
