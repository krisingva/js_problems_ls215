// Write a program that asks for a user's name, then greets the user with that
// name. If the user appends a ! to his name (e.g., 'Bill!'), the computer
// should "yell" its greeting: that is, it should log everything to the console
// in uppercase. You can check whether the name ends with a ! using
// String.prototype.endsWith (ES6 only). You can remove the ! from the user's
// name with String.prototype.slice.

// Examples
// What is your name? Bob
// Hello Bob.                                   // console output

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?             // console output

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name? ");
if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase().substring(0, name.length - 1)}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}.`)
}

// LS:

// let name = prompt('What is your name?');

// if (name.endsWith('!')) {
//   name = name.slice(0, -1);
//   console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
// } else {
//   console.log('Hello ' + name + '.');
// }
