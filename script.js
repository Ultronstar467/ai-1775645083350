console.log("Elite Homes Script Loaded");

// Basic functionality for potential future use:
document.addEventListener('DOMContentLoaded', () => {
    // Example: Highlight active navigation link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Example: Form submission (placeholder)
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Search functionality is not implemented yet. Showing form data in console.');
            const formData = new FormData(bookingForm);
            const data = {};
            formData.forEach((value, key) => (data[key] = value));
            console.log('Booking form submitted:', data);
            // In a real application, you would send this data to a backend
            // or redirect to a search results page.
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Contact form submitted! We will get back to you shortly.');
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => (data[key] = value));
            console.log('Contact form submitted:', data);
            contactForm.reset(); // Clear the form
            // In a real application, this data would be sent to a backend for processing.
        });
    }
});