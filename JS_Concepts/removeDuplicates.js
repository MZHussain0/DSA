// remove oll the duplicates in the array

function removeDuplicates(arr) {
  // return [...new Set(arr)];
  const result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
