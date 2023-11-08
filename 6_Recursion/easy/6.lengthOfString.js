/**
 *Given a string calculate length of the string using recursion.
 */

const stringLen = (str) => {
  if (str.length === 0) return 0;
  return stringLen(str.slice(1)) + 1;
};
console.log(stringLen("hello"));
