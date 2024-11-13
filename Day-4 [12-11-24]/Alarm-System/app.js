let alarmTime = null;
let timerInterval = null;
let stopwatchInterval = null;
let stopwatchTime = 0;

// Function to switch between sections and highlight the active button
function showSection(sectionId) {
  // Stop any running intervals when switching sections
  clearTimer();
  clearStopwatch();

  // Remove 'active' class from all sections and buttons
  document
    .querySelectorAll(".feature")
    .forEach((section) => section.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((button) => button.classList.remove("active"));

  // Show the selected section and highlight the button
  document.getElementById(sectionId).classList.add("active");
  document.getElementById(`${sectionId}Btn`).classList.add("active");

  // Start any required functionality based on the section
  if (sectionId === "time") {
    showCurrentTime();
  } else if (sectionId === "alarm") {
    checkAlarm();
  }
}

// Alarm Clock functionality
function setAlarm() {
  const hour = document.getElementById("alarmHour").value;
  const minute = document.getElementById("alarmMinute").value;
  const ampm = document.getElementById("alarmAmpm").value;
  alarmTime = `${hour}:${minute} ${ampm}`;
  document.getElementById(
    "alarmStatus"
  ).textContent = `Alarm set for ${alarmTime}`;
}

function checkAlarm() {
  if (
    document.getElementById("alarm").classList.contains("active") &&
    alarmTime
  ) {
    const now = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    if (now === alarmTime) {
      alert("Alarm ringing!");
      alarmTime = null; // Reset the alarm after it rings
      document.getElementById("alarmStatus").textContent = "";
    }
  }
  setTimeout(checkAlarm, 1000);
}

// Timer functionality
function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals

  const hours = parseInt(document.getElementById("timerHours").value) || 0;
  const minutes = parseInt(document.getElementById("timerMinutes").value) || 0;
  const seconds = parseInt(document.getElementById("timerSeconds").value) || 0;
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds > 0) {
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;

        const displayHours = String(Math.floor(totalSeconds / 3600)).padStart(
          2,
          "0"
        );
        const displayMinutes = String(
          Math.floor((totalSeconds % 3600) / 60)
        ).padStart(2, "0");
        const displaySeconds = String(totalSeconds % 60).padStart(2, "0");

        document.getElementById(
          "countdownDisplay"
        ).textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
      } else {
        document.getElementById("countdownDisplay").textContent =
          "Timer finished!";
        clearTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearTimer();
}

function clearTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("countdownDisplay").textContent = "00:00:00";
}

// Stopwatch functionality
function startStopwatch() {
  if (stopwatchInterval) return; // Prevent multiple intervals

  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(stopwatchTime % 60).padStart(2, "0");

    document.getElementById(
      "stopwatchDisplay"
    ).innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

function stopStopwatch() {
  clearStopwatch();
}

function resetStopwatch() {
  clearStopwatch();
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").innerText = "00:00:00";
}

function clearStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

// Current Time Display
function showCurrentTime() {
  if (!document.getElementById("time").classList.contains("active")) return;
  const now = new Date();
  document.getElementById("currentTimeDisplay").innerText =
    now.toLocaleTimeString();
  setTimeout(showCurrentTime, 1000);
}

// Initialize alarm check only on the alarm section
document.addEventListener("DOMContentLoaded", () => {
  checkAlarm();
});
