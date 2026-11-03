
let items = [];
let maxSize = 0;

function createArray() {
    maxSize = Number(document.getElementById("size").value);

    if (!Number.isInteger(maxSize) || maxSize <= 0) {
        alert("Enter a positive whole number");
        maxSize = 0;
        return;
    }

    items = [];
    showArray();
    document.getElementById("message").textContent = "";
}

function addItem() {
    let input = document.getElementById("addInput").value;

    if (maxSize === 0) {
        alert("Create array first");
        return;
    }

    if (input.trim() === "") {
        alert("Enter an item");
        return;
    }

    let values = input.split(",");

    if (items.length + values.length > maxSize) {
        alert("Array size exceeded");
        return;
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i].trim() === "") {
            alert("Enter valid items");
            return;
        }
    }

    for (let i = 0; i < values.length; i++) {
        items.push(values[i].trim());
    }

    showArray();
    document.getElementById("message").textContent = "Item added";
}

function removeItem() {
    let value = document.getElementById("removeInput").value.trim();

    if (value === "") {
        alert("Enter item to remove");
        return;
    }

    let position = items.indexOf(value);

    if (position === -1) {
        document.getElementById("message").textContent = "Item not found";
        return;
    }

    items.splice(position, 1);
    showArray();
    document.getElementById("message").textContent = "Item removed";
}

function searchItem() {
    let value = document.getElementById("searchInput").value.trim();

    if (value === "") {
        alert("Enter item to search");
        return;
    }

    if (items.includes(value)) {
        document.getElementById("message").textContent = "Item found";
    } else {
        document.getElementById("message").textContent = "Item not found";
    }
}

function showArray() {
    document.getElementById("result").textContent =
        "Array: [" + items.join(", ") + "]";
}

function emptyArray() {
    items = [];
    showArray();
    document.getElementById("message").textContent = "Array emptied";
}

function resetPage() {
    items = [];
    maxSize = 0;

    document.getElementById("size").value = "";
    document.getElementById("addInput").value = "";
    document.getElementById("removeInput").value = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("message").textContent = "";
}
