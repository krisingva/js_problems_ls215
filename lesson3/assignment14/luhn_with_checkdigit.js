// Write a function that can add a checkdigit to make the number valid per Luhn
// formula and return the original number plus the digit. The function should
// return "2323 2005 7766 3554" when given "2323 2005 7766 355" as input.

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

function sumOfLuhnDigits(arr) {
  return arr.map((num, idx) => {
    num = parseInt(num, 10);
    if (idx % 2 === 0) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    return num;
  }).reduce((sum, digit) =>  sum + digit, 0);
}

function addDigit(str) {
  if (validLuhn(str)) {
    return str;
  }

  let cleanStr = str.replace(/\D/g, '');
  let digits = cleanStr.split('').reverse();
  let sum = sumOfLuhnDigits(digits);
  let remainder = sum % 10;
  return str + String(10 - remainder);
}

// Examples:
console.log(addDigit("2323 2005 7766 3554") === "2323 2005 7766 3554");
console.log(addDigit("2323 2005 7766 355") === "2323 2005 7766 3554");
console.log(addDigit("1111") === "11114");
console.log(addDigit("876") === "8763");
// edge cases:
// empty string:
console.log(addDigit("") === '10');