/*
- input: word, array of words
- output: array of words selected from input array that are anagrams of input word

algo:
- filter array with anagram function
- anagram function determines the equality of two words after sorting characters
*/
function sortString(word) {
  return word.split('').sort().join();
}

function anagram(word, list) {
  return list.filter(candidate => sortString(word) === sortString(candidate));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]