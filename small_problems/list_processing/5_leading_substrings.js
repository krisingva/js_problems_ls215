// Leading Substrings

// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first letter
// of the word, and the list should be ordered from shortest to longest.

function leadingSubstrings(str) {
  return str.split('').map((char, idx, array) => array.slice(0, idx + 1).join(''));
}

// Examples:

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

LS:

// Solution

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// Discussion

// This problem can be solved using the list processing functions. However,
// doing so is needlessly complex. This is one of those situations where a for
// loop may be the most elegant solution. Given that approach, all we have to do
// is iterate through the input string and extract a list of the substrings of
// length 1, 2, 3, and so on starting at the beginning of the string.

