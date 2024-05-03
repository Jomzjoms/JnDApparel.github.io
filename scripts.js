document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

// Add scroll event listener
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.scrollY > 0; // Check if scrolled down

    // Add or remove 'scrolled' class based on scroll position
    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    overviewTooltips.forEach(function(overviewTooltip) {
        overviewTooltip.addEventListener('click', function() {
            const productLink = overviewTooltip.closest('.product').querySelector('a').getAttribute('href');
            window.location.href = productLink;
        });
    });
});

document.getElementById("buyButton").addEventListener("click", function() {
    showPopup();
});

function showPopup() {
    // Check if the form is complete
    var form = document.getElementById("purchase-form");
    if (form.checkValidity()) {
        var popup = document.getElementById("thank-you-popup");
        popup.style.display = "block";
        setTimeout(function () {
            popup.style.display = "none";
        }, 5000); // Adjust the timeout value (in milliseconds) as needed
    } else {
        // If the form is not complete, you can provide feedback to the user, such as highlighting the incomplete fields or displaying an error message.
        alert("Please fill out all required fields.");
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
        return false;
    }
});