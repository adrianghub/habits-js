import './style.css';

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let countdown;

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);
    let now = Date.now();
    let then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);



    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if it should stop
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // display timer
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;
    const remainderSeconds = seconds % 60;
    let display = `${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;
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
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? 0 : ''}${minutes}`;
}

function startTimer() {
    timer(this.dataset.time);
}


function random(property) {
    return property[Math.floor(Math.random() * property.length)];
}

const shape = ['circle', 'ellipse'];

const position = ['top', 'center', 'bottom', 'left', 'right'];

function randomBg() {

        const firstColor = {
            r: Math.round(Math.random() * 255),
            g: Math.round(Math.random() * 255),
            b: Math.round(Math.random() * 255)
        };
        
        const secondColor = {
            r: Math.round(Math.random() * 255),
            g: Math.round(Math.random() * 255),
            b: Math.round(Math.random() * 255)
        };
        
        firstColor.rgb = `rgb(${firstColor.r}, ${firstColor.g}, ${firstColor.b})`;
        secondColor.rgb = `rgb(${secondColor.r}, ${secondColor.g}, ${secondColor.b})`;
        
        let randomBackground = `background: radial-gradient(${random(shape)} at ${random(position)}, ${firstColor.rgb}, ${secondColor.rgb})`;

        document.body.classList.add('color-animation');
        
        document.body.style = randomBackground;
        
}


buttons.forEach(button => button.addEventListener('click', startTimer));
buttons.forEach(button => button.addEventListener('click', randomBg));




document.customForm.addEventListener('submit', function(e) {
e.preventDefault();
const mins = this.minutes.value;
timer(mins * 60);
this.reset();
});