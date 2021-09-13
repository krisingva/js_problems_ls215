// Call charCodeAt on the language variable with an argument of idx. Save the
// return value to a variable named charCode, then log the value of charCode.

let language = 'JavaScript';
let idx = language.indexOf('S');
let charCode= language.charCodeAt(idx);
console.log(charCode);
// 83