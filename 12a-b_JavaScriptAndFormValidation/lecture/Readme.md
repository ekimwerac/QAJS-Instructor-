## Module 12: JavaScript & Forms

Here’s a setup with `index.html`, `styles.css`, and `index.js` to demonstrate the concepts related to form handling and events in JavaScript.

### `index.html`

This HTML file includes a basic form structure with different input types, buttons, and sections for interacting with form elements. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Form Handling</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>JavaScript Form Handling Demonstrations</h1>

    <form id="demoForm" action="/submit" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="30"></textarea><br><br>

        <label>Preferred Drink:</label>
        <input type="radio" id="tea" name="drink" value="tea">
        <label for="tea">Tea</label>
        <input type="radio" id="coffee" name="drink" value="coffee">
        <label for="coffee">Coffee</label>
        <input type="radio" id="chocolate" name="drink" value="chocolate">
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

### `styles.css`

This CSS file provides basic styling for the form elements.

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

### `index.js`

This JavaScript file contains various examples based on the slide deck to handle form interactions, input selection, and form events.

```javascript
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
```

### Explanation of Each Section in `index.js`

1. **Accessing Form Elements**:
   - Demonstrates selecting form elements using `getElementById` and storing them in variables for easier access.

2. **Accessing Radio Button Values**:
   - Defines a function, `getSelectedRadioValue`, to loop through a group of radio buttons and return the value of the selected button.
   - Logs the selected value for the "drink" radio button group.

3. **Accessing Select Options**:
   - Defines a function, `getSelectedOption`, to log the currently selected option in the "title" dropdown.

4. **Form Submission and Event Interception**:
   - Adds an event listener to intercept form submission using the `submit` event.
   - Checks if the username and password fields are filled in; if not, it prevents submission and alerts the user.

5. **Reset Event**:
   - Adds an event listener for the `reset` event to log a message and update the content of an output div when the form is reset.

6. **Focus, Blur, and Change Events**:
   - Adds event listeners for the `focus`, `blur`, and `change` events on the username input.
   - Logs messages when the username field gains or loses focus and when its value changes.

### How to Use

1. **Load the HTML File**: Open `index.html` in a browser.
2. **Interact with the Form**: Fill out form fields, change values, submit, or reset the form to trigger different events.
3. **Check Console for Logs**: Messages for each event (e.g., field changes, focus events) are logged to the console, providing feedback based on interactions.

This setup covers fundamental form handling and validation concepts in JavaScript, demonstrating events, element selection, and event interception up to the point of regular expressions as specified.