# Experiment 6: Array Create, Add, Remove, Search and Empty (Manual Loops)

## Aim
Array Create, Add, Remove, Search and Empty (Manual Loops).

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Create an array using a maximum size, e.g., 3.
2. Add text/numbers one item at a time until size limit.
3. Use Search to check an item.
4. Use Remove to delete the FIRST matching item (manual shifting).
5. Use Empty Array to remove all items.
6. Reset clears array, size, inputs and messages.

## Sample input and output

| Test | Expected result |
|---|---|
| Size 3, add 10 and 20 | [10, 20] |
| Search 20 | Item found |
| Remove 10 | [20] |
| Empty | [] |

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

**Line 2:** `let maxSize = 0;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 4:** `function createArray() {`  
Explanation: Defines the function named `createArray`; it runs when called (often by a button).

**Line 5:** `maxSize = Number(document.getElementById("size").value);`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 6:** `if (!(maxSize > 0) || maxSize % 1 !== 0) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 7:** `alert("Enter a positive whole number for size");`  
Explanation: Shows a simple popup message to the user.

**Line 8:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 9:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 10:** `items = [];`  
Explanation: Creates a fresh empty array, removing previous entries.

**Line 11:** `showArray();`  
Explanation: Continues the current step of the program.

**Line 12:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 14:** `function addItem() {`  
Explanation: Defines the function named `addItem`; it runs when called (often by a button).

**Line 15:** `let value = document.getElementById("addInput").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 16:** `if (maxSize === 0) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 17:** `alert("Create array first");`  
Explanation: Shows a simple popup message to the user.

**Line 18:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 19:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 20:** `if (value === "" || items.length >= maxSize) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 21:** `alert("Enter an item or check array size");`  
Explanation: Shows a simple popup message to the user.

**Line 22:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 23:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 24:** `items[items.length] = value;`  
Explanation: Manually appends one value at the next free array index; no push() needed.

**Line 25:** `showArray();`  
Explanation: Continues the current step of the program.

**Line 26:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 28:** `function removeItem() {`  
Explanation: Defines the function named `removeItem`; it runs when called (often by a button).

**Line 29:** `let value = document.getElementById("removeInput").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 30:** `let position = -1;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 31:** `for (let i = 0; i < items.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 32:** `if (items[i] === value) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 33:** `position = i;`  
Explanation: Stores the index of the matching element so it can be removed.

**Line 34:** `break;`  
Explanation: Exits the loop once the needed answer or mismatch is found.

**Line 35:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 36:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 37:** `if (position === -1) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 38:** `document.getElementById("message").textContent = "Item not found";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 39:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 40:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 41:** `for (let i = position; i < items.length - 1; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 42:** `items[i] = items[i + 1];`  
Explanation: Shifts the next array element one place left to overwrite the deleted item.

**Line 43:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 44:** `items.length = items.length - 1;`  
Explanation: Shortens the array by one after shifting its elements.

**Line 45:** `showArray();`  
Explanation: Continues the current step of the program.

**Line 46:** `document.getElementById("message").textContent = "Item removed";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 47:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 49:** `function searchItem() {`  
Explanation: Defines the function named `searchItem`; it runs when called (often by a button).

**Line 50:** `let value = document.getElementById("searchInput").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 51:** `let found = false;`  
Explanation: Initializes a flag as false; it becomes true if a match is found.

**Line 52:** `for (let i = 0; i < items.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 53:** `if (items[i] === value) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 54:** `found = true;`  
Explanation: Marks that the expected character/value was found.

**Line 55:** `break;`  
Explanation: Exits the loop once the needed answer or mismatch is found.

**Line 56:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 57:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 58:** `if (found) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 59:** `document.getElementById("message").textContent = "Item found";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 60:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 61:** `document.getElementById("message").textContent = "Item not found";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 62:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 63:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 65:** `function showArray() {`  
Explanation: Defines the function named `showArray`; it runs when called (often by a button).

**Line 66:** `let answer = "Array: [";`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 67:** `for (let i = 0; i < items.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 68:** `answer += items[i];`  
Explanation: Adds the current array item to the output text.

**Line 69:** `if (i < items.length - 1) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 70:** `answer += ", ";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 71:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 72:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 73:** `answer += "]";`  
Explanation: Adds another piece of text/character to the result using +=

**Line 74:** `document.getElementById("result").textContent = answer;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 75:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 77:** `function emptyArray() {`  
Explanation: Defines the function named `emptyArray`; it runs when called (often by a button).

**Line 78:** `items = [];`  
Explanation: Creates a fresh empty array, removing previous entries.

**Line 79:** `showArray();`  
Explanation: Continues the current step of the program.

**Line 80:** `document.getElementById("message").textContent = "Array emptied";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 81:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 83:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 84:** `items = [];`  
Explanation: Creates a fresh empty array, removing previous entries.

**Line 85:** `maxSize = 0;`  
Explanation: Stores or checks the maximum number of elements allowed.

**Line 86:** `document.getElementById("size").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 87:** `document.getElementById("addInput").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 88:** `document.getElementById("removeInput").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 89:** `document.getElementById("searchInput").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 90:** `document.getElementById("result").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 91:** `document.getElementById("message").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 92:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- No push(), pop(), splice(), indexOf(), includes(), or join().
- items[items.length] = value manually appends an item.
- Shifting elements one position left removes a selected item.
- Items are stored as text, so search 10 matches typed 10 exactly.

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

