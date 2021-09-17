// Mail Count

// The objective of this practice problem is to build a function that parses a
// string of email data. The function takes an argument that contains the data,
// parses it, then produces two basic statistics about the email:

//     The number of email messages found in the string
//     The date range of the email messages

// The email messages string has the following characteristics:

//     The string contains multiple email messages separated by the delimiter
//     string ##||##.

//     Each email message has five parts. The delimiter string #/# separates the
//     parts.

//     The five parts are:
//         Sender
//         Subject
//         Date
//         Recipient
//         Body

//     All five parts occur in the sequence shown above.

function mailCount(emailData) {
  let emails = emailData.split('##||##');
  console.log(`Count Of Email: ${emails.length}`);
  let dates = emails
    .map(email => email.split('#/#'))
    // array of subarrays containing the 5 email parts
    .map(parts => parts[2].replace('\nDate: ', ''))
    // Each subarray transformed into a date string ('07-27-2016')
    .map(date => date.replace(/(\d{2})-(\d{2})-(\d{4})/, '$3-$1-$2').split('-'))
    // Date strings transformed to subarrays with year, month, day elements
    .map(date => date.map(dateparts => parseInt(dateparts, 10)))
    // Subarray date strings transformed into numbers
    .map(dateparts => new Date(dateparts[0], dateparts[1] - 1, dateparts[2]))
    // Date subarrays tranformed into Date objects (month is 0-indexed based)
    .sort((date1, date2) => date1 - date2)
    // Sort Date objects
    .map(date => date.toDateString());
    // Transform Date objects to strings representing the date

  console.log(`Date range:  ${dates[0]} - ${dates[dates.length - 1]}`);
}

mailCount(emailData);

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

// LS:

// function mailCount(emailData) {
//   let emails = emailData.split('##||##');
//   let count = emails.length;
//   let emailDates = emails.map(email => email.split('#/#')[2]);

//   console.log('Count of Email: ' + count);
//   console.log('Date Range: ' + displayableDateRange(emailDates));
// }

// function displayableDateRange(dates) {
//   let dateObjects = getDateObjects(dates);
//   dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
//   return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
// }

// function getDateObjects(dates) {
//   return dates.map(date => {
//     let dateElements = date.split(' ')[1].split('-');
//     let month = parseInt(dateElements[0], 10) - 1;
//     let day = parseInt(dateElements[1], 10);
//     let year = parseInt(dateElements[2], 10);
//     return new Date(year, month, day);
//   });
// }