# Experiment 9: Student Form Validation and Welcome Page

## Aim
Student Form Validation and Welcome Page.

## Files in this experiment

- `index.html`: buttons, text boxes, and output areas.
- `style.css`: simple layout and background.
- `script.js`: logic for the buttons, coded with basic JavaScript.
- `welcome.html`: separate success page after the validated form.

## How to run

Open `index.html` in a browser. No extra software is needed.

## Steps (what to click and what happens)

1. Enter name, address, city, state, gender, mobile, email and pincode.
2. Click Submit to validate every input.
3. Wrong details: a visible error message appears; the entered values stay so you can correct them.
4. Correct details: success alert and welcome.html page.
5. Reset calls JavaScript to clear every input and the error message.

## Sample input and output

| Test | Expected result |
|---|---|
| Name Ram Kumar, city Pune, state Maharashtra, mobile 9876543210, email ram@example.com, pincode 411001 | Welcome page |
| Mobile 1234 | 10-digit error |
| Name Ram123 | letters only error |
| Empty field | Please fill all fields |

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

**Line 1:** `// Accept only English letters and spaces for name, city and state.`  
Explanation: A comment explaining the next code section; JavaScript ignores it.

**Line 2:** `function onlyLetters(text) {`  
Explanation: Defines the function named `onlyLetters`; it runs when called (often by a button).

**Line 3:** `if (text === "") return false;`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 4:** `let hasLetter = false;`  
Explanation: Initializes a flag as false; it becomes true if a match is found.

**Line 5:** `for (let i = 0; i < text.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 6:** `let c = text[i];`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 7:** `if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 8:** `hasLetter = true;`  
Explanation: Marks that the expected character/value was found.

**Line 9:** `} else if (c !== " ") {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 10:** `return false;`  
Explanation: Returns false to stop the form submit (or reject an invalid value).

**Line 11:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 12:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 13:** `return hasLetter;`  
Explanation: Returns the calculated true/false answer from this helper function.

**Line 14:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 16:** `// Check that a text contains only digits and has required length.`  
Explanation: A comment explaining the next code section; JavaScript ignores it.

**Line 17:** `function onlyDigits(text, length) {`  
Explanation: Defines the function named `onlyDigits`; it runs when called (often by a button).

**Line 18:** `if (text.length !== length) return false;`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 19:** `for (let i = 0; i < text.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 20:** `if (text[i] < "0" || text[i] > "9") return false;`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 21:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 22:** `return true;`  
Explanation: Returns true to indicate successful validation.

**Line 23:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 25:** `// Basic email check without regular expressions or built-in search methods.`  
Explanation: A comment explaining the next code section; JavaScript ignores it.

**Line 26:** `function validEmail(email) {`  
Explanation: Defines the function named `validEmail`; it runs when called (often by a button).

**Line 27:** `let at = -1;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 28:** `let dot = -1;`  
Explanation: Declares a variable that will hold a value needed later in the program.

**Line 29:** `for (let i = 0; i < email.length; i++) {`  
Explanation: Starts a for loop with a counter; repeats while the condition stays true.

**Line 30:** `if (email[i] === "@") {`  
Explanation: Finds the @ symbol manually by checking each email character.

**Line 31:** `if (at !== -1) return false;`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 32:** `at = i;`  
Explanation: Sets or updates a value (or builds the text that will be displayed).

**Line 33:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 34:** `if (email[i] === ".") dot = i;`  
Explanation: Finds the final dot in the email text.

**Line 35:** `if (email[i] === " ") return false;`  
Explanation: Rejects any email address containing a blank space.

**Line 36:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 37:** `return at > 0 && dot > at + 1 && dot < email.length - 1;`  
Explanation: Returns the calculated true/false answer from this helper function.

**Line 38:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 40:** `function validateForm() {`  
Explanation: Defines the function named `validateForm`; it runs when called (often by a button).

**Line 41:** `let name = document.getElementById("name").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 42:** `let address = document.getElementById("address").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 43:** `let city = document.getElementById("city").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 44:** `let state = document.getElementById("state").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 45:** `let gender = document.getElementById("gender").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 46:** `let mobile = document.getElementById("mobile").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 47:** `let email = document.getElementById("email").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 48:** `let pincode = document.getElementById("pincode").value;`  
Explanation: Reads the value typed/selected in the HTML field with this id and stores it in a variable.

**Line 49:** `let message = "";`  
Explanation: Starts with an empty string; later characters/results will be added to it.

**Line 51:** `if (name === "" || address === "" || city === "" || state === "" ||`  
Explanation: Checks the condition inside parentheses; if true, executes the next block or statement.

**Line 52:** `gender === "" || mobile === "" || email === "" || pincode === "") {`  
Explanation: Sets or updates a value (or builds the text that will be displayed).

**Line 53:** `message = "Please fill all fields";`  
Explanation: Sets a clear error message describing what the user must correct.

**Line 54:** `} else if (!onlyLetters(name)) {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 55:** `message = "Enter a correct name (letters only)";`  
Explanation: Sets a clear error message describing what the user must correct.

**Line 56:** `} else if (!onlyLetters(city) || !onlyLetters(state)) {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 57:** `message = "City and State must contain letters only";`  
Explanation: Sets a clear error message describing what the user must correct.

**Line 58:** `} else if (!onlyDigits(mobile, 10)) {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 59:** `message = "Enter a valid 10-digit mobile number";`  
Explanation: Sets a clear error message describing what the user must correct.

**Line 60:** `} else if (!validEmail(email)) {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 61:** `message = "Enter a valid email address";`  
Explanation: Sets a clear error message describing what the user must correct.

**Line 62:** `} else if (!onlyDigits(pincode, 6)) {`  
Explanation: If the previous condition failed, check this additional condition.

**Line 63:** `message = "Enter a valid 6-digit pincode";`  
Explanation: Sets a clear error message describing what the user must correct.

**Line 64:** `} else {`  
Explanation: Run this block when the previous condition was false.

**Line 65:** `alert("Congratulations! Form submitted successfully");`  
Explanation: Shows a simple popup message to the user.

**Line 66:** `window.location.href = "welcome.html";`  
Explanation: Opens the separate welcome.html page after successful validation.

**Line 67:** `return false;`  
Explanation: Returns false to stop the form submit (or reject an invalid value).

**Line 68:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 70:** `document.getElementById("result").textContent = message;`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 71:** `return false;`  
Explanation: Returns false to stop the form submit (or reject an invalid value).

**Line 72:** `}`  
Explanation: Closes the current function, loop, or if/else block.

**Line 74:** `function resetPage() {`  
Explanation: Defines the function named `resetPage`; it runs when called (often by a button).

**Line 75:** `document.getElementById("name").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 76:** `document.getElementById("address").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 77:** `document.getElementById("city").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 78:** `document.getElementById("state").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 79:** `document.getElementById("gender").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 80:** `document.getElementById("mobile").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 81:** `document.getElementById("email").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 82:** `document.getElementById("pincode").value = "";`  
Explanation: Finds the HTML input by id and clears its current value.

**Line 83:** `document.getElementById("result").textContent = "";`  
Explanation: Finds the HTML output element by its id and displays/clears its text.

**Line 84:** `}`  
Explanation: Closes the current function, loop, or if/else block.

## Important viva concepts

- Name/city/state checked character-by-character.
- Mobile/pincode checked for exact length and only numeric digits.
- Email uses a basic @ and dot position check, not complete RFC email validation.
- return false stops the form from automatically refreshing/reloading the page.
- welcome.html uses the same linked style.css, with a link back to the form.

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

