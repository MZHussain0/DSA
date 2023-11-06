//  write a function which gets an array and number and returns the array with the number at the enc

const numbers = [1, 2, 3];
const append = (numbers, num) => {
  return [...numbers, num];
};

console.log(append([1, 2, 3], 4));
