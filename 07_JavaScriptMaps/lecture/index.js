/*
Slide 1: Introduction to the Document Object Model (DOM)
---------------------------------------------------------
JavaScript Fundamentals - Interactive Demo
Click buttons in the HTML file to see each example in action.
*/

/*
Slide 2: Displaying the DOM Structure
---------------------------------------------------------
Description: Display the DOM structure of a basic HTML document.
*/
function showDOMStructure() {
    const structure = `
        Document: ${document.nodeName}
        Head: ${document.head.nodeName}
        Body: ${document.body.nodeName}
    `;
    document.getElementById("placeholder").innerText = structure;
}

/*
Slide 3: Creating and Appending a New Image Node
---------------------------------------------------------
Description: This function creates an image node and appends it to the DOM.
*/
function createImageNode() {
    const img = document.createElement("img");
    img.id = "myImage";
    img.src = "https://via.placeholder.com/150";
    img.alt = "Placeholder Image";
    img.title = "This is a dynamically created image";
    document.getElementById("placeholder").appendChild(img);
}

/*
Slide 4: Selecting Elements
---------------------------------------------------------
Description: Demonstrates selecting elements using various methods.
*/
function selectElements() {
    // Selecting elements in different ways
    const elementById = document.getElementById("placeholder");
    const firstButton = document.querySelector("button");
    const allDivs = document.getElementsByTagName("div");
    
    // Display the results
    elementById.innerHTML = `
        <p>Element by ID: ${elementById.tagName}</p>
        <p>First Button Text: ${firstButton.innerText}</p>
        <p>Total Divs on Page: ${allDivs.length}</p>
    `;
}

/*
Slide 5: Using Attribute Selectors
---------------------------------------------------------
Description: Demonstrates selecting elements by attribute.
*/
function useAttributeSelectors() {
    // Adding sample anchor elements
    document.getElementById("placeholder").innerHTML = `
        <a href="document.doc">Document</a>
        <a href="http://example.com">Example</a>
        <a href="namefile.html">Name File</a>
    `;
    // Using attribute selectors
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
Slide 6: Adding a New Paragraph
---------------------------------------------------------
Description: Adds a new paragraph to the DOM using DOM programming.
*/
function addNewParagraph() {
    const newParagraph = document.createElement("p");
    const text = document.createTextNode("This is a new paragraph added to the DOM.");
    newParagraph.appendChild(text);
    document.getElementById("placeholder").appendChild(newParagraph);
}

/*
Slide 7: Updating Content with innerHTML
---------------------------------------------------------
Description: Demonstrates updating content quickly with innerHTML.
*/
function updateContentWithInnerHTML() {
    const container = document.getElementById("placeholder");
    container.innerHTML = "<strong>Updated Content:</strong> This content was added using innerHTML.";
}

/*
Slide 8: Summary & Review
---------------------------------------------------------
Description: This section summarizes the capabilities of JavaScript for manipulating the DOM.
*/
function summary() {
    document.getElementById("placeholder").innerText = `
        Summary:
        - JavaScript can manipulate HTML structure dynamically.
        - Elements can be selected, created, and modified in various ways.
        - innerHTML, textContent, and the DOM API are powerful tools for interactive content.
    `;
}
