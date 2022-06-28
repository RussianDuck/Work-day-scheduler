// Date on top of the page
var dateElement = document.querySelector("#currentDay");
const m = moment();

dateElement.textContent = m.format("LL")

// Changing input section colors based on time
let currentDate = new Date();
let time = currentDate.getHours();
let i = 0;
let blockName = document.querySelectorAll("textarea");

for (let i = 0; i < blockName.length; i++) {
    let blockValue = i+9;
    if (blockValue > time) {
        blockName[i].classList.add("future");
    } else if (blockValue == time) {
        blockName[i].classList.add("present");
    } else (blockValue < time); {
        blockName[i].classList.add("past");
    }
}

// localStorage


