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