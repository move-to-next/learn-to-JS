let hour = document.querySelector(".clock-hour-hand");
let minute = document.querySelector(".clock-minute-hand");
let second = document.querySelector(".clock-second-hand");
let hourPosition = 0;
let minutePosition = 0;
let secondPosition = 0;

second.style.transition = 'transform 1s ease';

function hourTurning(){
    hourPosition += 1;
    hour.style.transform = `translate(-50%, -100%) rotate(${hourPosition}deg)`
}
function minuteTurning(){
    minutePosition += 3;
    minute.style.transform = `translate(-50%, -100%) rotate(${minutePosition}deg)`
}
function secondTurning(){
    secondPosition += 70;
    second.style.transform = `translate(-50%, -100%) rotate(${secondPosition}deg)`
}

setInterval(hourTurning, 1500);
setInterval(minuteTurning, 1300);
setInterval(secondTurning, 5000);