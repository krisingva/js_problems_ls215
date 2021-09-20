// While version numbers often appear to be decimal numbers, they are, in fact,
// a convenient notation for a more complicated number system. The following are
// all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and
// compares them, with the result of this comparison showing whether the first
// is less than, equal to, or greater than the second version:

//     If version1 > version2, we should return 1.
//     If version1 < version2, we should return -1.
//     If version1 === version2, we should return 0.
//     If either version number contains characters other than digits and the .
//     character, we should return null.

// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// p:
// input: two version numbers, strings
// output: 1, -1, 0 or null, see rules above
// rules:
// - a version number should only contain digits and periods
// - any number with .0 at the end is the same as the number without it
// - subproblem: comparing numbers with different amounts of digits

// E:
// 1.0 , 1 -> 0
// 0 , 0.0 -> null
// 1.a.2, 1.0.2 -> null
// 1.20, 1.2 -> 1
// 1.18, 1.2.0 -> 1
// 1.18, 3.18 -> -1
// 1.20, 2.1 -> -1
// no input -> null

// D:
// array of digits

// A:
// - if input strings are falsey, contain only a 0 or contain other characters
//   than digits and periods, return null
// - split input strings into digit arrays on periods (string elements)
// - map to numbers
// - if the two arrays are not the same length, add zeros to the smaller one
//   until they are
// - iterate through one array with index
//   - if elements of both arrays are not the same number:
//     - compare the numbers and return -1 or 1
// - if iteration finished without early break, return 0

function validVersion(versionArr) {
  if (versionArr.every(elem => elem === '0')) {
    return false;
  }
  if (versionArr.some(elem => /[^0-9]/.test(elem))) {
    return false;
  }
  return true;
}

function padZeros(arr1, arr2) {
  let shorter = (arr1.length > arr2.length) ? arr2 : arr1;
  let longer = (arr1.length > arr2.length) ? arr1 : arr2;
  while (shorter.length < longer.length) {
    shorter.push(0);
  }
}

function compareVersions(version1, version2) {
  if (!version1 || !version2) {
    return null;
  }
  let v1 = version1.split('.');
  let v2 = version2.split('.');

  if (!validVersion(v1) || !validVersion(v2)) {
    return null;
  }

  v1Digits = v1.map(char => parseInt(char, 10));
  v2Digits = v2.map(char => parseInt(char, 10));

  if (v1Digits.length !== v2Digits.length) {
    padZeros(v1Digits, v2Digits);
  }

  for (let idx = 0; idx < v1Digits.length; idx += 1) {
    if (v1Digits[idx] !== v2Digits[idx]) {
      return v1Digits[idx] < v2Digits[idx] ? -1 : 1;
    }
  }

  return 0;
}

console.log(compareVersions('1.0', '1')); // -> 0);
console.log(compareVersions('0', '0.0')); // -> null);
console.log(compareVersions('1.a.2', '1.0.2')); // -> null);
console.log(compareVersions('1.20', '1.2')); // -> 1);
console.log(compareVersions('1.18', '1.2.0')); // -> 1);
console.log(compareVersions('1.18', '3.18')); // -> -1);
console.log(compareVersions('1.20', '2.1')); // -> -1);
console.log(compareVersions()); // -> null);