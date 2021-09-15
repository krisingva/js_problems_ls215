// Matching Parentheses

// Write a function that takes a string as an argument and returns true if the
// string contains properly balanced parentheses, false otherwise. Parentheses
// are properly balanced only when '(' and ')' occur in matching pairs, with
// each pair starting with '('.

function isBalanced(str) {
  let chars = str.split('');
  while (chars.join('').match(/(\(|\))/)) {
    let open = chars.indexOf('(');
    let close = chars.indexOf(')');
    if (open === -1 || close === -1 || open > close) {
      return false;
    }
    chars.splice(open, 1);
    chars.splice(close - 1, 1);
  }

  return true;
}

// Using LS logic:

function isBalanced(str) {
  let tally = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      tally += 1;
    }
    if (str[i] === ')') {
      tally -= 1;
    }
    if (tally < 0) {
      return false;
    }
  }
  return (tally === 0);
}

// Examples
console.log(isBalanced('What (is) this?') === true);        // true
console.log(isBalanced('What is) this?') === false);         // false
console.log(isBalanced('What (is this?') === false);         // false
console.log(isBalanced('((What) (is this))?') === true);    // true
console.log(isBalanced('((What)) (is this))?') === false);   // false
console.log(isBalanced('Hey!') === true);                   // true
console.log(isBalanced(')Hey!(') === false);                 // false
console.log(isBalanced('What ((is))) up(') === false);       // false