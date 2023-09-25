/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */

const numberOfDigits = (nums) => {
  return nums.reduce(
    (acc, num) => (String(num).length % 2 === 0 ? acc + 1 : acc),
    0
  );
};

console.log(numberOfDigits([12, 345, 2, 6, 7896])); // 2
