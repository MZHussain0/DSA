/**
 * Given a string find its first uppercase letter
 */

const firstUpperLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return str[i];
    }
  }
};
console.log(firstUpperLetter("geeksforgeeKs"));

const recursion = (str) => {
  if (str[0] === str[0].toUpperCase()) {
    return str[0];
  } else {
    return recursion(str.slice(1));
  }
};

console.log(recursion("geeksforgeeKs"));
