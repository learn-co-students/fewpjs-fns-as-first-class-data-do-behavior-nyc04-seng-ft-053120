/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  let parsedTime = parseInt(timeString); //set variable and parse it
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
  let greeting = document.querySelector("#greeting")//setting variable greeting to = #greeting, which we find with querySelector()
  greeting.innerText = `${content}`// call greeting variable and use function innerText to add content
}

// function displayMessage(string){
//   document.querySelector('#greeting').innerText = string
// }