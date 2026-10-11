let count = 0;

let countText = document.getElementById("count");
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", function () {
    count = count + 1;
    countText.textContent = count;

    if (count > 0) {
        countText.style.color = "green";

    } else if (count < 0) {
        countText.style.color = "red";
    } else {
        countText.style.color = "black";
    }
});

decrementButton.addEventListener("click", function () {
    count = count - 1;
    countText.textContent = count;

    if (count > 0) {
        countText.style.color = "green";
    } else if (count < 0) {
        countText.style.color = "red";
    } else {
        countText.style.color = "black";
    }
});


resetButton.addEventListener("click", function () {
    count = 0;
    countText.textContent = count;
    countText.style.color = "black";
});