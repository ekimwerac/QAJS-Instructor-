13 JavaScript Modules

---

### `index.html`

This HTML file sets up a form where users can input values to calculate the area of a circle, triangle, square, or rectangle.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shape Area Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Shape Area Calculator</h1>
    <form id="shapeForm">
        <label for="shape">Select Shape:</label>
        <select id="shape" name="shape">
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
            <option value="square">Square</option>
            <option value="rectangle">Rectangle</option>
        </select><br><br>

        <div id="inputs">
            <label for="radius">Radius:</label>
            <input type="number" id="radius" name="radius" step="any"><br>

            <label for="base">Base:</label>
            <input type="number" id="base" name="base" step="any"><br>

            <label for="height">Height:</label>
            <input type="number" id="height" name="height" step="any"><br>

            <label for="side">Side:</label>
            <input type="number" id="side" name="side" step="any"><br>

            <label for="length">Length:</label>
            <input type="number" id="length" name="length" step="any"><br>

            <label for="width">Width:</label>
            <input type="number" id="width" name="width" step="any"><br>
        </div>

        <button type="button" id="calculateButton">Calculate Area</button>
    </form>

    <div id="output"></div>

    <script type="module" src="index.js"></script>
</body>
</html>
```

---

### `styles.css`

This CSS file styles the form and output elements.

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
    margin-top: 10px;
}

input, select, button {
    margin-top: 5px;
    padding: 8px;
    font-size: 1em;
}

#output {
    margin-top: 20px;
    font-weight: bold;
    color: #333;
}
```

---

### `module.js`

This JavaScript module provides functions to calculate the areas of various shapes. It uses the `export` keyword to make the functions available for import.

```javascript
// module.js

export function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

export function areaTriangle(base, height) {
    return 0.5 * base * height;
}

export function areaSquare(side) {
    return side * side;
}

export function areaRectangle(length, width) {
    return length * width;
}
```

---

### `index.js`

This JavaScript file imports the shape area functions from `module.js`, handles form interactions, and triggers the correct calculation based on the selected shape.

```javascript
// index.js

import { areaCircle, areaTriangle, areaSquare, areaRectangle } from './module.js';

const form = document.getElementById("shapeForm");
const shapeSelect = document.getElementById("shape");
const outputDiv = document.getElementById("output");
const calculateButton = document.getElementById("calculateButton");

// Function to hide/show relevant input fields based on shape selection
function updateInputs() {
    const shape = shapeSelect.value;
    document.getElementById("radius").style.display = (shape === "circle") ? "inline-block" : "none";
    document.getElementById("base").style.display = (shape === "triangle") ? "inline-block" : "none";
    document.getElementById("height").style.display = (shape === "triangle") ? "inline-block" : "none";
    document.getElementById("side").style.display = (shape === "square") ? "inline-block" : "none";
    document.getElementById("length").style.display = (shape === "rectangle") ? "inline-block" : "none";
    document.getElementById("width").style.display = (shape === "rectangle") ? "inline-block" : "none";
}

// Event listener for shape selection change
shapeSelect.addEventListener("change", updateInputs);
updateInputs(); // Initial call to set correct input fields

// Event listener for calculate button
calculateButton.addEventListener("click", function() {
    const shape = shapeSelect.value;
    let area = 0;

    switch (shape) {
        case "circle":
            const radius = parseFloat(document.getElementById("radius").value);
            area = areaCircle(radius);
            break;
        case "triangle":
            const base = parseFloat(document.getElementById("base").value);
            const height = parseFloat(document.getElementById("height").value);
            area = areaTriangle(base, height);
            break;
        case "square":
            const side = parseFloat(document.getElementById("side").value);
            area = areaSquare(side);
            break;
        case "rectangle":
            const length = parseFloat(document.getElementById("length").value);
            const width = parseFloat(document.getElementById("width").value);
            area = areaRectangle(length, width);
            break;
    }

    outputDiv.textContent = `The area of the ${shape} is ${area.toFixed(2)}`;
});
```

---

### Walkthrough Guide for README

#### Shape Area Calculator with JavaScript Modules

This demonstration calculates the area of different shapes using JavaScript modules. It includes a form for user input and a JavaScript module for area calculations.

#### Instructions

1. **Setup**:
    - This setup includes the following files:
      - `index.html`: Main HTML structure.
      - `styles.css`: Styles for form layout and output.
      - `module.js`: Contains functions to calculate the areas of various shapes.
      - `index.js`: Main JavaScript file that imports functions from `module.js` and handles user interactions.

2. **How to Use**:
    - Open `index.html` in a browser that supports JavaScript modules (most modern browsers).
    - Select a shape from the dropdown menu in the **Shape Area Calculator** form.
    - Based on the shape, relevant input fields will appear:
      - **Circle**: Enter a radius.
      - **Triangle**: Enter a base and height.
      - **Square**: Enter the side length.
      - **Rectangle**: Enter the length and width.
    - Click **Calculate Area** to see the result.
    - The calculated area will appear below the form.

3. **File Descriptions**:
    - **index.html**: Contains the form with dropdown and inputs. It also links `index.js` as a module.
    - **styles.css**: Provides a simple layout for the form and output section.
    - **module.js**: Exports four functions for calculating area:
      - `areaCircle(radius)`: Area of a circle.
      - `areaTriangle(base, height)`: Area of a triangle.
      - `areaSquare(side)`: Area of a square.
      - `areaRectangle(length, width)`: Area of a rectangle.
    - **index.js**:
      - Imports functions from `module.js`.
      - Handles shape selection, displays relevant input fields, and calculates the area upon button click.

4. **Concepts Demonstrated**:
    - **JavaScript Modules**: `module.js` exports functions, which are then imported into `index.js`.
    - **Dynamic Form Fields**: The form dynamically shows or hides inputs based on the selected shape.
    - **Event Handling**: Event listeners for shape selection and button clicks.
    - **Switch Statements**: The `switch` statement in `index.js` directs calculations to the correct function based on shape.

5. **Technical Requirements**:
    - Make sure the HTML file is served locally or opened in a modern browser with module support (`<script type="module" src="index.js"></script>`).
