// Fibonacci Numbers (Procedural)

// In the previous exercise, we developed a recursive solution for computing the
// nth Fibonacci number. In a language that is not optimized for recursion, some
// (but not all) recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested for bigger nth
// numbers, you might have noticed that getting the 50th fibonacci number
// already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or
// procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// My notes:
// - have firstFib and secFib as placeholders for the two numbers that should be
//   added, each set to 1
// - if input number is less than 3, return 1
// - have results set to 0
// - iterate from 3 up to input number
//   - add firstFib and secFib, save to results
//   - reassign secFib to value of firstFib
//   - reassign firstFib to value of results
// - return results

function fibonacci(num) {
  const START_OF_FIBONACCI = 3;

  if (num < START_OF_FIBONACCI) {
    return 1;
  }

  let firstFib = 1;
  let secondFib = 1;
  let results = 0;

  for (let currNum = START_OF_FIBONACCI; currNum <= num; currNum += 1) {
    results = firstFib + secondFib;
    secondFib = firstFib;
    firstFib = results;
  }

  return results;
}

// Examples:
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(6));       // 8
console.log(fibonacci(7));       // 13
console.log(fibonacci(8));       // 21
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// Note that JavaScript can accurately compute integers up to 16 digits long;
// this means that fibbonacci(78) is the largest Fibbonacci number that you can
// accurately compute with simple operations in JavaScript.

// LS:


// Solution

// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }

// // Discussion

// // The procedural solution uses an array, previousTwo, to store the values of
// // the current two numbers in the Fibonacci series.

// // The solution starts by initializing the previousTwo array to the first two
// // numbers in the series. Using these numbers as a starting point, the solution
// // loops and reassigns the value of previousTwo nth - 2 times. When the nth
// // value to look for is one of the first two numbers, the solution does not need
// // to iterate, and can return either value of the previousTwo array. The
// // solution returns the second element so that when nth is greater than 2, the
// // return value is still valid.

// // For example, given an argument of 4, the values of previousTwo — starting
// // with its initial value — are shown below:

// [1, 1]    // this is used as the return value for when `nth` is equal to 1 or 2
// [1, 2]    // nth = 3; returns previousTwo[1], or 2
// [2, 3]    // nth = 4; returns previousTwo[1], or 3

// If you run fibonacci(100), you will notice that there is a discrepancy in the
// result. This is because the size of the 100th Fibonacci number is very big.
// JavaScript does not handle big numbers well. In fact, running
// fibonacci(10000) returns Infinity, because the 10000th Fibonacci number is
// greater than the value of Number.MAX_VALUE.