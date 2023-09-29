// Kadane's Algo
// Maximum Subarray Sum

function maxSubArraySum(arr) {
  let maxsum = arr[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = 0; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxsum) {
        maxsum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }
  return {
    maxsum: maxsum,
    subArr: arr.slice(startIdx, endIdx + 1),
  };
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5]));

// optimised Solution
function maxSubArraySumOpt(arr) {
  let maxSum = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
console.log(maxSubArraySumOpt([1, 2, 5, 2, 8, 1, 5]));
