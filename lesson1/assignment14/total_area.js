/*
First, transform each subarray into the square area
Second, reduce square areas to total
*/

// using arrow function passed to reduce:

// function totalArea(rectangles) {
//   let sqAreas = rectangles.map(subarray => {
//     return subarray[0] * subarray[1];
//   });

//   let total = sqAreas.reduce((acc, val) => acc + val);
//   return total;
// }

// or defining a separate function passed to reduce:

function sum(acc, val) {
  return acc + val;
}

function totalArea(rectangles) {
  let sqAreas = rectangles.map(subarray => {
    return subarray[0] * subarray[1];
  });

  let total = sqAreas.reduce(sum);
  return total;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141