/**
 * Print numbers from 1 to N without the help of loops and using recursion
 */

const print1toN = (n) => {
  if (n === 0) return;
  print1toN(n - 1);
  console.log(n);
};
console.log(print1toN(6));
