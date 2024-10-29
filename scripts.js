// Function to add animation on scroll
function animateOnScroll() {
    const sections = document.querySelectorAll('.about p, .skills ul, .projects p');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            section.classList.add('fadeIn');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
