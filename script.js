document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for fixed header if you add one later
                const headerOffset = 70; // Example offset
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // NEW: Back to Top Button Logic
    const backToTopButton = document.getElementById('back-to-top');
    const scrollThreshold = 300; // The number of pixels to scroll down before showing the button

    // Function to check scroll position and toggle button visibility
    function toggleBackToTopButton() {
        if (window.scrollY > scrollThreshold) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Event listener for scrolling
    window.addEventListener('scroll', toggleBackToTopButton);

    // Event listener for clicking the button
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize button state on page load
    toggleBackToTopButton();

    // End NEW

    // You could add more interactive elements here, such as:
    // - Form validation if you add a contact form
    // - Animations on scroll using Intersection Observer API
});