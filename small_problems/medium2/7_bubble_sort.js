// Bubble Sort

// 'Bubble Sort' is one of the simplest sorting algorithms available. Although
// it is not an efficient algorithm, it is an excellent exercise for student
// developers. In this exercise, you will write a function that sorts an array
// using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array.
// On each pass, the two values of each pair of consecutive elements are
// compared. If the first value is greater than the second, the two elements are
// swapped. This process is repeated until a complete pass is made without
// performing any swaps — at which point the array is completely sorted.

// We can stop iterating the first time we make a pass through the array without
// making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the
// algorithm, as well as a minor optimization technique — see the Bubble Sort
// Wikipedia page.

// Write a function that takes an array as an argument and sorts that array
// using the bubble sort algorithm described above. The sorting should be done
// "in-place" — that is, the function should mutate the array. You may assume
// that the array contains at least two elements.

// My notes:
// - Assume that the input array will always have the same datatype elements,
// either of string or number datatype.
// - outer iteration while swapped is true:
//   - have swapped as false
//     - iterate over array with index:
//       - skip over first element
//       - compare each element to the element before it
//       - if before element is greater:
//         - remove those two elements from array
//         - reverse them
//         - add back to array
//         - swapped is true
//       - else next
//     - end inner iteration
// - end outer iteration (no return needed)

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    arr.forEach((elem, idx) => {
      if (idx !== 0 && (arr[idx - 1] > arr[idx])) {
        let swapping = arr.splice(idx - 1, 2).reverse();
        arr.splice(idx - 1, 0, ...swapping);
        swapped = true;
      }
    });
  } while (swapped);
}

// LS:

// Solution

// function bubbleSort(array) {
//   while (true) {
//     let swapped = false;
//     for (let i = 1; i < array.length; i += 1) {
//       if (array[i - 1] <= array[i]) {
//         continue;
//       }

//       swap(array, i - 1, i);
//       swapped = true;
//     }

//     if (!swapped) {
//       break;
//     }
//   }
// }

// function swap(array, idx1, idx2) {
//   const temp = array[idx1];
//   array[idx1] = array[idx2];
//   array[idx2] = temp;
// }

// Discussion

// The solution uses a pair of loops, with one nested inside the other. The
// outer while loop handles the task of repeating the iterations until the array
// is completely sorted. The loop terminates the first time it iterates through
// all the comparisons without making any swaps, which it keeps track of by
// using the swapped variable.

// The inner for loop handles the task of comparing the values of each pair of
// consecutive elements and swapping them if the first element of the pair is
// greater than the second. The loop uses the swap helper function to swap the
// two values.

// The swap function takes an array and two indices as arguments, and mutates
// the array to swap the values at the corresponding indices. For example, given
// the arguments ([1, 5, 4, 2], 2, 3), the function mutates the array into [1,
// 5, 2, 4]. The function swaps the values at indices 2 and 3, 4 and 2,
// respectively. To swap the values, the function uses a temp variable to hold
// the value of the array element at idx1. The function then sets the array
// element at idx1 to the value of the array element at idx2. Finally, the
// function sets the array element at idx2 to the value stored in temp.

// Examples:

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// My test:
const array4 = [];
bubbleSort(array4);
console.log(array4);    // []