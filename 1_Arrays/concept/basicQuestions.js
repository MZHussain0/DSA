// find the max and second max from array
const arr = [45, 78, 78, 65, 66, 32];
const setArr = Array.from(new Set(arr));
console.log(setArr);
const max = setArr.reduce((a, b) => {
  return Math.max(a, b);
});
console.log(max);

setArr.splice(setArr.indexOf(max), 1);
const secondMax = setArr.reduce((a, b) => {
  return Math.max(a, b);
});
console.log(secondMax);

// -------------------------------------------------------------------------------------------
// Rotate the array by K steps
const arr1 = [1, 2, 3, 4, 5];
const k = 2;

function rotateByK(arr1, k) {
  let size = arr1.length;
  console.log(size);
  if (k > size) {
    k = k % size;
  }

  const rotated = arr1.splice(size - k, size);
  arr1.unshift(...rotated);
  return arr1;
}
console.log(rotateByK([1, 2, 3, 4, 5], 2));

//--------------------------------------------------------------------------------------------

// Remove the duplicates from the array in place
function removeDuplicatesInplace(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicatesInplace([1, 1, 2, 3, 3, 4, 5]));
