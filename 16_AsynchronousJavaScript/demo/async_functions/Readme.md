To demonstrate async functions based on slides 28 & 29, we’ll create a simple setup with:

1. **HTML file** (`index.html`) with a button to trigger the async function demonstration.
2. **JavaScript file** (`index.js`) containing the async function code that uses `await` to manage asynchronous operations sequentially.

### Step 1: Create the Files

#### File 1: `index.html`

This HTML file contains a button to start the async function and a display area to show the results of each step.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Async Function Demo</title>
</head>
<body>
    <h1>Async Functions Demonstration</h1>
    <button id="startAsync">Run Async Functions</button>
    <pre id="output">Click the button to start the async functions sequence.</pre>

    <!-- Link to JavaScript file -->
    <script src="index.js"></script>
</body>
</html>
```

#### File 2: `index.js`

This JavaScript file demonstrates async functions by simulating three asynchronous tasks with `setTimeout`. Each task takes a different amount of time to complete, and they’re executed in sequence thanks to `await`.

```javascript
// Helper function to simulate an asynchronous operation
function simulateAsyncTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} completed in ${delay}ms`);
        }, delay);
    });
}

// Async function to run tasks sequentially
async function runAsyncTasks() {
    const output = document.getElementById("output");
    output.textContent = "Starting async tasks...\n";

    try {
        // Sequentially awaiting each async task
        const result1 = await simulateAsyncTask("Task 1", 3000);
        output.textContent += `${result1}\n`;

        const result2 = await simulateAsyncTask("Task 2", 2000);
        output.textContent += `${result2}\n`;

        const result3 = await simulateAsyncTask("Task 3", 1000);
        output.textContent += `${result3}\n`;

        output.textContent += "All tasks completed!";
    } catch (error) {
        output.textContent += `Error: ${error}`;
    }
}

// Attach event listener to the button
document.getElementById("startAsync").addEventListener("click", runAsyncTasks);
```

### Explanation of the Code

1. **simulateAsyncTask**: A helper function that returns a Promise, simulating an asynchronous task that completes after a specified delay. It resolves with a message once the task completes.
   
2. **runAsyncTasks**: The main `async` function that sequentially runs `simulateAsyncTask` three times, awaiting each one before starting the next. Each result is added to the `output` display in the HTML.

3. **Button Click Event**: When the button is clicked, it triggers `runAsyncTasks`, which starts the async task sequence.

### How to Run the Demonstration

1. **Open `index.html` in a browser**.
2. **Click the "Run Async Functions" button** to initiate the demonstration.
3. **Observe the output**: The output area will sequentially display each task’s completion message, showing how `async` and `await` allow you to handle asynchronous tasks in a structured, synchronous-like order.


### Q. In this example, it seems that the await statement is negating the async functions. Is this a fair assessment?


It might seem that `await` negates the asynchronous nature of the functions because it causes the code to *wait* for each asynchronous task to complete before moving to the next line. However, this isn’t actually negating the async behavior; rather, it’s structuring it in a more readable, sequential manner.

### Explanation

1. **Async Functions and `await`**:
   - The `async` keyword allows a function to work asynchronously, meaning it can handle Promises and wait for them to complete without blocking the rest of the code outside of this function.
   - The `await` keyword pauses the execution *within* the `async` function until the Promise resolves. It doesn’t block the entire program—other functions and events in the application can still run in the background.

2. **Sequential vs. Parallel Execution**:
   - In this example, we are intentionally running the tasks sequentially by awaiting each one before moving to the next. This design is helpful when each task depends on the previous task’s completion.
   - This sequential structure is sometimes necessary, but if you wanted to run tasks in parallel (where order isn’t important), you could use `Promise.all()` to await multiple Promises simultaneously.

### Demonstrating Parallel Execution

If the tasks can be run independently, you could modify the code to run them in parallel:

```javascript
async function runAsyncTasksInParallel() {
    const output = document.getElementById("output");
    output.textContent = "Starting async tasks in parallel...\n";

    try {
        // Start all tasks simultaneously and wait for all to complete
        const [result1, result2, result3] = await Promise.all([
            simulateAsyncTask("Task 1", 3000),
            simulateAsyncTask("Task 2", 2000),
            simulateAsyncTask("Task 3", 1000)
        ]);

        // Display all results after all tasks are complete
        output.textContent += `${result1}\n${result2}\n${result3}\nAll tasks completed!`;
    } catch (error) {
        output.textContent += `Error: ${error}`;
    }
}
```

In this parallel example:
- Each task starts immediately, without waiting for the previous one to complete.
- `Promise.all()` waits until all Promises are resolved (or any one of them rejects), resulting in faster overall completion time.

### Conclusion

Using `await` does not negate the asynchronous nature of async functions; it simply structures the flow in a sequential way within that function. This makes async functions versatile—they can either be structured to run tasks sequentially (for dependent tasks) or in parallel (for independent tasks).


