// current time function at top of screen
var currentTime = moment();
var currentDay = currentTime.format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

//  save button 
var saveBtn = document.querySelector('saveBtn');
saveBtn.addEventListener('click', save);

function save() {
    localStorage.clear();
    location.reload();
}

// clear button
var clear = document.querySelector('clearBtn');
clear.addEventListener('click', clearBtn)
function clearBtn() { 
    localStorage.clear();
    location.reload();
};