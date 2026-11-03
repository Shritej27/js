# Experiment 2: Multiplication Table Using Loops

## Aim
Multiplication Table Using Loops.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Enter any number.
2. Click For Loop, While Loop, or Do While Loop.
3. Observe 1 through 10 multiplication results.
4. Use Reset to clear the number and table.

## Sample input and output

| Test | Expected result |
|---|---|
| Input 5 | 5 x 1 = 5 through 5 x 10 = 50 |

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

**Line 1:** `function table(type) {`  
Explanation: Defines the function named `table`; it runs when called (often by a button).

**Line 2:** `let input = document.getElementById("number").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 3:** `if (input === "") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 4:** `alert("Enter a number");`  
Explanation: Shows a simple popup message to the user.

**Line 5:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 6:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 7:** `let n = Number(input);`  
Explanation: Converts the HTML input text to a number for calculations.

**Line 8:** `let answer = "";`  
Explanation: Starts with an empty string; later characters/results will be added to it.

**Line 9:** `let i = 1;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 11:** `if (type === "for") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 12:** `for (i = 1; i <= 10; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 13:** `answer += n + " x " + i + " = " + (n * i) + "\n";`  
Explanation: Builds text for the next output line; \n means a new line.

**Line 14:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 15:** `} else if (type === "while") {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 16:** `while (i <= 10) {`  
Explanation: Starts a while loop; repeats while the condition remains true.

**Line 17:** `answer += n + " x " + i + " = " + (n * i) + "\n";`  
Explanation: Builds text for the next output line; \n means a new line.

**Line 18:** `i++;`  
Explanation: Increases the loop counter by one.

**Line 19:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 20:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 21:** `do {`  
Explanation: Begins a do-while loop; performs its body before checking the condition.

**Line 22:** `answer += n + " x " + i + " = " + (n * i) + "\n";`  
Explanation: Builds text for the next output line; \n means a new line.

**Line 23:** `i++;`  
Explanation: Increases the loop counter by one.

**Line 24:** `} while (i <= 10);`  
Explanation: Ends the do-while loop; repeats if the condition still holds.

**Line 25:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 26:** `document.getElementById("result").textContent = answer;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 27:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 29:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 30:** `document.getElementById("number").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 31:** `document.getElementById("result").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 32:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- for: initialization, condition, increment together.
- while: check condition before loop.
- do-while: loop runs at least once.

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

