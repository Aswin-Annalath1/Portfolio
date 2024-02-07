//Text design
var typed = new Typed(".text", {
  strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function updateClock(){
  //Get the current time using Moment.js
  let now = moment()

  //Format the time string,
  //hh:mm:ss a for hours, minutes, seconds, and AM/PM indication
  let timeString = now.format('hh:mm:ss a');

  //Update the content of the clock element with the formatted time
  document.getElementById('clock').innerText = timeString;
}

//Call the updateClock function every second to keep the clock udated
setInterval(updateClock,1000);