# Experiment 8: Homepage Mouseover and Focus Events

## Aim
Homepage Mouseover and Focus Events.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Move mouse over the box -> page turns light blue.
2. Move mouse outside -> original background returns.
3. Click the input box -> page turns light green.
4. Click away -> original background returns.
5. Reset clears text and restores the background.

## Sample input and output

| Test | Expected result |
|---|---|
| Mouseover | light blue |
| Focus | light green |

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

**Line 1:** `function hoverColor() {`  
Explanation: Defines the function named `hoverColor`; it runs when called (often by a button).

**Line 2:** `document.body.style.backgroundColor = "lightblue";`  
Explanation: Changes the web page background color; reset uses the original color.

**Line 3:** `document.getElementById("result").textContent = "Mouseover event";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 4:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 6:** `function focusColor() {`  
Explanation: Defines the function named `focusColor`; it runs when called (often by a button).

**Line 7:** `document.body.style.backgroundColor = "lightgreen";`  
Explanation: Changes the web page background color; reset uses the original color.

**Line 8:** `document.getElementById("result").textContent = "Focus event";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 9:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 11:** `function normalColor() {`  
Explanation: Defines the function named `normalColor`; it runs when called (often by a button).

**Line 12:** `document.body.style.backgroundColor = "#f2f2f2";`  
Explanation: Changes the web page background color; reset uses the original color.

**Line 13:** `document.getElementById("result").textContent = "Normal background";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 14:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 16:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 17:** `document.getElementById("focusInput").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 18:** `document.body.style.backgroundColor = "#f2f2f2";`  
Explanation: Changes the web page background color; reset uses the original color.

**Line 19:** `document.getElementById("result").textContent = "Try mouseover and focus events.";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 20:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- onmouseover runs as mouse enters an element; onmouseout runs on leaving.
- onfocus runs on input selection; onblur runs when focus leaves.
- document.body.style.backgroundColor changes page background.

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

