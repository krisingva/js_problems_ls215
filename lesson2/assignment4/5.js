// Write a method that changes the first occurrence of the word apple,
// blueberry, or cherry in a string to danish.

function danish(text) {
  return text.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

// Examples:
console.log(danish('An apple a day keeps the doctor away'));
// -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// -> 'I love pineapple'