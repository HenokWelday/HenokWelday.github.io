"use strict";

var win = true;

$(document).ready(function () {
    $("#start").click(function () {
        $("#status").text("Good Luck.");
        $("div .boundary").removeClass("youlose");
        startGame();
    });
});

function startGame() {
    win = true;

    $(".boundary").hover(
        function () {
            lose();
        });

    $("#end").hover(
        function () {
            if (win) {
                $("#status").text("You WIN! Play Again ").css("color", "blue");
                endGame();
            }
        });

    $("#maze").mouseleave(
        function () {
            lose();
        });
}

function lose() {
    win = false;
    $("div .boundary").addClass("youlose");
    $("#status").text("You Lose! click 'S' to retry.").css("color", "red");
}

function endGame() {
    $("div .boundary").removeClass("youlose");
    $(".boundary").unbind("hover");
    $("#maze").unbind("mouseleave");
}