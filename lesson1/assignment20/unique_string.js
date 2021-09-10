function isAllUnique(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let count = {};

  for (let index = 0; index < string.length; index += 1) {
    let currChar = string[index];
    count[currChar] = count[currChar] || 0;
    count[currChar] += 1;
  }

  return Object.keys(count).every(char => count[char] === 1);
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));
// false
console.log(isAllUnique('123,456,789'));
// false
console.log(isAllUnique('The big apple'));
// false
console.log(isAllUnique('The big apPlE'));
// false
console.log(isAllUnique('!@#$%^&*()'));
// true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));
// true