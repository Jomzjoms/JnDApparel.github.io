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
