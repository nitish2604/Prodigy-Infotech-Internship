let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = true;

        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});
