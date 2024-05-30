// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmation');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log("Email sent successfully:", response);
            // Display confirmation message
            confirmationMessage.style.display = 'block';

            // Clear form fields
            form.reset();
        }, function(error) {
            console.error("Email sending failed:", error);
        });
    });
});
