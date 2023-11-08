const reverseString = (s) => {
  return s.split("").reverse().join("");
};
console.log(reverseString("hello"));

const recursion = (s) => {
  if (s.length <= 1) {
    return s;
  } else {
    return recursion(s.slice(1)) + s[0];
  }
};

console.log(recursion("hello"));
