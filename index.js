/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeNum) {
  let timeEntered = parseInt(timeNum.split(':').join(''));
  if (timeEntered < 1200 ) {
    return "Good Morning";
  }
  else if (timeEntered >= 1200 && timeEntered <= 1700) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
document.querySelector('#greeting').innerText = string
}