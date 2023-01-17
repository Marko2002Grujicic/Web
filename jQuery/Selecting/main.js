// Selecting
$("li:first").addClass("active")

// Select the first element of the list and give it a bottom border
$("li:first").css({
    "border-bottom": "5px solid red"
});

// Select all list elements and transform their text to uppercase
$("li").css({
    "text-transform": "uppercase"
});

// Select active element of the list and change its font color
$(".active").css({
    "color": "green"
})

// Find the middle one and change its background color
$("li:nth-child(2)").css({
    "background-color": "orange"
})