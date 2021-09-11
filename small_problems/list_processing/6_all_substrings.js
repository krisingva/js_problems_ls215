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

function substrings(str) {
  let subStr = [];
  for (let i = 0; i < str.length; i += 1) {
    subStr.push(leadingSubstrings(str.slice(i)));
  }

  return subStr.flat();
}

function substrings2(str) {
  let subStr = [];
  for (let i = 0; i < str.length; i += 1) {
    subStr.concat(leadingSubstrings(str.slice(i)));
  }

  return subStr;
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