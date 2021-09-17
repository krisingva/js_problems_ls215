// Delete Vowels

// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed.

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

// LS:

// function removeVowels(stringArray) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   return stringArray.map(string => string.split('').map(char => {
//     if (VOWELS.includes(char)) {
//       return '';
//     } else {
//       return char;
//     }
//   }).join(''));
// }

// Examples:

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));
// ["BC", "", "XYZ"]
