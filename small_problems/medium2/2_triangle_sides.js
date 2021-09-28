// Triangle Sides

// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must
// be greater than the length of the longest side, and every side must have a
// length greater than 0. If either of these conditions is not satisfied, the
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// My notes:
// input: three numbers
// output: String, classification of triangle or 'invalid'
// rules:
// To be a valid triangle:
// - must have each side being more than 0
// - must have the sum of the two smaller sides be bigger than the longest side
// algo:
// - add sides to array and sort descendingly
// - assign the first item to longest variable
// - feed array to a isValidTriangle function, see rules above
// - if false, return 'invalid'
// - else determine category based on sides:
//   - if all sides equal return 'Equilateral'
//   - if two sides equal return 'Isosceles'
//   - else return 'Scalene'

function isValidTriangle(sortedArr) {
  return sortedArr.every(side => side > 0) && sortedArr[0] < sortedArr[1] + sortedArr[2];
}

function triangleCategory(sortedArr) {
  if (sortedArr.every(side => side === sortedArr[0])) {
    return 'equilateral';
  } else if (
      sortedArr[0] !== sortedArr[1] &&
      sortedArr[1] !== sortedArr[2] &&
      sortedArr[2] !== sortedArr[0]) {
    return 'scalene';
  } else {
    return 'isosceles';
  }
}

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  sides.sort((a, b) => b - a);
  if (!isValidTriangle(sides)) {
    return 'invalid';
  } else {
    return triangleCategory(sides);
  }
}

// LS:

// Solution

// function triangle(side1, side2, side3) {
//   const perimeter = side1 + side2 + side3;
//   const longest = Math.max(side1, side2, side3);
//   const shortest = Math.min(side1, side2, side3);
//   const middle = perimeter - longest - shortest;

//   if (isValid(shortest, middle, longest)) {
//     return getTriangleType(side1, side2, side3);
//   } else {
//     return 'invalid';
//   }
// }

// function isValid(shortest, middle, longest) {
//   return shortest > 0 && (shortest + middle > longest);
// }

// function getTriangleType(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3) {
//     return 'equilateral';
//   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     return 'isosceles';
//   } else {
//     return 'scalene';
//   }
// }

// Discussion

// The tricky part of this problem is determining whether a triangle is valid.
// To check for a valid triangle, the solution identifies the longest and the
// two shortest sides. It gets the longest and shortest using Math.max and
// Math.min respectively. The other shortest, or middle side, is the length left
// over after the longest and shortest are subtracted from the perimeter, which
// is the sum of all the sides.

// The getTriangleType helper function implements the classification of a
// triangle. The first condition checks if all sides are equal ('equilateral').
// All sides are equal if side1 === side2 === side3 — i.e., side1 === side2 &&
// side2 === side3. The second condition checks if two sides are equal
// ('isosceles'). The series of || operations evaluates as true if any of the
// three comparisons are true. Finally, since the triangle is valid, if it is
// not either of the first two classifications, then it must be the third
// ('scalene').

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"