function submitForm() {
    // Prevent the default form submission (this is already handled in the HTML)
    // event.preventDefault();

    // Show a submission message
    alert("Thank you for your message! Your form has been submitted successfully.");

    // Clear the form fields
    document.getElementById('contactForm').reset();
}

//Book A repair page Form Handlet
function submitbook() {

    // Show a submission message
    alert("The repair is booked for x y date");

    // Clear the form fields
    document.getElementById('bookingForm').reset();
}
