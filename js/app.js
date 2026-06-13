document.addEventListener("DOMContentLoaded", () => {

    const messageBtn = document.getElementById("messageBtn");
    const messageOutput = document.getElementById("messageOutput");

    messageBtn.addEventListener("click", () => {
        messageOutput.textContent = "JavaScript is working correctly!";
    });

    const apiBtn = document.getElementById("apiBtn");
    const apiOutput = document.getElementById("apiOutput");

    apiBtn.addEventListener("click", async () => {
        try {
            apiOutput.textContent = "Loading data...";

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );

            if (!response.ok) {
                throw new Error("Network response was not OK");
            }

            const data = await response.json();

            apiOutput.innerHTML = `
                <p>Post ID: ${data.id}</p>
                <p>Title: ${data.title}</p>
            `;

        } catch (error) {
            console.error(error);
            apiOutput.textContent = "Error loading API data.";
        }
    });

});