/**
 * You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
 */

const freqAlphabets = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      result += String.fromCharCode(parseInt(s.slice(i, i + 2)) + 96);
      i += 2;
    } else {
      result += String.fromCharCode(parseInt(s[i]) + 96);
    }
  }
  return result;
};
console.log(
  freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")
);
