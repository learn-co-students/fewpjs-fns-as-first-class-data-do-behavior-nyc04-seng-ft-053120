/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  let timeParts = parseInt(timeString, 10); //setting variable timeParts to take in timeString and parse it 
                                  //so if timeString = "14:30", parseInt will return 14
  if (timeParts < 12) { //if timeParts is < 12 we will display good morning
    return 'Good Morning'
  }
  else if (timeParts > 17) {
    return 'Good Evening'
  }
  else {
    return 'Good Afternoon'
  }
}

//function that takes a string argument and updates the text inside #greeting node with content of the argument
function displayMessage(content) {
  let greeting = document.querySelector("#greeting") //setting variable greeting to = #greeting, which we find with querySelector()
  greeting.innerText = `${content}` // call greeting variable and use function innerText to add content, here we use ` and $ for string interpolation
} 