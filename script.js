var today = moment();
var currentDay = today.format('dddd, MMMM Do');
$('#currentDay').text(currentDay);
console.log(currentDay);