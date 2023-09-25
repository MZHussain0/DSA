/**
 * Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

 */
function minimumAbsDifference(arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  let result = [];
  for (i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];

    if (diff < min) {
      min = diff;
      result = [arr[i - 1], arr[i]];
    } else if (diff === min) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
  return result;
}

console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
