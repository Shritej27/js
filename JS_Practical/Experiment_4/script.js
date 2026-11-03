
function compareStrings() {
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;

    if (a === "" || b === "") {
        alert("Enter both strings");
        return;
    }

    let answer = "";
    let pair = '"' + a + '" and "' + b + '"';

    // 1. Strict Comparison
    if (a === b) {
        answer += pair + " are strictly equal.\n\n";
    } else {
        answer += pair + " are not strictly equal.\n\n";
    }

    // 2. Loose Comparison
    if (a == b) {
        answer += pair + " are loosely (==) equal.\n\n";
    } else {
        answer += pair + " are not loosely (==) equal.\n\n";
    }

    // 3. Length Comparison
    if (a.length === b.length) {
        answer += pair + " are of the same length.\n\n";
    } else {
        answer += pair + " are of different lengths.\n\n";
    }

    // 4. Alphabetical Comparison
    if (a === b) {
        answer += pair + " are alphabetically the same.\n\n";
    } else if (a < b) {
        answer += pair + " : First comes before second.\n\n";
    } else {
        answer += pair + " : First comes after second.\n\n";
    }

    // 5. User-defined Comparison
    let same = true;

    if (a.length !== b.length) {
        same = false;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                same = false;
                break;
            }
        }
    }

    if (same) {
        answer += pair + " are equal using the user-defined method.";
    } else {
        answer += pair + " are not equal using the user-defined method.";
    }

    document.getElementById("result").textContent = answer;
}

function resetPage() {
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("result").textContent = "";
}
