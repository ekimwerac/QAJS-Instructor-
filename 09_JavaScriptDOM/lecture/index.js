/*
Slide 6: Basic Selectors
-------------------------
Demonstrates selecting elements by ID, class, and tag.
Uncomment individual selectors to see each in action.
*/

// Select by ID
// const introParagraph = document.getElementById("intro");
// introParagraph.style.color = "blue";

// Select by class name (all elements with class "text")
// const textElements = document.getElementsByClassName("text");
// Array.from(textElements).forEach((el) => {
//     el.style.backgroundColor = "lightyellow";
// });

// Select by tag name (all paragraph elements)
// const allParagraphs = document.getElementsByTagName("p");
// Array.from(allParagraphs).forEach((el) => {
//     el.style.fontStyle = "italic";
// });

/*
Slide 8: Child, Container, and Attribute Selectors
--------------------------------------------------
Demonstrates using CSS selectors to select elements by child, container, and attribute.
*/

// Child selector: selects direct child links within the container
// const childLinks = document.querySelectorAll(".child-container > a");
// childLinks.forEach((link) => {
//     link.style.color = "purple";
// });

// Attribute selector: selects links based on their href attributes
// const endsWithDoc = document.querySelectorAll('a[href$=".doc"]');
// endsWithDoc.forEach((link) => {
//     link.style.border = "1px solid red";
// });

// const startsWithHttp = document.querySelectorAll('a[href^="http"]');
// startsWithHttp.forEach((link) => {
//     link.style.border = "1px solid green";
// });

// const containsName = document.querySelectorAll('a[href*="name"]');
// containsName.forEach((link) => {
//     link.style.border = "1px solid blue";
// });

/*
Slide 10: Selecting by Position
-------------------------------
Uses positional selectors to highlight the first and last elements in a list or container.
*/

// Select the first and last paragraph within the container
// const firstParagraph = document.querySelector("p:first-of-type");
// firstParagraph.style.fontWeight = "bold";

// const lastParagraph = document.querySelector("p:last-of-type");
// lastParagraph.style.fontWeight = "bold";

/*
Slide 11: Adding New Content
----------------------------
Demonstrates adding new content dynamically using JavaScript.
*/

// Adding a new paragraph to the "output" section
// function addNewContent() {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "This is a new paragraph added to the DOM.";
//     document.getElementById("placeholder").appendChild(newParagraph);
// }
// addNewContent();

// Using innerHTML to add styled content quickly
// function updateContentWithInnerHTML() {
//     const placeholder = document.getElementById("placeholder");
//     placeholder.innerHTML = "<strong>This content was added using innerHTML.</strong>";
// }
// updateContentWithInnerHTML();
