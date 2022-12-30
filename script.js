var saveButton = document.getElementsByClassName("saveBtn");
var currentDay = moment().format('dddd MMMM Do YYYY');
$("#currentDay").html(currentDay);

// save button
$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var textBlock = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
    
    localStorage.setItem(timeBlock, textBlock);
    });
    });

// timeblock function
    function trackTime() {
        var currentTime =  moment().hour();

        $(".time-block").each(function()   {
            var timeBlock = parseInt($(this).attr("id").split("-")[1]);
            console.log(timeBlock, currentTime)
            if (timeBlock < currentTime) {
                $(this).addClass("past");
            }
            else if (timeBlock == currentTime) {
                $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present"); 
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })};

        // 8am local storage
        $("#hour-8 .description").val(localStorage.getItem("hour-8"));
        // 9am
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        // 10am
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        // 11am
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        // 12pm
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        // 1pm
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        // 2pm
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        // 3pm
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        // 4pm
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        // 5pm
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
        trackTime();