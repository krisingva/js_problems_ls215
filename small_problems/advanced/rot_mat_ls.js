function rotate90(matrix) {
  const rotated = [];
  const newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      rotated[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated[rowIdx].reverse();
  }

  return rotated;
}

// Discussion

// Rotating a matrix is similar to transposing a matrix. The main difference is
// that the elements of each row are arranged in a different order.

// This solution is almost identical to the one from the previous exercise, with
// just a minor modification to accommodate the reversing of the rows of the
// transposed matrix. The solution adds a fourth loop to iterate over each row
// and reverse it in-place using the Array.prototype.reverse method.