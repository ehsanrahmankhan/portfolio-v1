// Smooth scroll behavior for anchor links with href starting with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action (immediate jump)
        // Smoothly scroll to the element referenced by the anchor's href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Enable smooth scrolling
        });
    });
});

// Hover effect for buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    // Lift the button slightly when mouse enters
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });

    // Reset the button's position when mouse leaves
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Popup functionality for "See my Resume" button
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and the popup elements
    const resumeButton = document.querySelector('.btn-primary');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.close-btn');

    // Show the popup when the button is clicked
    if (resumeButton) {
        resumeButton.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            popupMessage.style.display = 'flex'; // Show the popup
        });
    }

    // Close the popup when the close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            popupMessage.style.display = 'none'; // Hide the popup
        });
    }

    // Close the popup if the user clicks outside the popup content
    window.addEventListener('click', function (e) {
        if (e.target === popupMessage) {
            popupMessage.style.display = 'none'; // Hide the popup if clicked outside
        }
    });
});