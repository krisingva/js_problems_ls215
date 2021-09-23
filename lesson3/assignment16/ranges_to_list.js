// Problem Description

// You are given a list of numbers in a "short-hand" range where only the
// significant part of the next number is written because we know the numbers
// are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14,
// 21]). Some people use different separators for their ranges (ex. "1-3, 1-2",
// "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range
// limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

//     "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
//     "1-3, 1-2" --> 1, 2, 3, 11, 12
      // convert ranges to numbers:
      // [1, 2, 3] and [1, 2]
      // combine ranges:
      // [1, 2, 3, 1, 2]
      // detect a small number, convert it to the next number ending in that
      // digit (addition? 10 + number):
      // [1, 2, 3, 11, 12]
//     "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
      // how to handle ranges where the first number is higher than the last?:
      // [1, 2, 3, 4, 5] and [5, 6, 7, 8, 9, 10, 1, 2]
//     "104-2" --> 104, 105, ... 112
      // 104 > 2
      // Add 10 until false
      // 104 > 12
      // 104 > 22
      // 104 > 32
      // ...
      // 104 > 102
      // 104 > 112 -> false
      // iterate through numbers from 104 to 112
//     "104-02" --> 104, 105, ... 202
//     "545, 64:11" --> 545, 564, 565, .. 611

// P:
// input: string of numbers and ranges
// output: an array of integers representing numbers and ranges expanded
// rules:
// - ranges can be represented by two numbers with either a `:`, a `-` or `..`
//   separating the min and max numbers for the range
// - if the last number is less than the first number in a range, add 10s to it
//   until it is greater, then expand to an array of numbers encompassing the
//   range
// - if two ranges are next to each other, the latter range has to have higher
//   numbers than the first range

// E:
// // given:
// console.log(rangeToList("1, 3, 7, 2, 4, 1"));
// // --> [1, 3, 7, 12, 14, 21]
// console.log(rangeToList("1-3, 1-2"));
// // --> [1, 2, 3, 11, 12]
// console.log(rangeToList("1:5:2"));
// // --> [1, 2, 3, 4, 5, 6, ... 12]
// console.log(rangeToList("104-2"));
// // --> [104, 105, ... 112]
// console.log(rangeToList("104-02"));
// // --> [104, 105, ... 202]
// console.log(rangeToList("545, 64:11"));
// // --> [545, 564, 565, .. 611]
// // edge cases:
// // empty string:
// console.log(rangeToList(""));
// // --> []
// // no ranges or conversions:
// console.log(rangeToList("1, 3, 7"));
// // --> [1, 3, 7]
// // all conversions:
// console.log(rangeToList("7, 3, 1"));
// // --> [7, 13, 21]
// // ranges with '..' separators:
// console.log(rangeToList("1..3, 7..9"));
// // --> [1, 2, 3, 7, 8, 9]
// // multiple ranges with different separators:
// console.log(rangeToList("1-3, 4:5, 7..9"));
// // --> [1, 2, 3, 4, 5, 7, 8, 9]

// D:
// - arrays of numbers (string split on ',')
// - subarrays of ranges

// A:
// - split str into number array on ','
// - if any string elements contain `:`, `-` or `..`
//   - subproblem: convert range elements to numbers subarray
//   - flatten array
// - helper function: convertNums
//   - transform array with index:
//     - start with addition = 0
//     - convert string element to number
//     - if current number is less than the previous number:
//       - add 10 to addition and add addition to current number until the
//         current number becomes greater than previous number
//     - else add addition to current number
// - return array

// subproblem: convert range elements to numbers subarray
// - for a range element:
//   - if it only contains one occurrence of separator:
//     - if first number is greater than second number, add 10 to second number
//       until it is greater
//     - return an array of all numbers between first and second number
//       (inclusive)
//   - else
//     - split string into separate ranges (e.g. '1:5:2' -> ['1', '5', '2'])
//     - use strToNums from above to get an appropriate number array ([1, 5,
//       12])
//       -- return an array of all numbers between first and last number
//       (inclusive)

// console.log(strToNums('1, 3, 2')); // -> [1,2,3,4 ... 12]

