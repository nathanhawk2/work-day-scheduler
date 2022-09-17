// current time function at top of screen
var currentTime = moment();
var currentDay = currentTime.format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

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

