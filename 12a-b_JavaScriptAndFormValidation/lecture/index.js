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

// Change Event for Password Input
passwordInput.addEventListener("change", function() {
    console.log("Password field value changed.");
});

// Change Event for Comments Textarea
commentTextarea.addEventListener("change", function() {
    console.log("Comments field value changed:", commentTextarea.value);
});

/*
Radio Button Selection Logging for Drink Choice
-----------------------------------------------
Attaches change event listeners to each radio button in the drink group
to log the selected value whenever it changes.
*/

// Function to log selected radio button value
function logDrinkSelection(event) {
    const selectedValue = event.target.value;
    console.log("Selected drink:", selectedValue);
}

// Adding change event listeners to drink selection radio buttons
let drinkRadios = document.querySelectorAll('input[name="drink"]');
for (let i = 0; i < drinkRadios.length; i++) {
    drinkRadios[i].addEventListener("change", logDrinkSelection);
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
    const selectedDrink = Array.from(drinkRadios).find(radio => radio.checked)?.value || "None";

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
    console.log("Selected Drink:", selectedDrink);

    document.getElementById("output").innerText = `Form Submitted!
    Username: ${username}
    Title: ${title}
    Selected Drink: ${selectedDrink}
    Comments: ${comments}`;
});
