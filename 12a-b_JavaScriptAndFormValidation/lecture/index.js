/*
Understanding Forms and Selecting Elements
-------------------------------------------
Demonstrates accessing form elements using DOM methods.
*/

const form = document.getElementById("demoForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const commentTextarea = document.getElementById("comments");
const titleSelect = document.getElementById("title");

/*
Slide: Accessing Radio Button Values
-------------------------------------
Shows how to access the value of a selected radio button.
*/

function getSelectedRadioValue(name) {
    const radios = document.getElementsByName(name);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

// Example usage:
console.log("Selected drink:", getSelectedRadioValue("drink"));

/*
Slide: Accessing Select Options
--------------------------------
Shows how to get the selected option value from a dropdown.
*/

function getSelectedOption() {
    const selectedOption = titleSelect.value;
    console.log("Selected title:", selectedOption);
}

// Example usage:
getSelectedOption();

/*
Slide: Form Submission and Event Interception
----------------------------------------------
Demonstrates intercepting form submission to validate input fields.
*/

form.addEventListener("submit", function(event) {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "" || password === "") {
        event.preventDefault();  // Prevent form submission
        alert("Username and password are required!");
    } else {
        console.log("Form submitted with:", { username, password });
    }
});

/*
Slide: Reset Event
-------------------
Demonstrates the onreset event to handle form reset actions.
*/

form.addEventListener("reset", function() {
    console.log("Form reset");
    document.getElementById("output").textContent = "The form has been reset.";
});

/*
Slide: Focus, Blur, and Change Events
--------------------------------------
Shows handling of focus, blur, and change events on input fields.
*/

usernameInput.addEventListener("focus", function() {
    console.log("Username field is focused.");
});

usernameInput.addEventListener("blur", function() {
    console.log("Username field lost focus.");
});

usernameInput.addEventListener("change", function() {
    console.log("Username field value changed:", usernameInput.value);
});
