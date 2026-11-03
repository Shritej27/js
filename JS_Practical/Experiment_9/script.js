function onlyLetters(text) {
    return /^[A-Za-z ]+$/.test(text) && text.trim() !== "";
}

function onlyDigits(text, length) {
    return /^\d+$/.test(text) && text.length === length;
}

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let gender = document.getElementById("gender").value;
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let pincode = document.getElementById("pincode").value.trim();

    let message = "";

    if (!name || !address || !city || !state ||
        !gender || !mobile || !email || !pincode) {
        message = "Please fill all fields";
    }
    else if (!onlyLetters(name)) {
        message = "Enter a valid name";
    }
    else if (!onlyLetters(city) || !onlyLetters(state)) {
        message = "Enter valid city and state";
    }
    else if (!onlyDigits(mobile, 10)) {
        message = "Enter valid 10-digit mobile number";
    }
    else if (!validEmail(email)) {
        message = "Enter valid email";
    }
    else if (!onlyDigits(pincode, 6)) {
        message = "Enter valid 6-digit pincode";
    }
    else {
        alert("Congratulations! Form submitted successfully");
        window.location.href = "welcome.html";
        return false;
    }

    document.getElementById("result").textContent = message;
    return false;
}

function resetPage() {
    document.querySelector("form").reset();
    document.getElementById("result").textContent = "";
}
