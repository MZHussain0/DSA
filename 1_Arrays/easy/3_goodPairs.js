/**
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

function numIdenticalPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
}
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// console.log(numIdenticalPairs([1, 1, 1, 1]));
// console.log(numIdenticalPairs([1, 2, 3]));

// time O(N) space O(N)
var numIdenticalPairs2 = function (nums) {
  const map = {};

  let count = 0;

  for (const number of nums) {
    if (map[number]) {
      count += map[number];
      map[number] += 1;
    } else {
      map[number] = 1;
    }
    console.log("🚀 ~ file: 3_goodPairs.js:29 ~ map:", map);
    console.log("count: ", count);
  }

  return count;
};

console.log(numIdenticalPairs2([1, 2, 3, 1, 1, 3]));
