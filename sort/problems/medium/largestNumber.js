/**
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.
 */

function largestNumber(nums) {
  nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  });
  return nums[0] === 0 ? "0" : nums.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9]));
