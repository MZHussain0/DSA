// Sliding Window Maximum
function slidingWindowMaximum(arr, k) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + k > arr.length) break;
    console.log(arr.slice(i, i + k));
    array.push(Math.max(...arr.slice(i, i + k)));
  }
  return array;
}

console.log(slidingWindowMaximum([1, 2, 5, 2, 8, 1, 5], 3));
