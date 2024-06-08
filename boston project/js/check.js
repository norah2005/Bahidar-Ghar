
        document.addEventListener("DOMContentLoaded", function() {
            const checkinInput = document.getElementById("checkin");
            const checkoutInput = document.getElementById("checkout");

            const checkinPicker = flatpickr(checkinInput, {
                minDate: "today",
                onChange: function(selectedDates, dateStr, instance) {
                    checkoutPicker.set("minDate", dateStr);
                }
            });

            const checkoutPicker = flatpickr(checkoutInput, {
                minDate: "today",
                onChange: function(selectedDates, dateStr, instance) {
                    checkinPicker.set("maxDate", dateStr);
                }
            });
        });

// Form submission handling
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const checkinDate = checkinInput.value;
    const checkoutDate = checkoutInput.value;

    // Basic validation (for demonstration purposes)
    if (!checkinDate || !checkoutDate) {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    // Display form data in console (replace this with actual form submission logic)
    console.log("Check-In Date:", checkinDate);
    console.log("Check-Out Date:", checkoutDate);

    // Reset form (optional)
    this.reset();
    checkinPicker.clear();
    checkoutPicker.clear();
});
