# Experiment 5: Countdown Timer

## Aim
Countdown Timer.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Select a future date and time.
2. Press Start: timer updates every second.
3. Press Reset: timer stops, date and output clear.

## Sample input and output

| Test | Expected result |
|---|---|
| Select one hour in the future | around 0d 1h 0m 0s |
| Select a past time | alert asking for future date |

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

**Line 1:** `let timer = null;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 2:** `let endTime = 0;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 4:** `function startTimer() {`  
Explanation: Defines the function named `startTimer`; it runs when called (often by a button).

**Line 5:** `let input = document.getElementById("endDate").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 6:** `if (input === "") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 7:** `alert("Select a date and time");`  
Explanation: Shows a simple popup message to the user.

**Line 8:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 9:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 10:** `endTime = new Date(input).getTime();`  
Explanation: Converts the chosen date/time to milliseconds.

**Line 11:** `if (!(endTime > new Date().getTime())) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 12:** `alert("Choose a future date and time");`  
Explanation: Shows a simple popup message to the user.

**Line 13:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 14:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 15:** `clearInterval(timer);`  
Explanation: Stops the countdown from running again.

**Line 16:** `showTime();`  
Explanation: Continues the current step of the program.

**Line 17:** `timer = setInterval(showTime, 1000);`  
Explanation: Schedules the countdown function to run every 1000 milliseconds (one second).

**Line 18:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 20:** `function showTime() {`  
Explanation: Defines the function named `showTime`; it runs when called (often by a button).

**Line 21:** `let remaining = endTime - new Date().getTime();`  
Explanation: Subtracts current time from selected future time to find milliseconds remaining.

**Line 22:** `if (remaining <= 0) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 23:** `clearInterval(timer);`  
Explanation: Stops the countdown from running again.

**Line 24:** `document.getElementById("result").textContent = "Time is up!";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 25:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 26:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 28:** `let seconds = Math.floor(remaining / 1000);`  
Explanation: Converts remaining milliseconds into whole seconds.

**Line 29:** `let days = Math.floor(seconds / 86400);`  
Explanation: Counts complete days in the remaining seconds.

**Line 30:** `let hours = Math.floor((seconds % 86400) / 3600);`  
Explanation: Calculates remaining hours after removing complete days.

**Line 31:** `let minutes = Math.floor((seconds % 3600) / 60);`  
Explanation: Calculates remaining minutes after removing complete hours.

**Line 32:** `let sec = seconds % 60;`  
Explanation: Uses % to find leftover seconds after complete minutes.

**Line 34:** `document.getElementById("result").textContent =`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 35:** `days + "d " + hours + "h " + minutes + "m " + sec + "s";`  
Explanation: Continues the current step of the program.

**Line 36:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 38:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 39:** `clearInterval(timer);`  
Explanation: Stops the countdown from running again.

**Line 40:** `timer = null;`  
Explanation: Resets the countdown state.

**Line 41:** `endTime = 0;`  
Explanation: Resets the countdown state.

**Line 42:** `document.getElementById("endDate").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 43:** `document.getElementById("result").textContent = "Enter a future date and time";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 44:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- new Date(...) converts the input to a date; getTime() converts it to milliseconds.
- setInterval() repeatedly calls the function; clearInterval() stops it.
- Math.floor() removes decimal fractions so countdown values are whole numbers.
- No string/array shortcut methods are used.

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

