document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from redirecting
        
        // Display the confirmation message
        confirmationMessage.style.display = "block";

        // Optionally, reset the form after submission
        form.reset();
    };
});