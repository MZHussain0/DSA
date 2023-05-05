/**  
Write a function called same, which accepts two arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second
array. The frequency of values must be the same.

Ex: 
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4, a, 1]) // false (must be same frequency)
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let fCounter1 = {};
  let fCounter2 = {};

  for (let val of arr1) {
    fCounter1[val] = (fCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    fCounter2[val] = (fCounter2[val] || 0) + 1;
  }
  console.log(fCounter1);
  console.log(fCounter2);
  for (let key in fCounter1) {
    if (!(key ** 2 in fCounter2)) {
      return false;
    }

    if (fCounter2[key ** 2] !== fCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
