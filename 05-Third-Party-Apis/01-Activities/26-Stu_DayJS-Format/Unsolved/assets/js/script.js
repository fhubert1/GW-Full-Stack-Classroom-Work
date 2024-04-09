// Use Day.js to format the date and assign to the declared variable.
let today = dayjs();


// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var reformatedDate = dayjs('1980-05-25').format('MMM D, YYYY');
$('#1a').text(reformatedDate);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
$("#2a").text(dayjs('2027-01-01').day());


// TODO: 3. What is the current time in the format: hours:minutes:seconds

// TODO: 4. What is the current Unix timestamp?

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

