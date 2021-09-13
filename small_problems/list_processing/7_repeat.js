// Palindromic Substrings

// Write a function that returns a list of all substrings of a string that are
// palindromic. That is, each substring must consist of the same sequence of
// characters forwards as backwards. The substrings in the returned list should
// be sorted by their order of appearance in the input string. Duplicate
// substrings should be included multiple times.

// You should not use the functions you wrote in the previous
// exercise.

// For the purpose of this exercise, you should consider all characters and pay
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
// are not. In addition, assume that single characters are not palindromes.

// my notes:
// input: str ('madam')
// output: array of palindrome substrings
// 1. get all substrings
// 2. filter out any non-palindromes

// 1. 'madam'
// convert to char array:
// -> [m, a, d, a, m]
//    map to str array with each elem being the input str cutoff at diff idx
//    from front:
// [
//   m -> madam,
//   a -> adam,
//   d -> dam,
//   a -> am,
//   m -> m
// ]
// map each str elem to the substrings with diff cutoff from the end:
// [
//   madam, -> [m, ma, mad, mada, madam]
//   adam, -> [a, ad, ada, adam]
//   dam, -> [d, da, dam]
//   am, -> [a, am]
//   m -> [m]
// ]

// 2. check if str1 palindrome:
//    reverse str should be equal to input str

function substrings(str) {
  return str.split('').map((char, idx) => str.slice(0, idx + 1));
}

function isPalindrome(str) {
  return (str === str.split('').reverse().join('')) && (str.length > 1);
}

function palindromes(str) {
  return str.split('')
            .map((elem, idx) => str.slice(idx))
            .flatMap(elem => substrings(elem))
            .filter(elem => isPalindrome(elem))
            ;
}


// Examples:
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

let arr;
let returnArr;

arr = palindromes('abcd');
returnArr = [];
console.log(arraysAreEqual(arr, returnArr));

arr = palindromes('madam');
returnArr = [ "madam", "ada" ];
console.log(arraysAreEqual(arr, returnArr));
// console.log(palindromes('abcd'));
// // []
// console.log(palindromes('madam'));
// // [ "madam", "ada" ]

arr = palindromes('hello-madam-did-madam-goodbye');
returnArr = [
  "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo"
];
console.log(arr);
console.log(arraysAreEqual(arr, returnArr));

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

arr = palindromes('knitting cassettes');
returnArr = [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
console.log(arraysAreEqual(arr, returnArr));

// console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]