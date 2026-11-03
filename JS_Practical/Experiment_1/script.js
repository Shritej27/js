// Calculate triangle area using Heron's formula.
function triangle() {
  let a = Number(document.getElementById("sideA").value);
  let b = Number(document.getElementById("sideB").value);
  let c = Number(document.getElementById("sideC").value);

  if (!(a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a)) {
    document.getElementById("triangleResult").textContent = "Enter valid triangle sides";
    return;
  }

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById("triangleResult").textContent = "Area = " + area;
}

function rectangle() {
  let l = Number(document.getElementById("length").value);
  let b = Number(document.getElementById("breadth").value);
  if (!(l > 0 && b > 0)) {
    alert("Enter positive length and breadth");
    return;
  }
  document.getElementById("rectangleResult").textContent = "Area = " + (l * b);
}

function circle() {
  let r = Number(document.getElementById("radius").value);
  if (!(r > 0)) {
    alert("Enter a positive radius");
    return;
  }
  document.getElementById("circleResult").textContent = "Area = " + (3.14 * r * r);
}

function resetPage() {
  document.getElementById("sideA").value = "";
  document.getElementById("sideB").value = "";
  document.getElementById("sideC").value = "";
  document.getElementById("length").value = "";
  document.getElementById("breadth").value = "";
  document.getElementById("radius").value = "";
  document.getElementById("triangleResult").textContent = "";
  document.getElementById("rectangleResult").textContent = "";
  document.getElementById("circleResult").textContent = "";
}
