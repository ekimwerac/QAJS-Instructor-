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
document.getElementById("simpleEventButton").onclick = function() {
    alert("Simple Event Registration Clicked!");
};

/*
Slides 7 & 8: Event Listener Registration Model
------------------------------------------------
Using addEventListener to register events, allowing multiple listeners on the same event.
*/

// Uncomment to demonstrate
const eventListenerButton = document.getElementById("eventListenerButton");
eventListenerButton.addEventListener("click", () => alert("First Event Listener"));
eventListenerButton.addEventListener("click", () => alert("Second Event Listener"));

/*
Slide 10: addEventListener & Anonymous Functions
-------------------------------------------------
Demonstrating the use of anonymous functions with addEventListener.
*/

// Uncomment to demonstrate
document.getElementById("anonymousEventButton").addEventListener("click", function() {
    alert("Anonymous function used in event listener!");
});

/*
Slides 11-14: Event Bubbling vs Capturing
------------------------------------------
Event bubbling: Event starts from the deepest element and bubbles up.
Event capturing: Event starts from the outermost element and goes inward.
*/

// Uncomment to demonstrate
document.getElementById("parentDiv").addEventListener("click", () => alert("Parent Div Clicked (Bubbling)"), false);
document.getElementById("childDiv").addEventListener("click", (e) => {
    alert("Child Div Clicked");
    e.stopPropagation();  // Prevents bubbling to parent
}, false);

/*
Slide 15: Removing Event Listeners
------------------------------------
Removing event listeners with removeEventListener.
*/

// Uncomment to demonstrate
const removeEventButton = document.getElementById("removeEventButton");
function showAlert() {
    alert("Event Listener Active");
}
removeEventButton.addEventListener("click", showAlert);

// Uncomment the following to remove event listener
removeEventButton.removeEventListener("click", showAlert);

/*
Slides 16 & 17: The Event Object
---------------------------------
Demonstrating the event object properties and stopPropagation/preventDefault.
*/

// Uncomment to demonstrate
document.getElementById("childDiv").addEventListener("mousedown", function(event) {
    alert(`Mouse at (${event.pageX}, ${event.pageY})`);
    event.stopPropagation();  // Prevents bubbling
});

/*
Slide 18: The 'this' Keyword
------------------------------
Demonstrates how 'this' refers to the element that the event is attached to.
*/

// Uncomment to demonstrate
document.getElementById("thisKeywordButton").addEventListener("click", function() {
    console.log(this);  // 'this' refers to the button element
});

/*
Slides 19-21: Arrow Functions vs Anonymous Functions
-----------------------------------------------------
Arrow functions don’t have their own 'this' context; they inherit it from the parent scope.
*/

// Uncomment to demonstrate
document.getElementById("arrowFunctionButton").addEventListener("click", function() {
    this.disabled = true;
    setTimeout(() => {
        alert("Time's up");
        this.disabled = false;
    }, 1000);
});
