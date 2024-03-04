let stopwatchInterval;
let startTime;
let pausedTime = 0;
let isPaused = false;

const stopwatchText = document.getElementById('stopwatchText');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stopp = document.getElementById('stop');

start.addEventListener('click', startStopwatch);
pause.addEventListener('click', togglePause);
stopp.addEventListener('click', stopStopwatch);

function startStopwatch() {
    startTime = Date.now();
    stopwatchInterval = setInterval(updateStopwatch, 10);
    start.disabled = true;
    pause.disabled = false;
}

function updateStopwatch() {
    const elapsedTime = Date.now() - startTime - pausedTime;
    const seconds = (elapsedTime / 1000).toFixed(2);
    stopwatchText.textContent = `Time: ${seconds} s`;
}

function togglePause() {
    if (!isPaused) {
        clearInterval(stopwatchInterval);
        pausedTime += startTime - Date.now();
        isPaused = true;
        pause.textContent = 'Continue';
    } else {
        startTime = Date.now();
        stopwatchInterval = setInterval(updateStopwatch, 10);
        isPaused = false;
        pause.textContent = 'Pause';
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    pausedTime = 0;
    isPaused = false;
    start.disabled = false;
    pause.disabled = true;
    stopwatchText.textContent = 'Time: 0 s';
}