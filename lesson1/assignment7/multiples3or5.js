function myFilter(array, func) {
  let filtered = [];
  for (let index = 0; index < array.length; index += 1) {
    if (func(array[index], index, array)) {
      filtered.push(array[index]);
    }
  }

  return filtered;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));
// [ 3, 5, 18, 15 ]