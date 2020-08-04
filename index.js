/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(msg){
  document.getElementById("greeting").innerText=msg;
}

function greet(str){
  let time=parseInt(str.split(':').join(''));

  if(time>0 && time<1200){
    return "Good Morning";
  }
  else if(time>=1200 && time<1700){
    return "Good Afternoon";
  }
  else{
    return "Good Evening";
  }
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
