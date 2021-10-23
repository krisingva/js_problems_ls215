// Rotating Matrices

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
// 90-degrees as described above, and returns the result as a new matrix. The
// function should not mutate the original matrix.

// My notes:
// - row is a subarray within array
// - create a results array as empty
// - the first subarray in results array will have all the last elements in each row
// - iterate from 0 to row size - 1 (column idx)
//   - for current column idx:
//     - make results array have an empty array at colidx
//     - iterate through input array with index starting at the end:
//       - add column idxed item from each row to results array subarray
//     - end inner iteration
// - end outer iteration
// - return results array


function rotate90(matrix) {
  let results = [];
  let colSize = matrix.length;
  let rowSize = matrix[0].length;
  for (let colIdx = 0; colIdx < rowSize; colIdx += 1) {
    results[colIdx] = [];
    for (let rowIdx = colSize - 1; rowIdx >= 0; rowIdx -= 1) {
      results[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }
  return results;
}

// Examples:

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]