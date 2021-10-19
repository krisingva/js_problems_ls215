
// Madlibs Revisited

// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text template as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the text
// and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text template. Choose the right way to
// structure your template and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something that
// you'll be defining.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are
// only shown for emphasis. These quotes are not present in the actual output
// strings. The words in quotes come from the list of texts and it is the
// madlibs function that puts them in.

// My notes:
// - have object for replacement text with four keys
// (adjectives,
// nouns,
// verbs,
// adverbs)
//   - each key has an array of words of that category as value
// - if template is an array of words:
//   - have set words at specific indexes
//   - have placeholder words (keys of replacement obj) at indexes where a word
//     should be inserted


// - map words
//   - if current word has a substring that matches one of the replacem obj keys
//     - get a random word from the value of the corresp prop
//     - replace substring with random word, keeping anything else in the string
//       the same
//     - algo:
//       - sort replacements keys in alphabetical order
//       - iterate over keys
//         - if current key has a match in current word:
//           - set new regex pattern to key
//           - return tranformed word using replace with pattern and a random
//             word from replacement value for the key

//   - else
//     - keep the current word

// - return joined mapped words with space


// These examples use the following list of replacement texts:
const REPLACEMENTS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
};

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function madlibs(template) {
  let sortedKeys = Object.keys(REPLACEMENTS).sort();
  let mapped = template.map(word => {
    if (sortedKeys.some(key => word.match(key))) {
      for (let i = 0; i < sortedKeys.length; i += 1) {
        let currentKey = sortedKeys[i];
        if (word.match(currentKey)) {
          return replaceWord(word, currentKey);
        }
      }
    } else {
      return word;
    }
  });
  return mapped.join(" ");
}

function replaceWord(word, key) {
  let maxIdx = REPLACEMENTS[key].length - 1;
  let randomIdx = randomBetween(0, maxIdx);
  let randomWord = REPLACEMENTS[key][randomIdx];

  return word.replace(key, randomWord);
}

const template1 = [
'The',
'adjective',
'brown',
'noun',
"adverb",
"verb",
'the',
"adjective",
'yellow',
"noun,",
'who',
"adverb",
"verb",
'his',
"noun",
'and',
'looks',
'around.'
];

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.


const template2 = [
  'The',
  'noun',
  'verb',
  'the',
  "noun's",
  'noun.'
];

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
