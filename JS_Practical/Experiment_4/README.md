# Experiment 4: Compare Two Strings Using Basic Operators and Loops

## Aim
Compare Two Strings Using Basic Operators and Loops.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Enter two strings.
2. Press Compare to view ==, ===, length, manual loop, and alphabetical comparison.
3. Press Reset to start over.

## Sample input and output

| Test | Expected result |
|---|---|
| cat and cat | all equality checks true |
| cat and car | manual compare false; first comes after second |

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

**Line 1:** `function compareStrings() {`  
Explanation: Defines the function named `compareStrings`; it runs when called (often by a button).

**Line 2:** `let a = document.getElementById("s1").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 3:** `let b = document.getElementById("s2").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 4:** `if (a === "" || b === "") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 5:** `alert("Enter both strings");`  
Explanation: Shows a simple popup message to the user.

**Line 6:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 7:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 9:** `let same = true;`  
Explanation: Assumes the condition is true until a mismatch is found.

**Line 10:** `if (a.length !== b.length) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 11:** `same = false;`  
Explanation: Records that the comparison or search has failed.

**Line 12:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 13:** `for (let i = 0; i < a.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 14:** `if (a[i] !== b[i]) {`  
Explanation: Compares both strings at index i; a mismatch means the strings differ.

**Line 15:** `same = false;`  
Explanation: Records that the comparison or search has failed.

**Line 16:** `break;`  
Explanation: Exits the loop once the needed answer or mismatch is found.

**Line 17:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 18:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 19:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 21:** `let answer = "Using == : " + (a == b) + "\n";`  
Explanation: Starts the comparison output with the result of loose equality (==).

**Line 22:** `answer += "Using === : " + (a === b) + "\n";`  
Explanation: Adds the result of strict equality (===).

**Line 23:** `answer += "Same length : " + (a.length === b.length) + "\n";`  
Explanation: Builds text for the next output line; \n means a new line.

**Line 24:** `answer += "Manual character compare : " + same + "\n";`  
Explanation: Builds text for the next output line; \n means a new line.

**Line 26:** `if (a === b) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 27:** `answer += "Alphabetical order: Both are equal";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 28:** `} else if (a < b) {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 29:** `answer += "Alphabetical order: First comes before second";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 30:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 31:** `answer += "Alphabetical order: First comes after second";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 32:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 33:** `document.getElementById("result").textContent = answer;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 34:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 36:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 37:** `document.getElementById("s1").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 38:** `document.getElementById("s2").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 39:** `document.getElementById("result").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 40:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- == compares with type conversion, === also checks type.
- Here both input fields contain strings, so == and === normally give the same result.
- Alphabetical order uses < and > operators; it is case-sensitive (Unicode order), not dictionary locale sorting.

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

