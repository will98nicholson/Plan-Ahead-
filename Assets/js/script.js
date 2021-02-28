var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// assigns past present future to hours
var gridTimes = $(".row");
gridTimes.each(function (index) {

   let selectTime = $(this).attr('id');

   if (moment().hour() < selectTime) {
      $(this).children('textarea').addClass("future")
   }
   else if (moment().hour() == selectTime) {
      $(this).children('textarea').addClass("present")
   }
   else if (moment().hour() > selectTime) {
      $(this).children('textarea').addClass("past")
   }
});

var saveActData = window.localStorage;
var actInfo = [];
// 
$('saveBtn').on('click', function () {
   let actInput = $(this).siblings('textarea').val();
   let newID = $(this).attr('id');
   actInfo.push({ newID, actInput });
   saveActData.setItem('savedItems', JSON.stringify(actInfo));
});


