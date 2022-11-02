var saveButton = document.getElementsByClassName("saveBtn");
var currentDay = moment().format('dddd MMMM Do YYYY');
$("#currentDay").html(currentDay);

// save btn
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

        $("#hour-8 .description").val(localStorage.getItem("hour-8"));
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
        trackTime();