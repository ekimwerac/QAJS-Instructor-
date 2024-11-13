## Demonstration of Module 11: JavaScript Events

Here are the files `index.html`, `styles.css`, and `index.js`, each set up to demonstrate the concepts from the slides in Module 11: JavaScript Events. Each example in `index.js` includes comments to describe the point being demonstrated and can be uncommented for demonstration purposes.

### `index.html`

This HTML file provides the structure and elements to interact with different event models and concepts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Event Demonstrations</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>JavaScript Event Demonstrations</h1>

    <button id="inlineButton" onclick="changeClass()">Inline Event Example</button>
    <button id="simpleEventButton">Simple Event Registration</button>
    <button id="eventListenerButton">Event Listener Registration</button>
    <button id="anonymousEventButton">Anonymous Function with Event Listener</button>
    
    <div id="parentDiv" class="container">
        Parent Div
        <div id="childDiv" class="child">Child Div</div>
    </div>

    <button id="removeEventButton">Remove Event Listener</button>
    <button id="thisKeywordButton">This Keyword Demo</button>
    <button id="arrowFunctionButton">Arrow vs Anonymous Function</button>

    <div id="output"></div>

    <script src="index.js"></script>
</body>
</html>
```

### `styles.css`

This CSS file includes styles to show changes made by JavaScript.

```css
.container {
    width: 200px;
    height: 100px;
    background-color: lightgrey;
    border: 2px solid black;
    padding: 10px;
}

.child {
    width: 100px;
    height: 50px;
    background-color: lightblue;
    border: 2px solid navy;
    margin-top: 10px;
}

.highlight {
    background-color: yellow;
    color: red;
}
```

### `index.js`

This JavaScript file includes code examples for each slide topic, with comments for clarity.

```javascript
/*
Slide 5: Inline Subscription Model
-----------------------------------
An inline event is directly attached in the HTML with onclick.
This is quick and simple, but not ideal for maintainability.
*/

function changeClass() {
    const button = document.getElementById("inlineButton");
    button.classList.toggle("highlight");
}

/*
Slide 6: Simple Event Registration Model
-----------------------------------------
Assigning an event handler directly to a DOM element property.
This approach can limit to a single event per element.
*/

// Uncomment to demonstrate
// document.getElementById("simpleEventButton").onclick = function() {
//     alert("Simple Event Registration Clicked!");
// };

/*
Slides 7 & 8: Event Listener Registration Model
------------------------------------------------
Using addEventListener to register events, allowing multiple listeners on the same event.
*/

// Uncomment to demonstrate
// const eventListenerButton = document.getElementById("eventListenerButton");
// eventListenerButton.addEventListener("click", () => alert("First Event Listener"));
// eventListenerButton.addEventListener("click", () => alert("Second Event Listener"));

/*
Slide 10: addEventListener & Anonymous Functions
-------------------------------------------------
Demonstrating the use of anonymous functions with addEventListener.
*/

// Uncomment to demonstrate
// document.getElementById("anonymousEventButton").addEventListener("click", function() {
//     alert("Anonymous function used in event listener!");
// });

/*
Slides 11-14: Event Bubbling vs Capturing
------------------------------------------
Event bubbling: Event starts from the deepest element and bubbles up.
Event capturing: Event starts from the outermost element and goes inward.
*/

// Uncomment to demonstrate
// document.getElementById("parentDiv").addEventListener("click", () => alert("Parent Div Clicked (Bubbling)"), false);
// document.getElementById("childDiv").addEventListener("click", (e) => {
//     alert("Child Div Clicked");
//     e.stopPropagation();  // Prevents bubbling to parent
// }, false);

/*
Slide 15: Removing Event Listeners
------------------------------------
Removing event listeners with removeEventListener.
*/

// Uncomment to demonstrate
// const removeEventButton = document.getElementById("removeEventButton");
// function showAlert() {
//     alert("Event Listener Active");
// }
// removeEventButton.addEventListener("click", showAlert);

// Uncomment the following to remove event listener
// removeEventButton.removeEventListener("click", showAlert);

/*
Slides 16 & 17: The Event Object
---------------------------------
Demonstrating the event object properties and stopPropagation/preventDefault.
*/

// Uncomment to demonstrate
// document.getElementById("childDiv").addEventListener("mousedown", function(event) {
//     alert(`Mouse at (${event.pageX}, ${event.pageY})`);
//     event.stopPropagation();  // Prevents bubbling
// });

/*
Slide 18: The 'this' Keyword
------------------------------
Demonstrates how 'this' refers to the element that the event is attached to.
*/

// Uncomment to demonstrate
// document.getElementById("thisKeywordButton").addEventListener("click", function() {
//     console.log(this);  // 'this' refers to the button element
// });

/*
Slides 19-21: Arrow Functions vs Anonymous Functions
-----------------------------------------------------
Arrow functions don’t have their own 'this' context; they inherit it from the parent scope.
*/

// Uncomment to demonstrate
// document.getElementById("arrowFunctionButton").addEventListener("click", function() {
//     this.disabled = true;
//     setTimeout(() => {
//         alert("Time's up");
//         this.disabled = false;
//     }, 1000);
// });
```

### Explanation of Each Section in `index.js`

1. **Inline Subscription Model (Slide 5)**:
   - Demonstrates inline event attachment using `onclick` in the HTML file for `changeClass()`.

2. **Simple Event Registration Model (Slide 6)**:
   - Shows assigning an event handler directly to an element’s `onclick` property in JavaScript.
   - Uncomment to see a simple alert on button click.

3. **Event Listener Registration Model (Slides 7 & 8)**:
   - Demonstrates using `addEventListener` to attach multiple listeners to a single event.

4. **addEventListener & Anonymous Functions (Slide 10)**:
   - Uses an anonymous function in `addEventListener` for a button click event.

5. **Event Bubbling vs Capturing (Slides 11-14)**:
   - Demonstrates event bubbling and capturing using `addEventListener` with the third parameter (true for capturing, false for bubbling).
   - Includes `stopPropagation()` to stop events from bubbling up.

6. **Removing Event Listeners (Slide 15)**:
   - Shows how to remove an event listener using `removeEventListener`.
   - The function reference must be identical to the one used in `addEventListener`.

7. **The Event Object (Slides 16 & 17)**:
   - Demonstrates properties of the event object, including `pageX` and `pageY` for mouse position.
   - Uses `stopPropagation` to prevent bubbling of the event.

8. **The 'this' Keyword (Slide 18)**:
   - Shows how `this` in an event handler refers to the element on which the event is attached.

9. **Arrow Functions vs Anonymous Functions (Slides 19-21)**:
   - Demonstrates the difference between arrow functions and anonymous functions in handling `this`.
   - In the example, `this` in the arrow function points to the button element, allowing it to disable and enable the button with a delay.

### How to Use

1. **Load the HTML File**: Open `index.html` in a browser.
2. **Uncomment Code as Needed**: In `index.js`, uncomment specific code blocks to see each example in action.
3. **Observe Console and Alerts**: Some examples output to the console (`console.log()`), while others use alerts to demonstrate functionality.