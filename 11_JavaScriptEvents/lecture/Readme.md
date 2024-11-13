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


### WRT the Event Object

Q. Explain how the event object is passed to the event handler when using addEventListener.

The slide discusses limitations when using `addEventListener` to attach an event handler to an element, specifically related to passing parameters to the handler function.

### Key Points Explained

1. **No Parameters Directly Passed to Event Handlers in `addEventListener`**
   - When using `addEventListener`, you specify an event and a function to execute. However, `addEventListener` does not allow you to directly pass custom parameters to this function when the event occurs.
   - The only argument automatically passed to the event handler function is the `event` object, which contains information about the event (e.g., the type of event, the target element, mouse coordinates, etc.).

   For example:
   ```javascript
   button.addEventListener("click", function() {
       alert("Button clicked!"); // No custom parameters passed here
   });
   ```

2. **Using an Anonymous Function to "Get Around" This Limitation**
   - You can work around this limitation by using an anonymous function as a wrapper. The anonymous function itself doesn’t need parameters, but it can call another function inside it and pass parameters to that inner function.
   - This approach lets you "indirectly" pass parameters to a function when handling an event.

   For example:
   ```javascript
   function changeClass(element, newClass) {
       element.className = newClass;
   }

   button.addEventListener("click", function() {
       changeClass(button, "highlight"); // Now you can pass parameters to changeClass
   });
   ```
   - Here, the anonymous function doesn’t take any parameters directly. But inside this anonymous function, you can call `changeClass` with any parameters you want, including the button element and the new class name.

### The Event Object as an "Exception"
   - The slide mentions that the event object is an "exception" because it’s automatically passed to event handler functions by default. This means the `event` object is available in your handler function without needing to explicitly pass it.

   ```javascript
   button.addEventListener("click", function(event) {
       console.log(event.target); // `event` is automatically passed to the function
   });
   ```

### Clarifying the Grammar

The slide’s wording can be a bit unclear. Here’s a clearer way to express it:

> When using `addEventListener`, custom parameters cannot be directly passed to the event handler function. The only parameter automatically passed to the handler is the `event` object, which contains details about the event. To work around this limitation, you can use an anonymous function that calls another function and passes parameters to it.

In summary:
- **No, you cannot pass parameters directly to the event handler function in `addEventListener`**.
- **Yes, you can pass parameters indirectly by using an anonymous function** as a wrapper, which then calls another function with parameters.

Q. with the anonymous function, must we specify the event object as the argument (in our example 'event'), if we desire to use it?

Yes, if you want to access the `event` object within an anonymous function in an `addEventListener` handler, you must specify it as a parameter of the anonymous function.

### Why This Is Necessary

The `event` object is automatically passed to the event handler function, but if you want to reference it, you need to explicitly name it as a parameter. JavaScript won’t implicitly make the `event` object available inside the function unless you declare it.

### Example with `event` Specified

Here’s an example where we use an anonymous function in `addEventListener`, specifying `event` as a parameter so we can access it:

```javascript
button.addEventListener("click", function(event) {
    console.log("Event type:", event.type);  // Accessing event object
    console.log("Button clicked:", event.target);  // Accessing event target
    changeClass(event.target, "highlight");  // Passing the event target as a parameter
});
```

In this example:
- `event` is passed to the anonymous function as a parameter.
- This allows you to use properties of the `event` object, such as `event.type` (to see the type of event) or `event.target` (to see the element that triggered the event).

### Example without `event` Specified

If you omit the `event` parameter, the `event` object is not available in the function:

```javascript
button.addEventListener("click", function() {
    // console.log(event); // This would cause an error because event is not defined
    changeClass(button, "highlight");
});
```

In this case:
- Since `event` is not specified as a parameter, trying to use `event` would result in an error (`event is not defined`).

### Summary

- **Yes**, if you want to use the `event` object inside an anonymous function in `addEventListener`, you must specify `event` (or any name of your choice) as a parameter in the function definition.
- Omitting the parameter means the `event` object is not accessible within that function.

Q. Explain the difference between target and currentTarget of an event object

The `target` and `currentTarget` properties in the `event` object both refer to elements involved in an event, but they serve different purposes and reflect different stages in the event's propagation. Here's a detailed explanation of each:

### `target`

- **Definition**: `event.target` refers to the **original element** that triggered the event. This is the element that the user interacted with, such as the specific button, link, or div they clicked on.
- **Use Case**: `target` is useful when you want to know the exact element that initiated the event, especially if the event bubbles up to a parent element.

### `currentTarget`

- **Definition**: `event.currentTarget` refers to the element whose **event listener is currently being executed**. This is the element to which the event handler is attached.
- **Use Case**: `currentTarget` is helpful when the event listener is attached to a parent element, and you want to know which parent element is handling the event at that particular stage in the propagation process.

### Example to Illustrate the Difference

Consider the following HTML structure:

```html
<div id="parent">
    <button id="child">Click me</button>
</div>
```

If we add an event listener to the parent `div` that listens for click events, both `target` and `currentTarget` would behave differently depending on where the click occurs:

```javascript
const parentDiv = document.getElementById("parent");
parentDiv.addEventListener("click", function(event) {
    console.log("Target:", event.target);         // Element that was clicked
    console.log("CurrentTarget:", event.currentTarget); // Element handling the event (parentDiv in this case)
});
```

- **When clicking the button (`#child`) inside `#parent`**:
  - `event.target` will be the button element (`<button id="child">Click me</button>`), as it is the element that was clicked.
  - `event.currentTarget` will be the parent div (`<div id="parent">`), as that is the element where the event listener was attached and is currently handling the event.

- **When clicking directly on the div (`#parent`)**:
  - Both `event.target` and `event.currentTarget` will refer to `#parent` since the click originated on `#parent`, and it’s also where the event listener is attached.

### Summary

- `target`: Refers to the element that **originally triggered** the event, regardless of where the event listener is attached.
- `currentTarget`: Refers to the element whose **event listener is currently executing**.

This distinction is especially useful when using **event delegation**—attaching a single event listener to a parent element to handle events triggered by its child elements.


