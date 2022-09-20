// current time function at top of screen
let currentTime = moment();
let currentDay = currentTime.format('dddd, MMMM Do');
$('#currentDay').text(currentDay);
let currentHour = moment().format("HH");

//  save button 
$('.saveBtn').click(function (event) {
    event.preventDefault();
    let value = $(this).siblings('.timeBlock').val();
    console.log(value)
    let time = $(this).parent().attr('id');
    console.log(time)
    localStorage.setItem(time, value);
  });

// clear button
$('.clearBtn').click(clearBtn)
function clearBtn() {
    localStorage.clear();
    location.reload();
};
// current hour function
$('.timeBlock').each(function () {
    let timeTime = $(this).attr('id');
    if (currentHour === timeTime) {
        $(this).addClass("now");
    } else if (currentHour < timeTime) {
        $(this).removeClass("now");
        $(this).addClass("green");
    } else if (currentHour > timeTime) {
        $(this).removeClass("green");
        $(this).addClass("gray");
    }
})

// local storage getter
$('#09 .timeBlock').val(localStorage.getItem('09'));
$('#10 .timeBlock').val(localStorage.getItem('10'));
$('#11 .timeBlock').val(localStorage.getItem('11'));
$('#12 .timeBlock').val(localStorage.getItem('12'));
$('#13 .timeBlock').val(localStorage.getItem('13'));
$('#14 .timeBlock').val(localStorage.getItem('14'));
$('#15 .timeBlock').val(localStorage.getItem('15'));
$('#16 .timeBlock').val(localStorage.getItem('16'));
$('#17 .timeBlock').val(localStorage.getItem('17'));