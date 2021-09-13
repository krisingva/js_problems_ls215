// Create a variable named boxNumber and set it to the result of calling
// 356.toString(), and log the result. Before moving on, try to run your
// program.


// let boxNumber = 356.toString();
//                 ^^^^
// SyntaxError: Invalid or unexpected token

// LS:

// You should receive an error. If you can call toString on a variable that
// contains a number, why can't you call it directly on a number? JavaScript
// interprets the period immediately after a number as a decimal point, not a
// method separator.

// One way to avoid this is to use two periods instead of one. Replace
// 356.toString() with 356..toString(), and try running it again.

// Some "linter" programs reject this usage, and instead suggest that you use
// parentheses. Update your program again: eliminate the second period, and
// place 356 in parentheses, then run the program again.

let boxNumber = (356).toString();
console.log(boxNumber);
// 365