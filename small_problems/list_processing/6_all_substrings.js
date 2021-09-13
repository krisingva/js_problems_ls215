// All Substrings

// Write a function that returns a list of all substrings of a string. Order the
// returned list by where in the string the substring begins. This means that
// all substrings that start at index position 0 should come first, then all
// substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise:

function leadingSubstrings(str) {
  return str.split('').map((char, idx, array) => array.slice(0, idx + 1).join(''));
}

// Using a for loop:
function substrings(str) {
  let subStr = [];
  for (let i = 0; i < str.length; i += 1) {
    subStr.push(leadingSubstrings(str.slice(i)));
  }

  return subStr.flat();
}

// Using list processing only:
function substrings2(str) {
  return str.split('')  // [a,b,c,d,e]
            .map((char, idx, array) => array.slice(idx).join(''))
            // [ 'abcde', 'bcde', 'cde', 'de', 'e' ]
            .flatMap(str => leadingSubstrings(str));
}

// Example:

console.log(substrings('abcde'));
console.log(substrings2('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

// LS:

// Solution

// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// Discussion

// Even with the help of the leadingSubstrings function written earlier, this
// problem still seems to be easiest when we use an ordinary for loop. The twist
// here is that substrings handles the process of finding the substrings on the
// trailing end of the original string, while leadingSubstrings handles the
// leading substrings.

// If that's a little hard to hold in your head, think about what must happen
// here. We'll assume that the original string is abc:

// - substrings is called with abc as an argument
// - The loop in substrings extracts all the trailing substrings from abc: bc,
//   and c.
// - For each of the trailing substrings, we call leadingSubstrings with that
//   substring.

//   - When we call it with abc, leadingSubstrings returns ['a', 'ab', 'abc']
//   - When we call it with bc, leadingSubstrings returns ['b', 'bc']
//   - When we call it with c, leadingSubstrings returns ['c']

// - All of the arrays returned by leadingSubstrings get concatenated together,
//   yielding the final result:

// ['a', 'ab', 'abc', 'b', 'bc', 'c']

// If it weren't for the leadingSubstrings function, this problem could've
// easily become much more complicated to wrap our heads around.