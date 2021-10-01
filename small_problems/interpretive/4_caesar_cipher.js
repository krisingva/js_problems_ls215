
// Caesar Cipher

// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper
// case). Any other character is left as is. The substituted letters are in the
// same letter case as the original letter. If the key value for shifting
// exceeds the length of the alphabet, it wraps around from the beginning.

// P:
// input: string, integer, assume valid inputs
// output: shifted string
// rules:
// - only alpha chars are shifted
// - case remains the same after shifting
// - any other chars than alpha remain the same
// - number for shifting wraps around to beginning of alphabet
// - shift of 0 or any multiple of 26 means that the char remains the same
//   summary: transform each char of string to the char of the alphabet that is
//   shift length away
// E:
// below
// D:
// - array of chars, alphabet array in both cases (or built-in methods)
// A:
// - iterate through array of chars:
//   - if current char is alpha
//     - transform char to shifted char --> helper method
//   - else
//     - keep curr char
// - join chars to string and return

// helper method:
// - find ascii number/ alphabet index of current char
// - add shift number to it
// - return char with shifted number/index


function generateAlphabet(casing) {
  let addedShift = casing === 'upper' ? 65 : 97;
  let alpha = Array.from(Array(26)).map((elem, idx) => idx + addedShift);
  return alpha.map((num) => String.fromCharCode(num));
}

function shiftAlphaChar(char, shift) {
  let upper = generateAlphabet('upper');
  let lower = generateAlphabet('lower');

  if (upper.includes(char)) {
    return upper[(upper.indexOf(char) + shift) % 26];
  } else {
    return lower[(lower.indexOf(char) + shift) % 26];
  }
}

function caesarEncrypt(str, shiftNum) {
  let transformed = str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      return shiftAlphaChar(char, shiftNum);
    } else {
      return char;
    }
  });

  return transformed.join('');
}

// Examples:
console.log(caesarEncrypt('Z', 1) === "A");
console.log(caesarEncrypt('z', 1) ===  "a");
// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)  === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) ===  "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");

// my test cases:
// empty string
console.log(caesarEncrypt('', 3) === "");

// edges of alphabet
console.log(caesarEncrypt('az', 26) ===  "az");
console.log(caesarEncrypt('az', 27) ===  "ba");
console.log(caesarEncrypt('az', 2)  === "cb");
console.log(caesarEncrypt('za', 1)  === "ab");