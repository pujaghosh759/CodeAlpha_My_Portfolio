// Simple smooth animation on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const secPos = sec.getBoundingClientRect().top;
        if (secPos < window.innerHeight - 100) {
            sec.classList.add('active');
        }
    });
});