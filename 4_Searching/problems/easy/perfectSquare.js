// using the inbuuilt functions of javascript
// function perfectSquare(num) {
//   if (num < 0) {
//     return false;
//   }
//   let squareRoot = Math.sqrt(num);
//   return squareRoot % 1 === 0;
// }

// console.log(perfectSquare(14));

function perfectSquare(num) {
  let low = 0;
  let high = num;

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    let square = middle * middle;

    if (square === num) return true;
    else if (square < num) low = middle + 1;
    else high = middle - 1;
  }
  return false;
}

console.log(perfectSquare(16));
