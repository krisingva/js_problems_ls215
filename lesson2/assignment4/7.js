// Challenge: write a method that changes dates in the format 2016-06-17 or
// 2016/06/17 to the format 17.06.2016. You must use a regular expression and
// should use methods described in this section.

function formatDate(date) {
  if (date.match(/-\d{2}-/) || date.match(/\/\d{2}\//)) {
    return date.replace(/(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})/, '$5.$3.$1');
  } else {
    return date;
  }
}

// refactored:
// function formatDate(date) {
//   return date.replace(/(\d{4})(-|\/)(\d{2})\2(\d{2})/, '$4.$3.$1');
// }

// LS:

// let formatDate = function (originalDate) {
//   return originalDate.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
//                      .replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
// };

// Alternate solution:

// let formatDate = function (originalDate) {
//   let dateRegex = /^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/;
//   return originalDate.replace(dateRegex, '$4.$3.$1');
// };

// Example:
console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)