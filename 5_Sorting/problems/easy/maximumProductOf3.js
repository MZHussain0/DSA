/**
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 */

const maximumProduct = (nums) => {
  let sortedArray = nums.sort((a, b) => a - b);
  let product =
    sortedArray[sortedArray.length - 1] *
    sortedArray[sortedArray.length - 2] *
    sortedArray[sortedArray.length - 3];

  return product;
};

console.log(maximumProduct([-1, -2, -3]));
