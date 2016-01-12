// Vanilla JS


// strict mode for the win
'use strict';

  // Text revealing function
  var reveal = function (textReveal) {
    // el for element
    var el = document.getElementById(textReveal);


    /* With if else statement
    ============================== */

    // if (el.className === 'hide-text') {
    //   el.className = 'show-text';
    // } else {
    //   el.className = 'hide-text';
    // }

    /* With a conditional ternary operator
    ============================== */
    if (el) {
      el.className = (el.className === 'hide-text') ? 'show-text' : 'hide-text';
    }
  };


  // Show date since i went Vegan

  // get the startDate div
  var ele = document.getElementById('startDate');

  // Using JavaScript Date object to get needed dates
  var startDate = new Date(2015, 11, 4), // The start date of my count
      todayDate  = new Date; // This makes it todays date

  // subtracting current date from the start date to get difference in milliseconds
  var hoursDay = 24,
      minutesHour = 60,
      secondsMinute = 60,
      milliSeconds = 1000;

  // divide the difference return by milliseconds per one day
  var daysAsVegan = Math.round((todayDate - startDate) / (milliSeconds * secondsMinute * minutesHour * hoursDay)); // round the amount of days

  ele.innerHTML = '<p>' + daysAsVegan + '</p>';
