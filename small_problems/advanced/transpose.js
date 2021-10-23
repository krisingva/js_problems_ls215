
// Transpose 3x3

// A 3x3 matrix can be represented by an array of arrays: an outer array
// containing three subarrays that each contain three elements. For example, the
// 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];



// An array of arrays is sometimes called a "nested array" because each inner
// subarray is nested inside an outer array. It also may be called a
// "two-dimensional array"

// To access an element in the matrix, you can use bracket notation twice (such
// as array[][]), and include both the row index and column index within the
// brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9.
// An entire row in the matrix can be referenced using a single index: matrix[1]
// is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine
// the total number of columns by counting the number of elements in the row.
// Unfortunately, a convenient notation for accessing an entire column does not
// exist.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix. For example, the transposition of
// the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6

// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function on
// your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

// My notes:
// - row is a subarray within array
// - create a results array as empty
// - the first subarray in results array will have all the first elements in each row
// - iterate from 0 to row size - 1 (column idx)
//   - for current column idx:
//     - make results array have an empty array at current column idx
//     - iterate through input array:
//       - add column idxed item from each row to results array row at column idx
//     - end inner iteration
// - end outer iteration
// - return results array


function transpose(matrix) {
  let results = [];
  let rowSize = matrix[0].length;
  for (let colIdx = 0; colIdx < rowSize; colIdx += 1) {
    results[colIdx] = [];
    matrix.forEach(row => {
      results[colIdx].push(row[colIdx]);
    });
  }
  return results;
}

// Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);
// [
//   [1, 4, 3],
//   [5, 7, 9],
//   [8, 2, 6]
// ]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// Examples for next problem (Transpose M x N):
console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]