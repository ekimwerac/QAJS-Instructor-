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
