"use strict";

var Welcome = function() {
    window.alert("Welcome to our website!");
    window.prompt("Are you sure you want to visit this page?");
    if (window.confirm("We will submit this answer now!")) {
        window.alert("You have successfully visited the page.");
    }
};
Welcome();