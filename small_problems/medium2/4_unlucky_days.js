// Unlucky Days

// Write a function that takes a year as an argument and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater than
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain in use for the
// foreseeable future.

// My notes:
// use new Date(year, monthIndex, day) to set a date object
// year is input, day is 13, monthIndex is 0 - 11
// use getDay(); returns 5 for Friday
// have count set to 0
// iterate through 0 to 11
// create a new date object for each iteration
// if the date object is a Friday, add 1 to count
// return count

function fridayThe13ths(year) {
  let count = 0;
  for (let monthIdx = 0; monthIdx <= 11; monthIdx += 1) {
    let day = new Date(year, monthIdx, 13);
    if (day.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

// LS:

// Solution

// function fridayThe13ths(year) {
//   const thirteenths = [];

//   for (let i = 0; i < 12; i += 1) {
//     thirteenths.push(new Date(year, i, 13));
//   }

//   return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
// }

// Discussion

// The solution leverages the Date constructor and a for loop to build an array
// of Date objects that fall on the 13th of every month. It then uses
// Array.prototype.reduce to get the count of the 13ths that fall on a Friday.

// Note that the Date.prototype.getDay method returns an integer between 0
// (Sunday) and 6 (Saturday). Also note that when passing a month to the Date
// constructor, the value should be an integer between 0 (January) and 11
// (December); the range of the day argument, however, starts at 1 (first day of
// the month) instead of 0 (last day of the previous month).

// Further Exploration

// Given the solution provided, do you think using the Array.prototype.reduce
// method was a good choice? Why or why not?

// Examples:

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2