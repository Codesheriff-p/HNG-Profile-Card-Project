// Select the span element
const timeElement = document.getElementById("user-time");

// Function to format and display the current time
function showFormattedTime() {
    const now = new Date();

    // Format time properly (e.g., 19 October 2025, 11:45:07 AM)
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    };

    const formattedTime = now.toLocaleString("en-GB", options);
    timeElement.textContent = formattedTime;
}

// Run once on page load
showFormattedTime();

// Update every second
setInterval(showFormattedTime, 1000);
