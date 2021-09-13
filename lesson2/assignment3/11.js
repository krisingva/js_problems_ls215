// Create variables named fact1 and fact2 and set them equal to 'JavaScript is
// fun' and 'Kids like it too', respectively. Combine the values of the two
// variables with the string ' and ' between them, and store the result in a
// variable named compoundSentence. Make sure the first letter of fact2 shows up
// as lowercase in compoundSentence. Log the value of compoundSentence.

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.substring(1);
console.log(compoundSentence);
// JavaScript is fun and kids like it too

// LS:

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
// console.log(compoundSentence);
// // 'JavaScript is fun and kids like it too'