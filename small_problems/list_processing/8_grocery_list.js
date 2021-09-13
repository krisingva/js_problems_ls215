// Grocery List

// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains a
// fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
// we return an array that contains 3 apples, 1 orange, and 2 bananas.

// notes:
// - convert array to count Object
// - iterate through properties of Object
// - assign stopidx to curr count val
// - have a while loop that adds count key to new array until reach stopidx
// - return new array

function buyFruit(arr) {
  let newArr = [];
  let count = Object.fromEntries(arr);
  for (let prop in count) {
    let iteration = 0;
    while (iteration < count[prop]) {
      newArr.push(prop);
      iteration += 1;
    }
  }
  return newArr;
}

// notes:
// - map each subarray to an array of repeated strings using helper function
// - flatten array

function repeatStr(arr) {
  let newArr = [];
  for (let i = 0; i < arr[1]; i += 1) {
    newArr.push(arr[0]);
  }

  return newArr;
}

function buyFruit2(arr) {
  return arr.map(subarr => repeatStr(subarr)).flat();
}



// Example:

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

console.log(buyFruit2([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// LS:

// function buyFruit(fruitsList) {
//   return fruitsList.map(fruit => repeat(fruit))
//                    .reduce((groceryList, fruit) => groceryList.concat(fruit))
//                    ;
// }

// function repeat(fruit) {
//   const result = [];

//   for (let i = 0; i < fruit[1]; i += 1) {
//     result.push(fruit[0]);
//   }

//   return result;
// }

// // Example:

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Discussion

// To get the expected result, the solution makes use of two list processing
// strategies. The first is to transform the array elements into the expanded
// grocery list with each item repeated based on the quantity value (second
// element of each subarray). The second strategy is to flatten the array of
// arrays using a folding strategy, which flattens the array by consecutively
// concatenating each subarray together. The solution also makes use of a repeat
// helper function to facilitate the transformation of the original array's
// elements.

// Student solution:

function buyFruit3(array) {
  return array.reduce((arr, subArr) => {
    for (let i = subArr[1]; i > 0; i -=1) {
      arr.push(subArr[0])
    }

    return arr;
  }, [])
}


console.log(buyFruit3([['apple', 3], ['orange', 1], ['banana', 2]]));

function buyFruit4(arr) {

  return arr.flatMap(ele => (ele[0] + ' ').repeat(ele[1]).match(/[a-z]+/gi));
}

console.log(buyFruit4([['apple', 3], ['orange', 1], ['banana', 2]]));