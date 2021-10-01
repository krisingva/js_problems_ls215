// P:
//     Input
//     n: an odd integer that indicates the size of the grid that the "8-pointed
//     star" will occupy. Its smallest value is 7.
// Output
//     "8-pointed star": going by the example, the function creates the "star"
//     by logging n rows of asterisks (*).
//         Each row is of length n.
//         Each row has three asterisks.
//     The rows have varying amounts of spaces between the three asterisks and
//     varying amounts of padding on the left and right sides.
//     The middle row is an exception—it logs out n number of asterisks and no
//     spaces.
// Requirements
//     The most important part of this problem is determining the pattern for
//     each row of asterisks (except the middle row). We can figure out the
//     pattern by walking through each row of the first example, where n is 7.
//     To better visualize the star, we'll use underscores (_) to represent the
//     spaces and we'll separate the asterisks (*) and underscores (_) with
//     spaces.
//     Row 1 (* _ _ * _ _ *): there are no spaces of padding on either the left
//     or right side. There are two spaces between each pair of asterisks.
//     Row 2 (_ * _ * _ * _): there is one space of padding on both the left and
//     right sides. There is one space between each pair of asterisks.
//     Row 3 (_ _ * * * _ _): there are two spaces of padding on both the left
//     and right sides. There are no spaces between each pair of asterisks.
//     Row 4 (* * * * * * *): this row is an exception—there are n asterisks and
//     no spaces.
//     Row 5 (_ _ * * * _ _): there are two spaces of padding on both the left
//     and right sides. There are no spaces between each pair of asterisks.
//     Row 6 (_ * _ * _ * _): there is one space of padding on both the left and
//     right sides. There is one space between each pair of asterisks.
//     Row 7 (* _ _ * _ _ *): there are no spaces of padding on either the left
//     or right side. There are two spaces between each pair of asterisks.
//     After going through each row step-by-step, we can make the following
//     observations:
//     There is an inverse relationship between the padding and the spaces
//     between the asterisks.
//     As we approach the middle row, the number of spaces of padding increases
//     and the number of spaces between asterisks decreases.
//     The value of the number of spaces between each pair of asterisks starts
//     at (n - 3) / 2 for the first row, then decrements by 1 for each row—until
//     the row before the middle, where its value is 0. Inversely, the value of
//     the number of spaces of padding starts at 0, and increments by 1 for each
//     row—until the row before the middle, where its value is (n - 3) / 2.
//     After the middle row, the above pattern is mirrored—i.e., the pattern
//     repeats, but in the opposite order.
// Mental Model
//     One way we can think of building a row is by joining three asterisks
//     together with the correct number of spaces between each pair. After the
//     joining, we can pad the left and right sides accordingly.
//     Next, we'll need to keep track of the current row that we're building, so
//     that we can apply the corresponding row-pattern based on the observations
//     we made above.
//     First row up to the row before the middle: join three asterisks together,
//     starting with (n - 3) / 2 spaces between each pair, up to 0 spaces. Pad
//     the left and right sides, starting with 0 spaces up to (n - 3) / 2
//     spaces.
//         Middle row: build with n asterisks and no spaces.
//     Row after the middle up to the last row: join three asterisks together,
//     starting with 0 spaces between each pair, up to (n - 3) / 2 spaces. Pad
//     the left and right sides, starting with (n - 3) / 2 spaces up to 0
//     spaces.
//     We can also simplify the padding of spaces to just the left side, since
//     the spaces on the right won't be visible when displayed on the
//     screen/console.

// For our data structure—considering our mental model of joining three
// asterisks together—we'll use an array and leverage the Array.prototype.join
// method.

// Now let's build an algorithm that processes our data structure to produce the
// expected output.

// Compute the value of the index of the middle row—the integer division of n /
// 2—and store the result in a variable, middleIdx.
// Iterate starting from the index of the first row (0) up to but not including
// the middleIdx. For each row:
//     Initialize an array of three asterisks.
// Join the asterisks in the array together with ((n - 3) / 2) - current
// iteration number of spaces.
//     Pad the left side with current iteration number of spaces.
//     Log the row.
// Log a row of n number of asterisks and no spaces.
// Iterate starting from the middleIdx + 1 up to the index of the last row (n -
//     1). For each row:
//     Initialize an array of three asterisks.
//     Join the asterisks in the array together with current iteration number of
//     spaces.
//     Pad the left side with ((n - 3) / 2) - current iteration number of
//     spaces.
//     Log the row.

// Solution

function repeat(char, times) {
  let repeated = '';

  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

function buildStarRow(spacesBetween, spacesPadding) {
  const asterisks = ['*', '*', '*'];
  const starRow = asterisks.join(repeat(' ', spacesBetween));
  return repeat(' ', spacesPadding) + starRow;
}

function star(n) {
  const middleIdx = Math.floor(n / 2);

  for (let i = 0; i < middleIdx; i += 1) {
    let spacesBetween = ((n - 3) / 2) - i;
    let spacesPadding = i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }

  console.log(repeat('*', n));

  for (let i = 0; i < middleIdx; i += 1) {
    let spacesBetween = i;
    let spacesPadding = ((n - 3) / 2) - i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
}

// Discussion

// You may have noticed that in the second loop of the star function, we deviate
// a little from our algorithm—we don't start the iteration from middleIdx + 1
// and don't end with the index of the last row (n - 1). Even though we don't
// follow our algorithm literally, we're still following it using a mathematical
// approach. To understand how this works, let's look at steps #4.2 and #4.3 of
// our algorithm (from the second iteration):

    // 4.2: Join the asterisks in the array together with current iteration number of spaces.

    // 4.3: Pad the left side with ((n - 3) / 2) - current iteration number of spaces.

// The important part of these two steps is the value of the current iteration
// number. In the second for loop of our solution, this value is the same as the
// value of i, but not the same as the value of the index of the current row. If
// our solution was a literal translation of our algorithm, i wouldn't have the
// same value as the current iteration number—it would have the value of the
// index of the current row being iterated over. In the case of n = 7, these
// index values (and i values) would be 4, 5, and 6, with each value
// corresponding to the iteration numbers 0, 1, and 2 respectively.

// For example, to implement our algorithm more literally, we would offset the
// values of i in the second for loop so that they would be the same as the
// index values of the rows, such as shown below:

// for (let i = middleIdx + 1; i < n; i += 1) {
//   let spacesBetween = i - (middleIdx + 1);
//   let spacesPadding = ((n - 3) / 2) - i + (middleIdx + 1);
//   console.log(buildStarRow(spacesBetween, spacesPadding));
// }

// Instead, we took a more mathematical approach to implement our solution. We
// factored out the computation of the offset (middleIdx + 1), resulting in the
// two for loops iterating over the same i values—but not the same row index
// values.

// Further Exploration

// The current solution implementation is faithful to our algorithm. Notice,
// however, that there is similar-looking code in our for loops. Try to refactor
// the current implementation to make the code less repetitive.

// You can also explore alternate mental models for building the star. Write out
// and share your mental model and corresponding solution implementation below.