# SPPU JavaScript Lab — 9 Simple Experiments (Manual Logic)

## Start here

Open any `Experiment_1` ... `Experiment_9` folder, then open `index.html` in Chrome. Every experiment has:

- `index.html` — inputs, headings and buttons.
- `style.css` — just enough styling to read the page.
- `script.js` — basic JavaScript with loops, conditions and functions.
- `README.md` — objective, steps, sample results, line-by-line JavaScript explanation and viva notes.
- Experiment 9 also has `welcome.html` (linked to the same stylesheet).

## Your requested change

Operations are coded manually: reverse by backward `for` loop; character replacement by `for` loop; palindrome by matching characters; string comparison by comparing positions; array insertion/search/delete with loops and indexes. **NO** `split`, `reverse`, `join`, `replace`, `splice`, `indexOf`, `includes`, `push`, `pop`, `forEach`, `JSON.stringify`, `localeCompare`, `eval`, or regular expressions are used.

**Necessary basics remain**: `document.getElementById`, `.value`, `.textContent` (to connect JavaScript with HTML), `Number` (numeric input), `Math.sqrt` for Heron's formula, `Date` and `setInterval/clearInterval` for a real countdown. These are not shortcuts for the string/array algorithms.

## Experiment order

1. Triangle/rectangle/circle areas
2. Multiplication table (for, while, do-while)
3. Reverse, replace character, palindrome (manual loops)
4. Compare two strings (manual loop + operators)
5. Countdown timer
6. Create/add/remove/check/empty array (manual array operations)
7. Add object to array and check array type
8. Home page: mouseover and focus changes
9. Student form validations and welcome page

## How the three files are connected

`<link rel="stylesheet" href="style.css">` in the HTML `<head>` loads the CSS.

`<script src="script.js"></script>` just before `</body>` loads JavaScript.

`onclick="reverseText()"` on a button runs a named JavaScript function. Other relevant events: `onmouseover`, `onmouseout`, `onfocus`, `onblur`, `onsubmit`.

## How to explain any experiment to the examiner

1. HTML creates the webpage and its input, button and output elements.
2. CSS changes the look; it does not calculate anything.
3. JavaScript reads the input with `document.getElementById("id").value`.
4. A function performs the operation using variables, loops, if/else and operators.
5. JavaScript shows the answer in an element using `.textContent`.
6. Reset clears data and output, stopping the timer where applicable.

**No Node.js, packages or internet required.**

## Important exam notes

- For Experiment 3, palindrome checking is intentionally *case-sensitive*, including spaces: `madam` is palindrome but `Madam` is not.
- Experiment 4's `<` comparison follows JavaScript character-code ordering, so use same-case words in demos.
- Experiment 6 keeps text items. `10` typed in the input is stored as the string `"10"`, which is fine for adding, finding and deleting.
- Experiment 9's email check is intentionally basic, appropriate for a lab demonstration, not production signup security.
