/**
 * Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 */
function maxProduct(nums) {
  const [max1, max2] = nums.sort((a, b) => b - a).slice(0, 2);
  return (max1 - 1) * (max2 - 1);
}

console.log(maxProduct([3, 4, 5, 2]));
