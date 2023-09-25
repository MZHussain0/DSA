/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 */

const convertToTitle = (columnNumber) => {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(65 + (columnNumber % 26)) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

console.log(convertToTitle(701));
