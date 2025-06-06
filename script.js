// Dark/Light Mode Toggle
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';

// Apply the saved theme on page load
document.body.classList.add(currentTheme);
if (currentTheme === 'light') {
    toggleSwitch.checked = true;
}

// Toggle theme on click
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth Scrolling for Navigation Links
const scrollLinks = document.querySelectorAll('nav ul li a');
scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
