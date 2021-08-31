var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate(){
    var now = new Date();

    // scripting seconds
    var seconds = now.getSeconds();
    var secondsDegrees = seconds * 6 + 89;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // scripting minutes
    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // hours scripting
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90 ;
    console.log(hours, hoursDegrees);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate();


// setInterval(() => {
//     d = new Date();
//     var htime = d.getHours();
//     console.log(htime);
//     var mtime = d.getMinutes();
//     console.log(mtime);
//     var stime = d.getSeconds();
//     console.log(stime);
//     var hRotation = (30 * htime) + (mtime / 2);
//     console.log(hRotation);
//     var mRotation = 6 * mtime;
//     var sRotation = 6 * stime;

//     hourHand.style.transform = `rotate(${hRotation}deg)`;
//     minuteHand.style.transform = `rotate(${mRotation}deg)`;
//     secondHand.style.transform = `rotate(${sRotation}deg)`;

// }, 1000);