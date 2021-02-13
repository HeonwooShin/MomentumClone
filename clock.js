const clockContainer = document.querySelector('.clockContainer');
const clock = clockContainer.querySelector('.clock');
const progressBar = document.querySelector('.progressBar');
const progress = progressBar.querySelector('.progress');


function getClockTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millisecends = date.getMilliseconds();
    
    clock.innerHTML = `${hours<10 ? `0${hours}`: hours}:${minutes<10 ? `0${minutes}`: minutes}:${seconds<10 ? `0${seconds}`: seconds}:${millisecends<10 ? `00${millisecends}`: millisecends<100 ? `0${millisecends}`: millisecends}`;
    
    const passedSeconds = 3600*hours + 60*minutes + seconds;
    progress.style.width = `${passedSeconds*300/86400}px`;
    progress.style.left = `-${150-passedSeconds*150/86400}px`;
}

function init(){
    setInterval(getClockTime, 1);
}

init();