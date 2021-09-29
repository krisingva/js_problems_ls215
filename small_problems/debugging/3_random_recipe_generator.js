
// Random Recipe Generator

// One bored and hungry evening we decided to randomly generate recipes. We
// can't wait to see the first suggestions, but JavaScript raises a TypeError,
// telling us that dishName.join is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  const elements = array.slice();
  const randomElements = [];

  while (n > 0 && elements.length > 0) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

const ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

const spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

const extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

const adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
const firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
const secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

// const dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// const dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// console.log(`How about: ${dishName.join(' ')}`);
// console.log(`You need: ${dish.join(', ')}`);

// answer: the dishName and dish variables are set to arrays with the plus
// operator between them. This is meant to concat the arrays together into one
// big array but + doesn't work to concat arrays, instead it will concat them as
// strings. Therefore we can't use the join method on the resulting string.

// fix: use the concat method instead of +


const dishName = random(adjective).concat(random(firstNoun)).concat(random(secondNoun));
const dish = random(ingredients, 3).concat(random(spices, 2)).concat(random(extras, 1));

console.log(`How about: ${dishName.join(' ')}`);
console.log(`You need: ${dish.join(', ')}`);

// LS:

// Discussion

// On lines 41 and 42 we tried to concatenate arrays with +, which does not work
// as we might expect in JavaScript. The binary + operator is either an
// arithmetic operator adding two numerical values, or a string operator
// concatenating two strings. When we apply it to two arrays, JavaScript will
// convert the arrays into strings, and then concatenate these strings. So dish
// and dishName are strings. This is why invoking join on them raises an error:
// join is not a method defined for strings.

// To concatenate arrays, we can use the Array.prototype.concat() method, as
// seen in our solution code.