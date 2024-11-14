// Function to simulate an asynchronous operation with a Promise
function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        // Random delay between 0 and 5 seconds
        let delay = Math.floor(Math.random() * 5000);

        setTimeout(() => {
            // 50% chance to either resolve or reject the promise
            if (Math.random() < 0.5) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected due to an error!");
            }
        }, delay);
    });
}

// Function to trigger the promise and display the result
function triggerPromise() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "Promise is pending...";

    simulateAsyncOperation()
        .then((message) => {
            resultElement.textContent = "Success: " + message;
        })
        .catch((error) => {
            resultElement.textContent = "Failure: " + error;
        });
}

// Attach event listener to the button
document.getElementById("triggerPromise").addEventListener("click", triggerPromise);
