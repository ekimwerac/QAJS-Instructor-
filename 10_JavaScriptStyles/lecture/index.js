/*
Slide 3: Inspecting the Style Object
-------------------------------------
Demonstrates using console.dir() to inspect the style properties of an element.
*/

function inspectStyleObject() {
    const para = document.getElementById("para1");
    console.dir(para.style);  // Inspect the style object in the console
}

/*
Slide 4: Modifying the Style Object
------------------------------------
Changes the color of a paragraph by directly modifying the style object.
*/

function modifyStyleObject() {
    const para = document.getElementById("para2");
    para.style.backgroundColor = "lightgreen";
    para.style.color = "darkgreen";
}

/*
Slide 5: Specificity Rules
---------------------------
Demonstrates specificity by setting inline style, class, and ID style to the same element.
ID styles override class and tag styles, and inline styles override everything.
*/

function demonstrateSpecificity() {
    const para = document.getElementById("para2");
    para.style.color = "red"; // Inline style (highest specificity)
    para.classList.add("highlight"); // CSS class (lower specificity than inline)
}

/*
Slide 5: Setting Multiple CSS Properties (Object.assign)
---------------------------------------------------------
Demonstrates setting multiple CSS properties at once using Object.assign.
*/

function setMultipleProperties() {
    const container = document.getElementById("container");
    const styles = {
        backgroundColor: "pink",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px gray"
    };
    Object.assign(container.style, styles);
}

/*
Slide 6: CSS Classes and JavaScript
------------------------------------
Demonstrates adding and manipulating CSS classes with JavaScript.
*/

function applyCSSClasses() {
    const para = document.getElementById("para2");
    para.classList.add("highlight", "special");
    // Add both highlight and special classes
}

/*
Slide 7: Obtaining the Computed Style
--------------------------------------
Uses getComputedStyle to retrieve the final, computed style of an element.
*/

function getComputedStyleDemo() {
    const para = document.getElementById("para1");
    const computedStyle = window.getComputedStyle(para);
    console.log("Background Color (Computed):", computedStyle.backgroundColor);
    console.log("Border (Computed):", computedStyle.border);
}

/*
Slide 8: Adding and Removing Classes
-------------------------------------
Demonstrates adding, removing, and toggling classes with classList.
*/

function toggleClasses() {
    const container = document.getElementById("container");
    container.classList.toggle("special");
    // Toggles the "special" class on and off with each button click
}
