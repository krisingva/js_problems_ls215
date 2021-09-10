function myReduce(array, func, initial) {
  let startIndex = 0;
  if (initial === undefined) {
    initial = array[0];
    startIndex = 1;
  }

  for (;startIndex < array.length; startIndex += 1) {
    let currentElement = array[startIndex];
    initial = func(initial, currentElement);
  }

  return initial;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce([5], sum, 1));            // 6