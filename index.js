/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(timeString) {
    let currentTime = timeString.split(":");
    let currentTimeInt = currentTime[0].concat(currentTime[1]);
    let currentTimeNum = parseInt(currentTimeInt, 10);
    if (currentTimeNum < 1200) {
        return "Good Morning";
    }
    if (currentTimeNum > 1700) {
        return "Good Evening";
    } else if ((currentTimeNum >= 1200) && (currentTimeNum <= 1700)) {
        return "Good Afternoon";
    } else {
        return "TEST";
    }
}

function displayMessage(testContent) {
    let content = document.getElementById("greeting");
    content.innerText = testContent;
}