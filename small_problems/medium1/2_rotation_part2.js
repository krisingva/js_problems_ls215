// Rotation Part 2

// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.

// My notes:
// input: Number to be rotated, position of digit for rotation
// output: number with rotated digit
// rules:
// - the position input counts from the right of the number digits
// - position 1 represents the last digit, position 2 represents the next to
//   last digits etc
// - the digit at that position should get cut out and put at the end
// algo:
// - convert number into array of digits
// - to get the index to be spliced: subtract position from array length
// - splice out the digit and save as last
// - add last to end of array
// - join to string and convert to number

function rotateRightmostDigits(num, pos) {
  let digits = String(num).split('');
  let spliceIdx = digits.length - pos;
  let last = digits.splice(spliceIdx, 1);
  let rotated = digits.concat(last);
  return parseInt(rotated.join(''), 10);
}

// Examples:

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);

// LS:

// Let's break down the problem and build a mental model before we attempt to
// solve it.

// Input: two numbers
//     the original number
//     last n digits to rotate
// Output: the rotated number
// Rules
//     rotate the last n digits of the original number
//     leave the first digits (not part of the last n digits) in the same order
//     apply the same rule for the rotation as in the previous exercise: slice
//     off the first digit and append it to the end of the number
//     join the first digits with the last n rotated digits, and return it as a
//     number

// Data structure considerations:

// If we look carefully at the rules we came up with, we can see verbs such as
// "slice", "append", and "join". This indicates that even though the inputs and
// the output are numbers, our ideal data structure is to operate on the numbers
// as strings.

// Algorithm:

//     convert the original number to a string
//     split the string into two parts: the part to remain unchanged and the
//     part to be rotated
//     rotate the second part
//     join the first part back together with the rotated second part
//     convert the string to a number and return it

// Solution:

// function rotateRightmostDigits(number, n) {
//   const numberString = String(number);
//   const firstPart = numberString.slice(0, numberString.length - n);
//   const secondPart = numberString.slice(numberString.length - n);
//   const resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

// Discussion:

// For this exercise, the critical part of the problem solving process is
// breaking down the problem and writing out the rules to carry us from the
// input to the output, then recognizing that the best data structure to operate
// on is String, then being familiar with JavaScript's String methods so that we
// can use String.prototype.slice as the core part of our algorithm. We could
// also use the String.prototype.substr or String.prototype.substring methods,
// which would lead to slightly different mental models, but similar algorithms.
