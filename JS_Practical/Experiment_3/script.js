function reverseText() {
  let inputStr = document.getElementById("textInput").value;
  let reversedStr = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
  }
  document.getElementById("result").textContent = "Reversed: " + reversedStr;
}

function replaceChar() {
  let text = document.getElementById("textInput").value;
  let oldChar = document.getElementById("oldChar").value;
  let newChar = document.getElementById("newChar").value;
  if (oldChar.length !== 1 || newChar.length !== 1) {
    alert("Enter one old character and one new character");
    return;
  }
  let answer = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === oldChar) {
      answer += newChar;
    } else {
      answer += text[i];
    }
  }
  document.getElementById("result").textContent = "After replacing: " + answer;
}

function checkPalindrome() {
  let text = document.getElementById("textInput").value;
  if (text === "") {
    alert("Enter a word");
    return;
  }
  let palindrome = true;
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  if (palindrome) {
    document.getElementById("result").textContent = "Palindrome";
  } else {
    document.getElementById("result").textContent = "Not Palindrome";
  }
}

function resetPage() {
  document.getElementById("textInput").value = "";
  document.getElementById("oldChar").value = "";
  document.getElementById("newChar").value = "";
  document.getElementById("result").textContent = "";
}
