function table(type) {
  let input = document.getElementById("number").value;
  if (input === "") {
    alert("Enter a number");
    return;
  }
  let n = Number(input);
  let answer = "";
  let i = 1;

  if (type === "for") {
    for (i = 1; i <= 10; i++) {
     let result = n * i;
      answer = answer + n + " x " + i + " = " + result + "\n";
    }
  } else if (type === "while") {
    while (i <= 10) {
      let result = n * i;
      answer = answer + n + " x " + i + " = " + result + "\n";
      i++;
    }
  } else {
    do {
      let result = n * i;
      answer = answer + n + " x " + i + " = " + result + "\n";
      i++;
    } while (i <= 10);
  }
  document.getElementById("result").textContent = answer;
}

function resetPage() {
  document.getElementById("number").value = "";
  document.getElementById("result").textContent = "";
}
