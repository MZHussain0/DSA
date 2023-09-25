/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */

const createCounter = function (init) {
  let count = init;
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function reset() {
    return init;
  }
  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
