Q 1. explain the following from the updateInputs function. What is inline-block, what is none, what is display?
```javascript
document.getElementById("height").style.display = (shape === "triangle") ? "inline-block" : "none";
```


A 1.

In the `updateInputs` function, the following line:

```javascript
document.getElementById("height").style.display = (shape === "triangle") ? "inline-block" : "none";
```

uses JavaScript to dynamically control the **display** of the `height` input field based on the selected shape. Let’s break down each part:

### 1. `display` Property

- **What it is**: The `display` property in CSS controls how an element is visually displayed in the browser.
- **Common values**:
  - `block`: Displays the element as a block, taking up the full width available. Block elements always start on a new line.
  - `inline`: Displays the element inline, only taking up as much width as its content. Inline elements don’t start on a new line and don’t allow width and height adjustments.
  - `inline-block`: Combines characteristics of `inline` and `block`. It allows the element to flow inline with other elements (side-by-side) but also respects width and height properties.
  - `none`: Hides the element completely, making it invisible on the page and removing it from the layout (the space it would occupy is removed).

### 2. `"inline-block"` Value

- **Purpose**: `inline-block` makes an element behave like an inline element (i.e., it can appear side-by-side with other elements) while still allowing you to adjust its width, height, padding, and margin like a block element.
- **Use in the Code**: Setting `display` to `"inline-block"` makes the `height` input field appear as an inline element, allowing it to appear in line with other fields while still keeping control over its size.

### 3. `"none"` Value

- **Purpose**: Setting `display` to `"none"` completely hides the element. It doesn’t just make it invisible but removes it from the document layout entirely, as if it were not there.
- **Use in the Code**: In the code, when the selected shape is not `"triangle"`, setting `display` to `"none"` hides the `height` input field, preventing it from showing on the form.

### 4. Conditional Assignment

- **Explanation**: The conditional expression `(shape === "triangle") ? "inline-block" : "none"` checks if the selected shape is `"triangle"`. 
  - If `shape` is `"triangle"`, it sets `display` to `"inline-block"` to show the `height` field.
  - If `shape` is anything else, it sets `display` to `"none"` to hide the field.

### Summary

This line:

```javascript
document.getElementById("height").style.display = (shape === "triangle") ? "inline-block" : "none";
```

- **Checks** if the shape is a triangle.
- **Sets the display** property of the `height` field to `"inline-block"` (making it visible and inline) if the shape is a triangle.
- **Sets the display** property to `"none"` (hiding it) if the shape is not a triangle.

This dynamic control allows the form to show only the input fields relevant to the selected shape, providing a streamlined and user-friendly experience.


Q 2. what part of the code adds the increment and decrement components to the height, width, radius fields?

In HTML, **increment** and **decrement** buttons typically appear next to numerical input fields (`<input type="number">`). These buttons are automatically provided by the browser for number input fields, allowing users to increment or decrement the value by clicking on the buttons.

### How the Increment and Decrement Buttons Appear

In the provided `index.html`, fields like `radius`, `height`, `width`, and others that require numerical values are defined as `<input type="number">`. For example:

```html
<input type="number" id="radius" name="radius" step="any">
```

#### Key Parts of This Code

1. **`type="number"`**: The `number` input type automatically adds increment (`▲`) and decrement (`▼`) controls in most browsers. These buttons allow the user to increase or decrease the field’s value.
  
2. **`step="any"`**: The `step` attribute determines the amount by which the value will change when the increment or decrement buttons are clicked. 
   - Setting `step="any"` allows the user to input decimal values as well, without restricting increments to specific integers.
   - Omitting `step` or setting it to a specific value (e.g., `step="1"`) would increment or decrement the value by that amount each time the button is clicked.

### Example Fields

Here’s how the relevant fields look in the HTML file:

```html
<label for="radius">Radius:</label>
<input type="number" id="radius" name="radius" step="any"><br>

<label for="height">Height:</label>
<input type="number" id="height" name="height" step="any"><br>

<label for="width">Width:</label>
<input type="number" id="width" name="width" step="any"><br>
```

### Summary

The increment and decrement controls are built into the `<input type="number">` fields, so no additional code is required to create these components. The browser automatically provides them based on the `number` input type, and they are styled and controlled according to the browser's defaults and user settings.


Q 3. WRT the style.display property, is this set for the input field or the whole line?

The `style.display` property in this line:

```javascript
document.getElementById("height").style.display = (shape === "triangle") ? "inline-block" : "none";
```

is applied **only to the input field itself**, not the entire line containing the label and input together.

In HTML, the `<label>` and `<input>` elements are separate elements, each with their own styling and display properties. Setting `style.display` to `"none"` on the input field will only hide that input field, leaving the label visible unless you specifically set the `display` property on the label as well.

### How to Hide the Entire Line

If you want to hide the label and the input together, you would need to wrap them in a container (like a `<div>` or `<span>`) and apply `display: none` to that container. For example:

```html
<div id="height-container">
    <label for="height">Height:</label>
    <input type="number" id="height" name="height" step="any">
</div>
```

Then in JavaScript, you would target the container:

```javascript
document.getElementById("height-container").style.display = (shape === "triangle") ? "inline-block" : "none";
```

This way, setting `display` to `"none"` on the container would hide both the label and the input field together.

Q 4. When the page is first loaded, what dictates the default selection in the select element?

When the page is first loaded, the default selection in a `<select>` element is determined by:

1. **The `selected` Attribute**: If an `<option>` within the `<select>` element has the `selected` attribute, it will be selected by default. For example:

    ```html
    <select id="title" name="title">
        <option value="Dr">Dr</option>
        <option value="Ms" selected>Ms</option>
        <option value="Mr">Mr</option>
    </select>
    ```

   Here, `"Ms"` will be the default selection because it has the `selected` attribute.

2. **The First Option as Default**: If no `selected` attribute is set on any `<option>`, the browser will automatically select the **first option** by default. 

    For example:

    ```html
    <select id="title" name="title">
        <option value="Dr">Dr</option>
        <option value="Ms">Ms</option>
        <option value="Mr">Mr</option>
    </select>
    ```

   In this case, `"Dr"` will be the default selection since it is the first `<option>` in the list.

3. **JavaScript Initialization (Optional)**: Sometimes, JavaScript can set the default selection when the page loads, typically within a script or a function that runs on the `window.onload` event or another initialization point. For instance:

    ```javascript
    document.getElementById("title").value = "Mr";
    ```

   This would make `"Mr"` the default selected option when the page loads, overriding any HTML defaults.

In summary:
- Without a `selected` attribute, the first option in the list will be the default.
- If the `selected` attribute is specified, that option will be selected by default.
- JavaScript can also set the default when the page loads, which would override the HTML-specified default.





