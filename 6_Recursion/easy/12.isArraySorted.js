/**
 * Program to check if an array is sorted or not (Iterative and Recursive)
 */

const iterative = (arr) => {
  if (arr.length === 0 || arr.length === 1) return true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
console.log(iterative([20, 21, 45, 89, 89, 90]));

const recursive = (arr) => {
  if (arr.length === 0 || arr.length === 1) return true;
  if (arr[0] > arr[1]) return false;
  return recursive(arr.slice(1));
};

console.log(recursive([20, 21, 45, 89, 89, 90]));
