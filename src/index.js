import './style.css';

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

let countdown;

function timer(seconds) {
    now = Date.now();
    then = now + (seconds * 1000);
}

countdown = setInterval(() => {
    let secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }
})