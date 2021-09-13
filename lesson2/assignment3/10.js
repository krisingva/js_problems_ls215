// Repeat the previous problem, but this time use substring instead of substr.
// Note how the results differ because of the different ways these methods
// interpret the second argument:

let language = 'JavaScript';
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log((language.substring(aIndex, 4)));
// ava
console.log((language.substring(vIndex, 4)));
// va