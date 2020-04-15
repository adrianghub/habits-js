import './style.css';

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

let countdown;

function timer(seconds) {

    clearInterval(countdown);
    now = Date.now();
    then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);
}

countdown = setInterval(() => {
    let secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }

    displayTimeLeft(secondsLeft);

}, 1000);

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;
    remainderSeconds = seconds % 60;
    `${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;
    minutes >= 60 ? 
    display = `${hours}:${remainderMinutes < 10 ? 0 : ''}${remainderMinutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`
    : display;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.timeContent = `Be Back At ${hour}:${minutes < 10 ? 0 : ''}${minutes}`;
}

function startTimer() {
    timer(this.dataset.time)
}

buttons.forEach(button => button.addEventListener('click', startTimer));
buttons.forEach(button => button.addEventListener('click', randomBg));


document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
    });