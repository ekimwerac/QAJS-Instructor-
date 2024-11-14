// Helper function to simulate an asynchronous operation
function simulateAsyncTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} completed in ${delay}ms`);
        }, delay);
    });
}

// Async function to run tasks in parallel
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

// Attach event listener to the button
document.getElementById("startAsync").addEventListener("click", runAsyncTasksInParallel);
