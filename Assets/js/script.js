var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


var grid = $('grid')

var gridTime = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']


var activityLog = function () {
    for (var i = 0; i < gridTime.length; i++) {
        var hour = $("<div></div>");
        hour.addClass("hour");
        timeBlock.append(hour);

        var activityType = $("<div></div>");
        activityType.addClass("activityType");
        activityType.attr("data-time", gridTime.length + i);

        var activityInput = $("<div id='enter' ></div>");

        activityInput.attr("data-value", i);
        activityType.append(activityInput);

        var save = $("<div></div>");
        save.addClass("saveBtn");
        save.append("<i id='save' class='fa fa-save'></i>");
        timeBlock.append(save);

        grid.append(timeBlock);



    }
}