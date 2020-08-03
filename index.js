/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string ){
  const time = parseInt(string, 10)
  
  if (time < 12)  return "Good Morning";
  if (time < 15 )  return "Good Afternoon";
  if (time > 16 )  return "Good Evening";
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let time = document.querySelector("h1")
  time.innerText = `${string}`;
  
}