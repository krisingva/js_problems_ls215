//     Input

//     plaintext: any sequence of characters.
//     keyword: any sequence of characters. Case does not matter.
// Output
//     ciphertext: a sequence of characters. It has the same number of
//     characters as the plaintext. It is the "encrypted" version of the
//     plaintext.
//     Requirements: let's go through the problem and analyze the requirements
//     for processing the input to get the output.
//     An important piece of information from the problem description is that
//     the Vigenere Cipher is a series of Caesar Ciphers. This means we can use
//     our previous knowledge of the Caesar Cipher as a baseline, and then
//     identify and process any differences to make adjustments as needed.
//         Each character of the keyword is a "shift" value
//     Referencing the Caesar Cipher problem, we can think of the shift value as
//     the key the cipher uses to encrypt a plaintext letter.
//     In contrast to having only one key value, the Vigenere Cipher uses
//     multiple key values.
//     Given the problem description and the example, it's not apparent what
//     happens when non-alphabetic characters are included in the keyword. For
//     now, we'll assume that it will contain only letters. The statement that
//     "case does not matter" supports this assumption, because the word,
//     "case", is associated with letters.
//     Sequentially apply the shift values to each alphabetic character, using a
//     Caesar Cipher.
//     Looking at the example above, we can see that each shift value is used
//     one at a time, repetitively, for all the alphabetic characters in the
//     ciphertext.
//     Similar to how the alphabetic characters wrap around when there is a need
//     to exceed the letter 'z'/'Z', the shift value also wraps around for as
//     long as there are plaintext characters to encrypt.

// To make the requirements more concrete, let's go over some more test cases.
// You can use the tabula recta to assist you in working through these test
// cases by hand.

// plaintext: Pineapples don't go on pizzas!
// keyword: A

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext: P i n e a p p l e s d o n t g o o n p i z z a s
// shift:     A A A A A A A A A A A A A A A A A A A A A A A A
// ciphertext: P i n e a p p l e s d o n t g o o n p i z z a s

// result: Pineapples don't go on pizzas!

// plaintext: Pineapples don't go on pizzas!
// keyword: Aa

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext: Pi ne ap pl es do nt go on pi zz as
// shift:     Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa
// ciphertext: Pi ne ap pl es do nt go on pi zz as

// result: Pineapples don't go on pizzas!

// plaintext: Pineapples don't go on pizzas!
// keyword: cab

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext: Pin eap ple sdo ntg oon piz zas
// shift:     cab cab cab cab cab cab cab cab
// ciphertext: Rio gaq rlf udp pth qoo ria bat

// result: Riogaqrlfu dpp't hq oo riabat!

// plaintext: Dog
// keyword: Rabbit

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext: Dog
// shift:     Rab
// ciphertext: Uoh

// result: Uoh

// Our data structure and algorithm are very similar to what we used for the
// Caesar Cipher problem. The main difference in this algorithm is the addition
// of steps #2, #3, and the first and last bullets of step #4.1.

// Initialize a ciphertext variable to an empty string.
// Initialize a keyPos variable to 0.
// Capitalize all the letters of the keyword input.
// Iterate over each character of the plaintext input.
// If the character is a letter in the alphabet, check if it's upper or lower
// case, "encrypt" it accordingly, and then append it to ciphertext.
// Locate the current keyword letter in the alphabet and store its position
// value in key.
// Locate the current plaintext letter in the alphabet to get its position.
//         Step key times from this position to the right.
// If a step goes beyond the last letter in the alphabet, add another "alphabet
// link".
//         After the last step, append the new letter to ciphertext.
// Add 1 to keyPos and divide the result by the length of the keyword to get the
// remainder. Set the value of keyPos to this remainder.
//     If the character is not in the alphabet, append it as-is to ciphertext.
// After the Vigenere encryption is complete, return the ciphertext.

// Solution

function vigenereEncrypt(plaintext, keyword) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ciphertext = '';
  let keyPos = 0;
  keyword = keyword.toUpperCase();
  let key;

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      key = upperAlphabet.indexOf(keyword[keyPos]);
      ciphertext += encrypt(char, key, upperAlphabet);
      keyPos = (keyPos + 1) % keyword.length;
    } else if (char >= 'a' && char <= 'z') {
      key = upperAlphabet.indexOf(keyword[keyPos]);
      ciphertext += encrypt(char, key, lowerAlphabet);
      keyPos = (keyPos + 1) % keyword.length;
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter;
}

// Discussion

// For this exercise, the most critical step of the PEDAC process is
// "Understanding the Problem". We took advantage of our previous analysis of
// the Caesar Cipher problem by applying what we learned to this problem. This
// made it much easier to break the problem down and process the requirements.
// With more practice—even if it weren't explicitly mentioned that the Vigenere
// Cipher is a series of Caesar Ciphers—you'll be able to detect how problems
// overlap, giving you the ability to reuse and build on similar mental models
// and algorithms you have created in the past.