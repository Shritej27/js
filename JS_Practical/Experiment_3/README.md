# Experiment 3: String Reverse, Replace and Palindrome (Manual Loops)

## Aim
String Reverse, Replace and Palindrome (Manual Loops).

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Enter a string (e.g., madam or banana).
2. Reverse: builds a new string from last character to first.
3. Replace: type one old character and one new character, then press Replace.
4. Palindrome: compares the first and last character, moving inward.
5. Reset clears everything.

## Sample input and output

| Test | Expected result |
|---|---|
| hello | olleh |
| banana, old a, new o | bonono |
| madam | Palindrome; hello -> Not Palindrome |

## HTML explained

- `<html>` starts the HTML document; `<head>` holds page settings; `<body>` shows the page.
- `<link rel="stylesheet" href="style.css">` connects the separate CSS file.
- `<input>` takes user input and `id="..."` gives each field a unique name for JavaScript.
- `<button onclick="functionName()">` runs that named JavaScript function when clicked.
- `<p id="...">` or `<pre id="...">` displays output (`pre` keeps each table/output line on a separate row).
- `<script src="script.js"></script>` loads the separate JavaScript code near the end of HTML.
- Reset buttons call `resetPage()` to clear the form and/or result in JavaScript.

## CSS explained

- `body` sets the page background, font and margin.
- `.container` is a white box so the experiment is readable.
- `input, select, button` adds small padding and spaces.
- `pre` displays multi-line text properly.

## JavaScript: line-by-line explanation

Every nonblank JavaScript line below is shown in exact file order. Lines consisting only of `}` close blocks.

**Line 1:** `function reverseText() {`  
Explanation: Defines the function named `reverseText`; it runs when called (often by a button).

**Line 2:** `let inputStr = document.getElementById("textInput").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 3:** `let reversedStr = "";`  
Explanation: Starts with an empty string; later characters/results will be added to it.

**Line 4:** `for (let i = inputStr.length - 1; i >= 0; i--) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 5:** `reversedStr += inputStr[i];`  
Explanation: Appends the character at index i, starting at the last character and moving backward.

**Line 6:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 7:** `document.getElementById("result").textContent = "Reversed: " + reversedStr;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 8:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 10:** `function replaceChar() {`  
Explanation: Defines the function named `replaceChar`; it runs when called (often by a button).

**Line 11:** `let text = document.getElementById("textInput").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 12:** `let oldChar = document.getElementById("oldChar").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 13:** `let newChar = document.getElementById("newChar").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 14:** `if (oldChar.length !== 1 || newChar.length !== 1) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 15:** `alert("Enter one old character and one new character");`  
Explanation: Shows a simple popup message to the user.

**Line 16:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 17:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 18:** `let answer = "";`  
Explanation: Starts with an empty string; later characters/results will be added to it.

**Line 19:** `for (let i = 0; i < text.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 20:** `if (text[i] === oldChar) {`  
Explanation: Checks whether the current character matches the character to replace.

**Line 21:** `answer += newChar;`  
Explanation: Adds another piece of text/character to the result using +=

**Line 22:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 23:** `answer += text[i];`  
Explanation: Adds another piece of text/character to the result using +=

**Line 24:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 25:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 26:** `document.getElementById("result").textContent = "After replacing: " + answer;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 27:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 29:** `function checkPalindrome() {`  
Explanation: Defines the function named `checkPalindrome`; it runs when called (often by a button).

**Line 30:** `let text = document.getElementById("textInput").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 31:** `if (text === "") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 32:** `alert("Enter a word");`  
Explanation: Shows a simple popup message to the user.

**Line 33:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 34:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 35:** `let palindrome = true;`  
Explanation: Assumes the condition is true until a mismatch is found.

**Line 36:** `for (let i = 0; i < text.length / 2; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 37:** `if (text[i] !== text[text.length - 1 - i]) {`  
Explanation: Compares the character from the left with the matching character from the right.

**Line 38:** `palindrome = false;`  
Explanation: Records that the comparison or search has failed.

**Line 39:** `break;`  
Explanation: Exits the loop once the needed answer or mismatch is found.

**Line 40:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 41:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 42:** `if (palindrome) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 43:** `document.getElementById("result").textContent = "Palindrome";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 44:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 45:** `document.getElementById("result").textContent = "Not Palindrome";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 46:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 47:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 49:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 50:** `document.getElementById("textInput").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 51:** `document.getElementById("oldChar").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 52:** `document.getElementById("newChar").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 53:** `document.getElementById("result").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 54:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- No split(), reverse(), join(), or replace() are used.
- A palindrome reads the same forward and backward.
- Palindrome test is case-sensitive and considers spaces; use lowercase words without spaces for exam examples.

## Common viva questions

**Q: Why use `document.getElementById()`?**  
A: It reads an HTML element using its unique id.

**Q: Why use `.value`?**  
A: It reads or changes the contents of an input field.

**Q: Why use `.textContent`?**  
A: It prints result text safely inside an HTML element.

**Q: What does Reset do?**  
A: It clears values/results and restores the initial program state.

**Q: Why are loops used instead of inbuilt shortcuts?**  
A: Loops show every individual step, so we can explain how the algorithm works.

