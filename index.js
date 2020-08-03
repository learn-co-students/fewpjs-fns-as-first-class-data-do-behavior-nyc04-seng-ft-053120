/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let parsedTime = parseInt(timeString, 10); //set variable and parse it
  if (parsedTime < 12) { //if variable is < 12, it will display good morning
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
//function that takes a string argument and updates the text inside #greeting node with content of the argument
function displayMessage(content) {
  let greeting = document.querySelector("#greeting")//setting variable greeting to = #greeting, which we find with querySelector()
  greeting.innerText = `${content}`// call greeting variable and use function innerText to add content
}
