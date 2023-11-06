// what will be console.logged here

// Q1
console.log(foo);
foo = 2;
// foo is not defined

// Q2
console.log(foo);
var foo = 2;
// cannot access "foo" before initialization

// Q3.
foo = 3;
console.log(foo);
var foo;
// 3

// "const" and "let" doesnot have bubbling effect
