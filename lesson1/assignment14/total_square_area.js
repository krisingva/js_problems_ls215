/*
First, filter so that only square numbers remain
Second, transform each subarray into the square area
Third, reduce square areas to total
*/


function sum(acc, val) {
  return acc + val;
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(subarray => {
    return subarray[0] === subarray[1];
  });

  let sqAreas = squares.map(subarray => {
    return subarray[0] * subarray[1];
  });

  let total = sqAreas.reduce(sum);
  return total;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121