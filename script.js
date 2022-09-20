// current time function at top of screen
let currentTime = moment();
let currentDay = currentTime.format('dddd, MMMM Do');
$('#currentDay').text(currentDay);
let currentHour = moment().format("HH");

//  save button 
$('saveBtn').click(save)
function save(event) {
    event.preventDefault();

}

// clear button
$('clearBtn').click(clearBtn)
function clearBtn() {
    localStorage.clear();
    location.reload();
};
// current hour function
console.log('x')
$('timeBlock').each(function () {
    let timeTime = $(this).attr('id');
    console.log(timeTime);
    console.log('time');
    if (currentHour === timeTime) {
        $(this).addClass("now");
    } else if (currentHour < timeTime) {
        $(this).removeClass("now");
        $(this).addClass("green");
    } else if (currentHour > timeTime) {
        $(this).removeClass("green");
        $(this).addClass("gray");
    }
});

// local storage getter
$("#9 .text").val(localStorage.getItem("9"));
$("#10 .text").val(localStorage.getItem("10"));
$("#11 .text").val(localStorage.getItem("11"));
$("#12 .text").val(localStorage.getItem("12"));
$("#1 .text").val(localStorage.getItem("1"));
$("#2 .text").val(localStorage.getItem("2"));
$("#3 .text").val(localStorage.getItem("3"));
$("#4 .text").val(localStorage.getItem("4"));
$("#5 .text").val(localStorage.getItem("5"));