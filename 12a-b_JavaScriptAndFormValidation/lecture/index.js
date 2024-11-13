/*
Form Validation and Handling Demonstration
-------------------------------------------
This script covers the following key concepts:
1. Field Validation with Focus, Blur, and Change Events
2. Radio Button Selection Logging
3. Form Submission with Validation
*/

// Selecting form elements
const form = document.getElementById("demoForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const commentTextarea = document.getElementById("comments");
const titleSelect = document.getElementById("title");

/*
Field Validation Events: Focus, Blur, and Change
------------------------------------------------
Demonstrates how to use focus, blur, and change events for individual fields.
*/

// Focus and Blur Events for Username Input
usernameInput.addEventListener("focus", function() {
    console.log("Username field is focused.");
});

usernameInput.addEventListener("blur", function() {
    console.log("Username field lost focus.");
});

// Change Event for Username Input
usernameInput.addEventListener("change", function() {
    console.log("Username field value changed:", usernameInput.value);
});

/*
Radio Button Selection Logging
-------------------------------
Attaches change event listeners to each radio button in the card type group
to log the selected value whenever it changes.
*/

// Function to log selected radio button value
function checkSelection(event) {
    const selectedValue = event.target.value;
    console.log("Selected drink type:", selectedValue);
}

// Adding change event listeners to radio buttons
let drinkTypeRadios = document.querySelectorAll('input[name="drink"]');
for (let i = 0; i < drinkTypeRadios.length; i++) {
    drinkTypeRadios[i].addEventListener("change", checkSelection);
}

/*
Form Submission with Validation
--------------------------------
Demonstrates form submission event with validation.
Prevents actual submission and logs form data instead.
*/

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting to avoid 405 error

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const comments = commentTextarea.value.trim();
    const title = titleSelect.value;
    const selectedDrinkType = Array.from(drinkTypeRadios).find(radio => radio.checked)?.value || "None";

    // Validation
    if (username === "" || password === "") {
        alert("Username and password are required!");
        return;
    }

    // Log the form data
    console.log("Form Data:");
    console.log("Username:", username);
    console.log("Password:", password);  // Note: Avoid logging passwords in real applications
    console.log("Comments:", comments);
    console.log("Title:", title);
    console.log("Selected Card Type:", selectedDrinkType);

    document.getElementById("output").innerText = `Form Submitted!
    Username: ${username}
    Title: ${title}
    Selected Drink Type: ${selectedDrinkType}
    Comments: ${comments}`;
});
