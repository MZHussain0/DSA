// Map polyfill
Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.myMap((num) => num * 2));

// FILTER polyfill
Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
console.log(nums.myFilter((num) => num % 2 === 0));

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
};

console.log(nums.myReduce((acc, num) => acc + num, 0));
