/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let newString = string.split(":")[0]
  if(newString >= 0 && newString <= 12){
    return "Good Morning";
  }else if(newString > 12 && newString <= 17){
    return "Good Afternoon";
  }else{
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.querySelector('#greeting').innerText = string;
} 