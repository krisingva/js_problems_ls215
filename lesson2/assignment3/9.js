// Create variables aIndex and vIndex and store the index of the first
// occurrences of letters 'a' and 'v' in the language string. Call the substr
// method on language with aIndex as the first argument, and 4 as the second
// argument, e.g., language.substr(aIndex, 4). Log the return value. Repeat the
// operation using vIndex as the first argument.

let language = 'JavaScript';
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log((language.substr(aIndex, 4)));
// avaS
console.log((language.substr(vIndex, 4)));
// vaSc