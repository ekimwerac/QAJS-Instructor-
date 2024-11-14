// Function to fetch data from the server
function fetchData() {
    const output = document.getElementById("output");
    output.textContent = "Fetching data...";

    fetch('http://localhost:3000/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            output.textContent = `Fetch error: ${error.message}`;
        });
}

// Attach event listener to the button
document.getElementById("fetchData").addEventListener("click", fetchData);
