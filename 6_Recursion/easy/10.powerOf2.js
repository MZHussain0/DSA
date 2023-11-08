const powerOf2 = (n) => {
  if (n === 1) return true;
  if (n % 2 === 1 || n === 0) return false;
  return powerOf2(n / 2);
};
console.log(powerOf2(0));

const powerOfThree = (n) => {
  if (n === 1) return true;
  if (n % 3 !== 0 || n === 0) return false;
  return powerOfThree(n / 3);
};
console.log(powerOfThree(0));

const powerOfFour = (n) => {
  if (n === 1) return true;
  if (n % 4 !== 0 || n === 0) return false;
  return powerOfFour(n / 4);
};
console.log(powerOfFour(16));
