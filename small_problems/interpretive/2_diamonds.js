// Diamonds (also lesson 3 assignment 2 of LS215)

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


// LS:

// Input
// An odd integer n that represents the size of the diamond
// n represents the total number of rows, as well as the width of the widest row
// Output
// The return value of the function is not significant
// The program should print out a diamond made up of * characters

// Requirements
// A big part of this exercise is to translate the implicit requirements of
// "diamond shapes" to precise and explicit requirements that can be used to
// solve the problem. This can be done in a few different ways, such as the one
// shown below:

// Using n = 5 as an example:
// Each row is a string of asterisks, prepended by spaces
// The 5 rows will have 1, 3, 5, 3, and 1 asterisks
// The 5 rows will have 2, 1, 0, 1, and 2 spaces prepended

// Mental Model
// Given the above, we can come up with a general model for a diamond of size n:
//     Each row is a string of asterisks, prepended by spaces
//     The n rows will have 1, 3, ... n, ... 3, 1 asterisks
//     Each row will have (n - countOfAsterisks) / 2 spaces
// There are other ways to model diamonds, such as breaking the diamond into two
// parts (a top triangle and a reverse/bottom triangle). The way you mentally
// model the diamond shape will dictate your algorithm and your code solution.

// Looking at the way we have broken down the problem, the core algorithm is to
// generate a sequence of numbers:

// 1, 3, 5, ... n, n-2, ... 1

// for a given odd number n. Once we have this sequence of numbers, we can use
// it to represent the number of asterisks for each row, and then the rest of
// the problem is not too difficult:

// for each number in this sequence
// log out the concatenation of `(n - number) / 2` spaces and `number` asterisks

// We're going to use the following algorithm to generate the sequence of
// numbers:

// Initialize increment to 2
// Start with the first number, 1, incrementing the number by increment with
// each step
// When the number is equal to n, flip the increment to -2
// Stop when we get to a negative number

// Solution
// function diamond(n) {
//   numberSequence(n).forEach(number => {
//     console.log(repeat(' ', (n - number) / 2) + repeat('*', number));
//   });
// }

// function numberSequence(n) {
//   const result = [];
//   let increment = 2;

//   for (let number = 1; number > 0; number += increment) {
//     result.push(number);
//     if (number === n) {
//       increment = -2;
//     }
//   }

//   return result;
// }

// function repeat(char, times) {
//   let repeated = '';

//   for (let i = 0; i < times; i += 1) {
//     repeated += char;
//   }

//   return repeated;
// }

// Discussion

// The key to solving this problem is to break it down into smaller problems.

// The smaller problem of generating the number sequence is much easier to solve
// than the larger problem of thinking through the rows of the diamond and what
// string to output for each row. This is something that you should always be
// mindful of—if you're feeling that you're working with too much complexity,
// take a step back and spend some time to think about how you can break the
// problem down into smaller problems, instead of just powering through.

// Also, a note on the repeat function: in our solution, we built a small
// implementation of the function ourselves. If you use ES6, check out the
// String.prototype.repeat method, which is much more powerful.

// Further Exploration

// The current solution builds a solid diamond—refactor it to build a hollow
// diamond.