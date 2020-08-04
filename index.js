/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

// The greet() function
// The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.

// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".

function greet(str) {
  let time_num =  parseInt(str.split(':').join(''));

  if (time_num < 1200) {
    return "Good Morning";
  } else if (time_num >= 1200 && time_num <= 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
  
}

/* Write your implementation of displayMessage() */

// The displayMessage() function
// The displayMessage function should take one argument, a String.

// When the function runs it should update the text inside the #greeting node with the content of the argument.

// It does not return anything.

function displayMessage(str) {
  // get the element inside the node & update the innerText of the node
  document.querySelector("h1#greeting").innerText = str;
}