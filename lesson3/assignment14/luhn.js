// The Luhn formula is a simple checksum formula used to validate a variety of
// identification numbers, such as credit card numbers and Canadian Social
// Insurance Numbers.

// The formula verifies a number against its included check digit, which is
// usually appended to a partial number to generate the full number. This number
// must pass the following test:

//     Counting from the rightmost digit and moving left, double the value of
//     every second digit
//     For any digit that thus become 10 or more, subtract 9 from the result
//         1111 becomes 2121
//     8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9
//     = 7)
//     Add all these digits together
//         1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//         8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulo
// 10 is congruent to 0), then the number is valid according to the Luhn
// Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it
// comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid
// per the Luhn formula. This should treat, for example, "2323 2005 7766 3554"
// as valid. You can ignore all non-numeric characters in the input string.

// P:
// input: number in string representation
// output: boolean, true if valid according to Luhn formula
// rules:
// - any non-digit char in string should be ignored
//   summary: for the given number, start from the right end and transform every
//   other number by multiplying with 2. If the resulting number is over 9,
//   subtract 9. Sum up all the digits after transformation. If sum ends with 0,
//   return true.

// E:
// given examples:
// console.log(validLuhn("2323 2005 7766 3554") === true);
// console.log(validLuhn("1111") === false);
// console.log(validLuhn("8763") === true);
// edge cases:
// empty string:
// console.log(validLuhn("") === false);
// alpha chars:
// console.log(validLuhn("abcd") === false);
// mix of alpha and numbers:
// console.log(validLuhn("87a6b3") === true);
// input is numer:
// console.log(validLuhn(8763) === false);
// one off:
// console.log(validLuhn("8764") === false);

// D:
// - string (regex for cleanup)
// - array (transformation and reduce)

// A:
// - return false if input is not a string
// - cleanup any non-digits from string
// - split into array of digits: [1, 1, 1, 1]
// - reverse array
// - map with index: [2, 1, 2, 1]
//   - if index is odd -> num * 2
//     -if resulting num is > 9 -> num - 9
//   - else -> num
// - reduce array to sum: 6
// - return true if sum is divisible by 10, otherwise false

function validLuhn(str) {
  if (typeof str !== 'string' || !/\d+/.test(str)) {
    return false;
  }

  let cleanStr = str.replace(/\D/g, '');
  let digits = cleanStr.split('').reverse();
  let mappedDigits = digits.map((num, idx) => {
    num = parseInt(num, 10);
    if (idx % 2 !== 0) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    return num;
  });
  let sum = mappedDigits.reduce((sum, digit) =>  sum + digit, 0);
  return sum % 10 === 0;
}

// Examples:
console.log(validLuhn("2323 2005 7766 3554") === true);
console.log(validLuhn("1111") === false);
console.log(validLuhn("8763") === true);
// edge cases:
// empty string:
console.log(validLuhn("") === false);
// alpha chars:
console.log(validLuhn("abcd") === false);
// mix of alpha and numbers:
console.log(validLuhn("87a6b3") === true);
// input is numer:
console.log(validLuhn(8763) === false);
// one off:
console.log(validLuhn("8764") === false);
