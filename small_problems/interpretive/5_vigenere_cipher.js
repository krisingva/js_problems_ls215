// Vigenere Cipher

// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of a
// keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the letter
// 'd' corresponds to a shift value of 3. In other words, the shift value used
// for a letter is equal to its index value in the alphabet. This means that the
// letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters
// 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character
// isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only
// encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword
// doesn't matter—in other words, the resulting encryption won't change
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula
// recta:
// https://en.wikipedia.org/wiki/Tabula_recta
// Each row of the table corresponds to a Caesar Cipher encryption using the
// columns' character letter as a shift value.


// P:
// input:
// - plaintext: a string, any char
// - keyword: a string, each char represents the shift that the plaintext chars
//   should undergo
// output:
// - ciphertext: plaintext encrypted using keyword and Caesar Cipher encryption
// rules:
// - the case of keyword doesn't matter
// - keyword char index in alphabet represents the shift for C.C. encryption
// - keyword char are iterated through for each plaintext char
// - once all the keyword chars have been iterated through, start at the
//   beginning of the keyword again
// - only alphachars should be shifted
//   summary: for each plaintext char, get the correct shift from keyword and
//   apply C.C. encryption
// E:

// console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat") ===
// "Bmnxmtpeqw dhz'x gh ar pbldal!");
// D:
// string, array
// A:
// - create a repeat of keyword to cover the length of the plaintext
//   - repeats = plaintext length / keyword length
// - map the keyword chars to index of alphabet char
// - transform plaintext chars:
//   - if current char is alpha:
//     - get the shift number from the first element of keyword numbers array
//     - remove the first element of keyword numbers array
//     - apply C.C. encryption on char with shift number
//     - return transformed char
//   - else:
//     - return char
// - join chars to string and return

function shiftAlphaChar(char, shift) {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let lower = 'abcdefghijklmnopqrstuvwxyz'.split('');

  if (upper.includes(char)) {
    return upper[(upper.indexOf(char) + shift) % 26];
  } else {
    return lower[(lower.indexOf(char) + shift) % 26];
  }
}

function keywordToShiftNums(keyword, plaintext) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let repeatedKeyword = keyword
    .toLowerCase()
    .repeat(Math.ceil(plaintext.length / keyword.length));
  return repeatedKeyword
    .split('')
    .map(char => lowerAlphabet.indexOf(char));
}

function vigenereCipher(plaintext, keyword) {
  let keywordIndexes = keywordToShiftNums(keyword, plaintext);

  let transformed = plaintext
    .split('')
    .map(char => {
      if (/[a-z]/i.test(char)) {
        let shiftNum = keywordIndexes.shift();
        return shiftAlphaChar(char, shiftNum);
      } else {
        return char;
      }
    });

  return transformed.join('');
}

// E:

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat") === "Bmnxmtpeqw dhz'x gh ar pbldal!");