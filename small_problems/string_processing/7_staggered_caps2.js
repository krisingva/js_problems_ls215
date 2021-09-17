// Staggered Caps Part 2

// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should be upper
// or lower case. Non-alphabetic characters should still be included in the
// output string, but should not be counted when determining the appropriate
// case.

function staggeredCase(str) {
  let alphaCount = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (/[^a-z]/i.test(str[i])) {
      newStr += str[i];
    } else {
      alphaCount += 1;
      if (alphaCount % 2 === 1) {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
    }
  }
  return newStr;
}

// LS:

// function staggeredCase(string) {
//   let needUpper = true;
//   let newChar;

//   return string.split('').map(char => {
//     if (char.match(/[a-z]/i)) {
//       if (needUpper) {
//         newChar = char.toUpperCase();
//       } else {
//         newChar = char.toLowerCase();
//       }

//       needUpper = !needUpper;
//       return newChar;
//     } else {
//       return char;
//     }
//   }).join('');
// }

// Examples:

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
// "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
// "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");
// "IgNoRe 77 ThE 444 nUmBeRs"