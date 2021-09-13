// Scenario: We need to capitalize the first letter of every word in some text.

function capitalize(text) {
  return text.split(' ')
             .map(word => word[0].toUpperCase() + word.slice(1))
             .join(' ')
             ;
}

let text = 'The quick brown fox jumps over the lazy dog.';
console.log(capitalize(text));
// The Quick Brown Fox Jumps Over The Lazy Dog.