// Merge Sorted Lists

// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

/*
- set results at empty array
- get the length of each input array
- set stop 1 and 2 for each length
- set a counter 1 and 2 at 0
- loop while both counter 1 and 2 is less than stop 1 and 2
  - if one element at counter is undefined:
    - add the other array element at counter to results
    - add one to corresponding counter
  - else:
  - compare the elements at counter of each array:
  - for the element that is less:
    - add it to results
    - add one to corresponding counter
- return results
c1:0->1->2
c2:0->1->2->3
results = [1,2,5,6,8]
*/

function merge(arr1, arr2) {
  let [results,stop1,stop2,counter1,counter2] = [[],arr1.length,arr2.length,0,0];

  while (true) {
    if (arr1[counter1] === undefined) {
      results.push(arr2[counter2]);
      counter2 += 1;
    } else if (arr2[counter2] === undefined) {
      results.push(arr1[counter1]);
      counter1 += 1;
    } else {
      if (arr1[counter1] < arr2[counter2]) {
        results.push(arr1[counter1]);
        counter1 += 1;
      } else {
        results.push(arr2[counter2]);
        counter2 += 1;
      }
    }

    if (counter1 === stop1 && counter2 === stop2) break;
  }

  return results;
}

// Examples:

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]