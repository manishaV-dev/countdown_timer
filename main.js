const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');


const christmas = '25 dec 2021';

function countdown(){
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const sec = (christmasDate - currentDate) / 1000;
    const days = Math.floor(sec / 3600 / 24);
    const hours = Math.floor(sec / 3600) % 24;
    const minutes = Math.floor(sec / 60) % 60;
    const seconds = Math.floor(sec % 60);

    // console.log(christmasDate - currentDate);
    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);

    if(sec < 0){
        clearInterval(countdown);
        christmasDate.innerHTML = "Happy Christmas Day!";
    }
}

//to add double digit 

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call the function
countdown();

setInterval(countdown, 1000);