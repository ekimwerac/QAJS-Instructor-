Below is the complete setup for a form handling demonstration, including `index.html`, `styles.css`, and `index.js`, followed by a walkthrough guide.

---

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Form Handling Demonstration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>JavaScript Form Handling Demonstration</h1>

    <form id="demoForm" action="/submit" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="30"></textarea><br><br>

        <label>Preferred Drink:</label>
        <input type="radio" id="tea" name="drink" value="Tea">
        <label for="tea">Tea</label>
        <input type="radio" id="coffee" name="drink" value="Coffee">
        <label for="coffee">Coffee</label>
        <input type="radio" id="chocolate" name="drink" value="Chocolate">
        <label for="chocolate">Chocolate</label><br><br>

        <label for="title">Title:</label>
        <select id="title" name="title">
            <option value="Dr">Dr</option>
            <option value="Ms">Ms</option>
            <option value="Mr">Mr</option>
        </select><br><br>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>

    <div id="output"></div>

    <script src="index.js"></script>
</body>
</html>
```

---

### `styles.css`

```css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h1 {
    color: #333;
}

form {
    max-width: 400px;
    margin-top: 20px;
}

label {
    display: inline-block;
    width: 100px;
}

input, textarea, select, button {
    margin-top: 5px;
    padding: 8px;
    font-size: 1em;
}

#output {
    margin-top: 20px;
    font-style: italic;
    color: #333;
}
```

---

### `index.js`

```javascript
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
```

---

### Walkthrough Guide for README

#### How to Use This Form Handling Demonstration

This demonstration showcases various JavaScript form-handling techniques, including field validation, radio button selection, and form submission with custom validation.

1. **Field Validation Events: Focus, Blur, and Change**

    - **Goal**: To observe `focus`, `blur`, and `change` events in action.
    - **Steps**:
        - Click on the **Username** field to see a `focus` event logged in the console.
        - Click away to trigger a `blur` event, which logs a message in the console.
        - Change the content of **Username**, **Password**, or **Comments** fields to trigger `change` events. Each event logs the new value or change message in the console.

2. **Radio Button Selection Logging for Drink Choice**

    - **Goal**: To log the selected drink whenever a new option is chosen.
    - **Steps**:
        - Select one of the radio buttons under **Preferred Drink** (Tea, Coffee, or Chocolate).
        - The `change` event on each button logs the selected drink choice to the console immediately.

3. **Form Submission with Validation**

    - **Goal**: To simulate form submission with validation checks and display the results.
    - **Steps**:
        - Click the **Submit** button.
        - If either **Username** or **Password** is empty, an alert message appears, and submission is halted.
        - When all fields are filled, the form data is logged to the console, and a summary appears in the `#output` div.
        - **Reset** button clears all fields and resets the form.

#### Summary

- **Username**: Validates focus, blur, and change events.
- **Drink Selection**: Logs changes to the selected drink.
- **Form Submission**: Prevents actual submission, validates required fields, and provides feedback with logged data and on-page summary.

This setup provides an interactive way to see JavaScript handling form interactions and validation.