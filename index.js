/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (timeString) => {
  const time = parseInt(timeString, 10);
  if (time < 12) return 'Good Morning';
  if (time > 17) return 'Good Evening';
  return 'Good Afternoon';
};

/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  document.getElementById('greeting').innerText = message;
};
