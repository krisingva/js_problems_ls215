// Write a method that returns true if its argument looks like a URL, false if
// it does not.
function isUrl(text) {
  return !!(text.match(/^https?:\/\/\S+\.[a-z]{2,}$/));
}

// Examples:

console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false