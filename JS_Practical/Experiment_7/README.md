# Experiment 7: Append Object to an Array; Check Array Type

## Aim
Append Object to an Array; Check Array Type.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Add a normal value with Add Item (optional).
2. Enter name and age; click Append Object.
3. Click Check Array to verify items is an array but the student object is not.
4. Reset clears objects, array and fields.

## Sample input and output

| Test | Expected result |
|---|---|
| Add item 10; student Ram age 20 | [10, {name: Ram, age: 20}] |
| Check Array | items true, student false |

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

**Line 1:** `let items = [];`  
Explanation: Creates a new empty array for storing items.

**Line 2:** `let student = null;`  
Explanation: Creates the student object.

**Line 4:** `function addItem() {`  
Explanation: Defines the function named `addItem`; it runs when called (often by a button).

**Line 5:** `let value = document.getElementById("item").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 6:** `if (value === "") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 7:** `alert("Enter an item");`  
Explanation: Shows a simple popup message to the user.

**Line 8:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 9:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 10:** `items[items.length] = value;`  
Explanation: Manually appends one value at the next free array index; no push() needed.

**Line 11:** `showArray();`  
Explanation: Continues the current step of the program.

**Line 12:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 14:** `function appendObject() {`  
Explanation: Defines the function named `appendObject`; it runs when called (often by a button).

**Line 15:** `let name = document.getElementById("name").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 16:** `let age = Number(document.getElementById("age").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 17:** `if (name === "" || !(age > 0)) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 18:** `alert("Enter student name and positive age");`  
Explanation: Shows a simple popup message to the user.

**Line 19:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 20:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 21:** `student = { name: name, age: age };`  
Explanation: Creates a plain object with name and age entered by the user.

**Line 22:** `items[items.length] = student;`  
Explanation: Manually appends one value at the next free array index; no push() needed.

**Line 23:** `showArray();`  
Explanation: Continues the current step of the program.

**Line 24:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 26:** `function showArray() {`  
Explanation: Defines the function named `showArray`; it runs when called (often by a button).

**Line 27:** `let answer = "Array: [";`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 28:** `for (let i = 0; i < items.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 29:** `if (typeof items[i] === "object") {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 30:** `answer += "{name: " + items[i].name + ", age: " + items[i].age + "}";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 31:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 32:** `answer += items[i];`  
Explanation: Adds the current array item to the output text.

**Line 33:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 34:** `if (i < items.length - 1) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 35:** `answer += ", ";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 36:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 37:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 38:** `answer += "]";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 39:** `document.getElementById("result").textContent = answer;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 40:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 42:** `function checkArray() {`  
Explanation: Defines the function named `checkArray`; it runs when called (often by a button).

**Line 43:** `let answer = "items is Array: " + (items instanceof Array);`  
Explanation: Uses the instanceof operator to test if the value is a JavaScript Array.

**Line 44:** `if (student === null) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 45:** `answer += "\nAppend student object first";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 46:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 47:** `answer += "\nstudent is Array: " + (student instanceof Array);`  
Explanation: Checks whether the value was created as an Array, without Array.isArray().

**Line 48:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 49:** `document.getElementById("result").textContent = answer;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 50:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 52:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 53:** `items = [];`  
Explanation: Creates a fresh empty array, removing previous entries.

**Line 54:** `student = null;`  
Explanation: Sets or updates a value (or builds the text that will be displayed).

**Line 55:** `document.getElementById("item").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 56:** `document.getElementById("name").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 57:** `document.getElementById("age").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 58:** `document.getElementById("result").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 59:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- Object uses { key: value }, e.g., {name: "Ram", age: 20}.
- Array uses [ ] and can contain objects.
- instanceof Array is a basic type-check operator instead of Array.isArray().
- No eval(), push(), forEach(), or JSON.stringify().

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

