# Experiment 1: Area of Triangle, Rectangle and Circle

## Aim
Area of Triangle, Rectangle and Circle.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Enter three sides of a triangle and click Triangle Area (Heron formula).
2. Enter length and breadth and click Rectangle Area.
3. Enter radius and click Circle Area.
4. Click Reset to clear all inputs and answers.

## Sample input and output

| Test | Expected result |
|---|---|
| Triangle sides 3, 4, 5 | area 6 |
| Rectangle 4 and 5 | area 20 |
| Circle radius 2 | area 12.56 |

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

**Line 1:** `// Calculate triangle area using Heron's formula.`  
Explanation: A comment explaining the next code section; JavaScript ignores it.

**Line 2:** `function triangle() {`  
Explanation: Defines the function named `triangle`; it runs when called (often by a button).

**Line 3:** `let a = Number(document.getElementById("sideA").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 4:** `let b = Number(document.getElementById("sideB").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 5:** `let c = Number(document.getElementById("sideC").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 7:** `if (!(a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a)) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 8:** `document.getElementById("triangleResult").textContent = "Enter valid triangle sides";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 9:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 10:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 12:** `let s = (a + b + c) / 2;`  
Explanation: Calculates triangle semi-perimeter s=(a+b+c)/2.

**Line 13:** `let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));`  
Explanation: Calculates triangle area using Heron’s formula and square root.

**Line 14:** `document.getElementById("triangleResult").textContent = "Area = " + area;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 15:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 17:** `function rectangle() {`  
Explanation: Defines the function named `rectangle`; it runs when called (often by a button).

**Line 18:** `let l = Number(document.getElementById("length").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 19:** `let b = Number(document.getElementById("breadth").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 20:** `if (!(l > 0 && b > 0)) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 21:** `alert("Enter positive length and breadth");`  
Explanation: Shows a simple popup message to the user.

**Line 22:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 23:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 24:** `document.getElementById("rectangleResult").textContent = "Area = " + (l * b);`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 25:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 27:** `function circle() {`  
Explanation: Defines the function named `circle`; it runs when called (often by a button).

**Line 28:** `let r = Number(document.getElementById("radius").value);`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 29:** `if (!(r > 0)) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 30:** `alert("Enter a positive radius");`  
Explanation: Shows a simple popup message to the user.

**Line 31:** `return;`  
Explanation: Stops this function immediately to avoid continuing after an error.

**Line 32:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 33:** `document.getElementById("circleResult").textContent = "Area = " + (3.14 * r * r);`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 34:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 36:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 37:** `document.getElementById("sideA").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 38:** `document.getElementById("sideB").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 39:** `document.getElementById("sideC").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 40:** `document.getElementById("length").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 41:** `document.getElementById("breadth").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 42:** `document.getElementById("radius").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 43:** `document.getElementById("triangleResult").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 44:** `document.getElementById("rectangleResult").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 45:** `document.getElementById("circleResult").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 46:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- Formula: triangle area = square root of s(s-a)(s-b)(s-c), where s=(a+b+c)/2.
- Rectangle area = length x breadth; circle area = 3.14 x radius x radius.
- Math.sqrt() only calculates the square root; the formulas and checks are written by you.

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

