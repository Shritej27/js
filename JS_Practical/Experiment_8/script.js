function hoverColor() {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("result").textContent = "Mouseover event";
}

function focusColor() {
  document.body.style.backgroundColor = "lightgreen";
  document.getElementById("result").textContent = "Focus event";
}

function normalColor() {
  document.body.style.backgroundColor = "#f2f2f2";
  document.getElementById("result").textContent = "Normal background";
}

function resetPage() {
  document.getElementById("focusInput").value = "";
  document.body.style.backgroundColor = "#f2f2f2";
  document.getElementById("result").textContent = "Try mouseover and focus events.";
}
