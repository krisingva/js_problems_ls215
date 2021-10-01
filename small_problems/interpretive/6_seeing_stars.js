// Seeing Stars

// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).


// P:
// input: odd integer greater than or equal to 7
// output: a display of spaces and '*' in a pattern that forms a star
// rules:
// - number of lines equals the input
// - the middle line is input number of '*'
// - flanking the middle line are lines consisting of 3 '*' centered on the middle of the middle line
// - these lines have (input - 3) / 2 number of spaces in front of the 3 '*'
// - the next two outer lines have (input - 5) / 2 number of spaces in front of the first of three '*'s, each flanked by 1 space
// - the next two outer lines have (input - 7) / 2 number of spaces in front of the first of three '*'s, each flanked by 2 space
// - this pattern continues while (input - x) / 2 is a positive number
// - have to keep track of:
//   - spaces in front of stars, based on (input - x) / 2, where x goes from input down to 3, stepwise decreasing/increasing by 2
//   - spaces between stars, based on (input - x) / 2, where x goes from 3 up input, stepwise decreasing/increasing by 2
// summary:
// - build up a string by calling a build line method that takes the number of spaces in front of stars and number of spaces between stars
// E:
// given
// D:
// strings, arrays of number of spaces
// A:
// - build up two arrays:
//   - array of number of spaces in front of stars for each line starting from top
//   - array of number of spaces between stars for each line starting from top
//   - both arrays have an empty item in the middle index (for middle line of stars)
// - have a results string
// - iterate through arrays:
//   - if current item is empty, build a line of input stars
//   - else, use current items to build a line of frontSpaces, star betweenSpaces, star, betweenSpaces, star
//   - add line to results string with endline
// - return results string

// - helper method: build up space arrays, takes input num as argument
// - have to keep track of:
//   - spaces in front of stars, based on (input - x) / 2, where x goes from input down to 3, stepwise decreasing/increasing by 2
//   - spaces between stars, based on (input - x) / 2, where x goes from 3 up input, stepwise decreasing/increasing by 2

/*eslint-disable max-lines-per-function*/
function spaceNumbers(input) {
  let frontSpaces = [];
  let betweenSpaces = [];
  for (let frontCounter = input, betweenCounter = 3; frontCounter >= 3;) {
    if (frontCounter > 3) {
      frontSpaces.push((input - frontCounter) / 2);
      betweenSpaces.push((input - betweenCounter) / 2);
    } else if (frontCounter === 3) {
      frontSpaces.push('empty');
      betweenSpaces.push('empty');
    }
    frontCounter -= 2;
    betweenCounter += 2;
  }

  for (let frontCounter = 3, betweenCounter = input; frontCounter < input;) {
    frontCounter += 2;
    betweenCounter -= 2;
    frontSpaces.push((input - frontCounter) / 2);
    betweenSpaces.push((input - betweenCounter) / 2);
  }
  return [frontSpaces, betweenSpaces];
}
/*eslint-enable max-lines-per-function*/

function star(num) {
  let results = '';
  let [frontSpaces, betweenSpaces] = spaceNumbers(num);

  frontSpaces.forEach((elem, idx) => {
    let line = '';
    if (elem === 'empty') {
      line = '*'.repeat(num);
    } else {
      line = ' '.repeat(frontSpaces[idx]) +
      '*' + ' '.repeat(betweenSpaces[idx]) +
      '*' + ' '.repeat(betweenSpaces[idx]) +
      '*';
    }
    results += line + '\n';
  });

  return results;
}

console.log(star(21));