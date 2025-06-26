let workDuration = 25 * 60; // 25分
let breakDuration = 5 * 60; // 5分
let timer;
let timeLeft = workDuration;
let isRunning = false;
let isWork = true;

const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  timerDisplay.textContent = `${min}:${sec}`;
  statusDisplay.textContent = isWork ? '作業中' : '休憩中';
}

function tick() {
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    isWork = !isWork;
    timeLeft = isWork ? workDuration : breakDuration;
    updateDisplay();
    alert(isWork ? '休憩終了！作業を再開しましょう。' : '作業終了！休憩しましょう。');
  }
}

startBtn.onclick = function() {
  if (!isRunning) {
    timer = setInterval(tick, 1000);
    isRunning = true;
  }
};

pauseBtn.onclick = function() {
  clearInterval(timer);
  isRunning = false;
};

resetBtn.onclick = function() {
  clearInterval(timer);
  isRunning = false;
  isWork = true;
  timeLeft = workDuration;
  updateDisplay();
};

updateDisplay();
