/**
 * Write a fuunction createHelloWorld. It should return a new function that always returns "Hello World!"
 */

// Anonymous Function doesnot support function hoisting

// Using Normal function
const createHelloWorld = () => {
  return () => {
    return "Hello World!";
  };
};

const solution = createHelloWorld();
console.log(solution());

// IIFE
const createHelloWorld2 = () => {
  return (() => {
    return "Hello World!";
  })();
};

console.log(createHelloWorld2());

// higher order functions
function log(inputFunction) {
  return function (...args) {
    console.log("Input", args);
    const result = inputFunction(...args);
    console.log("Output", result);
    return result;
  };
}
const f = log((a, b) => a + b);
console.log(f(1, 2));
