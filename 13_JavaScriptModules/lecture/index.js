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

