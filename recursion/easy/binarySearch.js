/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity using recursion


 */
function search(nums, target) {
  if (nums.length === 0) return -1;
  if (nums[0] === target) return 0;
  if (nums[nums.length - 1] === target) return nums.length - 1;

  const mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) return mid;

  if (nums[mid] > target) {
    return search(nums.slice(0, mid), target);
  } else {
    const result = search(nums.slice(mid + 1), target);
    return result === -1 ? -1 : result + mid + 1;
  }
}

console.log(search([-1, 0, 3, 5, 9, 12, 11], 9));
