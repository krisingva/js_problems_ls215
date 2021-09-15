// Write a method that changes the first arithmetic operator (+, -, *, /) in a
// string to a '?' and returns the resulting string. Don't modify the original
// string.

function mysteryMath(str) {
  let newStr = str.replace(/[\+\-\*\/]/, '?');
  return newStr;
}

// LS:
// let mysteryMath = function (equation) {
//   return equation.replace(/[+\-*\/]/, '?');
// };

// Note that we need to escape the - character in our character class to
// interpret as a literal hyphen, not a range specification. We also must escape
// the / character in the Ruby code; in the JavaScript code, we don't need to
// escape the / character but do so here for consistency.

// Examples:
console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'