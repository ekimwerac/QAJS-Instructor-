/*
Slide 1: Introduction
----------------------
Title: JavaScript & The DOM
Purpose: Introduction slide to JavaScript and DOM concepts.
This slide is informational only.
*/
function slide1Intro() {
    document.getElementById("placeholder").innerText = "Introduction to JavaScript and the DOM";
}

/*
Slide 2: What is the DOM?
---------------------------
Narrative:
The DOM represents an HTML document as a tree structure where each element is a node.
*/
function slide2DOMExplanation() {
    document.getElementById("placeholder").innerText = `
        The DOM (Document Object Model) represents the structure of an HTML document as a tree of nodes.
        Each element or text in HTML is represented as a node, allowing JavaScript to interact with it.
    `;
}

/*
Slide 3: The DOM Tree Structure
-------------------------------
Description: HTML documents have a hierarchical structure, where each element except <html> is nested within another.
*/
function slide3DOMTree() {
    document.getElementById("placeholder").innerText = `
        HTML document structure:
        - html
          - head
          - body
            - div
            - p
        Each element is nested within another, forming a parent-child relationship.
    `;
}

/*
Slide 4: HTML to DOM Object Conversion
--------------------------------------
Example: Demonstrates how an HTML <img> element is represented in the DOM.
*/

function slide4HTMLtoDOM() {
    document.getElementById("placeholder").innerHTML = `
        <img id="exampleImage" src="https://via.placeholder.com/100" alt="Sample Image" title="This is a sample image">
    `;
    const imgElement = document.getElementById("exampleImage");
    document.getElementById("placeholder").innerHTML += `
        <p>Image Source: ${imgElement.src}</p>
        <p>Image Alt Text: ${imgElement.alt}</p>
        <p>Image Title: ${imgElement.title}</p>
    `;
}

/*
Slide 5: Selecting Elements
---------------------------
Example of selecting elements using different JavaScript methods.
*/

function slide5SelectingElements() {
    const byId = document.getElementById("placeholder");
    const byTag = document.getElementsByTagName("div");
    const byQuery = document.querySelector("#placeholder");

    document.getElementById("placeholder").innerHTML = `
        Selected by ID: ${byId.tagName} <br>
        Selected by Tag (div): ${byTag.length} elements <br>
        Selected by Query Selector: ${byQuery.tagName}
    `;
}

/*
Slide 6: Basic CSS Selectors in JavaScript
------------------------------------------
Explanation of CSS selector patterns for selecting elements.
*/

function slide6BasicSelectors() {
    document.getElementById("placeholder").innerHTML = `
        <p class="basic">Basic Selector: First paragraph selected</p>
        <p class="basic">Second paragraph with same class</p>
    `;

    const selected = document.querySelector(".basic");
    selected.style.color = "blue";
}

/*
Slide 7: Attribute Selectors
----------------------------
Example of attribute selectors in JavaScript.
*/

function slide7AttributeSelectors() {
    document.getElementById("placeholder").innerHTML = `
        <a href="file.doc">Link ending in .doc</a>
        <a href="http://example.com">Link starting with http</a>
        <a href="namefile.html">Link containing 'name'</a>
    `;
    
    const endsWithDoc = document.querySelectorAll('a[href$=".doc"]');
    const startsWithHttp = document.querySelectorAll('a[href^="http"]');
    const containsName = document.querySelectorAll('a[href*="name"]');

    document.getElementById("placeholder").innerHTML += `
        <p>Links ending with .doc: ${endsWithDoc.length}</p>
        <p>Links starting with http: ${startsWithHttp.length}</p>
        <p>Links containing 'name': ${containsName.length}</p>
    `;
}

/*
Slide 8: Selecting by Position
------------------------------
Using positional selectors in JavaScript.
*/

function slide8SelectingByPosition() {
    document.getElementById("placeholder").innerHTML = `
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    `;
    const lastItem = document.querySelector("li:last-child");
    lastItem.style.fontWeight = "bold";
}

/*
Slide 9: Creating New Elements
------------------------------
Using JavaScript to create new elements and add them to the DOM.
*/

function slide9CreatingNewContent() {
    const newElement = document.createElement("p");
    newElement.textContent = "This paragraph was created dynamically.";
    document.getElementById("placeholder").appendChild(newElement);
}

/*
Slide 10: Using innerHTML and textContent
-----------------------------------------
Shows the difference between innerHTML and textContent.
*/

function slide10InnerHTML() {
    const placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = "<strong>This content was added using innerHTML.</strong>";
}

/*
Slide 11: Old IE Issue with innerHTML
-------------------------------------
InnerHTML usage in older IE versions and the alternative textContent.
This slide is informational.
*/

function slide11OldIEIssue() {
    document.getElementById("placeholder").innerText = `
        Older IE versions had issues with innerHTML. Use textContent for better compatibility.
    `;
}

/*
Slide 12: QuickLab
------------------
Placeholder for practical lab activities.
*/

function slide12QuickLab() {
    document.getElementById("placeholder").innerText = "QuickLab: Try manipulating the DOM based on the examples provided.";
}

/*
Slide 13: Review
----------------
Reviewing key DOM manipulation methods.
*/

function slide13Review() {
    document.getElementById("placeholder").innerText = `
        Key points:
        - Selecting elements using ID, class, tag, and CSS selectors.
        - Manipulating content with innerHTML and textContent.
        - Creating new elements dynamically.
    `;
}

/*
Slide 14: Summary
-----------------
Summarizes the DOM interaction concepts covered.
*/

function slide14Summary() {
    document.getElementById("placeholder").innerText = `
        Summary:
        - The DOM represents an HTML document's structure.
        - JavaScript allows for selection, creation, and modification of elements.
        - innerHTML, textContent, and dynamic creation are essential for DOM manipulation.
    `;
}
