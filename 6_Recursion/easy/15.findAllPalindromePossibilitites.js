/**
 * Given a string, find all possible palindromic partitions of given string.

Note that this problem is different from Palindrome Partitioning Problem, there the task was to find the partitioning with minimum cuts in input string. Here we need to print all possible partitions.
 */
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

function findPalindromicPartitions(str) {
  const result = [];
  const currentPartition = [];

  function generatePartitions(startIndex) {
    if (startIndex >= str.length) {
      result.push(currentPartition.slice());
      return;
    }

    for (let i = startIndex; i < str.length; i++) {
      const substring = str.slice(startIndex, i + 1);

      if (isPalindrome(substring)) {
        currentPartition.push(substring);
        generatePartitions(i + 1);
        currentPartition.pop();
      }
    }
  }

  generatePartitions(0);
  return result;
}

const str = "aab";
const palindromicPartitions = findPalindromicPartitions(str);

console.log(palindromicPartitions);
