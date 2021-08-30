"use strict";

var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
  var now = new Date(); // scripting seconds

  var seconds = now.getSeconds();
  var secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = "rotate(".concat(secondsDegrees, "deg)"); // scripting minutes

  var minutes = now.getMinutes();
  var minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6 + 90;
  minuteHand.style.transform = "rotate(".concat(minutesDegrees, "deg)"); // hours scripting

  var hours = now.getHours();
  var hoursDegrees = hours / 12 * 360 + minutes / 60 * 30 + 90;
  hourHand.style.transform = "rotate(".concat(hoursDegrees, ")deg");
}

setInterval(setDate, 1000);
setDate();