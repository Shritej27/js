let timer = null;
let endTime = 0;

function startTimer() {
  let input = document.getElementById("endDate").value;
  if (input === "") {
    alert("Select a date and time");
    return;
  }
  endTime = new Date(input).getTime();
  if (!(endTime > new Date().getTime())) {
    alert("Choose a future date and time");
    return;
  }
  clearInterval(timer);
  showTime();
  timer = setInterval(showTime, 1000);
}

function showTime() {
  let remaining = endTime - new Date().getTime();
  if (remaining <= 0) {
    clearInterval(timer);
    document.getElementById("result").textContent = "Time is up!";
    return;
  }

  let seconds = Math.floor(remaining / 1000);
  let days = Math.floor(seconds / 86400);
  let hours = Math.floor((seconds % 86400) / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  document.getElementById("result").textContent =
    days + "d " + hours + "h " + minutes + "m " + sec + "s";
}

function resetPage() {
  clearInterval(timer);
  timer = null;
  endTime = 0;
  document.getElementById("endDate").value = "";
  document.getElementById("result").textContent = "Enter a future date and time";
}
