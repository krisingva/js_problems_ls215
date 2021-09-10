/*
input: string
output: integer

algo:
- input string is converted to an array of string integers
- transform array from string elements to number elements
- reverse array
- transform elements to elements multiplied by base to the power of current index
- reduce array to the sum of each element
*/

// function octalToDecimal(numberString) {
//   const BASE = 8;
//   let numbers = numberString.split('').map(element => parseInt(element, 10));
//   let mapped = numbers.reverse().map((element, index) => {
//     return element * Math.pow(BASE, index);
//   });
//   return mapped.reduce((sum, num) => sum + num);
// }

// refactored:
function octalToDecimal(numberString) {
  const BASE = 8;
  return numberString.split('')
                     .map(str => parseInt(str, 10))
                     .reverse()
                     .map((num, index) => num * Math.pow(BASE, index))
                     .reduce((sum, num) => sum + num);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9