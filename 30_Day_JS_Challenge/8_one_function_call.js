/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 */

const once = (fn) => {
  let hasBeenCalled = false;
  return (...args) => {
    if (hasBeenCalled) {
      return undefined;
    }
    hasBeenCalled = true;
    return fn(...args);
  };
};

let onceFN = once((a, b, c) => a + b + c);
console.log(onceFN(1, 2, 3));
console.log(onceFN(1, 2, 3));
