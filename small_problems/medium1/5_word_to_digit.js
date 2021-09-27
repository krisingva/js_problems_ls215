// Word to Digit

// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

/*
- split string on spaces into word array
- map each word:
  - for current word:
    - iterate through NUMBERS with index
    - if current word matches an element:
      - replace the match with the index in NUMBERS
    - if iteration ends without a match
      - keep word as is
- join to string and return
*/

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(text) {
  let words = text.split(' ');
  let numberWords = words.map(word => {
    for (let idx = 0; idx < NUMBERS.length; idx += 1) {
      let numberWord = NUMBERS[idx];
      let pattern = new RegExp(numberWord, 'i');
      if (pattern.test(word)) {
        return word.replace(pattern, idx);
      }
    }
    return word;
  });
  return numberWords.join(' ');
}

// Example:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('Please call me at five five five one two three four. Four.') === "Please call me at 5 5 5 1 2 3 4. 4.");
console.log(wordToDigit('0 Please call me at five five five one two three four. Thanks.') === "0 Please call me at 5 5 5 1 2 3 4. Thanks.");

// LS:


// Solution

// const NUM_WORDS = {
//   zero:  0,
//   one:   1,
//   two:   2,
//   three: 3,
//   four:  4,
//   five:  5,
//   six:   6,
//   seven: 7,
//   eight: 8,
//   nine:  9,
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp(word, 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });

//   return sentence;
// }

// Discussion

// The solution uses a NUM_WORDS object as a lookup table for converting each
// numeric word to its digit counterpart. The solution iterates over the keys of
// the NUM_WORDS object and iteratively replaces all instances of each numeric
// word in the sentence argument. During each iteration, the solution creates a
// RegExp object and assigns it to the regex variable. The solution passes this
// regex as an argument to the String.prototype.replace method, reassigning the
// value of the sentence via the statement:

// sentence = sentence.replace(regex, NUM_WORDS[word]);

// After looping through all the keys, the solution returns the new sentence.

// If you created any additional test cases, you may have noticed that the
// provided solution does not handle the case where a "number word" is a part of
// another word, such as:

// wordToDigit('The weight is done.');      // "The w8 is d1."

// We can handle this case by wrapping the regex pattern with the word boundary
// anchor, \b:

// regex = new RegExp('\\b' + word + '\\b', 'g');

// This results in:

// wordToDigit('The weight is done.');      // "The weight is done."

// Note that we have to escape the string '\\b' with an extra
// backslash—otherwise JavaScript will interpret '\b' as a backspace character.