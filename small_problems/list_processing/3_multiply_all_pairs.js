// Multiply All Pairs

// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Using double iteration with forEach to build a new array, then sort:
function multiplyAllPairs(arr1, arr2) {
  let sorted = [];

  arr1.forEach(num => {
    arr2.forEach(secondNum => {
      sorted.push(num * secondNum);
    });
  });

  return sorted.sort((num1, num2) => {
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Using reduce to build the new array:
// function multiplyAllPairs2(arr1, arr2) {
//   return arr2.reduce((acc, val, idx, arr1) => acc.concat([val * arr1[idx]]), []);
// }

// Using map and flat:
function sortNumbers(arr) {
  return arr.sort((num1, num2) => {
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      return 0;
    }
  });
}

function multiplyAllPairs2(arr1, arr2) {
  return sortNumbers(arr2.flatMap(num => [num * arr1[0], num * arr1[1]]));
}

// Example:

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// // [2, 4, 4, 6, 8, 8, 12, 16]

console.log(multiplyAllPairs2([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]

// LS:

// function multiplyAllPairs(array1, array2) {
//   const result = [];

//   array1.forEach(number1 => {
//     array2.forEach(number2 => {
//       result.push(number1 * number2);
//     });
//   });

//   return result.sort((a, b) => a - b);
// }