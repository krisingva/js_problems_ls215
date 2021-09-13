// Scenario: Count how often a specific word occurs in some text. Here, we want
// to exclude characters that aren't letters, and we want to perform
// case-insensitive comparisons when searching for the specific word.

function countWordInText(word, text) {
  return text.replace('.', '').split(' ').reduce((count, str) => {
     return (str === word) ? count + 1 : count;
  }, 0);
}

function countWordInText2(word, text) {
  text = text.replace(/\W/g, '');
  let regex = new RegExp(word, 'ig');
  return text.match(regex).length;
}


let text = 'The quick brown fox jumps over the lazy fox.';
console.log(countWordInText('fox', text));
// 2

text = 'The quick brown fox! jumps over 2 the lazy fox.';
console.log(countWordInText2('fox', text));
// 2
console.log(countWordInText2('the', text));
// 2