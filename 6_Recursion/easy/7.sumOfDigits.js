/**
 * Given a number, we need to find sum of its digits using recursion.
 */
const sum = (n) => {
  if (n === 0) return 0;
  return (n % 10) + sum(Math.floor(n / 10));
};
console.log(sum(1234));
