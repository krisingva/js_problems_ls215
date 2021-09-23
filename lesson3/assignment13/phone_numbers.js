// Problem Description

// Write a program that cleans up user-entered phone numbers so that they can be
// sent as SMS messages. Other than digits, the number may also contain special
// character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

//     If the phone number is less than 10 digits, assume that it is a bad
//     number.
//     If the phone number is 10 digits, assume that it is good.
//     If the phone number is 11 digits and the first number is 1, trim the 1
//     and use the last 10 digits.
//     If the phone number is 11 digits and the first number is not 1, then it
//     is a bad number.
//     If the phone number is more than 11 digits, assume that it is a bad
//     number.

// For bad numbers, just a return a string of 10 0s.

// P:
// input: string representation of numbers, potentially mixed in with ' ', '-',
// '.', '()'
// output: string representation of cleaned up number with only 10 digits. If
// bad input, return 10 0s
// summary: cleanup string from anything other than numbers. If the numbers
// represent a valid phone number, return it, otherwise return 0s.

// E:
// // less than 10 digits:
// scrubbedNumber('123-4567') === '0000000000';
// // 10 digits:
// scrubbedNumber('800-123-4567') === '8001234567';
// // 11 digits starting with 1:
// scrubbedNumber('1-800-123-4567') === '8001234567';
// // 11 digits starting with digit other than 1:
// scrubbedNumber('8-800-123-4567') === '0000000000';
// // more than 11 digits:
// scrubbedNumber('11-800-123-4567') === '0000000000';
// // edge cases:
// // empty string:
// scrubbedNumber('') === '0000000000';
// // all 0s:
// scrubbedNumber('0000000000') === '0000000000';
// // alphabet chars:
// scrubbedNumber('abcdefghij') === '0000000000';
// // input is not a string but a number:
// scrubbedNumber(8001234567) === '0000000000';

// D:
// string

// A:
// - Verify that the input is a string
// - Remove anything other than number characters
// - Determine if the number is valid or not
//   - if valid, return the string
//   - else return string of 10 0s

function isValidNumber(str) {
  return /^1?\d{10}$/.test(str);
}

function scrubbedNumber(str) {
  const BAD_NUMBER = '0000000000';

  if (typeof str !== 'string') {
    return BAD_NUMBER;
  }

  let cleanStr = str.replace(/[^0-9]/g, '');

  if (!isValidNumber(cleanStr)) {
    return BAD_NUMBER;
  }

  return cleanStr.length === 11 ? cleanStr.slice(1) : cleanStr;
}

// E:
// less than 10 digits:
console.log(scrubbedNumber('123-4567') === '0000000000');
// 10 digits:
console.log(scrubbedNumber('800-123-4567') === '8001234567');
// 11 digits starting with 1:
console.log(scrubbedNumber('1-800-123-4567') === '8001234567');
// 11 digits starting with digit other than 1:
console.log(scrubbedNumber('8-800-123-4567') === '0000000000');
// more than 11 digits:
console.log(scrubbedNumber('11-800-123-4567') === '0000000000');
// edge cases:
// empty string:
console.log(scrubbedNumber('') === '0000000000');
// all 0s:
console.log(scrubbedNumber('0000000000') === '0000000000');
// alphabet chars:
console.log(scrubbedNumber('abcdefghij') === '0000000000');
// input is not a string but a number:
console.log(scrubbedNumber(8001234567) === '0000000000');
// should have added test cases for the edges (9 and 12 digits)