// write a function that concatenating 2 arrays

function concat(array1, array2) {
  // return array1.concat(array2);
  return [...array1, ...array2];
}

console.log(concat([1, 2, 3], [4, 5, 6]));
