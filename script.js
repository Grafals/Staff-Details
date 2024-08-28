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

document.getElementById('theme-slider').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-label').textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-theme');
        document.getElementById('theme-label').textContent = 'Dark Mode';
    }
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

window.onload = function() {
    // Show the modal on page load
    document.getElementById('theme-modal').style.display = 'flex';
};

function toggleTheme() {
    var body = document.body;
    var themeText = document.getElementById('theme-text');
    var themeSlider = document.getElementById('theme-slider');

    if (themeSlider.checked) {
        body.classList.add('dark-theme');
        themeText.textContent = 'Dark Theme';
    } else {
        body.classList.remove('dark-theme');
        themeText.textContent = 'Light Theme';
    }

    // Hide the modal once a theme is selected
    document.getElementById('theme-modal').style.display = 'none';
}
