document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Generate a five-digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        // Send the form data to EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                document.getElementById('status').innerHTML = "Message sent successfully!";
            }, (error) => {
                document.getElementById('status').innerHTML = "Failed to send message. Please try again.";
                console.log('Failed...', error);
            });
    });
});
