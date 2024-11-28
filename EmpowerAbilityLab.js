
// JavaScript for Empower Ability Labs SPA

// Focus management for SPA navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            targetSection.setAttribute('tabindex', '-1');
            targetSection.focus();
        }
    });
});

// Form validation for "Schedule a Call"
const form = document.getElementById('schedule-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    if (!email) {
        alert('Email is required!');
        return;
    }

    alert('Thank you for scheduling a call!');
    form.reset();
});

// Modal functionality
const learnMoreButton = document.getElementById('learn-more');
learnMoreButton.addEventListener('click', () => {
    alert('Here you can learn more about Empower Ability Labs!');
});