/*eslint-disable max-lines-per-function*/
function convertNums(arrOfDigits) {
  let newArr = [];
  let addition = 0;
  arrOfDigits.forEach((num, idx) => {
    let currNum = num;
    if (idx === 0) {
      newArr[idx] = currNum;
    } else if (currNum < arrOfDigits[idx - 1]) {
      while (currNum < arrOfDigits[idx - 1]) {
        addition += 10;
        currNum += addition;
      }
      newArr[idx] = currNum;
    } else {
      newArr[idx] = currNum + addition;
    }
  });
  return newArr;
}
/*eslint-enable max-lines-per-function*/
// console.log(convertNums([ 1, 3, 7, 2, 4, 1 ]));
// // [ 1, 3, 7, 12, 14, 21 ]

function strToNums(str) {
  // '1, 5, 2'
  let digits = str.split(', ').map(str => parseInt(str, 10));
  let mappedDigits = convertNums(digits);
  return expandMinToMax(mappedDigits);
}

function expandMinToMax(arr) {
  let results = [];
  for (let currNum = arr[0]; currNum <= arr[arr.length - 1]; currNum += 1) {
    results.push(currNum);
  }
  return results;
}

// console.log(expandMinToMax([ 1, 3, 12 ]));



function containsRange(array) {
  return array.some(str => /(:|\.{2}|-)/.test(str));
}

// console.log(containsRange("1-3, 1-2".split(',')));
// console.log(containsRange("1:3, 1:2".split(',')));
// console.log(containsRange("1..3, 1..2".split(',')));
// console.log(containsRange("1-3, 1..2, 1:4".split(',')));
// console.log(containsRange("1, 2, 3".split(',')));

// console.log(rangeToNumbers("1:5:2"));
function rangeToNumbers(str) {
  let nums = str
    .replace(/(:|\.{2}|-)/g, ', ');
    // "1:5:2" -> '1, 5, 2'
    // '1-3' -> '1, 3'
  if (str.match(/(:|\.{2}|-)/g).length === 1) {
    nums = nums.split(' ').map(char => parseInt(char, 10));
    while (nums[0] > nums[1]) {
      nums[1] += 10;
    }
    return expandMinToMax(nums);
  } else {
    return strToNums(nums); // '1, 5, 2' -> [1,2,3,4 ... 12]
  }
}

// console.log(rangeToNumbers("1:3:2"));

function rangeToList(numberStr) {
  let digits = numberStr.split(', ');
  if (containsRange(digits)) {
    digits = digits.flatMap(str => {
      if (/(:|\.{2}|-)/.test(str)) {
        return rangeToNumbers(str);
      } else {
        return parseInt(str, 10);
      }
    });
  } else {
    digits = digits.map(str => {
      return parseInt(str, 10);
    });
  }

  let mappedDigits = convertNums(digits);
  return mappedDigits;
}


// console.log(rangeToNumbers("7-3"));
// console.log(rangeToNumbers("1:2"));
// console.log(rangeToNumbers("1..3"));
// console.log(rangeToNumbers("1:3:2"));
// console.log(rangeToNumbers("1-3, 1..2, 1:4"));
// console.log(rangeToNumbers("1, 2, 3"));

// // E:
// // given:
// console.log(rangeToList("1, 3, 7, 2, 4, 1"));
// // // --> [1, 3, 7, 12, 14, 21]
// console.log(rangeToList("1-3, 1"));
// // --> [1, 2, 3, 11]
// console.log(rangeToList("1-3, 1-3"));
// // --> [1, 2, 3, 11, 12, 13]
// console.log(rangeToList("1:5:2"));
// // --> [1, 2, 3, 4, 5, 6, ... 12]
// console.log(rangeToList("104-2"));
// // --> [104, 105, ... 112]
// console.log(rangeToList("104-02")); // not returning correctly
// // --> [104, 105, ... 202]
// console.log(rangeToList("545, 64:11")); // not returning correctly
// // --> [545, 564, 565, .. 611]
// // edge cases:
// // empty string:
// console.log(rangeToList("")); // returns NaN
// // --> []
// // no ranges or conversions:
// console.log(rangeToList("1, 3, 7"));
// // --> [1, 3, 7]
// // all conversions:
// console.log(rangeToList("7, 3, 1"));
// // --> [7, 13, 21]
// // ranges with '..' separators:
// console.log(rangeToList("1..3, 7..9"));
// // --> [1, 2, 3, 7, 8, 9]
// // multiple ranges with different separators:
// console.log(rangeToList("1-3, 4:5, 7..9"));
// // --> [1, 2, 3, 4, 5, 7, 8, 9]

