document.addEventListener('DOMContentLoaded', function() {
    // Initial animation for sections
    const roles = document.querySelectorAll('.role');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    roles.forEach(role => {
        observer.observe(role);
    });
});

function toggleNavbar() {
    var navbarToggle = document.querySelector('.navbar-toggle');
    var navbarLinks = document.querySelector('.navbar-links');
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
}

function navigateToSection(event, sectionId) {
    event.preventDefault();
    var section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Highlight selected link
    var links = document.querySelectorAll('.navbar a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');

    // Highlight the section
    var roles = document.querySelectorAll('.role');
    roles.forEach(role => role.classList.remove('highlight'));
    section.classList.add('highlight');

    // Close navbar if open
    var navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.classList.contains('active')) {
        toggleNavbar();
    }
}
