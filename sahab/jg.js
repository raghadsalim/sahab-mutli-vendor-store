var pTags = $("p:not(.ignore):empty");
var elementsWithText = $(":contains('REPLACE_ME')");
var divsWithSpecialChild = $("div:has(.special)");
var headingElements = $("h1, h2, h3, h4, h5, h6");
var visibleLis = $("li:visible:even");

setInterval(function () {
    var square = $("#square");
    var left = parseInt(square.css("left"));
    var top = parseInt(square.css("top"));

    var newLeft = left + Math.floor(Math.random() * 10) - 5;
    var newTop = top + Math.floor(Math.random() * 10) - 5;

    square.css({
        left: newLeft + "px",
        top: newTop + "px"
    });
}, 1000);