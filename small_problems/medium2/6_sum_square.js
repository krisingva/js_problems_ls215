// Sum Square - Square Sum

// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

// My notes:
// - have a sum and a squareSum
// - iterate from 1 to input number
// - add the curr num to sum
// - square the curr num and add it to square sum
// - end iteration
// - subtract squaresum from sum squared and return

function sumSquareDifference(num) {
  let sum = 0;
  let squareSum = 0;

  for (let currNum = 1; currNum <= num; currNum += 1) {
    sum += currNum;
    squareSum += currNum ** 2;
  }

  return (sum ** 2) - squareSum;
}

// Examples:

console.log(sumSquareDifference(3));
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150