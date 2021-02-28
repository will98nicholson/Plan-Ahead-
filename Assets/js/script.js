var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// assigns past present future to hours
let gridTimes = $(".row")
gridTimes.each(function (index) {
   console.log($(this).children('textarea'));
   let selectTime = $(this).attr('id');

   if (moment().hour() < selectTime) {
      $(this).children('textarea').addClass("future")
   }
   else if (moment().hour() == selectTime) {
      $(this).children('textarea').addClass("present")
   }
   else if (moment().hour() > selectTime) {
      $(this).children('textarea').addClass("future")
   }
});


// saveActData = window.localStorage;
