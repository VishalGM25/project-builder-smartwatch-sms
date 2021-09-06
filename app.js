var span = document.getElementById("small");
var timeBig = document.getElementById("large");
var p_day = document.getElementById("day");
var main = document.querySelector(".body");
var chatBtn = document.getElementById("chat");
var musicBtn = document.getElementById("music");
var timerBtn = document.getElementById("timer");
console.log(musicBtn);
function getDayAndTime() {
  console.log("get Time ");
  var d = new Date();
  var getDay = d.getDay();
  var timeInHours = d.getHours();
  var timeInMin = d.getMinutes();
  //console.log(getDay);
  span.innerText = `${timeInHours}:${timeInMin}`;
  timeBig.innerText = `${timeInHours}:${timeInMin}`;
  let day;
  switch (getDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "";
  }
  p_day.innerText = day;
}

chatBtn.addEventListener("click", () => {
  main.innerHTML = `
  <div id="sms-title">
    <div id="java">Java</div>
    <div id="html">Html</div>
    <div id="css">Css</div>
    </div>`;
  main.style.backgroundColor = "white";
  musicBtn.style.color = "gray";
  timerBtn.style.color = "gray";
  document.getElementById("java").addEventListener("click", () => {
    main.innerHTML = `<div>Java is a general-purpose, class-based, object-oriented
       programming language designed for having lesser implementation dependencies</div>`;
    main.style.fontSize = "0.7rem";
  });
  document.getElementById("html").addEventListener("click", () => {
    main.innerHTML = `<div>HTML is the standard markup language for Web pages.With HTML you can create your own Website.</div>`;
    main.style.fontSize = "0.7rem";
  });
  document.getElementById("css").addEventListener("click", () => {
    main.innerHTML = `<div>CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.</div>`;
    main.style.fontSize = "0.7rem";
  });
});

window.onload = function () {
  getDayAndTime();
};
