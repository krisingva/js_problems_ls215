// Now I Know My ABCs (also lesson 3 assignment 15 of LS215)

// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument and returns true if
// the word can be spelled using the set of blocks, false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

// Examples:

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true

// P:
// input: string of alpha chars
// output: Boolean
// rules:
// - 13 blocks with 2 alpha chars each
// - each block can only be used once
//   summary: go through each char of input string, using up a block for each
//   char. If at any point a block is not available for the current char, return
//   false, otherwise true.
// E:
// given:
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
// letter found twice in string:
// isBlockWord('BABY');      // false
// non-alpha char in string:
// isBlockWord('B@TCH');      // false
// empty string:
// isBlockWord('');      // true
// one char string:
// isBlockWord('O');      // true
// using all 13 blocks:
// isBlockWord('BXDCNGRFJHVLZ');      // true


// D:
// Array

// A:
// - have two arrays representing the blocks, each block char has the same index
// - split string to char Array
// - iterate through chars
//   - for current char:
//   - if char is found in either block array:
//     - remove each block array element of that index
//   - else:
//     - return false
// - if we iterate through the entire chars without breaking prematurely, return
//   true.

/*eslint-disable max-lines-per-function*/

function isBlockWord(word) {
  let blockSide1 = [
    'B', 'X', 'D', 'C', 'N', 'G', 'R', 'F', 'J', 'H', 'V', 'L', 'Z'
  ];
  let blockSide2 = [
    'O', 'K', 'Q', 'P', 'A', 'T', 'E', 'S', 'W', 'U', 'I', 'Y', 'M'
  ];
  let chars = word.toUpperCase().split('');

  for (let ind = 0; ind < chars.length; ind += 1) {
    let currChar = chars[ind];
    if (blockSide1.includes(currChar) || blockSide2.includes(currChar)) {
      let removalIdx = blockSide1.indexOf(currChar);
      if (removalIdx === -1) {
        removalIdx = blockSide2.indexOf(currChar);
      }
      blockSide1.splice(removalIdx, 1);
      blockSide2.splice(removalIdx, 1);
    } else {
      return false;
    }
  }

  return true;
}

/*eslint-enable max-lines-per-function*/

// // B:O   X:K   D:Q   C:P   N:A
// // G:T   R:E   F:S   J:W   H:U
// // V:I   L:Y   Z:M

// E:
// given:
console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest') === true);       // true
// letter found twice in string:
console.log(isBlockWord('BABY') === false);      // false
// non-alpha char in string:
console.log(isBlockWord('B@TCH') === false);      // false
// empty string:
console.log(isBlockWord('') === true);      // true
// one char string:
console.log(isBlockWord('O') === true);      // true
// using all 13 blocks:
console.log(isBlockWord('BXDCNGRFJHVLZ') === true);      // true

// LS:

// P:
// First, let's process the provided input and the expected output:

//     Input
//         The input of the program is a word as a string.
//     Output
//         A boolean value of true or false.
//     Rules
//         We need to map out the path from the input (a string) to the output
//         (a boolean). We can derive the following requirements from the
//         problem description:
//             We're given 13 two-letter blocks.
//             If the input contains any two letters from the same block, return
//             false.
//             If a block is used more than once, return false.
//             Otherwise, return true.
//             Ignore case when applying the block rules.
//     Mental Model
        // If you study the requirements, you'll find that #3 supersedes #2. In
        // other words, as long as we make sure that #3 is followed, #2 is also
        // true, but not the other way around (for the cases where we may use
        // the same letter twice in a word). So we're going to align our
        // algorithm and solution more with #3, instead of #2. It might be hard
        // to realize this point from the problem description alone, so let's
        // work through more examples / test cases to better understand the
        // problem.

// E:
// The three examples given with the problem are not sufficient to cover all the
// edge cases. Let's write some more test cases to cover (1) case sensitivity
// and (2) repeated letters in a word:

// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
// isBlockWord('floW');       // true
// isBlockWord('APPLE');      // false
// isBlockWord('apple');      // false
// isBlockWord('apPLE');      // false
// isBlockWord('Box');        // false

// D:
// There are two major decision points when it comes to the data structure: (1)
// how we represent the blocks and (2) how we represent the input string.

// How we choose to represent the blocks depends on how we choose to mentally
// model the algorithm. If we model the algorithm as "marking the blocks as
// either used or unused", we can use an object to represent the blocks—using
// blocks as keys and boolean markers as property values.

// However, if we mentally model the algorithm as "removing a block from a
// bucket of available blocks when that block is used", then we can use an array
// to represent the blocks. Either model works, but the array solution is
// simpler, and with built-in Array methods it will be easier to do what we need
// to do—such as finding a block based on a letter and removing a block from the
// array. For this purpose, objects are heavier and don't give us many
// advantages.

// The next decision is how to represent the blocks themselves. We'll use an
// array:

// ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY',
// 'ZM']

// The blocks are expressed in uppercase letters, so we'll need to change each
// letter to uppercase before searching for it in the blocks.

// We could also use the following array to capture the implicit knowledge of
// letter cases:

// ['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs', 'JWjw',
// 'HUhu', 'VIvi', 'LYly', 'ZMzm']

// This would make our algorithm simpler because letter cases are handled by the
// data structure itself.

// A:
// Now let's work on our algorithm. Since we've spent time planning and working
// through the problem on a higher level, the algorithm is straightforward:

    // Define an array that contains the 13 two-letter blocks
    // Turn the input string into an array of letters and iterate through it.
    // For each letter:
    //     If we can't find a block that contains the letter, return false
    //     Otherwise, remove the block that contains the letter from the blocks
    // array
    // Return true after we've processed all the letters in the input string

// Solution

// function isBlockWord(word) {
//   const blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
//   const letters = word.split('');

//   for (let i = 0; i < letters.length; i += 1) {
//     let matchingBlock = blocks.filter(block => block.includes(letters[i].toUpperCase()))[0];

//     if (matchingBlock === undefined) {
//       return false;
//     } else {
//       blocks.splice(blocks.indexOf(matchingBlock), 1);
//     }
//   }

//   return true;
// }

// One alternative algorithm involves using regex (regular expressions). We'll
// turn the blocks into an array of regex patterns, such as /B|O/gi. Then we'll
// match the word against all the block regex. Finally, we'll assert that there
// can't be more than one match for any regex—if there's more, it means that the
// word contains two letters in the same block.

// function isBlockWord(word) {
//   const blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
//   const regExps = blocks.map(block => new RegExp(block.replace(':', '|'), 'gi'));

//   return regExps.every(regExp => (word.match(regExp) || []).length < 2);
// }

// Note that the String.prototype.match method returns null if no matches are
// found. This can be a problem if we try to access the length property on the
// return value of match when the match is unsuccessful.

// For example, the expression 'BUTCH'.match(/B|O/gi) evaluates to ['B'], while
// the expression 'BUTCH'.match(/X|K/gi) evaluates to null. We use the
// expression (word.match(regExp) || []) to account for both of these possible
// outcomes. If the match is successful, the || operator short-circuits and the
// expression evaluates to the array of matches. Otherwise—since null is a falsy
// value—the expression will evaluate to an empty array. Because this expression
// is guaranteed to return an array, there's no chance that an error will be
// raised when we access the length property.