/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  let parsedTime = parseInt(timeString); //set variable and convert string to num with parseInt
  if (parsedTime < 12) { 
    return 'Good Morning'
  }
  else if (parsedTime > 17) {
    return 'Good Evening'
  }
  else {
    return 'Good Afternoon'
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(content) {
  document.querySelector('#greeting').innerText = content 
}

// function displayMessage(content) {
//   let greeting = document.querySelector("#greeting") //find elem with id of greeting and put it in a variable
//   greeting.innerText = `${content}`  // update variable's content with the value of our argument
// }