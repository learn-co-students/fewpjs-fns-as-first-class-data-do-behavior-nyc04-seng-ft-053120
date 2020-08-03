/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function greet(timeString) {
  const timeParts = timeString.split(":")
  console.log(timeParts)
  if (parseInt(timeParts[0]) < 12) {
    return 'Good Morning'
  }
  if (parseInt(timeParts[0]) >= 12 && parseInt(timeParts[0]) < 17) {
    return 'Good Afternoon'
  }
  return 'Good Evening'
}

function displayMessage(message) {
  document.querySelector("#greeting").innerText = message
}

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
