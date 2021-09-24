// Rotation Part 1

// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.

//     If the input is not an array, return undefined. If the input is an empty
//     array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

// My notes:
// input: array
// output; a new array with the first element of the input array at the end
// rules:
// - if input is not an array, return undefined
// - if input is empty, return empty
// - if input has one element, return array with one element
// - elements can be any data type
// algo:
// - return undefined if input is not array
// - return a copy of the array if array length is less than 2
// - create a copy of input array starting at index 1
// - add first element of input array to end of copy
// - return copy


function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 2) {
    return arr.slice();
  } else {
    let rotated = arr.slice(1);
    rotated.push(arr[0]);
    return rotated;
  }
}

// LS:

// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return;
//   }

//   if (array.length === 0) {
//     return [];
//   }

//   return array.slice(1).concat(array[0]);
// }

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]