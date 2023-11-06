/**
 * Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */
const counter = function (n) {
  return () => {
    return n++;
  };
};

const count = counter(5);
console.log(count());
console.log(count());
console.log(count());

// Using Class

class CounterClass {
  constructor(n) {
    this.n = n;
  }
  count() {
    return this.n++;
  }
}
const counter1 = new CounterClass(10);
console.log(counter1.count());
console.log(counter1.count());
console.log(counter1.count());
console.log(new CounterClass(10).count());
console.log(new CounterClass(10).count());
console.log(new CounterClass(10).count());
