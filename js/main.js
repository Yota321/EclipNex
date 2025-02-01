document.querySelectorAll('.booking-btn').forEach(button => {
    button.addEventListener('click', () => {
        const destination = button.getAttribute('data-destination');
        alert(`Booking expedition to ${destination}`);
        // Add further booking logic here
    });
});
