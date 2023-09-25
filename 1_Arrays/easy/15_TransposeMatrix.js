/**
 * Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 */

const transpose = (matrix) => {
  let output = new Array(matrix[0].length)
    .fill(null)
    .map((item) => new Array(matrix.length).fill(null));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      output[j][i] = matrix[i][j];
    }
  }
  return output;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
