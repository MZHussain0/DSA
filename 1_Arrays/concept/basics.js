let person = {
  name: "John",
  age: 30,
};
let arr = ["Cherry", "Banana", person];

console.log(arr[2].age);
console.log(arr[2]["age"]);

// Looping an Array - For Loop
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// Looping an Array - For Each
arr.forEach((element) => {
  console.log(element);
});

for (const iterator of arr) {
  console.log(iterator);
}

// Looping an Array - While
let index = 0;
while (index < arr.length) {
  const element = arr[index];
  console.log(element);
  index++;
}

let numbers = [1, 2, 3, 4, 5];
// MAP FUNCTION
const map = numbers.map((number) => {
  return number * 2;
});
console.log(map);

// FILTER FUNCTION
const filter = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(filter);

// REDUCE FUNCTION
const reduce = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log(reduce);

// Every Function
const every = numbers.every((number) => {
  return number > 2;
});
console.log(every);

// Some Function
const some = numbers.some((number) => {
  return number > 2;
});
console.log(some);

//Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Destructuring
const [x, y, z] = [1, 2, 3];
console.log(x, y, z);

// Rest Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Default Parameter

function sum(a = 1, b = 1) {
  return a + b;
}
console.log(sum());

// Concat
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
const arr6 = arr4.concat(arr5);
console.log(arr6);

// slice
const arr7 = [1, 2, 3, 4, 5];
const arr8 = arr7.slice(3, arr7.length - 1);
const arr9 = arr7.slice(3, -1);
console.log(arr9);

// splice
const arr10 = [1, 2, 3, 4, 5];
const arr11 = arr10.splice(3, 1, 9);
console.log(arr11);
console.log(arr10);

//Fill
const arr12 = [1, 2, 3, 4, 5];
arr12.fill(0);
console.log(arr12);

//FindIndex
const arr13 = [1, 2, 3, 4, 5];
const index1 = arr13.findIndex((number) => {
  return number === 3;
});
console.log(index1);

// Flat
const arr14 = [1, 2, [3, [4, 5]], 6];
const arr15 = arr14.flat();
console.log(arr15);
const arr16 = arr14.flat(2);
console.log(arr16);

// Reverse
const arr17 = [1, 2, 3, 4, 5];
const arr18 = arr17.reverse();
console.log(arr18);

// Sort
const arr19 = [1, 6, 3, 7, 5];
const asc = arr19.sort((a, b) => a - b);
console.log(asc);
const desc = arr19.sort((a, b) => b - a);
console.log(desc);
