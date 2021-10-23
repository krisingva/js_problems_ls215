// 1000 Lights

// You have a bank of switches before you, numbered from 1 to n. Every switch is
// connected to exactly one light that is initially off. You walk down the row
// of switches and toggle every one of them. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches 2,
// 4, 6, and so on. On the third pass, you go back to the beginning again, this
// time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.


// input: integer, maxIteration
// output: array of int
// rules:
// - iterateing through 1 to maxIteration
//   - if 1, flip all switches
//   - if 2, flip all switches that can be evenly divided by 2
//   - if 3, flip all switches that can be evenly divided by 3
//   - and so on
// - switches have numbers 1 to maxIteration
// - switches off before iteration starts
// - return an array of switches that are on after iteration
// data str:
// - numbers
// - array
// - obj
// algo:

// [1,2,3,4,5]: switchNums
// [true,false,false,true,false]: switches
// - iterate over switchNums
//   - for currNum: (1)
//     - filter switchNums to keep values that are divisible by currNum without remainder
//     ([1,2,3,4,5])
//     - iterate through filtered array:
//       - for current elem:
//         - access switches element at index of current elem - 1 (0)
//         - switch it to opposite boolean
//     - end iteration
// - end outer iteration
// - filter switchNums with index:
//   - if elem of currInd of switches is true, keep elem
// - return filtered switch nums


// Examples:

function lightsOn(boardMaxNum) {
  let switches = new Array(boardMaxNum).fill(false);
  let switchNums = [];
  for (let num = 1; num <= boardMaxNum; num += 1) {
    switchNums.push(num);
  }
  switchNums.forEach(currNum => {
    let filt = switchNums.filter(num =>  num % currNum === 0);
    filt.forEach(filtNum => switches[filtNum - 1] = !switches[filtNum - 1]);
  });
  let filteredSwitches = switchNums.filter((_, idx) => switches[idx]);

  return filteredSwitches;
}

// algo using an object:
// - create switches object with keys 1 to max num and with all values as false
// {1:false,2:false,3:false,4:false,5:false}
// - get keys of obj (switchNums)
// - iterate through switchnums:
//   - for currNum (1):
//     - create filteredSwitches from filtering switchNums that are divisible by currNum
//     - iterate through filteredSwitches
//       - for each num, flip the value of the corresponding key (string) in switches object
//     - end inner iteration
// - end outer iteration
// - have results as empty array
// - iterate through switches
//   - if current value is true, add key to results
// - return results

// Solution using an object:

// function lightsOn(boardMaxNum) {
//   let switches = {};
//   for (let num = 1; num <= boardMaxNum; num += 1) {
//     switches[num] = false;
//   }
//   let switchNums = Object.keys(switches);
//   switchNums.forEach(currNum => {
//     let filteredSwitches = switchNums.filter(num => num % currNum === 0);
//     filteredSwitches.forEach(num => switches[String(num)] = !switches[String(num)]);
//   });
//   let results = [];
//   for (let prop in switches) {
//     if (switches[prop]) {
//       results.push(prop);
//     }
//   }
//   return results;
// }

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]