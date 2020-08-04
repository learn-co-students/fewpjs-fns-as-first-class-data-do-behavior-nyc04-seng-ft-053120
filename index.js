/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  const hr = parseInt(str, 10)
  if (hr<12) return "Good Morning"
  if (hr>12 && hr<17) return "Good Afternoon"
  if (hr>17) return "Good Evening"
}
  
/* Write your implementation of displayMessage() */
function displayMessage(str){
  document.getElementById("greeting").innerText = str
}
