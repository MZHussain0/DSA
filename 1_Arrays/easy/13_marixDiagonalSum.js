/**
 * Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */

const diagonalSum = (mat) => {
  let result = 0;
  let left = 0;
  let right = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    if (left == right) {
      result += mat[i][left]; // or mat[i][right]
    } else {
      result += mat[i][left];
      result += mat[i][right];
    }
    left++;
    right--;
  }
  return result;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
