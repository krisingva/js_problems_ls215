// Rotation Part 3

// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

/*
- convert num to digit array
- iterate through array with index:
  - starting at index 0, get position for rotateRightmostDigits:
    - pos = length of digit array - index
  - pass in num and pos to rotateRightmostDigits function and save the return as the new value for num
- end iteration
- return final value for num
*/

function maxRotation(number) {
  let numberDigits = String(number).split('');
  numberDigits.forEach((digit, idx) => {
    let pos = numberDigits.length - idx;
    number = rotateRightmostDigits(number, pos);
  });
  return number;
}


function rotateRightmostDigits(num, pos) {
  let digits = String(num).split('');
  let spliceIdx = digits.length - pos;
  let last = digits.splice(spliceIdx, 1);
  let rotated = digits.concat(last);
  return parseInt(rotated.join(''), 10);
}

// Examples:

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3)    === 3);
console.log(maxRotation(35)   === 53);
console.log(maxRotation(105)  === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);

// LS:

// Solution

// function maxRotation(number) {
//   for (let i = String(number).length; i > 1; i -= 1) {
//     number = rotateRightmostDigits(number, i);
//   }

//   return number;
// }

// Discussion

// With the use of the rotateRightmostDigits function from the previous
// exercise, this solution simply becomes a matter of repeatedly calling that
// function, passing the number and i as arguments. The variable i —
// representing the number of digits in the number argument — is decremented by
// 1 at the end of each iteration, all the way down until it reaches a value of
// 2. It is not necessary to rotate all the way down to 1 because rotating
// rightmost by 1 has no effect.