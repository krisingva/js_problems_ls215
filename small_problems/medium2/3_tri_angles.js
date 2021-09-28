// Tri-Angles

// A triangle is classified as follows:

//     Right: One angle is a right angle (exactly 90 degrees).
//     Acute: All three angles are less than 90 degrees.
//     Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments are
// in degrees.

// My notes:
// input: three integers
// output: String, classification of triangle or 'invalid'
// rules:
// To be a valid triangle:
// - must have each angle being more than 0
// - must have the sum of the three angles be 180
// algo:
// - add angles to array
// - feed array to a isValidTriangle function, see rules above
// - if false, return 'invalid'
// - else determine category based on angles:
//   - if any angle is 90 return 'right'
//   - if any angle is greater than 90 return 'obtuse'
//   - else return 'acute'

function isValidTriangle(angles) {
  return angles.every(angle => angle > 0) && (angles.reduce((sum, angle) => sum + angle) === 180);
}

function triangleCategory(angles) {
  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (!isValidTriangle(angles)) {
    return 'invalid';
  } else {
    return triangleCategory(angles);
  }
}

// LS:

// Solution

// function triangle(angle1, angle2, angle3) {
//   const angles = [angle1, angle2, angle3];
//   if (isValid(angles)) {
//     return getTriangleType(angles);
//   } else {
//     return "invalid";
//   }
// }

// function isValid(angles) {
//   const totalAngle = angles.reduce((total, angle) => total + angle);

//   const allNonZero = angles.every(angle => angle > 0);

//   return totalAngle === 180 && allNonZero;
// }

// function getTriangleType(angles) {
//   if (angles.some(testRightTriangle)) {
//     return "right";
//   } else if (angles.every(testAcuteTriangle)) {
//     return "acute";
//   } else {
//     return "obtuse";
//   }
// }

// function testRightTriangle(angle) {
//   return angle === 90;
// }

// function testAcuteTriangle(angle) {
//   return angle < 90;
// }

// Discussion

// Like the previous exercise, this one also classifies triangles but this time
// using angles instead of sides. This solution follows the same pattern as the
// previous. The difference, however, is in the implementation of the solution.
// This solution takes a more declarative route by using more of the list
// processing abstractions. If you followed the more imperative route, notice
// that the conditionals are not that long to type out. For instance, testing
// for a right triangle could be written as: if (angle1 === 90 || angle2 === 90
// || angle3 === 90).

// This problem is not that big, and the conditionals are not that complicated,
// so going the declarative route might seem too verbose. That said, use the
// solution as a means of trying out the approach and as a means of comparison
// to a more imperative approach. It is essential to be able to determine when
// one approach is better than the other.

// Note that we use the functions testRightTriangle and testAcuteTriangle as
// arguments to some and every rather than entering them inline as a function
// expression or arrow function. All we have to do here is use the function
// name. Note, in particular, that we do not use parentheses when passing the
// functions as arguments -- the some and every function will take care of
// invoking the functions. We just want to pass the functions in to them.

// Examples:

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"