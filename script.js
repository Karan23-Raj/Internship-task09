const colors = ["red", "green", "blue", "yellow"];

const colorName = document.getElementById("colorName");

// Change background color
colors.forEach(function(color) {

    document.getElementById(color).addEventListener("click", function() {

        document.body.style.backgroundColor = color;

        colorName.innerText = color.toUpperCase();

    });

});

// Generate random color
document.getElementById("random").addEventListener("click", function() {

    const randomColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16).padStart(6, "0");

    document.body.style.backgroundColor = randomColor;

    colorName.innerText = randomColor.toUpperCase();

});

// Reset background
document.getElementById("reset").addEventListener("click", function() {

    document.body.style.backgroundColor = "#090d18";

    colorName.innerText = "DEFAULT";

});