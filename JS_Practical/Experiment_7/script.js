
let items = [];
let student = null;

function addItem() {
    let input = document.getElementById("item").value;

    if (input.trim() === "") {
        alert("Enter an item");
        return;
    }

    let values = input.split(",");

    for (let i = 0; i < values.length; i++) {
        items.push(values[i].trim());
    }

    showArray();
}

function appendObject() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let type = document.getElementById("type").value;

    if (name.trim() === "" || age <= 0) {
        alert("Enter valid name and age");
        return;
    }

    if (type === "object") {
        student = { name: name, age: age };
    }
    else {
        student = [name, age];
    }

    items.push(student);
    showArray();
}

function showArray() {
    document.getElementById("result").textContent =
        "Array: " + JSON.stringify(items);
}

function checkArray() {
    let answer = "items is Array: " + Array.isArray(items);

    if (student === null) {
        answer += "\nAppend object or array first";
    }
    else {
        answer += "\nstudent is Array: " + Array.isArray(student);
    }

    document.getElementById("result").textContent = answer;
}

function resetPage() {
    items = [];
    student = null;

    document.getElementById("item").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("type").value = "object";
    document.getElementById("result").textContent = "";
}
