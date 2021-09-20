// Diamonds

// Write a function that displays a four-pointed diamond in an nxn grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// pedac:
// input: odd integer
// output: log to console a diamond made up of '*' characters with the input
// integer amount of '*' in the cross of the diamond
// rules:
// - first line should have '*' in the middle and spaces on either side
//   - number of spaces on each side should be input - 1 / 2
// - second line should have '***' in the middle and spaces on either side
//   - number of spaces on each side should be input - 3 / 2
// - rule: spaces equal input - number of stars / 2
// - rule: number of stars should start at 1 and increment by 2 until reach
//   input

// - algo:
// - have a loop with a counter that starts at 1 and increments by 2 unless it
//   has reached input
// - in each iteration, build up a string that consists of spaces and stars
//   based on counter
// - have another loop with a counter that starts at input and decrements by 2
//   while it is above 0
// - in each iteration, build up a string that consists of spaces and stars
//   based on counter
// - log string

function buildString(stars, spaces) {
  let str = '';
  for (let count = 1; count <= spaces; count += 1) {
    str += ' ';
  }
  for (let count = 1; count <= stars; count += 1) {
    str += '*';
  }
  for (let count = 1; count <= spaces; count += 1) {
    str += ' ';
  }
  str += '\n';
  return str;
}

function diamond(num) {
  let results = '';

  for (let counter = 1; counter < num; counter += 2) {
    let numSpaces = (num - counter) / 2;
    results += buildString(counter, numSpaces);
  }

  for (let counter = num; counter > 0; counter -= 2) {
    let numSpaces = (num - counter) / 2;
    results += buildString(counter, numSpaces);
  }

  console.log(results);
}

// Examples:

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *