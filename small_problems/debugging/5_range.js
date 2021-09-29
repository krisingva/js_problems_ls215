
// Range

// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
// only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

function range(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(oneEndedRange(5));

// answer: The second function definition uses the same name as the first one
// and due to hoisting, the variable range will be reassigned to the second
// function definition and that is the only function that is invoked with the
// identifier range. Because the range definition returns an invocation to
// itself, this will create an endless loop of range invocation until max call
// stack is reached.

// to fix: change the name of the second function

function oneEndedRange(end) {
  return range(0, end);
}

// LS:

// Solution

// function range(start, end) {
//   if (arguments.length === 1) {
//     end = start;
//     start = 0;
//   }

//   const range = [];
//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));


// Discussion

// In our original code, we have defined two range functions. One function
// signature expects two arguments, and one expects only a single argument. But
// JavaScript does not support function overloading (the ability to utilize
// multiple functions of the same name with different signatures). So with the
// second definition of range, the first one is overridden. That is, it is
// always range(end) on lines 11-13 that is executed, no matter how many
// arguments you provide. So when we call range(10, 20) on line 18, the
// parameter end is assigned to 10, and the second argument, 20, is ignored. The
// function then executes its body, line 12, calling itself again, this time
// with two arguments, 0 and 10. Since our program only recognizes the range
// function on lines 11-13, the function will continue to call itself repeatedly
// until the stack size is exceeded.

// Further exploration

// There are two reasons why the following is not a working solution. Can you
// spot them?

// function range(start, end) {
//   if (!end) {
//     start = 0;
//     end = start;
//   }

//   // ...
// }

// 1. if you assign start to 0 first, then end will also be assigned to 0. Have
//    to flip those two lines to make it work.
// 2. if the second argument is a any falsey value (including 0), the if
//    statement will be executed.