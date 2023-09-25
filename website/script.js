var counter = 0;
var fontSizeCounter = 16;

var counterElement = document.getElementById("counter");

var increaseButton = document.getElementById("increaseButton");
increaseButton.addEventListener("click", function () {
    counter++;
    fontSizeCounter++;
    counterElement.textContent = counter;
    counterElement.style.fontSize = fontSizeCounter + "px";
});

var decreaseButton = document.getElementById("decreaseButton");
decreaseButton.addEventListener("click", function () {
    counter--;
    counterElement.textContent = counter;
});


var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
    counter = 0;
    counterElement.textContent = counter;
});

/* 
$(function () {
    var increaseButton = $('#increaseButton');
    increaseButton.click(function () {
        counter++;
        console.log(counter);
        fontSizeCounter++;
        $('#counter').text(counter);
        $('#counter').css('fontSize', fontSizeCounter + "px");
    });

});

$(function () {
    var decreaseButton = $('#decreaseButton');
    decreaseButton.click(function () {
        counter--;
        console.log(counter);
        fontSizeCounter--;
        $('#counter').text(counter);
        $('#counter').css('fontSize', fontSizeCounter + "px");
    });

});

$(function () {
    var resetButton = $('#resetButton');
resetButton.click(function () {
    counter = 0;
    $('#counter').text(counter);
    });

});
*/