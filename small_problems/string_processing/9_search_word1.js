
// Search Word Part 1

// Write a function that takes two arguments, a word and a string of text, and
// returns an integer representing the number of times the word appears in the
// text.

// You may assume that the word and text inputs will always be provided, and
// that all word breaks are spaces. Thus, some words will include punctuation
// such as periods and commas.

// anywhere in text:
function searchWord(word, text) {
  let pattern = new RegExp(`${word}`, 'ig');
  return text.match(pattern).length;
}

// only in words:
function searchWord(word, text) {
  let pattern = new RegExp(`${word}`, 'i');
  return text.split(' ').filter(word => pattern.test(word)).length;
}

// LS:

// function searchWord(word, text) {
//   const regex = new RegExp(word, 'gi');
//   const matches = text.match(regex);

//   return matches ? matches.length : 0;
// }

// Example:

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3