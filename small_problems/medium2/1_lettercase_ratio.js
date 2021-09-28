// Lettercase Percentage Ratio

// Write a function that takes a string and returns an object containing the
// following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// My notes:
// input: String
// output: object with three properties, uppercase letters, lowercase letters
// and neither ratios of characters from input.
// algo:
// - have count obj with proper keys and 0 values
// -iterate through String, for current char:
//   - determine if upper or lowercase and add to appropriate count object
//     properties
//   - else add to neither property
// - loop through count object and reassign property values to ratios using the
//   string length and convert to properly formatting string

function formatRatio(value, total) {
  return String(((value / total) * 100).toFixed(2));
}

// using regex directly on string:
function letterPercentages(str) {
  let lower = str.match(/[a-z]/g) || [];
  let upper = str.match(/[A-Z]/g) || [];
  let neither = str.match(/[^A-Z]/ig) || [];
  return {
    lowercase: (formatRatio(lower.length, str.length)),
    uppercase: (formatRatio(upper.length, str.length)),
    neither: (formatRatio(neither.length, str.length)),
  };
}

// splitting string to char array and iterate over to count:
// function letterPercentages(str) {
//   let count = { lowercase: 0, uppercase: 0, neither: 0};
//   str.split('').forEach(char => {
//     if (/[a-z]/.test(char)) {
//       count['lowercase'] += 1;
//     } else if (/[A-Z]/.test(char)) {
//       count['uppercase'] += 1;
//     } else {
//       count['neither'] += 1;
//     }
//   });

//   for (let prop in count) {
//     count[prop] = formatRatio(count[prop], str.length);
//   }

//   return count;
// }

LS:

// function letterPercentages(string) {
//   const count = string.length;
//   return {
//     lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
//     uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
//     neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
//   };
// }

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// only neither:
console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// My test cases:
// only lowercase:
console.log(letterPercentages('abc'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

// only uppercase:
console.log(letterPercentages('ABC'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }