const steps = (n) => {
  if (n === 0) return 0;
  if (n % 2 === 0) return steps(n / 2) + 1;
  return 1 + steps(n - 1);
};
console.log(steps(8));
