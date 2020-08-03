/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let timeArray = timeString.split(':');
  let timeHour = parseInt(timeArray[0]);

  if(timeHour < 12) {
    return "Good Morning"
  } else if(timeHour >= 12 && timeHour <= 17 ) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string
}