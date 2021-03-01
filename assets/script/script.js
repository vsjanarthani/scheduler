// setting current date using moment.js
$('#currentDay').text ((moment().format("dddd, MMMM Do YYYY")));

// checking if the current time is present
var currentTime = moment().format("hhA");
console.log(currentTime);
var $timeEl = $('.time').text();
console.log($timeEl);
// if (currentTime === )


// function to save events to local storage
