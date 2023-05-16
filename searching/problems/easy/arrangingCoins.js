/**
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.


 */

// using javascript inbuilt math function

/**
 * @param {number}
function arrangeCoins(n) {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
} */

function arrangeCoins(num) {
  let left = 0;
  let right = num + 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let product = ((mid + 1) * (mid + 2)) / 2;
    if (product > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(arrangeCoins(5));
