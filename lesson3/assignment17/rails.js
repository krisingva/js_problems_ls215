// Rail Fence Cipher

// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient
// Greeks.

// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom (like
// a zig-zag). Finally the message is then read off in rows.

// P:
// input: String, integer
// output: string
// rules:
// - only alpha chars, spaces and commas allowed in input
//   summary: input integer times datastructures are each used to store the
//   sequential chars from the input string with intervening placeholders for
//   empty spaces. Once the datastructures are overlayed, each space is occupied
//   by a char and forms the output string.
// E:
// given
// D:
// string, array of strings
// A:
// - create an array of empty strings with input integer elements
// - iterate with two counters:
//   - one counter that goes from 0 to last index of input string
//   - second counter that starts at 0 and will increment up to input Number,
//     then decrement down to 0
//   - variables that represent the min and max values of the number counter
//   - a variable to keep track of whether to increment or decrement
//   - at each iteration:
//     - iterate through the array elements with index:
//       -if the number counter matches the array index:
//         - add the current string char to that array element
//       - else:
//         - add '0' to the array element
//     - add one to string char counter
//     - add or subtract one to number counter depending on the incr/decr
//       tracker
//     - check if tracker needs to be changed (if number counter is min or max
//       value)
// - build up a new string to return:
// - iterate through array of strings
//   - for the current string:
//     - split into char array
//     - filter out any '0' elements
//     - join to string
//     - add to return string
// - return string

/*eslint-disable max-lines-per-function*/
function encode(message, rails) {
  let railStrings = Array.apply(null, Array(rails)).map(elem => '');
  const minRail = 0;
  const maxRail = rails - 1;

  for (let charIdx = 0, railsIdx = 0, incrementer = true; charIdx < message.length; charIdx += 1) {
    let currChar = message[charIdx];
    railStrings = railStrings.map((str, idx) => {
      return (idx === railsIdx) ? str + currChar : str + '0';
    });

    if (minRail === maxRail) {
      continue;
    }

    railsIdx = (incrementer) ? railsIdx + 1 : railsIdx - 1;
    incrementer = (railsIdx === minRail || railsIdx === maxRail) ? !incrementer : incrementer;
  }

  return overlayRails(railStrings);
}
/*eslint-enable max-lines-per-function*/

function overlayRails(railsArray) {
  let overlayedStrings = railsArray.map(str => {
    return str.split('')
      .filter(char => char !== '0')
      .join('');
  }).join('');

  return overlayedStrings;
}

console.log(encode('', 4) === '');
console.log(encode('One rail, only one rail', 1) === 'One rail, only one rail');
console.log(encode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
console.log(encode('WEAREDISCOVEREDFLEEATONCE', 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
console.log(encode('EXERCISES', 4) === 'ESXIEECSR');
console.log(encode('More rails than letters', 24) === 'More rails than letters');




// walkthrough of algo with example:
// 'WEARED', 3
// arr -> ['','','']
// charCount -> 0
// numberCount -> 0
// min -> 0
// max -> 2
// tracker -> increm

// arr.itWI ->
// 0: ['W','','']
// 1: ['W','0','']
// 2: ['W','0','0']
// charCount -> 1
// numberCount -> 1
// min -> 0
// max -> 2
// tracker -> increm

// arr.itWI ->
// 0: ['W0','0','0']
// 1: ['W0','0E','0']
// 2: ['W0','0E','00']
// charCount -> 2
// numberCount -> 2
// min -> 0
// max -> 2
// tracker -> decrem

// arr.itWI ->
// 0: ['W00','0E','00']
// 1: ['W00','0E0','00']
// 2: ['W00','0E0','00A']
// charCount -> 3
// numberCount -> 1
// min -> 0
// max -> 2
// tracker -> decrem

// arr.itWI ->
// 0: ['W000','0E0','00A']
// 1: ['W000','0E0R','00A']
// 2: ['W000','0E0R','00A0']
// charCount -> 4
// numberCount -> 0
// min -> 0
// max -> 2
// tracker -> increm

// arr.itWI ->
// 0: ['W000E','0E0R','00A0']
// 1: ['W000E','0E0R0','00A0']
// 2: ['W000E','0E0R0','00A00']
// charCount -> 5
// numberCount -> 1
// min -> 0
// max -> 2
// tracker -> increm

// arr.itWI ->
// 0: ['W000E0','0E0R0','00A00']
// 1: ['W000E0','0E0R0D','00A00']
// 2: [
//   'W000E0',
//   '0E0R0D',
//   '00A000']
// charCount -> 6, stop iterating
// numberCount -> 2
// min -> 0
// max -> 2
// tracker -> decrem

// build string:
// ['WE', 'ERD','A']
// -> 'WEERDA'

// 'WEARED', 3


// console.log(decode('', 4) === '');
// console.log(decode('ABCDEFGHIJKLMNOP', 1) === 'ABCDEFGHIJKLMNOP');
// console.log(decode('XXXXXXXXXOOOOOOOOO', 2) === 'XOXOXOXOXOXOXOXOXO');
// console.log(decode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');