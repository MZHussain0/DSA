// check that user with such names exists in the array

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

const isNameExist = (name, arr) => arr.some((user) => user.name === name);
console.log(
  "🚀 ~ file: usernameExists.js:25 ~ isNameExist:",
  isNameExist("John", users)
);
