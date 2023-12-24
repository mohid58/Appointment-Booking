document.addEventListener("DOMContentLoaded", function () {
    // Sample data for available slots
    const slotsData = {
        today: ["10:00 AM", "11:00 AM", "2:00 PM"],
        tomorrow: ["9:30 AM", "1:30 PM", "3:00 PM"],
        tue: ["11:30 AM", "2:30 PM", "4:00 PM"]
    };

    // Function to update slots based on the selected day
    function updateSlots(day) {
        const slotsContainer = document.getElementById("slots");
        const selectedSlots = slotsData[day] || [];

        // Clear existing slots
        slotsContainer.innerHTML = "";

        if (selectedSlots.length > 0) {
            selectedSlots.forEach((slot) => {
                const slotButton = document.createElement("button");
                slotButton.textContent = slot;
                slotsContainer.appendChild(slotButton);
            });
        } else {
            slotsContainer.textContent = "No slots available for the selected day.";
        }
    }

    // Event listeners for tabs (Today, Tomorrow, Tue)
    document.getElementById("today").addEventListener("click", function () {
        updateSlots("today");
    });

    document.getElementById("tomorrow").addEventListener("click", function () {
        updateSlots("tomorrow");
    });

    document.getElementById("tue").addEventListener("click", function () {
        updateSlots("tue");
    });

    // Other logic for handling consultation type selection, clinic info, etc.

    // Sample event listener for the "CONTINUE" button
    document.querySelector("button a").addEventListener("click", function (event) {
        // You can add additional logic here, e.g., redirect to the registration page
        alert("Continue button clicked. Redirecting to registration page.");
    });
});
