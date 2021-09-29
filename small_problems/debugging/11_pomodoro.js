// Pomodoro

// The following code demonstrates the Pomodoro technique. Although it seems to
// work in principle, it never prints the minute count from line 11. What is
// wrong?

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  // var minutes = 0;
  minutes = 0;
  pomodoro();
}

pomodoro();

// On line 40 we are initializing a minutes variable that shadows the global
// minutes variable, the declaration will be hoisted to the top of the function
// and the variable set to undefined until the execution reaches the assignment
// on line 40. On line 15, the condition for the while loop becomes undefined <
// 25 which will return false and the minutes will not be logged on line 17
// because the while loop is not executed.

// Fix: Make line 40 become a reassignment of the global minutes variable by
// removing the var keyword.