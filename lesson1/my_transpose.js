function transpose(array) {
  let transposed = [];

  for (let j = 0; j < array[0].length; j += 1) {
    transposed[j] = [];
    for (let i = 0; i < array.length; i += 1) {
      transposed[j].push(array[i][j]);
    }
  }

  return transposed;
}

let arrayOfArrays =
[/*0  1  2  are j*/
  [1, 2, 3], // i = 0
  [4, 5, 6], // i = 1
  [7, 8, 9]  // i = 2
];
console.log(transpose(arrayOfArrays));
// should return:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]