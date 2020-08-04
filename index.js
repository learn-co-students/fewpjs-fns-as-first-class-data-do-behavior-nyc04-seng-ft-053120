/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hourMinutes){
  let hour = hourMinutes.split(':')
  let number = parseInt(hour[0]);
  if(number >= 0 && number <= 12){
    //If the time is earlier than 12pm, return "Good Morning".
    return "Good Morning";
    //If the time is between 12pm and 5pm, return "Good Afternoon".
  } else if(number > 12 && number <= 17){
    return "Good Afternoon";
  } else{
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  let greeting = document.querySelector("#greeting")
  greeting.innerText = string
}