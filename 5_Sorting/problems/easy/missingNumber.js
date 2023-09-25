/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */

const missingNumber = (nums) => {
  let sortedArray = nums.sort((a, b) => a - b);
  for (i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== i) {
      return i;
    }
  }
};
console.log(missingNumber([3, 0, 1]));
