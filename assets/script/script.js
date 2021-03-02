// function to clear local storage each new day
$( document ).ready(function() {
    var storedDate = localStorage.getItem('currentDate');
    var currentDate = moment().format("MM-DD-YYYY");
    if (currentDate != storedDate) {
        localStorage.clear();
        display();
    }
});

// setting current date using moment.js
$('#currentDay').text ((moment().format("dddd, MMMM Do YYYY")));

// initialising current time
var currentTime = moment();

// assigning time values to each time block
var timeCounter = moment('9AM', 'hhA'); 
$('section').each(function () {
    $(this).text(timeCounter.format("hhA"));
    timeCounter = timeCounter.add(1, 'hours');
});

// Condition to check if the time is past/present/future
$('.time').each(function() {
   var blockTime = moment($(this).text(), 'hhA');
   if (blockTime.hour() < currentTime.hour()) {
        $(this).next('input').addClass('taskPast');
   }  else if (blockTime.hour() === currentTime.hour()) {
        $(this).next('input').addClass('taskPresent');
   } else {
        $(this).next('input').addClass('taskFuture');
   }

});

// function to save events to local storage
$('.save').on('click', function() {
    var eventKey = $(this).prev('input').prev('section')[0].outerText;
    var eventValue = $(this).prev('input')[0].value;
    var currentDate = moment().format("MM-DD-YYYY");
    localStorage.setItem('currentDate', currentDate);
    localStorage.setItem(eventKey,eventValue);   
});

// function to display saved events from local storage
function display() {
    $('section').each(function () {
    myValue = localStorage.getItem($(this)[0].outerText);
    if (myValue !=null) {
            $(this).next('input')[0].value = myValue;
    } else {
            $(this).next('input')[0].value = "";
    }
    });
}

display();


