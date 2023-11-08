const removeDuplicates = (str) => {
  if (str.length <= 1) return str;
  if (str[0] === str[1]) {
    return removeDuplicates(str.slice(1));
  } else {
    return str[0] + removeDuplicates(str.slice(1));
  }
};
console.log(removeDuplicates("abbdbsbba"));
